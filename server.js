require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const riddlesRouter = require('./routes/riddles');

app.use('/riddles', riddlesRouter);

app.listen(port, () =>
  console.log(`Riddle RESTful API server started on port ${port}`)
);
