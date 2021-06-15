
function search(request, response) {
  const phrase = JSON.parse(request.body).phrase;
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);

  for (const i in entries) {
    const e = entries[i];
    if (entries[i].visibility === "NONE" && e.cat !== session.cat.name) {
      entries.splice(i, 1);
    }
  }
  const moveToFront = [];
  const rest = []
  for (const i in entries) {
    const e = entries[i];
    if (entries[i].visibility === "FRIENDS" || getFriends().includes(e.cat)) {
      if (getFriends().includes(e.cat)) {
        moveToFront.push(e);
      }
      //  entries.splice(i, 1);
    } else {
      rest.push(e);
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