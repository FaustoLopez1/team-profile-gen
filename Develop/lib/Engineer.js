// parent im inherating from 
const Employee = require('./Employee');

class Engineer extends Employee {
    //add github to engineer
    constructor(id, email, name, github) {
        super (id, email, name);
    //add github
        this.github = github;
    }
    //get github
    getGithub() {
        return this.github;
    }

    //get role
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;