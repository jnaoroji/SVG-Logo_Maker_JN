// Includes packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { join } = require('path');
const { generateLogo } = require('./shapes');



// An array of questions for user input
class CLI {
  constructor() {
    this.text = '';
    this.textC = '';
    this.shape = '';
    this.shapeC = '';
  }
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
      // Store the returned SVG string from generateLogo in a variable
      const svgLogo = generateLogo(answers);
      
      //uses path to write the file into examples folder
      return writeFile(
        join(__dirname, '..', 'examples', 'logo.svg'),
        svgLogo
      );
    })
    //console logs generated logo on function completion
    .then(() => console.log('Generated logo.svg'))
      .catch((err) => console.error(err));
  }
}
module.exports = CLI;

