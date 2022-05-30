import React, { Component } from "react";
import "./index.css";
import Footer from "./Components/aliComponent/Footer";
import CardBox from "./Components/MonaComponent/CardBox";
import NavHero from "./Components/TaherComponent/NavHero";
import SpeakerBanner from "./Components/SpeakerBanner";
class App extends Component {
  render() {
    return (
      <>
        <NavHero />
        <div className="container">
          <CardBox />
          <SpeakerBanner />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
