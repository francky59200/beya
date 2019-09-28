import React from 'react';
import './App.css';

const side = {
  "children": [
    {
      "children": [
        {
          "id": "b123a",
          "name": "compo"
        },
        {
          "id": "5a523",
          "name": "orient"
        },
        {
          "id": "42e7e",
          "name": "build"
        }
      ],
      "id": "f9ca7",
      "name": "building"
    },
    {
      "children": [
        {
          "id": "dbd4",
          "name": "insula"
        },
        {
          "id": "ad8404",
          "name": "fenest"
        },
        {
          "id": "e3837",
          "name": "window"
        }
      ],
      "id": "af776",
      "name": "envelope"
    },
    {
      "children": [
        {
          "id": "ba515",
          "name": "heating"
        },
        {
          "id": "6618",
          "name": "cooling"
        },
        {
          "id": "4a0547b8f",
          "name": "water_heating_system"
        }
      ],
      "id": "3e967",
      "name": "systems"
    },
    {
      "id": "e7c6e",
      "name": "spatial"
    },
    {
      "id": "9f641",
      "name": "design"
    }
  ],
  "name": "root"
}

// Rendu recursif de donnée json 


const SideMenu = ({data}) => {
 
  return (
    <ul>
      {
      Array.isArray(data)? data.map(item => { // on vérifie si c'est un tableau de donnée si c'est le cas on fait une boucle
        return (<li> {/* on recupére les name children parent*/}
          {item.name}
          {item.children && <SideMenu data={item.children} />}
        </li>);
      }): <li>
          {data.name} {/*on recupére les name parents*/}
          {data.children && <SideMenu data={data.children} />}
        </li>
      }
    </ul>
  );
}

function App() {
  return (
   <SideMenu data={side}/>
  )
}
 
export default App