const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const resRoutes = require('./Routes/Restaurant');   

const hostname = 'localhost';
const port = 9009;

const app = express();

app.use(bodyParser.json());    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', resRoutes);

mongoose.connect('mongodb+srv://root:Qwerty@123@cluster0-zcikl.mongodb.net/TestDB?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    app.listen(port, hostname, () => {
        console.log(`Server running at http://localhost:9009/`)
    });
}).catch(error=> {
    console.log(error);
})