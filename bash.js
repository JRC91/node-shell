let pwdCommand = require('./pwd.js');
let lsCommand = require('./ls.js');
let catCommand = require('./cat.js');
let curlCommand = require('./curl.js');
// bash gets the data
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let input =  data.toString().trim();
  pwdCommand.pwd(input);
  lsCommand.ls(input);
  catCommand.cat(input);
  curlCommand.curl(input);
  process.stdout.write('You typed: '+ input);
  process.stdout.write("\nprompt > ");
})





// process.stdin.on('data', (data)=> {
//   const cmd = data.toString().trim();
//   if(cmd === 'pwd'){
//     process.stdout.write(__dirname);
//     process.stdout.write('\nprompt > ');
//   }
//   process.stdout.write('You typed: '+ cmd);
//   process.stdout.write('\nprompt > ');
// });
