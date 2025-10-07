const { MongoClient } = require('mongodb');
async function run() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('testDB');
  const users = db.collection('users');
  // insertOne
  await users.insertOne({ name: 'Ali', age: 25 });
  // insertMany
  await users.insertMany([
    { name: 'Sara', age: 22 },
    { name: 'Tarek', age: 30 }
  ]);
  console.log('Documents added!');
  await client.close();
}
run();