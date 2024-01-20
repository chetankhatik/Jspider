/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

const Contactdata = () => {
  const location = [
    {
      location: "Jspiders Mumbai Thane",
      image: "./js.png",
      address:
        "1st floor, kosmic arcade, 1 min from Thane Station, Station Rd, above Jumbo King, next to Kunj vihar, Jambli Naka, Thane West, Maharashtra 400601",
      link: "https://www.google.com/maps/place/JSpiders+Mumbai+Thane/@19.187228,72.9768042,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b94cc8c4edbd:0x221ef28a6afdf012!8m2!3d19.187228!4d72.9768042!16s%2Fg%2F11s_v_y3gv?entry=ttu",
      contact: "+91 7042498887",
      contact2: "+91 7338667454",
    },
    {
      location: "Qspiders Mumbai Thane",
      image: "./qs.png",
      address:
        "LBS Rd, Dhobi Ali, Ganeshwadi, Thane West, 2 min from Thane station, Maharashtra - 400601",
      link: "https://www.google.com/maps/place/QSpiders+Mumbai+Thane/@19.1884398,72.977049,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b94155f98d61:0x223b1fe0dd257c4b!8m2!3d19.1884398!4d72.977049!16s%2Fg%2F11h71h8lh5?entry=ttu",
      contact: "+91 7338471273",
      contact2: "+91 9108899668",
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
      <main className="contacts">
        {location.map((item) => (
          <div key={item.location} className="contact-us">
            <h2>{item.location}</h2>
            <br />
            <p>Address :{item.address}</p>
            <img src={item.image} alt="" />
            <a href={item.link} target="_blank" rel="noreferrer">
              Google Map
            </a>
            <br />
            <br />
            <span>Contact Number :{item.contact}</span>
            <br />
            <span>Contact Number :{item.contact2}</span>
          </div>
        ))}
      </main>
   
    </div>
  );
};

export default Contactdata;
