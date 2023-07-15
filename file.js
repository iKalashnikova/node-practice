const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const dataValidator = require("./helpers/dataValidator");
const checkExtension = require("./helpers/checkExtesion")

const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };
  const {error} = dataValidator(file);

if (error) {
    console.log(chalk.red(`Please specify ${error.details[0].path} parameter`));
    return;
}

const checkName = checkExtension(fileName);
console.log(checkName);
if (!checkName.result) {
    console.log(chalk.red(`Sorry, this app doesn't support this ${checkName.extension} extentsion `));
    return;
}
const pathName = path.join(__dirname, './files', fileName);
fs.writeFile(pathName, content, "utf-8" )
console.log(chalk.blue(`File ${checkName.extension} was created `));
};

const  getFiles = async () => {
const pathDir = (__dirname, './files');
const dir = await fs.readdir(pathDir);
console.log(dir);

if (dir.length === 0) {
    console.log(chalk.red(`There is no such file in this dir`));
    return
}
}

module.exports = {
  createFile,
  getFiles
};

