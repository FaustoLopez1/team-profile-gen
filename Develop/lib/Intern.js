// parent im inherating from 
const Employee = require('./Employee');

class Intern extends Employee {
    //add school to intern
    constructor(id, email, name, school) {
        super (id, email, name);
    //add school
        this.school = school;
    }
    //get school
    getSchool() {
        return this.school;
    }

    //get role
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;