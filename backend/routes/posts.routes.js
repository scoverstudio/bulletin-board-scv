const express = require("express");
const router = express.Router();

const Post = require("../models/post.model");

router.get("/posts", async (req, res) => {
  try {
    const result = await Post.find({ status: "published" })
      .select(
        "authorEmail title content image imageDescription status localization phone price latestUpdate publishDate"
      )
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/posts", async (req, res) => {
  try {
    const {
      title,
      content,
      image,
      imageDescription,
      price,
      phone,
      localization,
      publishDate,
      latestUpdate,
      authorEmail,
      status,
    } = req.body;

    if ((title && content && authorEmail, status)) {
      const newPost = new Post({
        title,
        content,
        image,
        imageDescription,
        price,
        phone,
        localization,
        publishDate,
        latestUpdate,
        authorEmail,
        status,
      });
      await newPost.save();
      res.json({ message: "OK" });
    } else res.status(404).json({ message: "not found..." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
