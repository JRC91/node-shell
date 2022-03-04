const fs = require('fs');
//cat filename
module.exports = {

  cat: function(input) {
    if (input.slice(0, 3) === "cat"){


      fs.readFile(input.slice(4),'utf8', (err, data) => {
        if(err) {throw err}
        else {
        process.stdout.write(data);
        process.stdout.write("\nprompt > ");
      }});


  }

}}
//fs.readFile(input.slice(4), 'utf8',(err, data) => {

//if (files.some((ele) => ele === input.slice(4))) {
  /* fs.readdir('./', 'utf8', (err, files) => {
        if (err) { throw err }
        else { return files; }
      }*/
