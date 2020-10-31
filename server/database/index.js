const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dinner_options', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we're connected!");
});

const kittySchema = new mongoose.Schema({
  name: String,
});
