const Recipe = require('./recipe');

let myRecipe = new Recipe('Pizza', 5, 'Delicious');

class Cookbook {
  constructor(csv_path) {
    this.recipes = [];
    this.csv_path = csv_path;
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  load_csv() { 

  }

  save_csv() {
    
  }
}
