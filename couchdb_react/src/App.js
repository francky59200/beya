import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  state={
    employe:{}
  }

  componentWilMount(){
    axios.get('http://localhost:5984/employes', {withCredentials: true}).then(function(data){
      console.log(data)
    })

   
  }

  render(){
    return (
      <div className="App">
      
       <h2>gestion de Couchdb avec React</h2>
       
      </div>
    );
  }
  
}

export default App;
