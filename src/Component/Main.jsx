import React from "react";
import Homedata from "./Home";
import Aboutdata from "./About";
import Trainersdata from "./Trainers";
import Coursesdata from "./Courses";
import Contactdata from "./Contact";
import Footer from "./Footer";

const Main = ({ selectedOption }) => {
  return (
    <div>
      <main className="main-container">
        {selectedOption === "Home" && <Homedata />}
        {selectedOption === "About" && <Aboutdata />}
        {selectedOption === "Trainers" && <Trainersdata />}
        {selectedOption === "Courses" && <Coursesdata />}
        {selectedOption === "Contact" && <Contactdata />}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
