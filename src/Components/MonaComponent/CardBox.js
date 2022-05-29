import React from "react";
import headPhone from "../../Images/headphon.png";
import speaker from "../../Images/speaker.png";
import speaker1 from "../../Images/speaker1.png";
import "../../index.css";
import "../../media.css";

export default class Card extends React.Component {
  render() {
    return (
      <>
        <div className="container-card">
          <div className="card">
            <div className="cont-img">
              <img src={headPhone} alt="headPhone" />
            </div>
            <div className="inner-box-card">
              <h2>headphones</h2>
              <p>shop</p>
            </div>
          </div>
          <div className="card">
            <div className="cont-img">
              <img src={speaker1} alt="headPhone" />
            </div>
            <div className="inner-box-card">
              <h2>speakers</h2>
              <p>shop</p>
            </div>
          </div>
          <div className="card">
            <div className="cont-img">
              <img src={speaker} alt="headPhone" />
            </div>
            <div className="inner-box-card">
              <h2>earphones</h2>
              <p>shop</p>
            </div>
          </div>
        </div>
        <div className="container-box">
          <div className="left-box"><img src={speaker1} alt="speaker" /></div>
          <div className="right-box">
            <h2>
              zx9<br/> speaker
            </h2>
            <p>Upgrade to premium speakers that are <br/>phenomenally built to deliver truly remarkable  <br/> sound </p>
            <div><button className="btn-see">see product</button></div>
          </div>
        </div>
      </>
    );
  }
}
