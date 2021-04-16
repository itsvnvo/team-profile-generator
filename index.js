const inquirer = require("./node_modules/inquirer");
const employee = require("./lib/employee")
const manager = require("./lib/manager")
const intern = require("./lib/intern")
const engineer = require("./lib/engineer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const Employee = require("./lib/employee");

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const promptQuestions = () => {
    return inquirer.prompt([
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
            name: 'addTeam',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', "Intern", "None"]
        },
    ]);
}; 

const init = () => {
    promptQuestions()
    .then(() => console.log('prompted questions', Employee))
    .catch((err) => console.error(err));
};

init();