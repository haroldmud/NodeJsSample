const express = require('express');// returns a function
const path = require('path')

// express app
const app = express( )


//refister the view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000, ()=>{
  console.log('the request has been made')
});

app.get('/', (req, res)=>{
  const homePath = path.join(__dirname, '../view/index.html')
  res.sendFile(homePath);
})

app.get('/about', (req, res)=>{
  const aboutPath = path.join(__dirname, '../view/about.html')// the "__dirname" refers to the whole system directory
  res.sendFile(aboutPath);
})

// redirect
app.get ('/about-us', (req, res) => {
  res.redirect('/about')
});


// error page handler
app.use((req, res)=> {
  const errorPath = path.join( __dirname, '../view/404.html')
  res.status(404).sendFile(errorPath)
})
