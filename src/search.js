
function search(request, response) {
  const phrase = JSON.parse(request.body).phrase;
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);
  const sessionCatName = session.cat.name;

  const result = searchInternal(phrase, entries, sessionCatName, getFriends);

  response.body = JSON.stringify(result);
}

function searchInternal(phrase, entries, sessionCatName, getFriends) {

  entries = removePrivateEntries(entries, sessionCatName);
  entries = removeFriendsEntriesFromNonfriends(entries, getFriends);

  const result = entries.sort(compareEntriesBySearchRelevance(getFriends));
  return result;
}


function removePrivateEntries(entries, sessionCatName) {
  function isVisibleToMe(entry) {
    const isPrivate = entry.visibility === "NONE";
    const isMyEntry = entry.cat === sessionCatName;
    return !isPrivate || isMyEntry;
  }
  return entries.filter(isVisibleToMe);
}

function removeFriendsEntriesFromNonfriends(entries, getFriends) {
  function isVisibleToMe(entry) {
    const isOnlyVisibleToFriends = entry.visibility === "FRIENDS";
    const isWrittenByMyFriend = getFriends(entry.cat);
    return !isOnlyVisibleToFriends || isWrittenByMyFriend
  }

  return entries.filter(isVisibleToMe);
}

function evaluateSearchRelevance(entry, getFriends) {
  return {
    friendStatus: getFriends(entry.cat) ? FriendStatus.FRIEND : FriendStatus.NONE,
  }
}

const FriendStatus = {
  "FRIEND": "FRIEND",
  "NONE": "NONE"
}

function compareEntriesBySearchRelevance(getFriends) {
  return (e1, e2) => {
    return compareSearchRelevance(evaluateSearchRelevance(e1, getFriends), evaluateSearchRelevance(e2, getFriends))
  }
}

function compareSearchRelevance(sr1, sr2) {
  if (sr1.friendStatus != sr2.friendStatus) {
    return sr1.friendStatus === FriendStatus.FRIEND ? -1 : 1;
  }
  return 0;
}

function getFriends(cat) {
  const r = relationships(cat);
  // console.log(`cat ${cat} r ${JSON.stringify(r)}`)
  return r.length > 0;
}

function relationships(cat) {
  return global.dbConnection.query(`select * from cat_regard where cat2 = '${session.cat.name}' and cat1 = '${cat}'`)
}

module.exports = search;
module.exports.getFriends = getFriends;
module.exports.searchInternal = searchInternal;
