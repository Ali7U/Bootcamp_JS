import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Card from "./components/Card";
import image from './assets/iphone.jpg'
import iphone from './assets/img.jpg'

function App() {

  return (
    <div className="App">
      <Nav />
      <Card image={image} title={"iPhone 14"} price={4000} />
      <Card image={iphone} title={"iPhone 13"} price={3000} />
      <Footer />
    </div>
  );
}

export default App;
