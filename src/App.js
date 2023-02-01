import React from "react";
import "./styles/app.scss";

//Adding pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//Router
import { Route, Routes } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
