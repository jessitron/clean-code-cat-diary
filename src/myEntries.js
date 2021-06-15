

function fetchMyEntries(request, response) {
  response.body = JSON.stringify(global.dbConnection.query(`select * from entries where cat = ${session.cat.name} order by ${JSON.parse(request.body).sortBy === "title" ? "title" : "created_date"}`)
    .filter(JSON.parse(request.body).onlyPublic ? e => { e.visibility === "PUBLIC" } : e => e));
}