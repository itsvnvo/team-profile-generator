const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        super.role = "Engineer";
    }

    githubEl() {
        return this.github;
    }
}

module.exports = Engineer;