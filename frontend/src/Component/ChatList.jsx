import React, { useEffect, useRef } from "react";
const ChatList = ({ chats }) => {
  const currentUser = localStorage.getItem("user");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="chat-container">
      {chats.map((chat, index) => (
        <div
          key={index}
          className={`chat-message ${
            chat.sender === currentUser ? "sender" : "receiver"
          }`}
        >
          <img src={chat.pic} alt="User" />
          <p>
            <strong>{chat.sender}</strong>: {chat.msg}
          </p>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatList;
