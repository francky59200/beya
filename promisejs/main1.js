
//******************1ere methode d'execution des promesses**************************** */

(async ()=>{ // ici on appele directement notre await dans le 1er scope car elle est englobé 
    // avec async dans une fonction de closure

    let funcTwo =()=>{
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("test") // ici dans la promesse on a mis en place une tache asynchrone
            }, 5000);
        })
    }

    let text= await funcTwo() // et le await peut se s'executer car elle est dans la fonction async
    console.log(text)

})()

//*******************2eme methode d'execution des promesses******************************* */

let funcTwo =()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("test") // ici dans la promesse on a mis en place une tache asynchrone
        }, 5000);
    })
}


let func = async ()=>{
    console.log("ok") // le ok s'executera en premier
    return await funcTwo() // funcTwo etant une fonction async car elle a le await elle s'executera en 2eme
    
}
func().then(test => console.log(test))






// en javascript les appels et les fonctions sont mon thread en gros elles fonts une instructiion a la fois
//pour la rendre multi thread on transforme la fonction en fonction asynchrone avec le async ainsi notre fonction
//pourra effectuer pluisieurs opérations a la fois

// Des lors qu'on ajoute le mot async avant notre fonction celle ci devient une promesse donc on pourra
//utuliser le .then et le .catch

// UTULISATION DE npm nodemon POUR UN AFFICHAGE DES CHANGEMENTS EN DIRECT SUR LE TERMINAL