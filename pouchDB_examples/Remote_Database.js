// requiert la base

let PouchDB= require('pouchdb')

//on creer une base distant

let db = new PouchDB('http://localhost:5984/employes')

// on cree un document

let doc={
    name: "françois",
    age: "35",
    ville:"tourcoing"
}

// on insere dans la base de donnée

db.post(doc, function(err, res){
    if(err){
       return console.log(err)
    }else{
        console.log("your document are added")
    }
})

/*db.info(function(err,info){
    if(err){
        return console.log(err)
    }else{
        console.log(info)
    }
})*/