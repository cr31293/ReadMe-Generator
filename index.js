const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const qArray = [
    {
        name: "title",
        type: "input",
        message: "What is your application titled?"
    },
    {
        name: "description",
        type: "input",
        message: "Please provide a description of your application"
    },
    {
        name: "installation",
        type: "input",
        message: "Please provide instructions for installing your application"
    },
    {
        name: "usage",
        type: "input",
        message: "Please provide usage information on your application"
    },
    {
        name: "contributions",
        type: "input",
        message: "Please provide all contributing authors for the application"
    },
    {
        name: "test",
        type: "input",
        message: "Please provide testing instructions for your application"
    },
    {
        name: "github",
        type: "input",
        message: "Please input your GitHub profile name"
    },
    {
        name: "email",
        type: "input",
        message: "Please input your email address for contact"
    },
    {
        name: "license",
        type: "list",
        message: "Please select a license for your application",
        choices: [
            {
                name: "MIT"
            },
            {
                name: "APACHE 3.0"
            },
            {
                name: "GPLv3"
            }
        ]
    }
]

function writeToFile(name, data) {
    fs.writeFile(name, data, err => {
        if (err) console.log(err);
    })
}

function init() {
    inquirer.prompt(qArray).then( answers => {
        console.log(answers);
        const answerPrint = generateMarkdown(answers);
        writeToFile("generated/README.md", answerPrint);
    });
}

init();