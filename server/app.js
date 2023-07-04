const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
const dbURI =
  "mongodb+srv://User1:Password123!@recipe-app.epfrdq4.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

// app.listen(5000);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get("/seafood", (req, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(res);
    });
});

app.get("/meal/:id", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + req.params.id
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/category/:name", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + req.params.name
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/categories", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/search/:name", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + req.params.name
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
  }
});

const Recipe = require("./models/Recipe");

app.post("/favourite", (req, res) => {
  const recipe = new Recipe(req.body);
  recipe
    .save()
    .then((result) => {
      res.status(201).json();
    })
    .catch((err) => {
      res.status(500).json();
    });
});

app.get("/unfavourite/:id", async (req, res) => {
  try {
    const response = await Recipe.deleteOne({ idMeal: req.params.id });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
});

app.get("/favourited/:id", async (req, res) => {
  try {
    const response = await Recipe.find({ idMeal: req.params.id });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
});

app.get("/allFavourites/", async (req, res) => {
  try {
    const response = await Recipe.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
});
