import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({ onOptionChange }) => {
  const Options = ["Home", "About", "Trainers", "Courses", "Contact"];

  const [selectedOption, setSelectedOption] = useState("Home");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  return (
    <div>
      <div className="sidebar">
        <div className="side1">
          <img src="./ck.png" alt="" />
        </div>

        <div className="side2">
          <ul>
            {Options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionChange(option)}
                className={selectedOption === option ? "selected" : ""}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className="side3">
          <div className="social-container">
            <div className="social-icon ">
              <a
                href="tel:+199373744595"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPhone} className="icon1 iconx" />
              </a>
            </div>
            <div className="social-icon ">
              <a
                href="mailto:khatikck07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="icon2 iconx" />
              </a>
            </div>

            <div className="social-icon ">
              <a
                href="https://www.linkedin.com/in/chetan-khatik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedIn-icon iconx"
                />
              </a>
            </div>
          </div>

          <div>
            <h6 style={{ color: "white" }}>© CopyRight</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
