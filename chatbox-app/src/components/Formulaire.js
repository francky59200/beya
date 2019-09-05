import React, { Component } from 'react'

class Formulaire extends Component {

    state={
        messsage:'',
        length:this.props.length // ici on reprends la props de la longeur de l'app parent
    }

    createMessage = () =>{ 
        const {addMessage, pseudo, length}=this.props // on destructure les props envoyé par le parent

        const message ={ // on creer une constante qui permettra d'afficher les elements du message
            pseudo, // le pseudo qui est la props envoyé pas l'App
            message: this.state.message // et le state du message
        }
        addMessage(message) // la props addMessage reçoit le message du state en paramétre

        this.setState({message:'', length}) // on vide le message et on actulalise la longeur du message
    }

    handleSubmit = e =>{ // cette methode permet la soumission du formulaire
        e.preventDefault() // on evite le chargement de la page
       this.createMessage()// et on envoie le message creer
    }

    handleChange = (e)=>{ // cette methode permet de changer l'etat du message et du nbres de caractéres
        let message = { ...this.state.message} // une copie du tableau
        message = e.target.value// on recupere la value de l'input enfin de la  modifier
        const length =this.props.length - message.length// on décremente le nombre de caractéres autorisés pour écrire
        this.setState({message, length}) // et on actualise le state
    }

    handleKeyUp = e => { // cette methode permet d'utuliser la touche entrée du clavier pour envoyer le message
        if(e.key === 'Enter'){ // si la clé est entrée alors on envoie le message
            this.createMessage()
        }
    }


    render () {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                value={this.state.message}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                required maxLength={this.props.length}/>
                <div className="info" >
                    {this.state.length}
                </div>
                <button type='submit'>Envoyer</button>

            </form>
        )
    }
}

export default Formulaire