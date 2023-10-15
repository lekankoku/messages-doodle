import React, { useState } from "react";
import "./styles.scss";


const ChatInput = ({ onAddMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      await onAddMessage(trimmedMessage);
      setMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        value={message}
        onKeyDown={handleKeyDown}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type your message"
      ></input>
      <span onClick={handleSendMessage} className="send-button">
        Send
      </span>
    </div>
  );
};

export default ChatInput;
