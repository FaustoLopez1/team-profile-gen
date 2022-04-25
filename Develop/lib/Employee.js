//name
class Employee {
    constructor (name, id, email) {
        //id
      this.id = id;
      //email
      this.email = email;
      //name
      this.name = name;
    }
    
    //getName()
    getName() {
        return this.name;
    }

    //getRole()—returns 'Employee'
    getRole() {
        return 'Employee';
    }

    //getemail
    getEmail() {
        return this.email;
    }

    //get id
    getId() {
        return this.id;
    }

  }
  module.exports = Employee;
  




