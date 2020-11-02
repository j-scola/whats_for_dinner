const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/dinner_options', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongo connection established');
});

const ingredients = new mongoose.Schema({
  name: String,
  isAvailable: Boolean,
  isDeleted: Boolean,

});

const Ingredient = db.model('Ingredient', ingredients);

module.exports = Ingredient;
