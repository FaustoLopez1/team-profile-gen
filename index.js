const inquirer = require('inquirer');
const Engineer = require('./Develop/lib/Engineer');
const Intern = require('./Develop/lib/Intern');
const Manager = require('./Develop/lib/Manager');
const fs = require('fs');

const generateHTML = require('./Develop/dist/generateHTML');
const employeeList = []


const managerInput = () => {
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
      addEmployee();
    });
}

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'name',
        message: 'Please select member role:',
        choices: ['Engineer', 'Intern', 'No more Employees to add'],
      },
    ])
    .then(answers => {
      console.log(answers)
      if (answers.name === 'Engineer') {
        engineerInput();
      } else if (answers.name === 'Intern') {
        internInput();
      } else {
        const html = generateHTML(employeeList);
        fs.writeFile('index.html', html, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
      }

    });

  const engineerInput = () => {
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
        employeeList.push(engineer)
        addEmployee();
      });

  }

  const internInput = () => {
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
        employeeList.push(intern)
        addEmployee();
      });
  }
}

managerInput();