const search = require("../src/search");
const { fakeEverything } = require("./fakes");

const assert = require("assert");

describe("searching", () => {

  it("can do a thing", () => {

    fakeEverything();

    const result = search("towel");

    const ids = result.map(r => r.id);

    assert.deepStrictEqual(ids, [
      "2-PIXIE-PUBLIC",
      "4-PIXIE-FRIENDS",
      "1-ODIN-PUBLIC",
      "6-ODIN-PRIVATE",
      "7-SWEETHEART-PUBLIC",
    ]);

  });
});

it.skip("handles two private entries in a row", () => {
  const twoPrivateEntries = [
    { id: "1-PIXIE-PRIVATE", cat: "Pixie", visibility: "NONE" },
    { id: "2-PIXIE-PRIVATE", cat: "Pixie", visibility: "NONE" },
  ]
  fakeEverything(twoPrivateEntries);

  const result = search("meow");

  assert.deepStrictEqual(result, []);
})

describe("getting friends", () => {
  it("can get the friends of Odin", () => {
    fakeEverything();
    const result = search.getFriends();

    assert.deepStrictEqual(result, ["Pixie"]);
  })
})
