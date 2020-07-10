import React from 'react';
import './App.css';
import ActualSize from './sizes';
import Item from './items';
import Pix1 from './images/img1.jpg';
import Pix2 from './images/img2.jpg';
import Pix3 from './images/img3.jpg';
import Pix4 from './images/img4.jpg';
import Pix5 from './images/img5.jpg';
import Pix6 from './images/img6.jpg';
import Pix7 from './images/img7.jpg';
import Pix8 from './images/img8.jpg';
import Pix9 from './images/img9.jpg';
import Pix10 from './images/img10.jpg';
import Pix11 from './images/img11.jpg';
import Pix12 from './images/img12.jpg';


function App() {
	return (
		<div>
			<div className='container'>
				<div className='row'>

					{/* left section begins from here*/}

					<div className='col-2'>
						<h4 style={{ marginTop: '2vh' }}>Sizes:</h4>
						<div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '2vh', marginLeft: '-0.3vw', marginTop: '3vh'}}>
							<ActualSize name='XS' />
							<ActualSize name='S' />
							<ActualSize name='M' />
							<ActualSize name='ML' />
						</div>
						<div style={{display: 'flex', justifyContent: 'space-evenly', marginLeft: '-1.2vw'}}>
							<ActualSize name='L' />
							<ActualSize name='XL' />
							<ActualSize name='XX' />
						</div>

						<p style={{marginTop: '2vh'}}>Leave a star on Github if this repository was useful :)</p>

						<div style={{display: 'flex'}}>
							<button style={{fontWeight: 'bold', marginRight: '0.5vw', border: 'none', borderRadius: '10%', backgroundColor: '#ccd1d9'}}>*Star</button>
							<button style={{fontWeight: 'bold',border: 'none', borderRadius: '10%', backgroundColor: '#ccd1d9'}}>848</button>
						</div>
						
					</div>


					{/* right section begins from here*/}

					<div className='col-10'>
						<h6 style={{ marginTop: '2vh' }}>16 Products found</h6>
						<div style={{ display: 'flex', float: 'right', marginTop: '-4vh' }}>
							<h6>Order by</h6>
							<select>
								<option></option>
								<option></option>
								<option></option>
								<option></option>
								<option></option>
							</select>

						</div>
						<div className='row'>
							<div className='col-3'>
								<Item pix={Pix1}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix2}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix3}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix4}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix5}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix6}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix7}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix12}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix8}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix9}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix10}/>
							</div>
							<div className='col-3'>
								<Item pix={Pix11}/>
							</div>
						</div>


					</div>

				</div>

			</div>
		</div>
	);
}

export default App;

