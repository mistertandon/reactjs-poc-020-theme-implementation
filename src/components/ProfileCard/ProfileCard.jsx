import React, { useContext } from "react";
import "./ProfileCard.scss";
import {
  LogoGithub,
  LogoTwitter,
  LogoStackoverflow,
  MailOutline,
} from "react-ionicons";
import { redirectToSocialAccount } from "./../../utils/helpers";
import { StickyHeader } from "../StickyHeader";
import { ThemeContext } from "../../contexts/ThemeContext";

const ProfileCard = ({ githubUrl, twitterUrl, stackoverflowUrl }) => {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <article className="profile-card-section--container">
      <section className="general-information__section">
        <div className="general-information__section--photo">
          <img
            className="photo__img"
            src="./../../../public/images/me.jpg"
          />
        </div>
        <div className="general-information__section--name">
          Parvesh Kumar Tandon
        </div>
        <div className="general-information__section--post">
          JavaScript/ReactJS Developer
        </div>
      </section>
      <section className="personal-information__section">
        <div className="personal-information__section--education">B. Tech</div>
        <div className="personal-information__section--hometown">Delhi</div>
        <div className="personal-information__section--occupation">
          Software Engineer
        </div>
      </section>
      <section className="social-media__section">
        <div className="social-media__section--username">@mistertandon</div>
        <div className="social-media__section--icon">
          <LogoGithub
            color={"#00000"}
            height="20px"
            width="20px"
            className="social-media__ionicon--github"
            onClick={() => redirectToSocialAccount(githubUrl)}
          />
          <LogoTwitter
            height="20px"
            width="20px"
            className="social-media__ionicon--twitter"
            onClick={() => redirectToSocialAccount(twitterUrl)}
          />
          <LogoStackoverflow
            height="20px"
            width="20px"
            className="social-media__ionicon--stackoverflow"
            onClick={() => redirectToSocialAccount(stackoverflowUrl)}
          />
        </div>
        <div className="social-media__section--email">
          <MailOutline
            height="20px"
            width="20px"
            className="social-media__ionicon--mail"
            onClick={() => redirectToSocialAccount()}
          />
          <p>enggparveshtandon@gmail.com</p>
        </div>
      </section>
      <section className="desclaimer__section">Embrace THE SUCK</section>
      <StickyHeader
        uiBlock={() => (
          <div className="theme__div--toggle">
            <button onClick={() => switchTheme()}>Change Theme</button>
          </div>
        )}
      />
    </article>
  );
};

export default ProfileCard;
