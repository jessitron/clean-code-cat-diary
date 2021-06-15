
function search(phrase) {
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);

  for (const i in entries) {
    const e = entries[i];
    //  console.log("visibility: " + e.visibility)
    if (entries[i].visibility === "NONE" && e.cat !== session.cat.name) {
      //  console.log("Deleting " + i)
      entries.splice(i, 1);
    }
  }
  return entries.filter(a => a);
}

module.exports = search;