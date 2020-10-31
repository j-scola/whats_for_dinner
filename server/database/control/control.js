const model = require('../model/model');

module.exports = {
  data: (req, res) => {
    res.send('data control active');
  },
  getIngredients: (req, res) => {
    model.getIngredients((err, data) => {
      if (err) {
        console.log(err);
        res.send(500);
      } else {
        res.status(200).send(data);
      }
    });
  },
  addIngredient: (req, res) => {
    console.log(req.body);
    if (req.body.name) {
      model.addIngredient(req.body, (err, data) => {
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          res.status(200).send(data);
        }
      });
    } else {
      console.log('request body format incorrect');
      res.send(500);
    }
  },
  removeIngredient: (req, res) => {
    console.log(req.body);
    if (req.body.name) {
      model.addIngredient(req.body, (err, data) => {
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          res.status(200).send(data);
        }
      });
    } else {
      console.log('request body format incorrect');
      res.send(500);
    }
  },
};
