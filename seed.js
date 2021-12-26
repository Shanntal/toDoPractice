// importing the Todo model and db defined in the db file of the server folder
const { db, Todo } = require('./server/db');


// defining a function that will wait fo all the Todos to be create then sync it to the db
const syncAndSeed = async () => {
  await db.sync({ force: true });   // true means it will re-write the whole database according to the info you're seeding 

  await Todo.create({ text: 'Grocery Shopping'});
  await Todo.create({ text: 'Cleaning' });
  await Todo.create({ text: 'Walk the dog' });
  await Todo.create({ text: 'Oil Change' });
  await Todo.create({ text: 'Do code stretch'});
}

//invoking function and SEEDING the database
syncAndSeed();
