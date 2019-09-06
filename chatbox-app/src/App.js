import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css'

//Firebase

import base from './base'

class App extends Component {
  
  state={
    messages:{},
    pseudo: this.props.match.params.pseudo // cette valeur a été trouvé grace a addon ract  dans la console
  }

  messageRef = createRef() // on cree la ref car on veut eviter le scroll lors d'un nouveau message

  componentDidMount () {
    base.syncState('/', { // ici on synchronise notre state avec firebase a la racine '/'
      context: this, // et en option le contexte qui est le this,
      state: 'messages' // et en deuxiéme paramètre c'est quel state je veux ici c'est message que je veux stocker
    })
  }

  componentDidUpdate () { // le scroll s'utulise lors du cycle mise a jour de l'application
    const ref= this.messageRef.current // on recupére le current des messages
    ref.scrollTop = ref.scrollHeight // et on applique une comparaison pour que le scroll reste toujours en bas
  }
  
  addMessage= message =>{ // on creer une methode pour l'ajout des messages
    const messages= { ...this.state.messages} // une copie du tableau
    messages[`message-${Date.now()}`]= message // un timeStamp pour une clé unique de chaque message

    // faire la limite de message a 8 affiché
    Object
      .keys(messages) // on prend la clé qui est message
      .slice(0, -8) // on le limite a 8 messages a afficher sinon on lui donne null
      .forEach(key => { // on fait une boucle forEach avec la clé message
        messages[key] = null // et la clé du message a supprimer passera a null pour le supprimer a firebase
      })
    this.setState({messages})// et on modifie le state
  }

  render () {
  // on creer une constante avec la clé objet de notre state on lui fait une boucle de cette clé
  //en reprenant la clé du message et du pseudo mise a jour dans le state
    const messages = Object.keys(this.state.messages) 
                     .map(key => (<Message
                      Key={key}
                      message={this.state.messages[key].message}
                      pseudo={this.state.messages[key].pseudo} />))
    console.log(messages)
    return (
      <div className='box'>
        <div>
          <div className='message'ref={this.messageRef}>
            {messages}
          </div>
        </div>
        <Formulaire
        length={150}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
