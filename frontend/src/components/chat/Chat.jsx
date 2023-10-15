import React, { useRef, useEffect, useState } from "react";
import ChatHeader from "./header/ChatHeader.jsx";
import ChatHistory from "./history/ChatHistory";
import ChatMessage from "./history/messages/ChatMessage";

import MessagesService from "../../services/MessagesService";


import "./styles.scss";

const Chat = () => {
    const messagesService = new MessagesService();
    const messageRefs = useRef([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

      const fetchMessages = async () => {
        try {
          const response = await messagesService.getMessages();
          setMessages((prevMessages) => {
            //prevent duplicate messages
            const uniqueIds = new Set(prevMessages.map((msg) => msg.id));
            const uniqueMessages = response.filter(
              (item) => !uniqueIds.has(item.id)
            );
    
            return [...prevMessages, ...uniqueMessages];
          });
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className="chat">
      <ChatHeader />
      <ChatHistory>
        {messages.map((message, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el && !messageRefs.current.includes(el)) {
                messageRefs.current.push(el);
              }
            }}
          >
            <ChatMessage message={message} />
          </div>
        ))}
      </ChatHistory>
    </div>
  );
};

export default Chat;
