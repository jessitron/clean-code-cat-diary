class Cat {
  constructor(name, privacySettings) {
    this.name = name;
    this.privacySettings = privacySettings;
  }

  revealsFriendshipsToFriends() {
    return !this.privacySettings.friendshipsAreInvisibleToFriends
  }
}

CatRepository = {
  retrieve(catName) {
    // IRL, go to the database
    return new Cat(catName, { blockedCats: [] })
  }
}

module.exports = { Cat, CatRepository };