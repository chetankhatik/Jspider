/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "./Home.css";
import TypingMessage from "./Type";

const Homedata = () => {
  const data = [
    {
      heading: "No 1",
      description: "Training Center in the World and also the Largest.",
    },
    {
      heading: "2.51 Lakhs",
      description: "Students have been Placed, and still counting!",
    },
    {
      heading: "4180+",
      description:
        "Multinational companies hire from us, and the list is still growing.",
    },
    {
      heading: "19+",
      description: "Companies conduct interviews every working day.",
    },
    {
      heading: "3600-4000",
      description: "Students get placed in a Month across the Globe.",
    },
  ];
  return (
    <div>
      <header>
        <img className="qjlogo" src="./QJ.png" alt="" />
        <marquee behavior="scroll" direction="right">
          Call:+91 9686800700 &nbsp;&nbsp;&nbsp; Call:+91 8951965839
          &nbsp;&nbsp;&nbsp; Email:enquiry@jspiders.com &nbsp;&nbsp;&nbsp;
          Email:enquiry@qspiders.com &nbsp;&nbsp;&nbsp;Join Us.....!!
        </marquee>
      </header>

      <main className="home-main">
        <div className="data-list">
          {data.map((text, index) => (
            <div key={index} className="item-list">
              <h1>⭐ {text.heading} ⭐</h1>
              <p>{text.description}</p>
            </div>
          ))}
        </div>

        <div className="prompt">
          <h3>LARGEST SOFTWARE TRAINING ORGANISATION</h3>
          <h6>
            JSpiders is the world’s ace software course training organization
            with an aim to bridge the gap between the demands of the industry
            and the curriculum of educational institutions. With centers across
            the Globe, the institute is a platform where young minds are given
            the opportunity to build successful careers. ”JSpiders is a place
            where businesses find talent and dreams take flight."
            <br />
            <br />
            <b> Focus Area:</b>
            Software development training, with a specific emphasis on Java
            technologies. <br />
            <br />
            <b> Courses Offered:</b>
            Jspiders offer courses in Java programming, web development,
            software testing, and related technologies. They may provide
            training on frameworks, databases, and other tools commonly used in
            software development. <br />
            <br />
            <b> Placement Assistance:</b>
            Jspiders, offer placement assistance to help students secure job
            opportunities in the software industry after completing their
            courses. <br />
            <br />
            <b> Training Methodology: </b>
            Jspiders, use a combination of theoretical lectures, practical
            exercises, and real-world projects to provide hands-on experience to
            students.
          </h6>
        </div>

        <div className="img-container">
          <div>
            <img src="./Sirji.png" alt="" />
            <h1>
              <TypingMessage message={"  NAGESH DJ       "} Time={300} />
            </h1>
            <div className="HOB">
              <h2>Head Of Thane Branch</h2>
              <p>
                Versatile professional who seamlessly serves as both the Head of
                Branch and an Excellent Java Trainer. In his role as the Head of
                Branch, he demonstrates exemplary leadership, overseeing
                operations, and fostering growth. Simultaneously, as a Java
                Trainer, his exceptional expertise and teaching skills empower
                learners with a deep understanding of Java concepts and
                programming practices.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homedata;
