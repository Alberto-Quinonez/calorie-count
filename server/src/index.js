
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const calorieCountEntriesApi = require('./api/calorieCountEntries');

try {
    mongoose.connect('mongodb://localhost/calorie-count', { useNewUrlParser: true, useUnifiedTopology: true });
    //mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (e) {
    console.log('NO DB CONNECTIONS');
}

const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

// app.get('/', (req, res) => {
//         res.json({
//         message: 'nothing, try again',
//     });
// });

app.use('/api/caloriesCountEntries', calorieCountEntriesApi);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
});