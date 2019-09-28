import React from 'react';
import './App.css';


const DATA= require('./data.json')


// Rendu recursif de donnée json 


const MyComponent  = ({collection}) => (
    Array.isArray(collection) ? <ul>
        {collection.map((item, index) => (
            item && item.children && Array.isArray(item.children) ?
                (
                    <li key={index}>
                        {item.name}
                        {<MyComponent collection={item.children} />}
                    </li>
                ) : <li key={index}> {item && item.name} </li>
        ))}
    </ul> : null
)

class App extends React.Component {
   render() {
       return (
           <MyComponent collection={DATA} />
       )
   }
}

 
export default App