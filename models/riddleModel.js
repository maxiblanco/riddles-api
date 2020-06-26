const mongoose = require('mongoose');

const { Schema } = mongoose;

const riddleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  riddle: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Riddle', riddleSchema);
