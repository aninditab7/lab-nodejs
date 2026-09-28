const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello! This is a test file.');
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);