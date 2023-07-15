// index.js
const argv = require('yargs').argv;
const {createFile, getFiles} = require('./file.js')

// TODO: рефакторити
function invokeAction({ action, fileName, content}) {
  switch (action) {
    case 'create':
      createFile(fileName, content);
      break;

    case 'get':
        getFiles()
      break;

    case '':
      // ... name email phone
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);