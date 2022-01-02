// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.readFile('generateMarkdown.js','utf8', (error, genMd) =>
        error ? console.error(error) : console.log(data)
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('README.md',generateMarkdown({...response}));
    }
        

    );