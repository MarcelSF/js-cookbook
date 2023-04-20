const Recipe = require('./recipe');
const fs = require('fs'); // This is a Node.js module
const csv = require('csv-parser'); // This is a Node.js module
const createCsvWriter = require('csv-writer').createObjectCsvWriter; // This is a Node.js module

class Cookbook {
  
  constructor(csv_path) {
    this.recipes = [];
    this.csv_path = csv_path;
    this.loadCSV()
  }
  
  addRecipe(recipe) {
    this.recipes.push(recipe);
    // this.saveCSV();
  }
  
  loadCSV() { 
    console.log('Loading CSV')
    fs.createReadStream('recipes.csv')
    .pipe(csv())
    .on('data', (row) => {
      let recipe = new Recipe(row.name, row.rating, row.description);
      this.recipes.push(recipe);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      this.printRecipes();
      console.log(this.recipes)
    });
  }

  saveCSV() {
    const csvWriter = createCsvWriter({
      path: "recipes.csv",
      header: [
        { id: "name", title: "name" },
        { id: "rating", title: "rating" },
        { id: "description", title: "description" }
      ]
    });

    const records = this.recipes.map((recipe) => {
      return {
        name: recipe.name,
        rating: recipe.rating,
        description: recipe.description
      }
    })

    csvWriter.writeRecords(records)
      .then(() => {
        console.log(this.recipes)
      });
      console.log("CSV has been saved.");
  }

  printRecipes() {
    this.recipes.forEach((recipe, index) => {
      console.log(`${index + 1} - Recipe: ${recipe.name}. Rating: ${recipe.rating}. Description: ${recipe.description}`);
    }
  )}
}

let cookbook = new Cookbook('recipes.csv');

// console.log(cookbook);


// module.exports = Cookbook;

cookbook.addRecipe(new Recipe("Pizza", 4, "Delicious"));
cookbook.addRecipe(new Recipe("Pasta", 5, "Delicious"));
cookbook.addRecipe(new Recipe("Burger", 3, "Delicious"));
cookbook.addRecipe(new Recipe("Salad", 2, "Delicious"));

console.log(cookbook.recipes);





