const {readFileSync, writeFileSync} = require('fs')
console.log("start");
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


writeFileSync(
    './content/third.txt', 
    `First value contains ${first}, second ${second}`
    ,'utf8', 
    {flag: 'a'})

console.log("done");
console.log("starting next");
