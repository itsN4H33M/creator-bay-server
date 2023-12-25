// all imports
const express = require("express");
require("dotenv").config();
require("./DB/Connection");
const cors = require("cors");
const router = require("./Routes/router");
// creating an express instance
const app = express();

// CORS
app.use(cors());

// for parsing json
app.use(express.json());

app.use(router);

const port = 4000 || process.env.PORT;

// setting up route and telling what to send as response
app.get("/", (req, res) => {
  res.send("Hello World");
});
// listening for any reqs
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
