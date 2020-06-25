const mongoose = require('mongoose');

const { Schema } = mongoose;

const RiddleSchema = new Schema({
  riddle: {
    type: String,
    required: 'Must have a riddle',
  },
  answer: {
    type: String,
    required: 'Must have an answer',
  },
});

module.exports = mongoose.model('Riddle', RiddleSchema);
