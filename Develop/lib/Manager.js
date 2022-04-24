// parent im inherating from 
const Employee = require('./Employee');

class Manager extends Employee {
    //add officeNumber to Manager
    constructor(id, email, name, officeNumber) {
        super (id, email, name);
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