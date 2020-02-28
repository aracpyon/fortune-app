const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const User = require('./models/User');
const bodyParser = require('body-parser');
const fortunes = require('./routes/api/fortunes');
const calculations = require('./routes/api/calculations');
const passport = require('passport');
const path = require('path');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => {res.send("test");});

app.use("/api/users", users);
app.use("/api/fortunes", fortunes);
app.use("/api/calculations", calculations);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
