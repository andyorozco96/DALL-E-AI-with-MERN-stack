// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// }

const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.REACT_APP_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => console.error(err));

module.exports = mongoose;
