const express = require('express');
const http = require('http')
const app = express();
const Blog = require('./models/blogs')

//storing mongoose
const mongoose = require('mongoose')
//connect to mongodb
const dbURI = 'mongodb+srv://xo_2:test1234@xo.6cb5vsr.mongodb.net/XO?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then(()=> console.log('connected to db successfully'))
  .catch((err)=> console.log(err))
//register view engine
app.set('view engine', 'ejs');

app.listen('8080', ()=> {
  console.log('the request has been sent')
});
//middleware and static files 
app.use(express.static('doc'));

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res)=>{
  const blog = new Blog({
    title:'My new blog',
    snippet:'About my new blog',
    body:'more aboutmy new blog'
  });

  blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.error(err)
    })
})

//routes
app.get('/', (req, res)=>{
  const blogs = [
  {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'}, 
  {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},  
  ];
  res.render('index', {title: 'Home page', blogs })
});

app.get('/about', (req, res)=>{
  res.render('about', {title: 'About page'})
});

app.get('/blogs/create', (req, res)=>{
  res.render('create', {title: 'Create Blog page'})
});

app.use((res,req)=>{
  res.render('404', {title: 'Error  page'})
})

http.createServer(()=>{
  console.log('the response has been provided')
})
