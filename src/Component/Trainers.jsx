import React from "react";

const Trainersdata = () => {
  const Trainers = [
    {
      name: "Nagesh Sir",
      image: "./Sirji.png",
      title: "Java Trainer",
      bio: "Under Nagesh Sir's guidance, code becomes poetry, errors turn into opportunities, and every line written is a step toward Java mastery. A true maestro in the art of Java training.",
    },
    {
      name: "Javed Sir",
      image: "./javed.png",
      title: "Java Trainer",
      bio: "Java concepts transform into clarity, errors become stepping stones, and every class is a journey toward programming excellence.",
    },
    {
      name: "Bikas Sir",
      image: "./bk.png",
      title: "Advance Java Trainer",
      bio: " The maestro of Advanced Java, turns complexity into comprehension, challenges into triumphs, and every lesson into a stride toward Java mastery.",
    },
    {
      name: "Ravi Sir",
      image: "./ravi.png",
      title: "Framework Trainer",
      bio: "The guiding force through frameworks, turns intricate structures into clear paths, challenges into victories, and every session into a framework of knowledge.",
    },
    {
      name: "Muthu Sir",
      image: "./muthu.png",
      title: "ReactJs Trainer",
      bio: "Sculpting React brilliance, turns components into clarity, challenges into triumphs, and every lesson into a journey toward React mastery.",
    },
    {
      name: "Vignesh Sir",
      image: "./vignesh.png",
      title: "Web Tech Trainer",
      bio: "The web unfolds its boundless possibilities. Every tag, every script, a step toward web excellence. A maestro in the symphony of web technology.",
    },
    {
      name: "Tejashri Mam",
      image: "./Tejashri.png",
      title: "SQL Trainer",
      bio: "Unraveling the language of databases, transforms queries into insights, challenges into achievements. Every SQL class, a database of knowledge under her expert guidance.",
    },
    {
      name: "Jay Shankar Sir",
      image: "./jay.png",
      title: "SQL Trainer",
      bio: "Illuminating the realm of databases, turns SQL queries into a language of mastery. In his class, every statement is a step towards SQL excellence.",
    },
    {
      name: "Shazin Mam",
      image: "./shaz.png",
      title: "SDLC Trainer",
      bio: "Guiding the journey through SDLC intricacies, transforms processes into pathways, challenges into successes. In her class, every phase is a step towards software development enlightenment.",
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
      <div className="load-info">
        {Trainers.map((items, index) => (
          <div className="Trainersdata" key={items.name}>
            <div className="Textcontent">
              <h1>{items.name}</h1>
              <h2>{items.title}</h2>
              <p>{items.bio}</p>
            </div>
            <div className="TImage">
              <img src={items.image} alt={`${items.name}-ProfilePicture`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainersdata;
