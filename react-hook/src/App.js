import React, {useState} from "react";
import './App.css';
import Counter from './Counter';
import Form from "./Form";


const App= (props) => {

  const [clients, setClients]= useState([])
    

const handleDelete =(id) =>{
  const updatedClients = clients.slice();
  const index = updatedClients.findIndex(client => client.id ===id);
  updatedClients.splice(index, 1);
  setClients(updatedClients);
}

const handleAdd = (client) =>{
  const updatedClients= clients.slice();
  updatedClients.push(client);
  setClients(updatedClients);
 
}



    const membres = [
      <li className="list-group-item">noemie</li>,
      <li className="list-group-item">rachel</li>,
      <li className="list-group-item">julien</li>
    ];
    const title= "Todo List";
    const elements=clients.map((client) =><li className="list-group-item">{client}<button className="btn btn-success" onClick={handleDelete}>x</button></li>)
  
  
  
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