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


