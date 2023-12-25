const mongoose = require("mongoose");

const connectionString = process.env.DATABASE;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected successfully to mongoDB");
  })
  .catch((err) => {
    console.log(`Connection to mongoDB failed, error: ${err}`);
  });
