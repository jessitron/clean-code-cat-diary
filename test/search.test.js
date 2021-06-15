const search = require("../src/search");
const { fakeEverything } = require("./fakes");

const assert = require("assert");

describe("searching", () => {

  it("can do a thing", () => {

    fakeEverything();

    const result = search("meow");

    const ids = result.map(r => r.id);

    assert.deepStrictEqual(ids, [
      "1-ODIN-PUBLIC",
      "2-PIXIE-PUBLIC",
      "4-PIXIE-FRIENDS",
      "6-ODIN-PRIVATE",
      "7-SWEETHEART-PUBLIC",
    ]);

  });
});

describe("getting friends", () => {
  it("can get the friends of Odin", () => {
    fakeEverything();
    const result = search.getFriends();

    assert.deepStrictEqual(result, ["Pixie"]);
  })
})
