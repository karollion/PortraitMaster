const mongoose = require('mongoose');

const voters = new mongoose.Schema({
  user: { type: String, required: true },
  votes: { type: Array, required: true },
});

module.exports = mongoose.model('Voter', voters);