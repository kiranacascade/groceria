const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./models");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is my API");
});

app.listen(process.env.PORT, () => {
  // db.sequelize.sync({ force: true });
  console.log(`Server is running at port : ${process.env.PORT}`);
});
