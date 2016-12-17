
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at
ShoppingList.create('beans', true);
ShoppingList.create('tomatoes', false);
ShoppingList.create('peppers', false);

// Add recipes via create
Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']); 
Recipes.create('pesto', ['basil', 'pine nuts', 'garlic']); 
Recipes.create('paella', ['seafood', 'chorizo', 'olives', 'rice']]);

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

// Apply GET to recipes
app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
