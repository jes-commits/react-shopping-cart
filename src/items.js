import React from 'react';

function Item({pix}) {
    return(
        <div>
            <h6 style={{color: 'white', backgroundColor: 'black', textAlign: 'center', float: 'right', marginRight: '-3vw',height: '3vh'}}>Free Shipping</h6>
            <img src={pix} alt='shirt one'/>
            <h6 style={{fontWeight: 'bold', textAlign: 'center', marginTop: '1vh', marginLeft: '4vw'}}>Designer Wear</h6>
            <hr style={{width: '5vw', height: '5px', backgroundColor: 'yellow', textAlign: 'center', marginLeft: '6vw'}} />
            <p style={{textAlign: 'center', marginLeft: '4vw'}}>$<span style={{fontWeight: 'bold', fontSize: '26px'}}>10</span>.90</p>
            <p style={{textAlign: 'center', marginLeft: '4vw'}}>or 9*$1.21</p>
            <button style={{border: 'none', marginBottom: '5vh',marginLeft: '2vw', backgroundColor:'black', color:'white', textAlign: 'center', width:'13vw', height: '5vh', borderRadius: '5px'}}>Add to cart</button>
        </div>
    )
}

export default Item;