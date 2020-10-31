const db = require('../index.js');

module.exports = {
  getIngredients: (cb) => {
    db.find({}, cb);
  },
  addIngredient: (info, cb) => {
    db.insertOne(info, cb);
  },
};
