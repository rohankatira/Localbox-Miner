import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Herosection from "./components/Herosection";
import Reviews from "./components/Reviews";

const App = () => {

  return(
    <>
    <Herosection />
    <Reviews />
    </>
  )

};

export default App;