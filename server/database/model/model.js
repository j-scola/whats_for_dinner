const Ingredient = require('../index.js');

module.exports = {
  getIngredients: (cb) => {
    Ingredient.find({}, cb);
  },
  addIngredient: (info, cb) => {
    const item = new Ingredient(info);
    item.save({ validateBeforeSave: true }, cb);
  },
  removeIngredient: (info, cb) => {
    Ingredient.findOneAndRemove(info, cb);
  },
};
