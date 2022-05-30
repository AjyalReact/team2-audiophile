import React, { Component } from 'react';
import Card from './Components/MonaComponent/CardBox';
import './index.css'
import Footer from './Components/aliComponent/Footer';
class App extends Component {
  render() {
    return (
     <div className="container">
      <Card/>
       <Footer/>
      </div>
    );
  }
}

export default App;
