const express = require('express');
const control = require('./database/control/control');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('routes active');
});

router.get('/ingredients', control.getIngredients);
router.get('/recipes', control.getRecipes);
router.get('/savedRecipes', control.getSavedRecipes);
router.post('/ingredients', control.addIngredient);
router.post('/savedRecipes', control.saveRecipe);
router.patch('/ingredients', control.updateIngredient);
router.patch('/savedRecipes', control.updateVote);
router.delete('/ingredients/one/:ingredient', control.removeIngredient);
router.delete('/ingredients/all', control.removeAllIngredients);
router.delete('/savedRecipes', control.archiveRecipe);

module.exports = router;
