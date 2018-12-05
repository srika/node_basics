var os = require('os');

console.log("Host: " + os.hostname());
console.log("Free Memory in Bytes: " + os.freemem());
console.log("Total Memory in Bytes: " + os.totalmem());