import React, { Component } from "react";
import "./index.css";
import Footer from "./Components/aliComponent/Footer";
import CardBox from "./Components/MonaComponent/CardBox";
import NavHero from "./Components/TaherComponent/NavHero";
import SpeakerBanner from "./Components/SpeakerBanner";
import Earphones from "./Components/Earphones";
class App extends Component {
  render() {
    return (
      <>
        <NavHero />
        <div className="container">
          <CardBox />
          <SpeakerBanner />
          <Earphones />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
