const Ingredient = require('../index.js');

module.exports = {
  getIngredients: (cb) => {
    Ingredient.find({}, cb);
  },
  addIngredient: (info, cb) => {
    const item = new Ingredient(info);
    item.save({ validateBeforeSave: true }, cb);
  },
  updateIngredient: (target, newInfo, cb) => {
    const update = {
      $set: {
        name: newInfo.name,
        status: 'modified',
      },
      new: true,
    };
    Ingredient.findOneAndUpdate(target, update, cb);
  },
  removeIngredient: (info, cb) => {
    Ingredient.findOneAndDelete(info, cb);
  },
};
