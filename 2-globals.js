console.log("#" + __filename);
let state = false
setInterval(()=>{
    if(!state){
        console.log("Hello,");
        state=!state
    }else{
        console.log("World!\n");
        state=!state
    }
},1000)