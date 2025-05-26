import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  /*
          Further destructured props inside parameters


          const { message, sender } = props;
        */

  /*
          if-statement has been used inside JSX with the Guard Operator &&


          if (sender === "robot") {
            return (
              <div>
                <img src="assets/robot.png" width="50" />
                {message}
              </div>
            );
          }
        */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
