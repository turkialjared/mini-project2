const express = require("express");
const connectdb = require("./database");
const Port = 8000;
const app = express();
const morgan = require("morgan");
const Bookrouter = require("./api/Books/router");
const cors = require("cors");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/books", Bookrouter);

// not found funcation
app.use((req, res, next) => {
  return res.status(404).json({ massage: "this path is not found " });
});

// error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.massage || "server error");
});

connectdb();
app.listen(Port, () => {
  console.log(`Im listening to ${Port}`);
});
