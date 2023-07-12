const express = require("express");
const mongoose = require("mongoose");
const Category = require("./models/Category");
const Story = require("./models/Story");
const storyController = require("./controllers/storyController");
const categoryController = require("./controllers/categoryController");

const app = express();

mongoose
  .connect("mongodb://localhost/englishstoryAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.post("/storypost", storyController.createStory);
app.get("/story", storyController.getStory);
app.get("/story/:slug", storyController.getStoryDetail);

app.post("/categorypost", categoryController.createCategory);
app.get("/", categoryController.getCategory);
app.get("/:slug", categoryController.getCategoryDetail);

const port = 3000;

app.listen(port, () => {
  console.log(`Connect on ${port} port.`);
});
