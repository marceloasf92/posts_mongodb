const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", (err) => {
  if (err) {
    console.log("Error at the database", err);
  } else {
    console.log("Mongoose conectado no mongodb");
  }
});
