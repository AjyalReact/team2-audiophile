import React from "react";
import './navAhero.css';
import '../../index.css'

export default class NavHero extends React.Component {
  render() {
    return (
        <div className="Nav-container">
          <div className="Nav-div container">
            <p className="Nav-Title">Audiophile</p>
            <ul className="Nav-uL">
              <li>HOME</li>
              <li>HEADPHONES</li>
              <li>SPEAKERS</li>
              <li>EARPHONES</li>
            </ul>
          </div>
          {/* <hr></hr> */}

          <div className="Home container">
            <div className="Home-div">
              <h4>NEW PRODUCT</h4>
              <h1>X99 MARK II HEADPHONES</h1>
              <p>
                X99 MARK II HEADPHONESX99 MARK II HEADPHONESX99 MARK II
                HEADPHONESX99 MARK II HEADPHONES
              </p>
              <button>SEE PRODUCT</button>
            </div>
          </div>
        </div>
    );
  }
}
