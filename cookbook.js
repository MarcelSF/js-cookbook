const Recipe = require('./recipe');
const fs = require('fs'); // This is a Node.js module
const csv = require('csv-parser'); // This is a Node.js module

class Cookbook {
  constructor(csv_path) {
    this.recipes = [];
    this.csv_path = csv_path;
    this.loadCSV()
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  loadCSV() { 
    console.log('Loading CSV')
    fs.createReadStream('recipes.csv')
      .pipe(csv())
      .on('data', (row) => {
        let recipe = new Recipe(row.name, row.rating, row.description);
        this.addRecipe(recipe);
      })
      .on('end', () => {
        console.log("CSV has been loaded. Here are the available recipes:")
        this.printRecipes();
      });
  }

  saveCSV() {

  }

  printRecipes() {
    this.recipes.forEach((recipe, index) => {
      console.log(`${index + 1} - Recipe: ${recipe.name}. Rating: ${recipe.rating}. Description: ${recipe.description}`);
    }
  )}
}

module.exports = Cookbook;

let cookbook = new Cookbook('recipes.csv');




