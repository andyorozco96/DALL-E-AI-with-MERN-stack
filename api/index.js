/* ===== REQUIRED IMPORTS  ===== */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { mongoose } = require("./src/db");
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
app.use("/api/concepts", require("../api/src/routes/concepts"));

// Static files
// console.log(path.join(__dirname, "public"));
// console.log(path.basename(__filename));
//app.use(express.static(path.join(__dirname, "public")));

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

/* ===== APP LISTENING ===== */

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
