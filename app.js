//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
app.use('/products', product);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = 'mongodb+srv://derrickfox:<PASSWORD>@mongotester-kawbe.mongodb.net/test?retryWrites=true';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// let mongoDB = dev_db_url;
mongoose.connect("mongodb+srv://derrickfox:<PASSWORD>@mongotester-kawbe.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
// mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));