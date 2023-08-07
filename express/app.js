const express = require('express');// returns a function 

//express app
const app = express( )

//listen for requests. it knows that we have to use the 
// localhost so we won't have to add it again.
app.listen(3000);

//if you wanna listen to a get request on a accurate URL
app.get('/', (req, res)=>{
// we are not having the setHeader, express's automatic
  res.send('<p>Home page</p>')

})