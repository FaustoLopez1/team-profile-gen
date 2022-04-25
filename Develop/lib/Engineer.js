// parent im inherating from 
const Employee = require('./Employee');

class Engineer extends Employee {
    //add github to engineer
    constructor(name, id, email, github) {
        super (name, id, email) ;
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