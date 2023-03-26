import React from "react";
import "./ProfileCard.scss";
import {
  LogoGithub,
  LogoTwitter,
  LogoStackoverflow,
  MailOutline,
} from "react-ionicons";

const ProfileCard = () => {
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
            onClick={() => alert("Hi!")}
          />
          <LogoTwitter
            height="20px"
            width="20px"
            onClick={() => alert("hello")}
          />
          <LogoStackoverflow
            height="20px"
            width="20px"
            onClick={() => alert("hello")}
          />
        </div>
        <div className="social-media__section--email">
          <MailOutline
            height="20px"
            width="20px"
            onClick={() => alert("hello")}
          />
          <p>enggparveshtandon@gmail.com</p>
        </div>
      </section>
      <section className="desclaimer__section">
        Parvesh is a Creative innovative person, friendly for collaborating with
        any team for achieviable Project.
      </section>
    </article>
  );
};

export default ProfileCard;
