import React from "react";
import "./ProfileCard.scss";

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
        <div className="social-media__section--icon">Icon</div>
        <div className="social-media__section--email">
          enggparveshtandon@gmail.com
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
