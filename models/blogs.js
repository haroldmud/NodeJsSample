const mongoose = require('mongoose');
const Schema = mongoose.Schema; //this is a constructor function

const blogSchema = new Schema({
  title: { 
    type: String,
    required: true
  },
  snippet: { 
    type: String,
    required: true
  },
  body: { 
    type: String,
    required: true
  }
}, {timestamps: true})

//model() carries the existing collection in our database
//that collection is called "blogs" and 'Blog' represents it now.
//the 2nd arg represent the schema we want to base this model on.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
