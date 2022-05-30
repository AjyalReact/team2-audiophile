import React, { Component } from "react";
import "./style.css";
import EearphoneImage from "../../Images/earphones.jpg";

export default class Earphones extends Component {
  render() {
    return (
      <>
        <section className="earpones-sec">
          <div className="image-div">
            <img src={EearphoneImage} alt="Earpohones" />
          </div>
          <div className="content-div">
            <div className="content">
              <h3 className="sec-title">YX1 WIRELESS EARPHONES</h3>
              <button className="btn see-btn">See Product</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
