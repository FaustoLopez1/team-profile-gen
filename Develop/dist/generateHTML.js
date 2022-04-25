const generateHTML = (employeeList = []) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
   ${insertlist(employeeList)}
  </div>
</div>
</body>
</html>`;



const insertlist = (employeeList) => {
  let employeeHtml = "";
  employeeList.forEach(person => {
    employeeHtml = employeeHtml.concat(
      `<div class = person-container>
      
      <div>${getPerson(person)}</div>
      </div>`
    )
  })
  return employeeHtml;
}

const createAncor = (title) => {
  return `<a href="">${title}</a>`
}

const getPerson = (person) => {
  if (person.getRole() === "Manager") {
    return "Office number: " + person.office;
  }
  else if (person.getRole() === "Engineer") {
    return "Github: " + createAncor(person.github);
  }
  else { 
    return "School: " + person.school;
  }
}



fs.writeFile('README.md', mdPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created Read.me!')
            );
module.exports = generateHTML;