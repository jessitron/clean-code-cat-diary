// Can you separate the logic of this function from the side effects?
// Can you make a function that receives the data or functions it needs as parameters,
// and returns a decision?

function messageCat(request, response) {
  const { recipient, message } = JSON.parse(request.body);
  if (CatRepository.retrieve(recipient).privacySettings.blockedCats.includes(session.cat.name)) {
    if (!Config.blockingIsInvisible) {
      response.body = "You may not message " + recipient;
    } else {
      response.body = "Success"
    }
  } else if (EmailService.send(recipient, message).status === 200) {
    response.body = "Success"
  } else {
    reponse.body = "Try again later";
  }
}