
function search(phrase) {
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);

  for (const i in entries) {
    const e = entries[i];
    //  console.log("visibility: " + e.visibility)
    if (entries[i].visibility === "NONE" && e.cat !== session.cat.name) {
      //  console.log("Deleting " + i)
      entries.splice(i, 1);
    } else if (entries[i].visibility === "FRIENDS") {
      //  console.log("Deleting " + i)
      entries.splice(i, 1);
    }
  }
  return entries.filter(a => a);
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