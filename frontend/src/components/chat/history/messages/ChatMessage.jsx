import "./styles.scss";
import { useUser } from "../../../../hooks/useUser";
import { getDate } from "../../../../helpers/date-helper";


const ChatMessage = ({ message }) => {
  const { username } = useUser();
  const isUserMessage = message.createdBy === username;
  return (
    <div className={`message-row ${!isUserMessage ? "group-message" : ""}`}>
      <div className="message">
        <div className="name">
          <span>
            {isUserMessage ? "You" : message.createdBy}
          </span>
        </div>
        <div className="content">{message.content}</div>
        <div className="date">
          <span>
            {getDate(message.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
