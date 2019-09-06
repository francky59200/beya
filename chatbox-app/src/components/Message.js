import React from 'react'

const Message = ({pseudo, message, isUser})=> { // recuperation des props
    
// ici on fait une condition pour differencier les differents utulisateurs

    if(isUser(pseudo)){
        return (
            <p className="user-message">
                {message}
            </p>
        )
    }
    else {
        return (
            <p className="not-user-message">
                <strong>{pseudo} :</strong>{message}
            </p>
        )
    }
    
}

export default Message
