import React, {Component} from 'react'
import '../containers/App.css'

class SearchBar extends Component {

    state={
        searchText:"",
        placeHolder:"Tapez votre film...",
        intervalBeforeRequest:1000, // intervall ppour soumettre la requête
        lockRequest: false //verrouillage lors de la soumission de la requête par defaut deverouiller poor la saisie
    }

    /*****barre de recherche façon google et au click************* */

    handleChange =(e)=>{
        this.setState({searchText:e.currentTarget.value})// on met a jour le state avec la nouvelle valeur e.current.target.value
        if(!this.state.lockRequest){ // si la requête est vrai
            this.setState({lockRequest:true})// on déverouille pour afficher le resultat
            setTimeout(()=>{this.search()}, this.state.intervalBeforeRequest)// et on applique un setTimeout le temps de la recherche
        }
    }
    handleClick=()=>{
      this.search()
    }

    search=()=>{
        this.props.callback(this.state.searchText)// ici on envoie le callback a App grace au props
        this.setState({lockRequest:false}) // et des que la requête est faites on déverouille 
    }


    render(){
        return(
            <div className="search">
                <input onChange={this.handleChange} placeholder={this.state.placeHolder}/>
                <button onClick={this.handleClick}><strong>Rechercher</strong></button>
            </div>
        )
    }
}
export default SearchBar