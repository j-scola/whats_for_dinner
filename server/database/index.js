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

const recipes = new mongoose.Schema({
  title: String,
  href: String,
  ingredients: String,
  thumbnail: String,
  isSaved: Boolean,
  voteCount: Number,
});

const Ingredient = db.model('Ingredient', ingredients);
const Recipe = db.model('Recipe', recipes);

module.exports = { Ingredient, Recipe };
