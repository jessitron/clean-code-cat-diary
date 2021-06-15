

function listMutuals({
  loggedInCatName,
  friendRepository,
  catRepository,
}) {

  const friendships = friendRepository.retrieveAllFriendships(loggedInCatName);

  const visibleFriendships = friendships.filter(friendship => {
    if (friendship.cat1 === loggedInCatName) {
      const otherCat = catRepository.retrieve(friendship.cat2)
      if (otherCat.privacySettings.blockedCats.includes(loggedInCatName) &&
        !(blockingIsUndetectable && catAllowsFriendsToSeeFriendship(catRepository, otherCat.name))) {
        return false;
      }
      return true;
    } else {
      return catAllowsFriendsToSeeFriendship(catRepository, friendship.cat1)
    }
  });

  const mutuals = visibleFriendships.filter(f1 =>
    visibleFriendships.find(f2 => f1.cat1 === f2.cat2 && f1.cat2 === f2.cat1))
    .map(f => f.cat2)
    .filter(c => c !== loggedInCatName);

  return mutuals;
}

function catAllowsFriendsToSeeFriendship(catRepository, catName) {
  const otherCat = catRepository.retrieve(catName);
  return !otherCat.privacySettings.friendshipsAreInvisibleToFriends;
}

module.exports = { listMutuals };