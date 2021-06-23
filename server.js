const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/whispering-badlands-35656", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  userCreateIndex: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/api.js"));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});




"mongodb://localhost/whispering-badlands-35656"
//'mongodb://localhost/workout',