// requiert la base

let PouchDB= require('pouchdb')

//on creer une base distant

let db = new PouchDB('http://localhost:5984/employes')

// on recupére les données de cette base

db.info(function(err,info){
    if(err){
        return console.log(err)
    }else{
        console.log(info)
    }
})