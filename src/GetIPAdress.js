const request = require('request');


 const getPublicIP = () => {
    let exec = require('child_process').execSync;
    let cmd = "dig +short myip.opendns.com @resolver1.opendns.com"; 
    let options = {
      encoding: 'utf8'
    };
    
    return exec(cmd, options);
 }

 var ip = getPublicIP();

const showMyPublicIPInfo = (ip, callback) => {
    request({
        url: `http://ip-api.com/json/${ip}`,
        json: true
         }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                // callback(`Is is ${body.currently.temperature} in Concord Ca.`.bold.yellow);
                callback(undefined, {
                   body: body
                });
            } else {
                // console.log('Unable to fetch the weather'.bold.red);
                callback('Unable to fetch the weather')
            }
    
      });
} 

showMyPublicIPInfo();

// function (error, response, body) {
//     console.log('error:', error); 
//     console.log('statusCode:', response && response.statusCode); 
//     console.log('body:', body); 