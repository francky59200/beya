import React, {useState} from "react";
import './App.css';
import Counter from './Counter';
import Form from "./Form";


const App= (props) => { // pour faire le hook on utulise un composant fonctionnel declarer en const


  const [clients, setClients]= useState([]) // useState est un tableau comprenant 2 variables qui est

  // tab[0] =clients qui est le state et la tab[1] qui est le changement du state (setState)
    

const handleDelete =(client) =>{
  const updatedClients = clients.slice();// on declare une nouvelle const qui fera la copie du tableau clients de l'useState
  const index = updatedClients.indexOf(client); // on recupére l'index
  updatedClients.splice(index, 1);// on supprime
  setClients(updatedClients);// et on utulise le setClients pour executer le rendu du tableau
}

const handleAdd = (client) =>{
  const updatedClients= clients.slice();// 
  updatedClients.push(client);
  setClients(updatedClients);
 
}



    const membres = [
      <li className="list-group-item">noemie</li>,
      <li className="list-group-item">rachel</li>,
      <li className="list-group-item">julien</li>
    ];
    const title= "Todo List";
    const elements=clients.map((client) =><li className="list-group-item">{client}<button className="btn btn-success" onClick={()=>handleDelete(client)}>x</button></li>)
  
  
  
    return (
    <div className="container">
    <div className="App">
      <h1>{title}</h1>
      <Counter /> 
      <div className="list-group">
      {membres}
       {elements}
      </div>
      <Form onClientAdd={handleAdd} />
    </div>
    </div>
  );
  }


export default App;