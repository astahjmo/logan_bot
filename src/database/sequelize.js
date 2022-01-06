const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dev.sqlite',
});

try {
    sequelize.authenticate().then(test => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    console.log('Connection has been established successfully.');
    //sequelize.sync({ force: true }).then(() => {
    //    console.log('Database synced');
    //});
} catch {
    console.error('Unable to connect to the database:'); 
}

module.exports = sequelize;

