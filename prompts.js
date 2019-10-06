module.exports = [{
    when: answers => answers.import === 'full',
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to overwrite Element\'s SCSS variables?',
    default: false,
  }]