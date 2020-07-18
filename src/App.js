import React from "react";
import "./App.css";
import ActualSize from "./sizes";
import Item from "./items";
import Pix1 from "./images/img1.jpg";
import Pix2 from "./images/img2.jpg";
import Pix3 from "./images/img3.jpg";
import Pix4 from "./images/img4.jpg";
import Pix5 from "./images/img5.jpg";
import Pix6 from "./images/img6.jpg";
import Pix7 from "./images/img7.jpg";
import Pix8 from "./images/img8.jpg";
import Pix9 from "./images/img9.jpg";
import Pix10 from "./images/img10.jpg";
import Pix11 from "./images/img11.jpg";
import Pix12 from "./images/img12.jpg";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* left section begins from here*/}

        	<div className="col-2">
            <h4 style={{ marginTop: "2vh" }}>Sizes:</h4>
            <div className="row" style={{ marginBottom: "2vh" }}>
              <div className="col-3">
                <ActualSize name="XS" />
              </div>
              <div className="col-3">
                <ActualSize name="S" />
              </div>
              <div className="col-3">
                <ActualSize name="M" />
              </div>
              <div className="col-3">
                <ActualSize name="ML" />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <ActualSize name="L" />
              </div>
              <div className="col-3">
                <ActualSize name="XL" />
              </div>
              <div className="col-3">
                <ActualSize name="XX" />
              </div>
            </div>

            <p style={{ marginTop: "2vh" }}>
              Leave a star on Github if this repository was useful :)
            </p>

            <div style={{ display: "flex" }}>
              <button
                style={{
                  fontWeight: "bold",
                  marginRight: "0.5vw",
                  border: "none",
                  borderRadius: "10%",
                  backgroundColor: "#ccd1d9",
                }}
              >
                *Star
              </button>
              <button
                style={{
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "10%",
                  backgroundColor: "#ccd1d9",
                }}
              >
                848
              </button>
            </div>
          </div>

          {/* right section begins from here*/}

          <div className="col-10">
            <div className="row">
              <div className="col-6">
                <h6 style={{ marginTop: "2vh" }}>16 Products found</h6>
              </div>
              <div className="col-6">
                <div style={{ float: "right" }}>
                  <div
                    style={{
                      display: "flex",
					  float: "right",
					  marginTop: '1vh'
                    }}
                  >
                    <h6>Order by</h6>
                    <select>
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <Item pix={Pix1} />
              </div>
              <div className="col-3">
                <Item pix={Pix2} />
              </div>
              <div className="col-3">
                <Item pix={Pix3} />
              </div>
              <div className="col-3">
                <Item pix={Pix4} />
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <Item pix={Pix5} />
              </div>
              <div className="col-3">
                <Item pix={Pix6} />
              </div>
              <div className="col-3">
                <Item pix={Pix7} />
              </div>
              <div className="col-3">
                <Item pix={Pix12} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <Item pix={Pix8} />
              </div>
              <div className="col-3">
                <Item pix={Pix9} />
              </div>
              <div className="col-3">
                <Item pix={Pix10} />
              </div>
              <div className="col-3">
                <Item pix={Pix11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
