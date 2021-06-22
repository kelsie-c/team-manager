const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHubUser) {
        super (name, id, email);
        this.gitHubUser = gitHubUser;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.gitHubUser;
    }
}

module.exports = Engineer;