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

const showMyPublicIPInfo = (_ip, callback) => {
    let IPInformation = [];
    request({
        url: `http://ip-api.com/json/${_ip}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
           IPInformation.push(body.city);

        } else {
            callback('Unable to fetch you IP address')
        }
        return IPInformation;
    });
}

var result = showMyPublicIPInfo(ip);
// console.log(result);