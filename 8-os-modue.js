const os = require('os')

//user info
const user = os.userInfo()


//useruptime
console.log(`Sys bee running for ${os.uptime()}`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS);