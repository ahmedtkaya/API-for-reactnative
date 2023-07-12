const Story = require("../models/Story");

exports.createStory = async (req, res) => {
  try {
    const story = await Story.create({
      name: req.body.name,
      storyTR: req.body.storyTR,
      storyEN: req.body.storyEN,
      image: req.body.image,
    });
    res.status(200).json(story);
  } catch (error) {
    res.status(404);
    console.log(error);
  }
};

exports.getStory = async (req, res) => {
  try {
    const story = await Story.find().sort("-createdAt");
    res.status(200).json(story);
  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getStoryDetail = async (req, res) => {
  try {
    const story = await Story.findOne({ slug: req.params.slug });
    res.status(200).json(story);
  } catch (error) {
    res.status(404).json(error);
  }
};
