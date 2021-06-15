
function search(request, response) {
  const phrase = JSON.parse(request.body).phrase;

  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);

  const sessionCatName = session.cat.name;

  const result = searchInternal(phrase, entries, sessionCatName);

  response.body = JSON.stringify(result);
}

function searchInternal(phrase, entries, sessionCatName) {

  for (const i in entries) {
    const e = entries[i];
    if (entries[i].visibility === "NONE" && e.cat !== sessionCatName) {
      entries.splice(i, 1);
    }
  }
  const moveToFront = [];
  const rest = []
  for (const i in entries) {
    const e = entries[i];
    if (entries[i].visibility === "FRIENDS" || getFriends(e.cat)) {
      if (getFriends(e.cat)) {
        moveToFront.push(e);
      }
      //  entries.splice(i, 1);
    } else {
      rest.push(e);
    }
  }
  const result = moveToFront.concat(rest.filter(a => a));
  return result;
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