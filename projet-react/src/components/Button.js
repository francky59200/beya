import React from 'react'

const Button=({vieillir})=>{// recupération de la methode vieillir de l'app parent
    return (
        <button onClick = {vieillir}>Vieillir de 2 ans</button>
    )
}

export default Button