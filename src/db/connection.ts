const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
    'fashion_db', 
    'root', 
    'Barrofico582734619', 
    {
    host: 'localhost',
    dialect: 'mysql',
    port: '80'
});

export default sequelize;