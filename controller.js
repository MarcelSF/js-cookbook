const Cookbook = require('./cookbook');

class Controller {
  constructor() {
    this.cookbook = new Cookbook('recipes.csv');
  }

  run() {
    this.cookbook.load_csv();
    this.cookbook.save_csv();
  }
}
