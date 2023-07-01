const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    measurements: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
