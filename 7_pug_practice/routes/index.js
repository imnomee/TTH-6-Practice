const express = require('express');
const router = express.Router();
const { recipes } = require('../data/data.json');

/* GET home page. */
router.get('/', function (req, res) {
    // 1. Pass all recipe data to 'index' template
    console.log(recipes);
    return res.render('index', { recipes });
});

/* GET recipe page. */
router.get('/recipes/:id', function (req, res, next) {
    const recipeId = req.params.id;
    const recipe = recipes.find(({ id }) => id === +recipeId);

    if (recipe) {
        // 2. Pass the recipe data to the 'recipe' template
        return res.render('recipe', { recipe });
    } else {
        return res.sendStatus(404);
    }
});

module.exports = router;
