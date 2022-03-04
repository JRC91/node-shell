let pwdCommand = require('./pwd.js');
// bash gets the data
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let input =  data.toString().trim();
  pwdCommand.pwd(input);
  //lsCommand.ls(input)
  process.stdout.write('You typed: '+ input);
  process.stdout.write('\nprompt > ');
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
