const Recipe = require('./recipe');

class Cookbook {
  constructor(csv_path) {
    this.recipes = [];
    this.csv_path = csv_path;
    this.load_csv()
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  load_csv() { 
    console.log('Loading CSV')
    console.log("CSV has been loaded")
  }

  save_csv() {

  }

  print_recipes() {
    this.recipes.forEach((recipe) => {
      console.log(`Recipe: ${recipe.name}. Rating: ${recipe.rating}. Description: ${recipe.description}`);
    }
  )}
}

module.exports = Cookbook;

let cookbook = new Cookbook('recipes.csv');

let myRecipe = new Recipe('Pizza', 5, 'Delicious');

let mySecondRecipe = new Recipe('Pasta', 4, 'Delicious');

console.log(cookbook.csv_path);

cookbook.addRecipe(myRecipe);
cookbook.addRecipe(mySecondRecipe);

cookbook.print_recipes();




