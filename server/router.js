const express = require('express');
const control = require('./database/control/control');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('routes active');
});

router.get('/ingredients', control.getIngredients);
router.get('/recipes', control.getRecipes);
router.post('/ingredients', control.addIngredient);
router.patch('/ingredients', control.updateIngredient);
router.delete('/ingredients/one', control.removeIngredient);
router.delete('/ingredients/all', control.removeAllIngredients);

module.exports = router;
