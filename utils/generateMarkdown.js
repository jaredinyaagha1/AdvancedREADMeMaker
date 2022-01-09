// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.project}
  ${renderLicenseBadge(data.license)}

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