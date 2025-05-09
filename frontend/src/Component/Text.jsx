import React, { useState } from "react";
const Text = ({ socket, user }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    const data = {
      sender: user,
      msg: message,
      pic: localStorage.getItem("pic"),
    };

    socket.emit("send-message", data);
    setMessage("");
  };

  return (
    <div className="text-container">
      <textarea
        className="text-input"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="send-button" onClick={handleSend}>Send</button>
    </div>
  );
};

export default Text;
