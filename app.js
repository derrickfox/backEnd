// app.js

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const product = require('./routes/product.route'); // Imports routes for the products
const source = require('./routes/source.route'); // Imports routes for the sources
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://derrickfox:<PASSWORD>@mongotester-kawbe.mongodb.net/list-master?retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/sources', source);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

console.log('db.collections', db.collections);


// db.listCollections().toArray(function(err, collInfos) {
//     // collInfos is an array of collection info objects that look like:
//     // { name: 'test', options: {} }
//     if(err){
//         console.log('err dude', err);
//     }
//     console.log('collInfos', collInfos);
// });