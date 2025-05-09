import React, { useEffect, useState} from "react";

import ChatList from "./ChatList";
import Text from "./Text";
import Login from "./Login";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://localhost:3001");
const Chat = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("chats");
    return savedChats ? JSON.parse(savedChats) : [];
  });
  useEffect(() => {
    socket.on("receive-message", (data) => {
      setChats((prev) => {
        const updated = [...prev, data];
        localStorage.setItem("chats", JSON.stringify(updated));
        return updated;
      });
    });

    return () => {
      socket.off("receive-message");
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("pic");
    localStorage.removeItem("chats");
    setUser(null);
    setChats([]);
    socket.disconnect();
  };

  return user ? (
    <>
      <div className="chat-header">
        <h1>{user}</h1>
        <h2>Online Chat App</h2>
        <button onClick={handleLogout}>Log out</button>
      </div>

      <div className="chat-body">
        <ChatList chats={chats} />
        <Text socket={socket} user={user} />
      </div>
    </>
  ) : (
    <Login setUser={setUser} />
  );
};
export default Chat;


