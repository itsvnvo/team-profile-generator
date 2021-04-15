const inquirer = require("inquirer");


const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'user',
            message: 'What is your Role?',
            options: ['Manager','Engineer','Intern','None']
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
    ]);
};