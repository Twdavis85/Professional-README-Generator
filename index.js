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
        message: "What is the name of your project?"
    },

    {
        type: "list",
        name: "license",
        message: "Which license?",
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
