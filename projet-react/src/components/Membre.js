import React, {Fragment} from 'react'

const Membre =({nom, children, age}) =>{// ici on a directement intégrer le nom de la props dans le parametre de la fonction
    const name = nom // recupération d'une props
  return (
        <Fragment>
            <h2 style={{
            backgroundColor : age < 10 ? 'blue' : 'yellow', // style css inline avec condition ternaire
            color : age < 10 ? "white" : "black"}} >{name.toUpperCase()} : {age}</h2>
            <p>{children}</p>
        </Fragment>
    )
}
export default Membre

// la props children permet de rajouter des elements a une props et l'ajouter avec la balise couvrante <Fragment>

// <Fragment> est une balise couvrante qui permet de gerer plusieurs éléments en dehors d'une div