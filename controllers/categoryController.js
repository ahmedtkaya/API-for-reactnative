const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getCategoryDetail = async (req, res) => {
  try {
    const categories = await Category.findOne({
      slug: req.params.slug,
    }).populate("stories");
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json(error);
  }
};
