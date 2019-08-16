import React, {useState} from 'react';

const Form =(props)=>{

    const [nouveauClient, setNouveauClient] =useState("");


    const handleSubmit =(event)=>{
        event.preventDefault();
        
        
        const nom= nouveauClient;
        
        props.onClientAdd([nom]);

        setNouveauClient("");
      
      }
      
      const handleChange =(event) =>{
        event.preventDefault();
        setNouveauClient(event.currentTarget.value);
      }
      
    return (
        <form
        onSubmit={handleSubmit}>
            <input
            value={nouveauClient} 
            type="text" placeholder="nouveau client"
            onChange={handleChange}
            />
          <button className="btn btn-primary">Ajouter</button>
      </form>
      
    )
    
}

export default Form;
