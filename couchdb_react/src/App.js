import React, { Component } from 'react';
import Affichage from './Affichage'
import axios from 'axios'
import './App.css';

class App extends Component {

  state={
    employe:{}
  }

  /*componentWilMount(){
    axios.get('http://localhost:5984/employes', {withCredentials: true}).then(function(data){
      console.log(data)
    })

   
  }*/

  // ici on va essayer de recuperer les données distant de notre base de données couchDB avec React
  // grace au pilote couchDB "nano"

  componentDidMount(){
    //on requiert le pilote nano sur notre url de couchDB
    const nano = require('nano')('http://localhost:5984');
    //nano.db.use utilise la table employes et prends le get ici id de cette table pour afficher la table
    nano.db.use('employes').get('05f2356d7deddd8b062de1090000565d').then((body) => {
      //on met a jour le state avec les nouvelles valeurs reçues
     this.setState({employe:body}, ()=>console.log(this.state.employe))
		
	})

  }

  render(){
   
    return (
      <div className="App">
      
       <h2>gestion de Couchdb avec React</h2>

       <Affichage prenom={this.state.employe.firstName} nom={this.state.employe.lastName} age={this.state.employe.age}/>
       
      </div>
    );
  }
  
}

export default App;
