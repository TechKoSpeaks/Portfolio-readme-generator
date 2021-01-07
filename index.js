const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please provide application repository name',
            name: 'reponame',
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectname',
        },
        {
            type: 'input',
            message: 'Please enter a short project description',
            name: 'projectdescribe',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions',
            name: 'projectinstruct',
        },
        {
            type: 'input',
            message: 'Provide any usage information here',
            name: 'usageinfo',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines here',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'Any test instructions?',
            name: 'instructions',
        },
    ])



// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
