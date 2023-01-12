const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'nodedemo',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)
const connectToDb = async()=>{
    try{
        await sequelize.authenticate()
        console.log('Database connected successfully.');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {sequelize,connectToDb}