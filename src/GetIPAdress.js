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

const showMyPublicIPInfo = (_ip) => {
    request({
        url: `http://ip-api.com/json/${_ip}`,
         }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
               console.log(body.as);
            } else {
                console.log('Unable to fetch the weather')
            }
      });
} 

showMyPublicIPInfo(ip);


// function (error, response, body) {
//     console.log('error:', error); 
//     console.log('statusCode:', response && response.statusCode); 
//     console.log('body:', body); 


module.exports.showMyPublicIPInfo = showMyPublicIPInfo;