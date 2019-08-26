"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

const style = {
  red: "#ff6347",
  pink: "#ff8c69",
  green: "#54ffaf",
  purple: "#b721ff",
  blue: "#21d4fd",
  yellow: "#ffe242"
};

// Text + chalk definitions
const data = {
  byline: chalk.white("I make stuff and things. My cat is the best coworker."),
  name: chalk.white("              Melanie Seltzer"),
  handle: chalk.white("melanieseltzer"),
  work: chalk.white("UX Software Engineer at GoDaddy (remote)"),
  twitter:
    chalk.gray("https://twitter.com/") +
    chalk.hex(style.purple).bold("melanieseltzer"),
  npm:
    chalk.gray("https://npmjs.com/") +
    chalk.hex(style.blue).bold("~melanieseltzer"),
  github:
    chalk.gray("https://github.com/") +
    chalk.hex(style.pink).bold("melanieseltzer"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.hex(style.red).bold("melanieseltzer"),
  web: chalk.hex(style.green).bold("https://www.melanieseltzer.com"),
  npx:
    chalk.hex(style.yellow).bold("npx") + " " + chalk.white("melanieseltzer"),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  data.byline +
  newline +
  newline +
  working +
  newline + // data.labelWork + data.work
  newline +
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
