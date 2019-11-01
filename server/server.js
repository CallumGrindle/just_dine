const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('just_dine');
    const restaurantsCollection = db.collection('restaurants');
    const restaurantsRouter = createRouter(restaurantsCollection);
    app.use('/api/restaurants', restaurantsRouter);
  })
  .catch(console.err);

app.listen(8080, function () {
  console.log(`Listening on port ${this.address().port}`);
});
