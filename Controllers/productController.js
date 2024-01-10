const productModel = require("../Models/productSchema");

exports.getAllProducts = async (req, res) => {
  try {
    const result = await productModel.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(406).json("error");
    }
  } catch (err) {
    res.status(401).json(`Login API failed, Error: ${err}`);
  }
};
