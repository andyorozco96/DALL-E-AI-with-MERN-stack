const express = require("express");
const app = express();

// Settings
app.set("port", process.env.PORT || 3001);
// Middlewares

// Routes

// Static files

// Starting the server
app.listen(3001, () => {
  console.log("server on port 3001");
});
