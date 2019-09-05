import React from 'react'

const Message = ({pseudo, message})=> { // recuperation des props
    return (
        <p className="user-message">
            {message}
        </p>
    )
}

export default Message
