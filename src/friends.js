// Can you make the listMutuals function have one level of abstraction?
// create as many smaller functions as is useful.
//
// If you have time after that, can you make each function either:
//   - list what to do
//   - make a decision, or
//   - tell how to do one thing.

function listMutuals({
  loggedInCatName,
  friendRepository,
  catRepository,
  blockingIsUndetectable
}) {

  const friendships = friendRepository.retrieveAllFriendships(loggedInCatName);

  const visibleFriendships = friendships.filter(friendship => {
    if (friendship.cat1 === loggedInCatName) {
      const otherCat = catRepository.retrieve(friendship.cat2)
      if (otherCat.privacySettings.blockedCats.includes(loggedInCatName) &&
        !(blockingIsUndetectable && otherCat.revealsFriendshipsToFriends())) {
        return false;
      }
      return true;
    } else {
      return catAllowsFriendsToSeeFriendship(catRepository, friendship.cat1)
    }
  });

  const mutuals = listOnlyMutualFriends(loggedInCatName, visibleFriendships)

  return mutuals;
}

function listOnlyMutualFriends(loggedInCatName, allFriendships) {
  return allFriendships.filter(f1 =>
    allFriendships.find(f2 => f1.cat1 === f2.cat2 && f1.cat2 === f2.cat1))
    .map(f => f.cat2)
    .filter(c => c !== loggedInCatName);
}

function catAllowsFriendsToSeeFriendship(catRepository, catName) {
  const otherCat = catRepository.retrieve(catName);
  return otherCat.revealsFriendshipsToFriends();
}

module.exports = { listMutuals };