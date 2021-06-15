const search = require("../src/search");
const { fakeEverything } = require("./fakes");

const assert = require("assert");

describe("searching", () => {

  it("can do a thing", () => {

    fakeEverything();

    global.dbConnection.query()
    const result = search("meow");

    const ids = result.map(r => r.id);

    assert.deepStrictEqual(ids, [
      "1-ODIN-PUBLIC",
      "2-PIXIE-FRIENDS",
      "3-PIXIE-PRIVATE",
      "4-PIXIE-FRIENDS",
      "6-ODIN-PRIVATE",
      "7-SWEETHEART-PUBLIC",
      "7-SWEETHEART-FRIENDS",
    ]);

  });
});
