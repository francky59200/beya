import React, {Component} from 'react';
import {sampleText} from './sampleText'// on importe notre sample text
import marked from 'marked'// on importe marked qu'on a installé qui nous permettra de traduire 
import './App.css';

class App extends Component {

  state={
    text: sampleText
  }
  
// pour faire une sauvegarde de notre application on va utuliser les cycles de vie de react ces cycles sont effectifs seulement dans une class react

  componentDidMount(){ // le composant lorsque application est monté
    console.log('je suis monté')
    const text=localStorage.getItem('text') // on recupére les données sauveagardé
    if (text){ // on met une condition s'il ya du text dans l'input
      this.setState({text}) // alors a l'actualisation on affiche ce texte sauvegardé 
    }
    else{
      this.setState({text: sampleText})// sinon on remet le text de sampleText
    }
  }

  componentDidUpdate(){// le composant lorsque l'application est mise a jour
    const {text} =this.state // on recupére le state 
    localStorage.setItem('text', text)// et on le sauvegarde
  }


  handleChange= e =>{ // comme dab cette fonction permet de changer le contenu de linput
    let text= { ...this.state.text}// on destructure le slice (copie du text)
    text=e.target.value// on recupére la value pour le changement dans l'input
    this.setState({text})// et on actualise le state

  }

  renderText =text=> marked(text, {sanitize: true}) // ici cette fonction permet d'affecte la traduction en utulisant le sanitize au text
  

  render(){
    return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea
          onChange={this.handleChange} 
          value={this.state.text} 
          className="form-control" rows="30"/>
        </div>
        <div className="col-sm-6">
          <h1>Résultat</h1>
         <div dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text)}}></div> 
        </div>
      </div>
    </div>
    );
  }
}

export default App;
