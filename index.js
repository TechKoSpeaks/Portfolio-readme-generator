const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const createReadme = require("./utilities/createReadme")
const writeFileAsync = util.promisify(fs.writeFile);


function askMe () {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please provide application repository name',
            name: 'reponame',
        },
        {
            type: 'input',
            message: 'What is the name/title of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please enter a short project description',
            name: 'describe',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions',
            name: 'instruct',
        },
        {
            type: 'input',
            message: 'Any usage information?',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines here',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'Any testing information?',
            name: 'instructions',
        },
        {
            type: 'list',
            message: 'How is this project licensed? ',
            name: 'license',
            choices: [
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
            ],
        },
        {   type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUser',
        },
        {   type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
        },
    ])
}

 // Async function using util.promisify 
 async function promisify() {
    try {
        // Ask user questions and generate responses
        const answers = await askMe();
        const generateContent = createReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./readwrite/README.md', generateContent);
        console.log(' Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  promisify();  






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
