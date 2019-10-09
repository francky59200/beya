import React, { Component } from 'react'
import './App.css'

class App extends Component {


// on met en place le state 
  state= {
    value:'', //la value
    readOnly:false // on met en place le readOnly en false pour qu'il soit editable au chargement de la page
  }

  // on met en pplace la methode handleChange pour le submit du form
  handleChange=(e)=>{
    e.preventDefault() // on evite le rechargement de la page
    this.setState({value: e.currentTarget.value})// on met a jour le state avec la nouvelle valeur du composant controllé
  }
 // on met en place la methode handleAdd  pour ajouter la nouvelle valeur au value de l'input
  handleAdd=(e)=>{
    e.preventDefault() // on evite le rechargement de la page 
    let value= [ ...this.state.value] // on fait une copie de l'input
    value.push(this.state.value) // et on lui ajoute la nouvelle valeur a l'input 

    }

    handleClick=()=>{
      // pour mettre en place le state avec la valeur editable on utulise le prevState
      //pour recuperer obligatoirement le dernier state pour la mise a jour de l'input
      this.setState(prevState => ({readOnly: !prevState.readOnly}))
    }

    
    

  render () {
    
    return (
      <div className="formulaire">
        <form onSubmit={this.handleAdd} style={{background:"rgb(193, 193, 193)"}}>
          <label>
            <p>Name:</p>
            {/* on applique a l'input le readOnly pour l'edition et on recupere la valu*/}
            <input readOnly={this.state.readOnly} value={this.state.value} onChange={this.handleChange}/>
          </label>
          {
            // et on met en place une condition pour l'affichage du bouton lors du clic sur l'input
            this.state.value !== "" && ( <button onClick={this.handleClick}>Changer</button> )
            // this.state.value !== "" ? (<button>Add</button>) : null
            //if(this.state.value !== "") { button = <button>Add</button> }
             
            }
        </form>
        
      </div>
    )
  }
}

export default App

/**************************Difference entre le setState et le prevState******************** */

// lors d'un setState le dernier rendu est toujours  mise a jour et remplacera obligatoirement la derniere mise a jour
// alors que avec le prevState 