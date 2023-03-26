import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ProfileCard } from "./../ProfileCard";
import "./User.scss";

const User = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    switchTheme();
  };

  return (
    <div className="user--container">
      <button onClick={() => changeTheme()}>ChangeTheme</button>Hello from User
      <ProfileCard />
    </div>
  );
};

export default User;
