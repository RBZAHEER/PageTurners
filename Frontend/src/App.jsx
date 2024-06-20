import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Route, Router, Routes } from "react-router-dom";
// import Signup from "./components/Signup";
import Contactsus from "./contact/Contactsus";
import Aboutus from "./about/Aboutus";
import Signupp from "./signup/Signupp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signupp />} />
        <Route path="/contact" element={<Contactsus />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
