import React from 'react';

function Item({ pix }) {
    return (
        <div className='container'>
            <div className='row'>
                <div class="card" style={{ width: '35', marginBottom: '1.5vh', height: '75vh' }}>
                    <h6 style={{color: 'white', backgroundColor: 'black', height: '3vh', width: '8vw', textAlign: 'center',marginLeft: '7.5vw'}}>Free Shipping</h6>
                    <img src={pix} className="card-img-tops" alt='shirt one' />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: 'center'}}>Designer Wear</h5>
                        <hr style={{ width: '5vw', height: '5px', backgroundColor: 'yellow', textAlign: 'center' }} />
                        <p style={{ textAlign: 'center'}}>$<span style={{ fontWeight: 'bold', fontSize: '26px' }}>10</span>.90</p>
                        <p style={{ textAlign: 'center'}}>or 9*$1.21</p>
                        <button style={{ border: 'none', marginBottom: '5vh', backgroundColor: 'black', color: 'white', textAlign: 'center', width: '12.5vw', height: '5vh', borderRadius: '5px' }}>Add to cart</button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Item;

