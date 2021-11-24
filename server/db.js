const Sequelize = require('sequelize');
const { STRING, NUMBER, UUID, UUIDV4, BOOLEAN } = Sequelize;

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:3000/toDoPractice');

const Todo = db.define('todo', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    text: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    complete: {
        type: BOOLEAN,
        defaultValue: false
    } 
});

module.exports = { db, Todo };