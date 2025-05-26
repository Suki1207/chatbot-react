import { useState } from "react";
import { Chatbot } from "supersimpledev";

import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      /*
              Use the updater function to update the state, not update the state directly


              chatMessages.push({
                message: "test",
                sender: "user",
                id: crypto.randomUUID(),
              });
            */

      // Create a copy of the chatMessages array
      ...chatMessages, // Spread operator to copy the array
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "sender",
        id: crypto.randomUUID(),
      },
    ]);

    // Clear the input field, BUT it will NOT update the HTML yet
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
