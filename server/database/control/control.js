const model = require('../model/model');
const apiCaller = require('../../apiCaller');

const defaultCallback = (req, res, errCode, successCode) => (err, data) => {
  if (err) {
    console.log(err);
    res.sendStatus(errCode);
  } else {
    res.status(successCode).send(data);
  }
};

module.exports = {
  getIngredients: (req, res) => {
    model.getIngredients(defaultCallback(req, res, 500, 200));
  },
  addIngredient: (req, res) => {
    model.addIngredient(req.body, defaultCallback(req, res, 500, 201));
  },
  updateIngredient: (req, res) => {
    const { target, newInfo } = req.body;
    model.updateIngredient(target, newInfo, defaultCallback(req, res, 500, 201));
  },
  removeIngredient: (req, res) => {
    model.removeIngredient(req.body, defaultCallback(req, res, 500, 202));
  },
  removeAllIngredients: (req, res) => {
    model.removeAllIngredients(defaultCallback(req, res, 500, 202));
  },
  getRecipes: (req, res) => {
    const { ingredients, search } = req.body;
    apiCaller(ingredients, search,
      (data) => {
        res.status(200).send(JSON.stringify(data.data.results));
      },
      (err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};
