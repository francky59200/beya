import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

  state= {
    pseudo:'',//
    goToChat: false
  }

  handleChange = (e)=>{ // on cree une methode qui changera le contenu de l'input
    let pseudo= { ...this.state.pseudo}// on fait une copie du state
    pseudo = e.target.value// on recupère la value de l'input
    this.setState({pseudo})// on met a jour le state
  }

   handleSubmit = e =>{// on cree une methode pour la soumission du formulaire
     e.preventDefault()// on évite le chargement de la page
     this.setState({goToChat:true}) // on met la valeur du goToChat a true
   }
  render () {
    if(this.state.goToChat) {// le state gotochat est true
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect> // alors on redirige la page au pseudo
    }


    return (
      <div className="connexionBox">
        <form className="connexion" onSubmit={this.handleSubmit}> {/* on applique la methode submit au formulaire*/}
           <input value={this.state.pseudo} 
           onChange={this.handleChange} 
           placeholder='Pseudo' 
           type='text' required />
           <button type="submit">GO</button>
        </form>
      </div>
    )
  }
}
export default Connexion
  