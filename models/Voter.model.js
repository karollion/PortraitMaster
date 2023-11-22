const mongoose = require('mongoose');

const voterShema = new mongoose.Schema({
  user: { type: String, required: true },
  votes: { type: Array, required: true },
});

module.exports = mongoose.model('Voter', voterShema);