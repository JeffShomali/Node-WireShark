#!/usr/bin/env node

"use strict";

const request = require("request");
const axios = require("axios");

function getIP() {
  return new Promise(resolve => {
    let exec = require("child_process").execSync;
    let cmd = "dig +short myip.opendns.com @resolver1.opendns.com";
    let options = {
      encoding: "utf8"
    };
    setTimeout(() => resolve(exec(cmd, options)), 2000);
  });
}

async function getGeoIPInformation() {
  try {
    const ip = await getIP();

    axios
      .get(`http://ip-api.com/json/${ip}`)
      .then(response => {
        console.log(`IP:  ${ip}`, response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (e) {
    console.error(e);
  }
  return results;
}

module.exports.getGeoIPInformation = getGeoIPInformation;
