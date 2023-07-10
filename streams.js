const fs = require('fs');


readStream = fs.createReadStream('./doc/blog3.txt', {encoding: 'utf8'})
writeStream = fs.createWriteStream('./doc/blog4.txt')

readStream.pipe(writeStream);