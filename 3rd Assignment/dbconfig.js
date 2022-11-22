const { MongoClient } = require('mongodb');
require('dotenv').config();
const client = new MongoClient(process.env.DATABASE_URL);
// console.log(client);
module.exports = {client};