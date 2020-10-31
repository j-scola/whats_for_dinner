const model = require('../model/model');

const defaultCallback = (req, res, errCode, successCode) => (err, data) => {
  if (err) {
    console.log(err);
    res.send(errCode);
  } else {
    res.status(successCode).send(data);
  }
};

module.exports = {
  data: (req, res) => {
    res.send('data control active');
  },
  getIngredients: (req, res) => {
    model.getIngredients(defaultCallback(req, res, 500, 200));
  },
  addIngredient: (req, res) => {
    if (req.body.name) {
      model.addIngredient(req.body, defaultCallback(req, res, 500, 201));
    } else {
      console.log('request body format incorrect');
      res.send(500);
    }
  },
  updateIngredient: (req, res) => {
    const { target, newInfo } = req.body;
    model.updateIngredient(target, newInfo, defaultCallback(req, res, 500, 201));
  },
  removeIngredient: (req, res) => {
    if (req.body.name) {
      model.removeIngredient(req.body, defaultCallback(req, res, 500, 202));
    } else {
      console.log('request body format incorrect');
      res.send(500);
    }
  },
};
