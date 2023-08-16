const express =  require('express');
const router = express.Router();
const Blog = require('../models/blogs')

router.post("", (req, res) => {
  const blog = new Blog(req.body);
  //body's the req's property that contains the
  //form values after submission
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create Blog page" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("detail", { title: "Blog Detail", blog: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
      //this acts like an updater of the main data collection
    })
    .catch((err)=>{
      console.error(err)    
    }
  )
});

router.get("", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "Home page", result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
