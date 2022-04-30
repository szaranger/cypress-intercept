const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3088;

const shoppingList = ["Bread", "Milk", "Butter", "Eggs"];
const completedList = ["Ketchup", "Chicken", "Shampoo"];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/", (req, res) => {
  res.status(200).send({ greeting: "Welcome home!" });
});

app.get("/api/shopping-list", (req, res) => {
  if (req.query.done) {
    res.status(200).send({ items: completedList });
  }
  res.status(200).send({ items: shoppingList });
});

app.listen(port, () =>
  console.log(`Shopping List App listening on port ${port}!`)
);
