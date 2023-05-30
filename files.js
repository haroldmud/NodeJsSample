const fileModifier =  require('fs');

//Reading files
fileModifier.readFile('./doc/blog1.txt', (err, data)=>{
  if(err){
    console.log(err)  //This error will be thrown when the file wont be accessed
  }
  console.log(data)   //<Buffer 20 58 4f 20 74 69 6c 20 77 65 20 6f 76 65 72 64 6f 73 65>
  console.log(data.toString())  // this buffer will be converted to the actual value
})


//Writing files

fileModifier.writeFile('./doc/blog1.txt', 'Always say less than necessary', ()=>{
  return null;
})

fileModifier.writeFile('./doc/blogX.txt', 
    'During hard times, don\'t you ever forget keeping your composure', ()=>{
  return null;
})


// creating directories
fileModifier.mkdir('./assets', (err)=>{
  if(err){
    console.log('an error occured')
  }
  console.log('directory created successfully')
})

if(fileModifier.existsSync('./assets')){
  fileModifier.rmdir('./assets', (err)=> {
    if(err){
      console.log('an error occured')
    }
    console.log('directory deleted successfully')
  })
}

if(fileModifier.existsSync('./doc/blog2.txt')){
  fileModifier.unlink('./doc/blog2.txt',(err)=>{
    if(err){
      console.log('an error occured')
    }
    console.log('file deleted successfully')
  })
}
