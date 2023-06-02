const fs = require('fs');


readStream = fs.createReadStream('./doc/blog3.txt', {encoding: 'utf8'})

readStream.on('data', (chunk)=>{
  console.log('____________________NEW CHUNK____________________')
  console.log(chunk)
})