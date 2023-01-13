const express = require('express');
const apiRoutes = require('./routes')
const {sequelize,connectToDb} = require('./db');
const { request, response } = require('express');
// const bodyParser = require('body-parser');

const app = express()
const PORT = process.env.port || 3022

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api',apiRoutes)

app.use((request, response) => {
    response.status(404);
    response.json({message:"Resource not found"});
})

app.use((request, response) => {
    response.status(500);
    response.json({message:"Oops... Something not found"});
})

app.listen(PORT, async ()=>{
    console.log(`App is runnig on http://localhost:${PORT}`);
    await connectToDb()
})