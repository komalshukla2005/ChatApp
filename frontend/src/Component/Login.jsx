import React, { useState } from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";

const Login = ({setUser}) => {
  const [userName, setUserName] = useState();
  const handleUSer = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName)
    localStorage.setItem(
      "pic",
      "https://i.pinimg.com/736x/fb/dd/25/fbdd25538883e220bc53972c5c2a9b01.jpg"
    );
  };
  return (
    <div className="Login-main-container">
      <div className="Login-container">
        <h1>Chat App</h1>
        <BsChatLeftDotsFill />
        <input
          type="text"
          placeholder="Enter your Name "
          name="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUSer}>LogIn</button>
      </div>
    </div>
  );
};

export default Login;
