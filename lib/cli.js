// Includes packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { generateLogo } = require('./svg');
const { join } = require('path');


// An array of questions for user input
class CLI {
    run(){
      return inquirer
      .prompt([
      { 
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 letters as text for your logo',
      },
      {
        type: 'input',
        name: 'textC',
        message: 'What colour would you like your text to be?',
      },
      {
          type: 'list',
          message: 'Which shape would you like your logo to be?',
          name: 'shape',
          choices: ['circle', 'square', 'triangle'],
      },
      {
          type: 'input',
          name: 'logoC',
          message: 'What colour would you like the shape of the logo to be?',
      },
    ])
    .then((answers) => {
      console.log(answers);
      return writeFile(
        join(__dirname, '..', 'examples', 'logo.svg'),
        generateLogo(answers)
      );
    })
    .then(() => console.log('Generated logo.svg'))
        .catch((err) => console.error(err));
  }
}
module.exports = CLI;
