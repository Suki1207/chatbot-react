import { useState } from "react";

import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

function App() {
  // Convert chatMessages into state
  const [chatMessages, setChatMessages] = useState([
    { message: "hello chatbot", sender: "user", id: "id1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    {
      message: "can you give me today's date?",
      sender: "user",
      id: "id3",
    },
    { message: "Today is May 20", sender: "robot", id: "id4" },
  ]);

  /*
          const chatMessages = array[0];
          const setChatMessages = array[1];
        */

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

/*

        Best Practice: use a component to render the app instead of a variable.

        const app = (
          <>
            <ChatInput />
            <ChatMessage message="hello chatbot" sender="user" />
            <ChatMessage message="Hello! How can I help you?" sender="robot" />
            <ChatMessage message="can you give me today's date?" sender="user" />
            <ChatMessage message="Today is May 20" sender="robot" />
          </>
        );
      */

export default App;
