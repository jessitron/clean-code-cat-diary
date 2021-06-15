const search = require("../src/search");
const { fakeEverything } = require("./fakes");

describe("searching", () => {

  it("can do a thing", () => {

    fakeEverything();

    console.log("connection q: " + JSON.stringify(global.dbConnection.query, null, 2))
    global.dbConnection.query()
    const result = search("meow");

  });
});
