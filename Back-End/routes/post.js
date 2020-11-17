const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = mongoose.model("Post");

router.get("/posts", (req, res) => {
  Post.find()
    .populate("Category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new-post", (req, res) => {
  const { title, desc, imageUrl, category } = req.body;
  if (!title || !desc || !imageUrl || !category) {
    res.json({
      err: "All Fields are mandatory",
    });
  }

  const post = new Post({
    title,
    desc,
    imageUrl,
    category,
  });

  post
    .save()
    .then(() => {
      res.json({
        msg: "Post Created",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
