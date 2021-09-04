// when using require from another file, we get all properties inside `exports.module` from that file
const shareVariables = require("./2.export");
const defaultExport = require("./2.1.default-export");

console.log(shareVariables);
console.log(defaultExport());
