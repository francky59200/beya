// Requiert le paquet

let PouchDB= require('pouchdb')

// on creer notre base de données

let db= new PouchDB('First_Database')

// et on le teste sur la console pour l'appel

console.log('merci pour votre base de donnée')

// on recupére les infos de la base de donnée

db.info(function(err,info){
    if(err){
        return console.log('err')
    }
    else{
        console.log(info)
    }
})