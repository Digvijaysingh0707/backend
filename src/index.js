const dbFile = require("./db/index.js");
const dotenv = require("dotenv");
const { connectDB } = dbFile;
const express = require("express");
const app = express();

dotenv.config();

connectDB()
  .then((res) => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port:${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });
