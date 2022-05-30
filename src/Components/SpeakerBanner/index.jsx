import React, { Component } from "react";
import "./style.css";

export default class SpeakerBanner extends Component {
  render() {
    return (
      <>
        <section className="speaker-sec">
          <div className="content">
            <h2 className="sec-title">ZX7 Speaker</h2>
            <button className="btn see-btn">See Product</button>
          </div>
        </section>
      </>
    );
  }
}
