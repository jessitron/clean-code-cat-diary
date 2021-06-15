
function search(phrase) {
  const entries = dbConnection.query(`select title, body, cat, visibility from
  entries where title || body like '%${query}%`);




  return entries;
}

module.exports = search;