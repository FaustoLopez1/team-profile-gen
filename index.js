const inquirer = require('inquirer');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
const Manager = require('./Develop/lib/Manager');
const fs = require('fs');

const generateHTML = require('./Develop/dist/generateHTML');
const employeeList = []


  const managerinput = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your Team Managers name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the managers employee id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the managers email address?',
        },
        {
          type: 'input',
          name: 'office',
          message: 'What is the managers office number?',
        },
      ])
      .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        employeeList.push(manager)
        engineerinput();
      });
  }



  const engineerinput = () => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your Team engineer name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the engineer employee id?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the engineer email address?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the engineer github username?',
        },
      ])
        .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        interninput();
      });

}




const interninput = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your Team intern name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the intern employee id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the intern email address?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the interns school name?',
      },
    ])
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      generateHTML(employeeList);
    });
}
managerinput();