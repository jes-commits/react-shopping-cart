import React from 'react'

function ActualSize({name}){
    return(
        <div style={{height: '5vh', width: '2.5vw', backgroundColor: '#ccd1d9', borderRadius: '50%'}}>
            <h4 style={{textAlign: 'center'}}>{name}</h4>
        </div>
    )
}

export default ActualSize;