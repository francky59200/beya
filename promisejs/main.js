// DECLARATION

const start = new Promise((resolve, reject)=>{
    // ici on va tester notre promesse
    const isRunning= false
    if(isRunning){
        resolve()
    }else {
        reject()
    }
})

//UTULISATION

start.then(()=>{
    console.log("it's run")
}).catch(()=>{
    console.log("Oups it's not run")
})


// UTULISATION DE npm nodemon POUR UN AFFICHAGE DES CHANGEMENTS EN DIRECT SUR LE TERMINAL