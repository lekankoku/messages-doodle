import { useRef, useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import ChatHeader from "./header/ChatHeader.jsx";
import ChatHistory from "./history/ChatHistory";
import ChatMessage from "./history/messages/ChatMessage";
import ChatInput from "./input/ChatInput";

import MessagesService from "../../services/MessagesService";


import "./styles.scss";

const Chat = () => {
    const { username } = useUser();
    const messagesService = new MessagesService();
    const messageRefs = useRef([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        setTimeout(() => {
          scrollToBottom();
        }, 50);
      }, [messages]);

      const scrollToBottom = () => {
        if (messageRefs.current.length > 0) {
          messageRefs.current[messageRefs.current.length - 1].scrollIntoView({
            behavior: "smooth",
          });
        }
      };
   

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

      const addMessage = async (content) => {
        try {
          const message = {
            createdBy: username,
            content,
          }
          const newMessage = await messagesService.sendMessage(message);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
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
      <ChatInput onAddMessage={addMessage} />
    </div>
  );
};

export default Chat;
