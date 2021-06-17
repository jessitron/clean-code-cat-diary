
const entries = require("../src/myEntries");
const { fakeEverything } = require("./fakes");

const assert = require("assert");

describe("retrieving entries", () => {

  it("gives back some entries", () => {
    const request = { body: JSON.stringify({}) };
    const response = {};

    fakeEverything();

    entries(request, response);

    const result = JSON.parse(response.body);
    assert.strictEqual(result.length, 8);

  })

})