const inquirer = require("./node_modules/inquirer");
const fs = require("fs").promises;
const employee = require("./lib/employee")
const manager = require("./lib/manager")
const intern = require("./lib/intern")
const engineer = require("./lib/engineer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const generateHTML = require("./dist/html")

let teamArray = [];

async function promptQuestions() {
    let done = "";
    do {
        try {
            response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is team managers name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your Id?',

                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your Email?',
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is your office number?',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Would you like to add another team member?',
                    choices: ['Engineer', "Intern", "None"]
                }
            ]);
            if (response.role === "Engineer") {
                response2 = await inquirer.prompt([{
                    type: 'input',
                    name: 'name2',
                    message: 'What is the Engineers name?',
                },
                {
                    type: 'input',
                    name: 'id2',
                    message: 'What is your Id?',

                },
                {
                    type: 'input',
                    name: 'email2',
                    message: 'What is your Email?',
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the github username?:",
                },
                ]);
            } else if (response.role === "Intern") {
                response3 = await inquirer.prompt([{
                    type: 'input',
                    name: 'name2',
                    message: 'What is the Engineers name?',
                },
                {
                    type: 'input',
                    name: 'id2',
                    message: 'What is your Id?',

                },
                {
                    type: 'input',
                    name: 'email2',
                    message: 'What is your Email?',
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school is the Intern attending?:",
                }
                ]);
            }
        } catch (err) {
            return console.log(err);
        }
        console.log(teamArray)
    } while (done.role === "None");
}




async function init() {
    promptQuestions()
        .then((response) => {
            let makehtml = generateHTML(response);
            return fs.writeFile('index.html', makehtml);
        })
        .then(() => {
            console.log('You made a html');
        })
        .catch((err) => console.error(err));
};

init();