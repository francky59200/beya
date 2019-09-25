import React from 'react'



const PostData =({data})=>{
    return(
        <div>
            <ul>
                {data.map(item => {
                    return <div>
                    <li key={item.id}>
                    {item.name}
                    </li>

                    </div>
                    
                })}
                
            </ul>
        </div>
    )
}


export default PostData


