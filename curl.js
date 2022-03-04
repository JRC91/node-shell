let requestCommand = require('request');
module.exports = {
  curl: function(input) {
   if(input.slice(0,4)==='curl'){
    requestCommand(input.slice(5), function (error, response, body){
      if(error) {throw error;}
     else{
      //process.stdout.write(response);
      process.stdout.write(body);
      process.stdout.write("\nprompt > ");
    }
    })
   }
  }
}
