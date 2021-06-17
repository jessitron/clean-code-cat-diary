const Config = require("./Config");
const { CatRepository } = require("./Cat");
const { EmailService } = require("./service/Email.js");

// Can you separate the logic of this function from the side effects?
// Can you make a function that receives the data or functions it needs as parameters,
// and returns a decision?

function messageCat(request, response) {
  const { recipient, message } = JSON.parse(request.body);
  if (CatRepository.retrieve(recipient).privacySettings.blockedCats.includes(session.cat.name)) {
    if (!Config.blockingIsInvisible) {
      response.status = 403;
      response.body = "You may not message " + recipient;
    } else {
      response.body = "Success"
    }
  } else if (EmailService.send(recipient, message).status === 200) {
    response.body = "Success"
  } else {
    response.status = 503;
    reponse.body = "Try again later";
  }
}

module.exports = messageCat;