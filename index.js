const inquirer = require("./node_modules/inquirer");
const fs = require("fs").promises;
const util = require("util");
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const HTML = require("./dist/html")

let teamArray = [];
let teamDisplay = ``;

const writeFileAsync = util.promisify(fs.writeFile);

function promptQuestions() {
    do {
        try {
            response = await inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is your name?',
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
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['Manager', 'Engineer', "Intern"]
            }
            ])
            if (response.role === "Manager") {
                response2 = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is your office number?',
                    },
                    {
                        type: 'list',
                        name: 'addTeam',
                        message: 'Would you like to add another team member?',
                        choices: ['Yep', 'Nope']
                    },
                ]);
                const manager = new Manager(response.name, response.id, response.email, response2.officeNumber);
                teamArray.push(manager);
            } else if (response.role === "Engineer") {
                response2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is the github username?:",
                },
                {
                    type: 'list',
                    name: 'addTeam',
                    message: 'Would you like to add another team member?',
                    choices: ['Yep', 'Nope']
                },
                ]);
                const engineer = new Engineer(response.name, response.id, response.email, response2.github);
                teamArray.push(engineer);
            } else if (response.role === "Intern") {
                response2 = await inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What school is the Intern attending?:",
                },
                {
                    type: 'list',
                    name: 'addTeam',
                    message: 'Would you like to add another team member?',
                    choices: ['Yep', 'Nope']
                },
                ]);
                const intern = new Intern(response.name, response.id, response.email, response2.school);
                teamArray.push(intern);
            }
        } catch (err) {
            return console.log(err);
        }
    } while (response2.addTeam === "Yep");
    console.log('Data of response 2', response2)
    console.log('Data of response', response)
}




async function init() {
    try {
        await promptQuestions()
        for (let i = 0; i < teamArray.length; i++) {
            teamDisplay = teamDisplay + HTML.generateCard(teamArray[i]);
        }
        let writeHtml = HTML.generateHTML(teamDisplay)
        writeFileAsync("index.html", writeHtml)
    } catch (err) {
        return console.log(err);
    }

};

init();