class Cat {
  constructor(name, privacySettings) {
    this.name = name;
    this.privacySettings = privacySettings;
  }

  revealsFriendshipsToFriends() {
    return !this.privacySettings.friendshipsAreInvisibleToFriends
  }
}

module.exports = { Cat };