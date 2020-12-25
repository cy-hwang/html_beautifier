const pretty = require('./index.js');
const pretty2 = require('./dist/pretty_module.js');

const STRING = `<!DOCTYPE html> <html lang="en"> <head> 
<meta charset="UTF-8"> <title>Home</title> 
</head> <body> This is content. </body> </html>`;


const result = pretty(STRING);
console.log(result);

const result2 = pretty2(STRING);
console.log(result2);