/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";

const Coursesdata = () => {
  const courses = [
    {
      name: "Java Full Stack Development",
      dis: "Java Full Stack course is more of job-oriented training which is designed as per current industry standards. You can start your career in IT industry with basic and advance skills. Course will be trained by top industry experts who have passion to train students and help them get job in IT industry or excel in IT industry.",
      image: "./JF.png",
      technologies: "Java, React, Spring Boot, etc.",
      fees: "RS 30000",
      duration: "6 months",
    },
    {
      name: "Python Full Stack Development",
      dis: "Python Full Stack course is more of job-oriented training which is designed as per current industry standards. You can start your career in IT industry with basic and advance skills. Course will be trained by top industry experts who have passion to train students and help them get job in IT industry or excel in IT industry.",
      image: "./PF.png",
      technologies: "Python, React, Spring Boot, etc.",
      fees: "RS 30000",
      duration: "6 months",
    },

    {
      name: "DevOps",
      dis: "DevOps is not a tool or a team, it is the process or a methodology of using various tools to solve the problems between Developers and Operations team, hence the term “Dev-Ops”. The development team always had the pressure of completing the old, pending work that was considered faulty by the operations team. With DevOps, there is no wait time to deploy the code and getting it tested. ",
      image: "./devops.png",
      technologies:
        "Cloud(AWS), Git, GitHub, Maven, Jenkins, Docker, Ansible, Basics of Kubernetes, Nagios, Jenkins integration with SonarQube, Jfrog, Nexus",
      fees: "RS 25000",
      duration: "6 months",
    },

    {
      name: "MERN Stack",
      dis: "Take your career as a web developer to the next level with this Full-Stack Web Developer Master’s Program, where you’ll become an expert at front and back-end JavaScript technologies of the most popular MEAN (Mongo DB, Express, Angular and Node.js) Stack or MERN (Mongo DB, Express, React and Node.js) Stack",
      image: "./Mern.png",
      technologies: "MongoDB,ExpressJs,ReactJs,NodeJs",
      fees: "RS 25000",
      duration: "6 months",
    },
    {
      name: "MEAN Stack",
      dis: "You will be ready to develop web application, mobile application & automation testing,MEAN (Mongo DB, Express, Angular and Node.js) Stack, Web designing and full-fledged application developing by end of this training.",
      image: "./Mean.png",
      technologies: "MongoDB,ExpressJs,AngularJs,NodeJs",
      fees: "RS 25000",
      duration: "6 months",
    },

    {
      name: "J2EE",
      dis: "J2EE course is more of job-oriented training which is designed as per current industry standards. You can start your career in IT industry with basic and advance skills. Course will be trained by top industry experts who have passion to train students and help them get job in IT industry or excel in IT industry.",
      image: "./j2ee.png",
      technologies: "Oops, Advance Java",
      fees: "RS 15000",
      duration: "6 months",
    },
  ];

  const [showIframe, setShowIframe] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleKnowMoreClick = (course) => {
    setSelectedCourse(course);
    setShowIframe(true);
  };

  const handleCloseClick = () => {
    setShowIframe(false);
  };

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
      <main className="coursesinfo">
        {courses.map((course) => (
          <div key={course.name} className="course-card">
            <h2>{course.name}</h2>
            <p>{course.dis}</p>
            <button className="KM" onClick={() => handleKnowMoreClick(course)}>
              Know More
            </button>
          </div>
        ))}
      </main>

      {showIframe && selectedCourse && (
        <div className="floating-iframe">
          <div className="iframe-content">
            <button className="close-button" onClick={handleCloseClick}>
              Close
            </button>
            <img src={selectedCourse.image} alt={selectedCourse.name} />
            <h2>{selectedCourse.name}</h2>
            <p>Technologies: {selectedCourse.technologies}</p>
            <p>Fees: {selectedCourse.fees}</p>
            <p>Duration: {selectedCourse.duration}</p>
          </div>
        </div>
      )}
 
    </div>
  );
};

export default Coursesdata;
