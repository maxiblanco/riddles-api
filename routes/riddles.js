const express = require('express');

const router = express.Router();
const Riddle = require('../models/riddleModel');

// Middleware
async function getRiddle(req, res, next) {
  let riddle;
  try {
    riddle = await Riddle.findById(req.params.id);
    if (riddle == null) {
      return res.status(404).json({ message: 'Riddle not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.riddle = riddle;
  next();
}

// Getting all riddles
router.get('/', async (req, res) => {
  // return all riddles
  try {
    const riddles = await Riddle.find();
    res.json(riddles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Getting one riddle
router.get('/:id', getRiddle, (req, res) => {
  // return one riddles
  res.json(res.riddle);
});
// Creating one riddle
router.post('/', async (req, res) => {
  const riddle = new Riddle({
    name: req.body.name,
    riddle: req.body.riddle,
    answer: req.body.answer,
  });
  try {
    const newRiddle = await riddle.save();
    res.status('201').json(newRiddle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Updating one riddle
router.patch('/:id', getRiddle, async (req, res) => {
  // code here
  if (req.body.name != null) {
    res.riddle.name = req.body.name;
  }
  if (req.body.riddle != null) {
    res.riddle.riddle = req.body.riddle;
  }
  if (req.body.answer != null) {
    res.riddle.answer = req.body.answer;
  }

  try {
    const updatedRiddle = await res.riddle.save();
    res.json(updatedRiddle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Deleting one riddle
router.delete('/:id', getRiddle, async (req, res) => {
  try {
    await res.riddle.remove();
    res.json({ message: 'Deleted Riddle' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://riddle-api:%218t2cSDqBxgJZg.@riddle-cluster-1mrto.mongodb.net/riddlesdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */
