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
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Name that repo!!";
                }
              },
        },
        {
            type: 'input',
            message: 'What is the name/title of your project?',
            name: 'projectName',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "It does indeed need a name.";
                }
              },
        },
        {
            type: 'input',
            message: 'Please enter a short project description',
            name: 'describe',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "You need to be more descriptive.";
                }
              },
        },
        {
            type: 'input',
            message: 'Please provide installation instructions',
            name: 'instruct',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "What are your instructions for this though?";
                }
              },
        },
        {
            type: 'input',
            message: 'Any usage information?',
            name: 'usageInfo',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Please re-enter that information? PLEASE?";
                }
              },
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines here',
            name: 'guidelines',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Enter some guidelines or you shall not pass";
                }
              },
        },
        {
            type: 'input',
            message: 'Any testing information?',
            name: 'instructions',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "What's good with the tests??";
                }
              },
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
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Where art thou's Github?";
                }
              },
        },
        {   type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
            validate: (value) => {
                if (value) {
                  return true;
                } else {
                  return "Put your email in to move forth";
                }
              },
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


