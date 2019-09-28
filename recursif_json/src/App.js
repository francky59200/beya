import React from 'react';
import './App.css';


const DATA= require('./data.json')


// Rendu recursif de données imbriquées json


const MyComponent  = ({collection}) => (
     //je verifie que ma props collection est un tableau
    Array.isArray(collection) ? <ul> {/*si c'est un tableau je fais une boucle map() pour faire le rendu li*/}
        {collection.map((item, index) => (
            item && item.children && Array.isArray(item.children) ?//  je verifie alors item et l'enfant de l'item et que cette enfant est bien un tableau
                ( // si cette verification est vrai alors je retourne :
                    <li key={index}> {/* la clé*/}
                        {item.name}  {/* le nom de l'item*/}
                        {<MyComponent collection={item.children} />} {/* et j'appelle une fois mon composant  pour recuperer les items enfants*/}
                    </li>
                ) : <li key={index}> {item && item.name} </li> // et si c'est faux je retourne que le nom de l'item sans les enfants
        ))}
    </ul> : null // et si Array.isArray(collection) est faux alors il retourne null
)

class App extends React.Component {
   render() {
       return (
           <MyComponent collection={DATA} />
       )
   }
}

 
export default App