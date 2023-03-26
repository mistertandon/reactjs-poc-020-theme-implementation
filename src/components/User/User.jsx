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
      <ProfileCard
        githubUrl="https://github.com/mistertandon"
        twitterUrl="https://twitter.com/mistertandon"
        stackoverflowUrl="https://stackoverflow.com/users/1591753/mistertandon"
      />
    </div>
  );
};

export default User;
