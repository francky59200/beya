import React, { Component } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css'

class App extends Component {
  
  state={
    messages:{},
    pseudo: this.props.match.params.pseudo // cette valeur a été trouvé grace a react router sans la console
  }
  
  addMessage= message =>{ // on creer une methode pour l'ajout des messages
    const messages= { ...this.state.messages} // une copie du tableau
    messages[`message-${Date.now()}`]= message // un timeStamp pour une clé unique de chaque message
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
          <div className='message'>
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
