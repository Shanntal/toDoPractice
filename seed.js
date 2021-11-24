const { db, Todo } = require('./server/db');

const syncAndSeed = async () => {
    await db.sync({ force: true });

    await Todo.create({ text: 'Grovery Shopping' });
    await Todo.create({ text: 'Cleaning' });
    await Todo.create({ text: 'Walk the dog'});
    await Todo.create({ text: 'Oil Change'});
    await Todo.create({ text: 'Do Code Stretch'});
}

async function runSeed() {
    console.log('seeding...')
    try {
      await syncAndSeed()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    }
  }

runSeed();

module.exports = syncAndSeed