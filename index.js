const inquirer = require('inquirer');
const questions = [
    // {
    //     type:'list',
    //     message:'Metric or Imperial'
    // },
        {
        type: 'input',
        message: 'What is your Height?',
        name: 'weight',
      },
      {
        type: 'input',
        message: 'What is your Height?',
        name: 'height',
      }
  ]
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    const bmi = parseInt(answers.weight) * (parseInt(answers.height))
    console.log(bmi);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error);
    } else {
      // Something else went wrong
        console.log("Something else");
    }
  });