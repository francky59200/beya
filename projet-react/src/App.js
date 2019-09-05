import React, {Component} from 'react';
import Membre from './components/Membre'
import Button from './components/Button'
import './App.css';

const famille ={
  membre1: {
    nom: "michel",
    age: 3
  },
  membre2: {
    nom: "eleanor",
    age: 15
  },
  membre3: {
    nom: "aulas",
    age: 10
  },
  membre4: {
    nom: "cantona",
    age: 14
  },

}

class  App extends Component {

  state ={
    famille,
    isShow: false
  }

  handleClick= num =>{
    const famille ={ ...this.state.famille}// ou this.state.famille.slice()
    famille.membre1.age +=num
    this.setState({famille})// ou this.setState({famille : famille})
  }

  handleChange = event => {
    const famille= { ...this.state.famille}// destructuration de la copie du state.
    const nom = event.target.value// on recupere la valeur de l'input
    famille.membre1.nom= nom// on lui affecte le nom ecrit sur l'input
    this.setState({nom : famille})// et on change le state

  }

  handleDescription = ()=>{// ici on cree une fonction qui va gerer le bouton show
    const isShow= !this.state.isShow// on cree une variable qui aura une valeur differente du state au clic
    this.setState({isShow})// et on l'actualise
  }

  render(){
    const {famille, isShow} = this.state // on destructure les éléments du state
  return (
    
    <div className="App">
      <h2 className="text">Entraînement React</h2>
      <input type="text" value={famille.membre1.nom} onChange={this.handleChange} />
      <Membre 
      nom={famille.membre1.nom}
      age={famille.membre1.age}/>
      <Membre 
      nom={famille.membre2.nom}
      age={famille.membre2.age}/>
      <Membre 
      nom={famille.membre3.nom}
      age={famille.membre3.age}/>
      <Membre 
      nom={famille.membre4.nom}
      age={famille.membre4.age}>
        {isShow ? <strong>Je suis un gentil chien</strong> : null} 
        <button style={{backgroundColor: "blue", borderRadius: "40px", fontSize: "20px"}} 
        onClick={this.handleDescription} >{isShow ? 'Cacher' : 'Montrer'}</button>
      </Membre>
      <Button vieillir ={() =>this.handleClick(2)}/> 
    </div>
    
   
    
    );
  }
}

export default App;

// <Membre /> contient en son sein une pops children en plus d'être une props elle même.

// le button vieillir a une fonction fléché car il a un paramétre sinon il executera une boucle infini