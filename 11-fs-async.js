const {readFile, writeFile, read} = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    const first = res
    readFile('./content/second.txt', 'utf8', (err, res)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = res
        writeFile('./content/wf-async.txt',  `${first} \n${second}\n`, {flag: 'a'}, (err,res)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done');
        })
    })
})

console.log('starting new');
