const { Ingredient, Recipe } = require('../index.js');

module.exports = {
  getIngredients: (cb) => {
    Ingredient.find({ isDeleted: false }, cb);
  },
  addIngredient: (info, cb) => {
    const newIngredient = {
      name: info.name,
      isAvailable: true,
      isDeleted: false,
      isModified: false,
    };
    const item = new Ingredient(newIngredient);
    item.save({ validateBeforeSave: true }, cb);
  },
  updateIngredient: (target, newInfo, cb) => {
    const update = { $set: { name: newInfo.name } };
    Ingredient.findOneAndUpdate(target, update, cb);
  },
  removeIngredient: (info, cb) => {
    const name = info;
    const query = { name };
    const update = { $set: { isDeleted: true } };
    Ingredient.findOneAndUpdate(query, update, cb);
  },
  removeAllIngredients: (cb) => {
    Ingredient.updateMany({}, { $set: { isDeleted: true } }, cb);
  },
  saveRecipe: (recipe, cb) => {
    const saveRecipe = new Recipe(recipe);
    saveRecipe.isSaved = true;
    saveRecipe.save({ validateBeforeSave: true }, cb);
  },
  archiveRecipe: (title, cb) => {
    Recipe.findOneAndUpdate({ title }, { $set: { isSaved: false } }, cb);
  },
};
