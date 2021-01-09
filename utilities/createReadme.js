// Creating a Readme with the function populating the README.md
function createReadme(answers) {
    return `
<h1 align="center">${answers.projectName}</h1>

## Repository Name
${answers.reponame}
  

## Description
${answers.describe}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage-information)
- [Guidelines](#contribution-guidelines)
- [Testing](#test-instructions)
- [License](#license)

## Installation
${answers.instruct}

## Usage Information
${answers.usageInfo}

## Contribution Guidelines
${answers.guidelines}

## Test Instructions
${answers.instructions}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is under the ${answers.license} license. 


<br />
Find me on GitHub: [${answers.githubUser}](https://github.com/${answers.githubUser})<br />
<br />

Email me with any questions: ${answers.emailAddress}<br /><br />
    `;
  }
  
  module.exports = createReadme;
