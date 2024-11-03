import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/global.css";


function App() {
  return (
    <div className="font-sans text-gray-800">
      <nav className="flex justify-center gap-6 bg-blue-600 text-white py-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
