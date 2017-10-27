#!/usr/bin/env node

"use strict";

var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var inquirer = require("inquirer");

clear();
console.log(
  chalk.yellow(figlet.textSync("Node Shark", { horizontalLayout: "full" }))
);
