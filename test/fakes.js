const Visibilities = {
  "PUBLIC": "PUBLIC",
  "PRIVATE": "NONE",
  "FRIENDS": "FRIENDS"
}


const fakeEntries = [
  {
    id: "1-ODIN-PUBLIC",
    title: "Finally, a decent place to rest",
    body: "The human put a folded towel on the bed today. I laid down with my head on it, and my body sprawled across the bed, as I do.",
    cat: "Odin",
    visibility: Visibilities.PUBLIC
  },
  {
    id: "2-PIXIE-FRIENDS",
    title: "A soft rectangle",
    body: "I spotted a towel in a rectangle shape. It is soft. My entire body fits on it perfectly.",
    cat: "Pixie",
    visibility: Visibilities.FRIENDS
  },
  {
    id: "3-PIXIE-PRIVATE",
    title: "A soft rectangle",
    body: "I spotted a towel in a rectangle shape. It is soft. My entire body fits on it perfectly.",
    cat: "Pixie",
    visibility: Visibilities.PRIVATE
  },
  {
    id: "4-PIXIE-FRIENDS",
    title: "This one is not about towels",
    body: "Oh wait, I guess it is, because of the title.",
    cat: "Pixie",
    visibility: Visibilities.FRIENDS
  },
  // { // don't return this when towels are queried
  //   id: "5-PIXIE-PUBLIC-NOTOWELS",
  //   title: "Let's talk about bugs",
  //   body: "The windowsill is a perfect spot to stare at tiny flitting creatures",
  //   cat: "Pixie",
  //   visibility: Visibilities.PUBLIC
  // },
  {
    id: "6-ODIN-PRIVATE",
    title: "How I really feel about towels",
    body: "There must be exactly one, folded into a rectangle, on the bed at all times.",
    cat: "Odin",
    visibility: Visibilities.PRIVATE
  },
  {
    id: "7-SWEETHEART-PUBLIC",
    title: "What is a towel",
    body: "You pansy indoor cats with your soft things",
    cat: "Sweetheart",
    visibility: Visibilities.PUBLIC
  },
  {
    id: "7-SWEETHEART-FRIENDS",
    title: "Grass is for laying in",
    body: "Anything with bugs and mice and baby rabbits inside it, is much better than some old towel",
    cat: "Sweetheart",
    visibility: Visibilities.FRIENDS
  }
]

function fakeEverything() {
  global.dbConnection = {};
  global.dbConnection.query = function () {
    return fakeEntries;
  };
}

module.exports = { fakeEverything };