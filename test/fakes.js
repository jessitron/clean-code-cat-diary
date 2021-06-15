

function fakeEverything() {
  global.dbConnection = {};
  global.dbConnection.query = function () {
    console.log("querying the database...")
    return [];
  };

}

module.exports = { fakeEverything };