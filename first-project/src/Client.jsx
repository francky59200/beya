import React, {Component} from "react";


class Client extends Component {
    
    render(){
        // const details= this.props.details
        //const onDelete= this.props.onDelete
        const {details, onDelete}= this.props;// ici on a déstructurer les props
       return  <li>
       {details.nom}<button onClick={()=> onDelete(details.id)}>x</button>
       </li>
    }
}

export default Client;

/*---------------decoupage----------------
on a decouper notre composant principal et creer un sous composant
en utulisant les props pour appeler les methodes de la composante principale

pour acceder aux props on utulise le <<this.props>>

---------------les composants fonctionnels------------

un composant fonctionnel c'est un composant qui n'a pas besoin de state il se
suffise des informations qu'on leur donne au debut exemple ici afficher
les données d'un tableau a partir des donnes déclaré dans le composant.
 ça donne ceci

 function Client(props){
     const= {details, onDelete}=props;
    return  <li>
       {details.nom}<button onClick={()=> onDelete(details.id)}>x</button>
       </li>
 }*/