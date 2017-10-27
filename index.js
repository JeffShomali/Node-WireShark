#!/usr/bin/env node

"use strict";

const yargs = require("yargs");

const getIPAddress = require("./src/GetIPAddress");

const argv = yargs
  .command("whatIsMyIP", "Display IP Address Information", {})
  .help().argv;
var command = argv._[0];

if (command == "whatIsMyIP") {
  getIPAddress.getGeoIPInformation();
} else {
  console.log("Command Not Recognize");
}
