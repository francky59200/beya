/*--------------------ici on est dans lapp js-------*/

import React from 'react'; // comme l'index.js on importe la bibliothéque react, le logo et le css
import './App.css';
import Client from './Client';
import Form from './Form';

class App extends React.Component { // ici on cree une classe qui hérite les methodes de la class component dans react
  
 // clientInput = React.createRef()

  state= {
    clients: [
      {id: 1, nom: "eric moriati"},
      {id: 2, nom: "beya franck"},
      {id: 3, nom: "eric dupont"},
      {id: 4, nom: "noémie"}
    ],
    compteur:0,
    //nouveauClient:''
  }
  //---------- gerer un compteur en react-----------


  handleClick =() => { // avec cette fonction flèché on utulise le setState pour dire a react de rafraichir le rendu
   this.setState({ compteur: this.state.compteur +1});
    console.log(this.state);
  }
  //---------------ajout de données du state dans un formulaire----------
  
  

  handleClick1 =() => {
    const clients = this.state.clients.slice(); // ici on a fait une copie de notre tableau client c'est une obligation pour modifier
    clients.push({id: 4, nom: "Anne Dupont"}); // on a ajouté un nouveau client avec la methode push

    this.setState({clients: clients});// et enfin on a informer reast de modifier le rendu dans le jsx
  }



  //------------ajout de données un FORMULAIRE avec un input----------------



  /*handleSubmit = (event) =>{
    event.preventDefault()
    const id= new Date().getTime();
    const nom = this.state.nouveauClient;

    const client={id: id, nom: nom}; //simplificationcette variable const clients ={id, nom};

    const clients = this.state.clients.slice();//  simplification ici on va exploser notre tableau pour en faire une copie const cleints= [...this.state.clients];
    clients.push(client);// simplification on peut decouper ici clients.push({id, nom});

    this.setState({clients: clients, nouveauClient: ''}); // simplification on peut aussi decouper this.setState({clients: nouveauClient:''});
  }

  handleChange=(event) =>{
    const value = event.currentTarget.value;
   // console.log(event.currentTarget.value);
   this.setState({nouveauClient: value});// simplification on peut decouper this.setState({nouveauClient: event.currentTarget.value});
  }*/
  
  //--------Supprimer un élément du tableau---------

  handleDelete= id =>{
   const clients = this.state.clients.slice(); // on cree une copie du tableau avec slice() simplification const clients=[...this.state.clients];

   const index= clients.findIndex((client) => client.id === id); // ensuite on trouve la position de l'index a supprimer avec findIndex()

   clients.splice(index, 1); // ensuite on supprime l'id a partir de l'index et 1 element

   this.setState({clients: clients});// et enfin on demande le remplacement du tableau par notre tableau copié
  }
  
  handleAdd = client => {
    const clients =[...this.state.clients];
    clients.push(client);

    this.setState({clients});
  }


//------------------Le RENDER----------------

  render() { // la premiere choses c'est lui donner une méthode render pour rendu ce qui lui permettra d'afficher notre code sur le dom
   
  const title="liste des clients";// on a creer une variable qu'on a appliquer directement en dynamique c'est de l'interpolistaion jsx
  const element = <li>bastien<button>x</button></li>// indice 1
  const elements = [ // indice 2
    <li>premier element</li>,
    <li>deuxieme element</li>,
    <li>troisiéme element</li>
  ]
  /*const elemts= this.state.clients.map(function(client){ // ici on utulise la méthode map avec une function c'est moins utuisé indice 3
    return <li>{client.nom}<button>x</button></li>
  });*/
  //const elemts= this.state.clients.map((client)=> <li>{client.nom}<button onClick={()=> this.handleDelete(client.id)}>x</button></li>); ici on utulise la methode map() avec une fonction flèché
  // et on peut et c'est le plus souvengt utulisé l'intégrer directement dans le return dans le ul.

  return(
    <div className="container">
       <h1>{title}</h1>
       {this.state.compteur}
       <button onClick={this.handleClick}>Compteur</button>
       <button onClick= {this.handleClick1}>ajout client</button>
        <ul>
          {this.state.clients.map((client)=> 
          <Client details={client} onDelete={this.handleDelete}/>// ici on a creer des props (details et onDelete) pour les appeler dans la sous composante client
          )}
          {elements}
          {element}
        </ul>
        <Form onClientAdd={this.handleAdd}/>
    </div>
   );
  }
}

export default App;


/*-------2eme methode pour écrire une app react*/

/*function App(){
  return(
    <div>
        <h1>bienvenue dans react</h1>
        <h2>c'est un plaisir</h2>
    </div>
  );
}*/


/*--------------------------------------résumé et definitions des methodes basiques react---------------------

principes d'un composant react:

un composant react est composé de méthode qui peuvent être state(variable) comprenant des objets ou une fonction flèché.

pour déclarer des variables( const) on le fait directement dans le render pour utuliser ces variables dans le jsx pour le rendu:

class app extends React.component{
  méthodes {state, function (flèché)} (s'il y'en a)
  render (){
    variables (const s'il y'en a)
    return {
      rendu jsx a retourner(en html)
    }
  }
}

export default App; toujours exporter son app pour le rendu


// une app react doit retournée un rendu et on utulise classname pour ne pas confondre avec la classe du dom et a l'intérieur du return
// on crée une div car le rendu en react se fait que sur une seule balise donc si on a plusieurs éléments il faut utuliser une div
// et des que notre return est pret comme on a importer au debut a la fin on l'exporte pour pouvoir l'utliser dans notre index.js.

// interpolisation jsx elle permet d'afficher le contenu d'une variable ou d'une fonction dans la methode render.

// indice 1: une variable peut contenir un élément jsx(react) et peut être utulisé dans le rendu.

// indice 2: Une variable peut contenir un ensemble d'éléments jsx(react).

// indice 3: on peut transformer un tableau d'objets en un tableau d'éléments jsx

// la methode map() des objets jsx permet de creer un tableau contenant les éléments d'un autre tableau

//la plupart du temps on utulise map directement dans le return pour boucler un tableau donc pas besoin de creer une variable.

//on fait un map sur tableau directement au sein du jsx.

/*--------------les animations en react-----

les particularités react on utulise les mm évènements qu'en javascript mais écrit différemment.

pour l'animation onClick il faut faire attention avec le this car lorsque le "this" est appelé pour l'élémént handleClick
il a perdu sa valeur donc on ne peut plus reutuliser par esxemple on ne peut pas l'utuliser pour voir notre console log
donc pour l'attribuer la 1ere solution est d'utuliser la methode binding.

avec le binding on précise a une fonction quelle valeur utuliser ppour la variable this

la 2eme solution c'est d'utuliser une fonction flêché car elle permet de conserver le même this
dans le return <button onClick={() => this.handleClick()}>clik me</button>
car il faut bien comprendre que le this cest le this de l'app jsx et lorsqu'on l'utulise
dans la fonction handleClick on lui dit que et ça grace a la methode bind vu dessus, on
lui dit this tu es le mm this que l'on utulise dans l'app.

------------changement du state----------

il faut noter que react ne surveille pas tous les variables de notre tableau d'objet  ici state donc
il faut utuliser une méthode qui permet de prevenir react qu'il faut modifier le rendu cest setState() il
permet de modifier l'etat du composant et d'en informer react pour modifier le rendu

Anoter une fonction qui est lié a un evenement reçoit en parametres un évenement

pour le delete on cree une fonction fléche vide et le corps de cette fonction fléchè c'est l'appel a
handleDelete ayant en parametre client.id

En react on ne travaille jamais en direct sur les données de l'état toujours utuliser
une copie grace a la methode slice() et apres utuliser un setState pour le rendu

findIndex() cette methode permet de trouver la position d'un élément particulier
dans le tableau.

slice () permet de faire une capture de notre tableau pour faire une copie car on ne
travaille hjamais directement sur le state 

setState() permet de faire le rendu sur react avec les nouvelles valeurs

il faut noter que toutes les fonctions creer dans le app avant le render sont des methodes et les variables declarés sont des props
tous ces éléments sont utulisées dans le renders.

---------les decoupages----------

on peut decouper un composant react en plusieurs sous-composant pour allerger la structure
de ce fait on fait appel a des propriétés (props) pour appeler les methodes
dans la sous composante

<Form/> et <Client/> sont des sous composants qu'on appele dans App.

*/





