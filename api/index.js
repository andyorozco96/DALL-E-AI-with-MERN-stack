/* ===== REQUIRED IMPORTS  ===== */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

/* ===== APP INITIALIZATION ===== */
const app = express();

/* ===== VARIABLES ===== */
const PORT = process.env.PORT || 8082;

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS añadido
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

// Routes

// Static files

/* ===== APP LISTENING ===== */

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
