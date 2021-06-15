
function search(phrase) {
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);

  for (const i in entries) {
    const e = entries[i];
    console.log("visibility: " + e.visibility)
    if (entries[i].visibility === "NONE") {
      console.log("Deleting " + i)
      delete entries[i];
    }
  }
  return entries.filter(a => a);
}

module.exports = search;