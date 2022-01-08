// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  if (license == 'Apache') {
    shield = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  
  } else if  (license == 'MIT') {
    shield = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      console.log (shield)
  } else if  (license == 'GNU') {
    shield = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    console.log (shield)
  }else{
  
    shield = ' ';
  }
  
  
  return shield;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

var runShield = renderLicenseBadge(data.license);

  return `
  # ${data.project}
  ${runShield}

  ## Table of Contents
  - [Description](#description)
  - [Dependencies](#dependencies)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Contact Information](#contact-information)
  
  ## Description
  ${data.description} 
  
  ## Dependencies
  ${data.dependencies}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Test-Instructions
  ${data.tests}  
     
  ## Contact Information <br>
  
  ---
  
  Email Address: ${data.email} <br>
  
  [Github Profile](https://github.com/${data.username})
  
  [Linkedin Profile](https://www.linkedin.com/in/${data.linkedin})
`;
}

module.exports = generateMarkdown;
