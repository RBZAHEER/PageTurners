import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Signup";
function Signupp() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Signup />
      </div>
      <Footer />
    </>
  );
}

export default Signupp;
