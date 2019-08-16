import React, {useState} from 'react'

const Counter = (props) =>{ // composant fonctionnel dans une constante.

    const [compteur, setCompeur] = useState(1); // Destructuration des deux const dans le usestate

    const handleCount= () =>{
        setCompeur(compteur+1);
    }

    return (
        <div>
            {compteur}<button onClick={handleCount}>incrémenter</button>
        </div>
    )
}

export default Counter;

// useState est l'un des hook de react qui permet d'utuliser un state dans des composants fonctionnels
// elle est composé d'un tableau composé de deux valeur tab[0] qui est la valeur de depart du state et tab[1] qui est la valeur du rendu du state