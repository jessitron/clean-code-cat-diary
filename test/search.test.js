const search = require("../src/search");
const { fakeEverything } = require("./fakes");

const assert = require("assert");

describe("searching", () => {

  it("can do a thing", () => {

    fakeEverything();

    console.log("connection q: " + JSON.stringify(global.dbConnection.query, null, 2))
    global.dbConnection.query()
    const result = search("meow");

    const ids = result.map(r => r.id);

    assert.deepStrictEqual(ids, []);

  });
});
