import React from 'react'

const Affichage = ({nom, prenom, age})=>{
    return (
        <div>
            <p>{nom}</p>
            <p>{prenom}</p>
            <p>{age}</p>
        </div>
    )
}

export default Affichage

