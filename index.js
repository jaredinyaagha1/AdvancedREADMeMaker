// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
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
  type: 'list',
  name: 'license',
  message: 'What kind of license should your project have?',
  choices: ['Apache2.0', 'GNU', 'MIT', 'GPL3.0', 'None'],
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (error) =>
    error ? console.error("Error: " + error) : console.log("")
  );
}

// TODO: Create a function to initialize app
function init() {
  var OutputReadme = "";
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(`. . . Generating ReadMe . . .
      
      Check ReadMeEx.md!`)
      OutputReadme = generateMarkdown(response);
      if (OutputReadme.length > 0) writeToFile('ReadmeEx.md', OutputReadme)
      else console.log("");
    }


    );
}
// Function call to initialize app
init();