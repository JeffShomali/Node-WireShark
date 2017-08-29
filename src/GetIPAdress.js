const request = require('request');

 getPublicIp = () => {
    let exec = require('child_process').execSync;
    let cmd = "dig +short myip.opendns.com @resolver1.opendns.com";
    let options = {
      encoding: 'utf8'
    };
    
    return exec(cmd, options);
 }

 var ip = getPublicIp();
//  console.log(ip);


url = `http://ip-api.com/json/${ip}`;


request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});

