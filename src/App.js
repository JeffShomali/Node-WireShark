const _ = require("lodash");
const yargs = require("yargs");

//Imports modules
const ip = require("./GetIPAddress.js");

const argv = yargs.command("whatIsMyIP", "Display IP Address", {}).help().argv;
var command = argv._[0];

if (command == "whatIsMyIP") {
  console.log(command);
} else {
  console.log("Command Not Recognize");
}
