import React from 'react'
import MOCK_DATA from '../models/api'

const ListItems =()=>{
    return (
        <div>
            <ul>
                {MOCK_DATA.map(item =>{
                   return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )

}

export default ListItems

