/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Aboutdata = () => {
  const contactdetails = [
    {
      name: "Sagar",
      contact: "+919742490958 ",
      email: "sagar@qspiders.com",
    },
    {
      name: "Kishore",
      contact: "+91 9880585503 ",
      email: "kishore@qspiders.com",
    },
  ];

  const contactdetails2 = [
    {
      name: "Namratha ",
      contact: "+919900067499",
      email: "enquiry@qspiders.com",
    },
    {
      name: "Rashmi ",
      contact: "+916366110033",
      email: "enquiry@qspiders.com",
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
      <main className="main-about">
        <div className="div1">
          <h2>Want to hire Our Student</h2>
          <p>
            QSpiders, JSpiders and PySpiders are among the largest software
            testing and development training organizations across the globe with
            branches in North America, Europe and the Asia Pacific. They are
            "finishing schools" that upskill job aspirants across streams to
            match industry standards. QSpiders, JSpiders and PySpiders also have
            incubation centres across India. These incubation centres prepare
            students in the final semester of their graduate studies, so that
            they are deployable as soon as they graduate. QSpiders, JSpiders and
            PySpiders hold the record of supplying the highest number of
            industry-ready technical resources.We can supply over 3500 technical
            resources at any time to meet the industry's demand. Our Hiring
            Solution Zero Cost Hiring is our proven solution which has history
            of placing 4,50,000 plus graduates across industry. Our Zero Cost
            Hiring save major portion of hiring cost, Readily available
            graduates, @ QSpiders & JSpiders and PySpiders will save the 90%Cost
            of sourcing candidates/ resumes, Our Dedicated Delivery Team and
            Customized Delivery Model will save 70% of the Cost involved in
            Recruiting
          </p>

          <div className="outerinfo">
            {contactdetails.map((items) => (
              <div className="contact-info" key={items}>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faUser} className="icon2 iconx" />
                  &nbsp; &nbsp;
                  <span>Name:{items.name}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="icon2 iconx" />
                  &nbsp; &nbsp;
                  <span>Phone:{items.contact}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="icon2 iconx" />
                  &nbsp; &nbsp;
                  <span>Email:{items.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="div2">
          <h2>Need Corporate traning</h2>
          <p>
            Professional development happens when professionals improve their
            skills which will enhance their performance- means of achieving it
            would be from corporate training. We have experience in providing
            on-site and offshore corporate training programs and successfully
            delivered many corporate training programs so far. We work with many
            organizations to provide corporate training in courses including
            Software Testing & Development. Value Addition Services: After the
            training, if the engineers start implementing the topics learnt
            during training, we provide free guidance to identify the gaps and
            fine tune the understanding for half day (if required). The
            trainer/s will have more than 6 years of experience in the area of
            Software Testing & Development. Training Benefits: After the
            training the Engineers (If he/she) will be in a position to work
            independently on a project. Engineers will have the understanding of
            Best practices in the industry. Engineers will be clear about
            implementation on projects. Lowest Rates and big savings to your
            budget. Delivery on Time with High quality training.
          </p>

          <div className="outerinfo">
            {contactdetails2.map((items) => (
              <div className="contact-info" key={items}>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faUser} className="icon2 iconx" />
                  &nbsp; &nbsp;
                  <span>Name:{items.name}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="icon2 iconx" />
                  &nbsp; &nbsp;
                  <span>Phone:{items.contact}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="icon2 iconx" />
                  &nbsp; &nbsp;
                  <span>Email:{items.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutdata;
