// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Enter a description of your project."
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "Enter the project's installation instructions."
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Enter the project's usage information."
    },
    {
        type: "input",
        name: "projectContribution",
        message: "Enter the project's contribution guidelines.",
    },
    {
        type: "input",
        name: "projectTest",
        message: "Enter the project's test instructions."
    },
    {
        type: "input",
        name: "projectGitHub",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "projectEmail",
        message: "Enter your email address."
    },
    {
        type: "input",
        name: "projectYear",
        message: "Enter the year you created this project."
    },
    {
        type: "input",
        name: "projectName",
        message: "Enter your first and last name."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license.",
        choices: [{name: "MIT", value: "MIT" }, {name: "Apache 2.0", value: "Apache%202.0"}, {name: "GNU v3.0", value: "GNU%20v3.0"}]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers =>{
       writeToFile("README.md", render(answers))
    }) 
}

// Function call to initialize app
init();
