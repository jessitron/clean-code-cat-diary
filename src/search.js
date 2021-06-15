
function search(phrase) {
  console.log("connection: " + JSON.stringify(global.dbConnection, null, 2))
  const entries = global.dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${phrase}%`);




  return entries;
}

module.exports = search;