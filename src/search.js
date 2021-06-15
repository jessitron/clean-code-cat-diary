
function search(phrase) {
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);

  for (const i in entries) {
    const e = entries[i];
    console.log("checking entry: " + i + " which is: " + e.id)
    if (entries[i].visibility === "NONE" && e.cat !== session.cat.name) {
      console.log("Deleting " + i)
      entries.splice(i, 1);
    }
  }
  const moveToFront = [];
  const rest = []
  for (const i in entries) {
    const e = entries[i];
    console.log(" 2 checking entry: " + i + " which is: " + e.id)
    if (entries[i].visibility === "FRIENDS") {
      console.log("possibly Deleting " + i)
      if (getFriends().includes(e.cat)) {
        moveToFront.unshift(e);
      }
      //  entries.splice(i, 1);
    } else {
      rest.unshift(e);
    }
  }
  return moveToFront.concat(rest.filter(a => a));
}

function getFriends() {
  const r = relationships();
  return r.map(rr => rr.cat1);
}

function relationships() {
  return global.dbConnection.query(`select * from cat_regard where cat2 = ${session.cat.name}`)
}

module.exports = search;
module.exports.getFriends = getFriends;