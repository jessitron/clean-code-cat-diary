const { listMutuals } = require("../src/friends.js");

const assert = require("assert");

describe("cats that are friends", () => {
  it("shows a cat who their friends are", () => {
    const allFriends = [
      { cat1: "Odin", cat2: "Pixie" }, { cat2: "Odin", cat1: "Pixie" },
    ];
    const friendRepository = { retrieveAllFriendships: () => allFriends }
    const catRepository = { retrieve: () => ({ privacySettings: { blockedCats: [] } }) }
    const result = listMutuals({
      loggedInCatName: "Odin",
      friendRepository,
      catRepository
    });

    assert.deepStrictEqual(result, ["Pixie"]);

  });

  test.todo("doesn't return one-sided friendships")

  test.todo("hides a friendship if the cat turns on a privacy setting")

  test.todo("can hide a friendship if the cat has since blocked you")

  test.todo("doesn't hide the friendship if blocking is not supposed to be invisible")

})