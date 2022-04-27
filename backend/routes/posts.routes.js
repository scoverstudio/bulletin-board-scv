const express = require("express");
const router = express.Router();

const postController = require("../controllers/post.controller");

router.get("/posts", postController.getAll);
router.get("/posts/:id", postController.getByID);
router.post("/posts", postController.addPost);
router.put("/posts:id", postController.modifyPost);

module.exports = router;
