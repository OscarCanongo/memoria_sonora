const { MongoClient } = require('mongodb');
require('dotenv').config({ path: 'string.env' });

let db;

MongoClient.connect(process.env.DB, {useUnifiedTopology: true}, (err, client) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  db = client.db('audios');
  console.log('DB is connected')
});

const getConnection = () => {
  return db;
};

module.exports = {
  getConnection
};
