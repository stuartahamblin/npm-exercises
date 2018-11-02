const {red, blue} = require("./color");

const contentsOfFile = {};

contentsOfFile.name = "Fred";
contentsOfFile.age = 45;
contentsOfFile.returnBlue = () => blue;
contentsOfFile.blue = blue;

module.exports = contentsOfFile;