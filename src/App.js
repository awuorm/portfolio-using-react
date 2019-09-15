import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/PersonalProfile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile/>
      <Footer />
    </div>
  );
}

export default App;
