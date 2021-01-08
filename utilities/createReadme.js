// Creating a Readme with the function populating the README.md
function createReadme(answers) {
    return `
<h1 align="center">${answers.projectName}</h1>
  

## Description
${answers.describe}

## Table of Contents
- [Description](#description)
- [Installation](#instruct)
- [Usage](#usageInfo)
- [Guidelines](#guidelines)
- [Testing](#instructions)
- [License](#license)

## Installation
${answers.instruct}

## Usage Information
${answers.usageInfo}

## Contribution Guidelines
${answers.guidelines}

## Test Instructions
${answers.guidelines}

## License
<br />
This application is under the ${answers.license} license. 


<br />
Find me on GitHub: [${answers.githubUser}](https://github.com/${answers.githubUser})<br />
<br />

Email me with any questions: ${answers.emailAddress}<br /><br />
    `;
  }
  
  module.exports = createReadme;
