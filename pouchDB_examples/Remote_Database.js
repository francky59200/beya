// requiert la base

let PouchDB= require('pouchdb')

//on creer une base distant

let db = new PouchDB('http://localhost:5984/employes')

// on cree un document

let doc1={name: "françois", age: "35", ville:"tourcoing"}
let doc2={name: "macarena", age: "32", ville:"lille"}
let doc3={name: "vincent", age: "31", ville:"roubaix"}
let doc4={name: "jules", age: "30", ville:"calais"}

let docs=[doc1, doc2, doc3, doc4 ]



// on insere dans la base de donnée

// insertion d'un lot de documents dans la base de donnée

db.bulkDocs(docs, function(err, res){
    if(err){
        return console.log(err)
    }else{
        console.log("your documents are successfully insert")
    }
})

// avec db.post() pouchdb génère les id a chaque element, ce qui est different de db.put()
/*db.post(doc, function(err, res){
    if(err){
       return console.log(err)
    }else{
        console.log("your document are added")
    }
})

db.info(function(err,info){
    if(err){
        return console.log(err)
    }else{
        console.log(info)
    }
})*/