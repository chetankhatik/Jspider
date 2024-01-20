import React, { useState, useEffect } from "react";

const TypingMessage = ({ message, Time }) => {
  const [displayedMessage, setDisplayedMessage] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < message.length) {
        setDisplayedMessage(
          (prevMessage) => prevMessage + message.charAt(index)
        );
        index++;
      } else {
        setDisplayedMessage(""); // Reset the message
        index = 0;
      }
    }, Time);

    return () => clearInterval(intervalId);
  }, [message, Time]);

  return <div>{displayedMessage}</div>;
};

export default TypingMessage;
