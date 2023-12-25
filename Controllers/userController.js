const userModel = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

// User registration
exports.register = async (req, res) => {
  console.log("Inside user register controller");
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      res.status(406).json("Account already exists, please login..");
    } else {
      const newUser = new userModel({
        username,
        email,
        password,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(401).json(`Register API failed, Error: ${error}`);
  }
};

// User login
exports.login = async (req, res) => {
  console.log("Inside user login controller");
  const { email, password } = req.body;
  // console.log(req.body);

  try {
    const existingUser = await userModel.findOne({ email, password });

    if (existingUser) {
      const jwtoken = jwt.sign({ userId: existingUser._id }, "supersecret");

      res.status(200).json({
        jwtoken,
        existingUser,
      });
    } else {
      res.status(406).json("Incorrect Email or Password");
    }
  } catch (err) {
    res.status(401).json(`Login API failed, Error: ${err}`);
  }
};
