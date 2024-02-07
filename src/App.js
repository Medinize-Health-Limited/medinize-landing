import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import About from "./screens/about/About";
import Services from "./screens/services/Service";
import Communities from "./screens/communities/Communities";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import Faq from "./screens/faq/Faq.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/communities" element={<Communities />}/>
            <Route path="/faq" element={<Faq />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
