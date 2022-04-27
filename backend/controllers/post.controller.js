const Post = require("../models/post.model");

exports.getAll = async (req, res) => {
  try {
    const result = await Post.find()
      .select(
        "authorEmail title content image imageDescription status localization phone price latestUpdate publishDate"
      )
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getByID = async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addPost = async (req, res) => {
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

    const titlePattern = new RegExp(
      /(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/,
      "g"
    );

    const emailPattern = new RegExp(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    );

    const titleMatched = title.match(titlePattern).join("");
    const emailMatched = authorEmail.match(emailPattern).join("");

    if (
      titleMatched.length < title.length ||
      emailMatched.length < authorEmail.length
    )
      throw new Error("Invaild characters");

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
};

exports.modifyPost = async (req, res) => {
  const {
    title,
    content,
    image,
    imageDescription,
    price,
    phone,
    localization,
    latestUpdate,
    authorEmail,
    status,
  } = req.body;

  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      post.title = title;
      post.content = content;
      post.image = image;
      post.imageDescription = imageDescription;
      post.price = price;
      post.phone = phone;
      post.localization = localization;
      post.latestUpdate = latestUpdate;
      post.authorEmail = authorEmail;
      post.status = status;
      await post.save();
      res.json({ message: "OK", modifiedPost: post });
    } else res.status(404).json({ message: "not found..." });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
