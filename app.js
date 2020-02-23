const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const User = require('./models/User');
const bodyParser = require('body-parser');
//tells app  what source of request respond to


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}));
//these two lines of codes tell our app that we wanted to receive JSON requests
//also respond to other softwares like postman
//and in routes, we are gonna register our user

app.get("/", (req, res) => {
  // debugger;
  const user = new User({
    username: "jim",
    email: "jim@jim.jim",
    password: "jimsgreat123"
  })
  user.save();
  res.send("test")
});

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

