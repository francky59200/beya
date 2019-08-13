import React, {Component} from "react";

class Form extends Component{

    state={
        nouveauClient:""
    }

      handleSubmit = (event) =>{
        event.preventDefault()
        const id= new Date().getTime();
        const nom = this.state.nouveauClient;
    
        this.props.onClientAdd({id, nom});

        this.setState({nouveauClient:""});
        
        
      }
    
      handleChange=(event) =>{
        const value = event.currentTarget.value;
       // console.log(event.currentTarget.value);
       this.setState({nouveauClient: value});// simplification on peut decouper this.setState({nouveauClient: event.currentTarget.value});
      }
    render(){
        return <form onSubmit={this.handleSubmit}>
        <input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client"/>
        <button>Confirmer</button>
      </form>
    }
}

export default Form;