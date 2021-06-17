const message = require("../src/messaging");

describe("sending a message", () => {

  it("can send a message", () => {
    const request = {
      body: JSON.stringify(
        { recipient: "Pixie", message: "I liked your post about towels" }
      )
    };
    const response = {};

    message(request, response);
  })


});