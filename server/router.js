const express = require('express');
const control = require('./database/control/control');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('routes active');
});

router.get('/data', control.data);
router.get('/ingredients', control.getIngredients);
router.post('/ingredients', control.addIngredient);

module.exports = router;
