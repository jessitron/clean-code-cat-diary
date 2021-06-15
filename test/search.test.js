const search = require("../src/search");
const { fakeEverything, fakeEntries } = require("./fakes");

const assert = require("assert");

describe("searching", () => {

  it.skip("can do a thing", () => {

    fakeEverything();

    const request = { body: JSON.stringify({ phrase: "towel" }) }
    const response = {};

    search(request, response);

    const result = JSON.parse(response.body);
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
  it("can get a friend of Odin", () => {
    fakeEverything();
    const result = search.getFriends("Pixie");

    assert.deepStrictEqual(result, true);
  });

  it("can not-get a not-friend of Odin", () => {
    fakeEverything();
    const result = search.getFriends("Sweetheart");

    assert.deepStrictEqual(result, false);
  })
})

describe("The easy-to-test version of search", () => {
  it("Works the same way as the full one", () => {

    const result = search.searchInternal("towel", fakeEntries, "Odin");

    const ids = result.map(r => r.id);
    assert.deepStrictEqual(ids, [
      "2-PIXIE-PUBLIC",
      "4-PIXIE-FRIENDS",
      "1-ODIN-PUBLIC",
      "6-ODIN-PRIVATE",
      "7-SWEETHEART-PUBLIC",
    ]);
  })

})
