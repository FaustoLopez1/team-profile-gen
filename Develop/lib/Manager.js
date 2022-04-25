// parent im inherating from 
const Employee = require('./Employee');

class Manager extends Employee {
    //add officeNumber to Manager
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
    //add officeNumber
        this.officeNumber = officeNumber;
    }
    //get officenumber
    getOfficeNumber() {
        return this.officeNumber;
    }

    //get role
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;