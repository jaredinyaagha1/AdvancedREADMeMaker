// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'project',
      message: "What is your project's name?",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project: ',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command(s) should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What does the user need to know about contributing to the repo?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'checkbox',
      name: 'licensing',
      message: 'What kind of license should your project have?',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    }
  ];

inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('README.md',generateMarkdown({...response}));
    }
        

    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('generateMarkdown.js','utf8', (error, genMd) =>
        error ? console.error(error) : console.log(data)
    );
}

// TODO: Create a function to initialize app
async function init() {
    
}
// Function call to initialize app
init();