import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state ={
    client: [
      "jean",
      "noemie",
      "patrick"
    ],
    compteur: 0,
    nouveauClient:""
  }
handleCompt = () =>{
 const chrono =this.state.compteur +1;
 this.setState({compteur:chrono});
}

handleDelete =() =>{
  const suppr = this.state.client.slice();
  const index = suppr.findIndex((client)=> client);
  suppr.splice(index, 1);
  this.setState({client:suppr});
}


  render () {
    const clients= this.state.client.map((client) =><li>{client}<button onClick={() =>this.handleDelete(client)}>x</button></li>);
  return (
    <div className="App">
      <li>{this.state.client}</li>
      {clients}
      {this.state.compteur}<button onClick={this.handleCompt}>compteur</button>
      <form>
        <input type="text" placeholder="nouveau client"></input>
          <button>Ajouter</button>
      </form>
      
    </div>
  );
  }
}

export default App;
