const message = require("../src/messaging");

describe("sending a message", () => {

  it("can send a message", () => {

    session = { cat: { name: "Odin" } };
    const request = {
      body: JSON.stringify(
        { recipient: "Pixie", message: "I liked your post about towels" }
      )
    };
    const response = {};

    message(request, response);

    // did it call the email service? How would we know?
    // Does it work if the email service fails?
    // Does it work if the cat is blocked by the recipient?
    // how would we even trigger those tests?

    const result = response.body;
    assert.strictEqual(result, "Success");
  })


});