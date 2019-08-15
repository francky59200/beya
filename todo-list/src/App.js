import React from "react";
import './App.css';

class App extends React.Component {

  state ={
    clients: [],
    compteur: 0,
    nouveauClient:""
  }


handleCompt = () =>{
 const chrono =this.state.compteur +1;
 this.setState({compteur:chrono});
}

handleAdd =(event)=>{
  event.preventDefault();
 const clients= this.state.clients.slice();
 clients.push(this.state.nouveauClient);
 this.setState({clients:clients, nouveauClient:""}, () =>console.log(this.state.clients));

}

handleChange =(event) =>{
  event.preventDefault();
  this.setState({nouveauClient:event.currentTarget.value});
}


handleDelete =(id) =>{
  const suppr = this.state.clients.slice();
  const index = suppr.indexOf(id);
  suppr.splice(index, 1);
  this.setState({clients:suppr});
}



  render () {
    const membres = [
      <li className="list-group-item">noemie</li>,
      <li className="list-group-item">rachel</li>,
      <li className="list-group-item">julien</li>
    ];
    const title= "Todo List";
    const elements= this.state.clients.map((client) =><li className="list-group-item">{client}<button className="btn btn-success" onClick={()=>this.handleDelete(client)}>x</button></li>)
  return (
    <div className="container">
    <div className="App">
      <h1>{title}</h1>
      {this.state.compteur}<button className="btn btn-success" onClick={this.handleCompt}>compteur</button>
      <div className="list-group">
      {membres}
       {elements}
      </div>
      <form
      onSubmit={this.handleAdd}>
        <input
        value={this.state.nouveauClient} 
        type="text" placeholder="nouveau client"
         onChange={this.handleChange}
        />
          <button className="btn btn-primary">Ajouter</button>
      </form>
      
    </div>
    </div>
  );
  }
}

export default App;
