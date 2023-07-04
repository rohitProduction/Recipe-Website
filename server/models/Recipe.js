const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    idMeal: {
      type: String,
      required: true,
      unique: true,
    },
    strMeal: {
      type: String,
      required: true,
    },
    strMealThumb: {
      type: String,
      required: true,
    },
    // category: {
    //   type: String,
    //   required: true,
    // },
    // instructions: {
    //   type: String,
    //   required: true,
    // },
    // thumbnail: {
    //   type: String,
    //   required: true,
    // },
    // ingredients: {
    //   type: [String],
    //   required: true,
    // },
    // measurements: {
    //   type: [String],
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
