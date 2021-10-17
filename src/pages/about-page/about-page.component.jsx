import React from "react";

import "./about-page.styles.scss";

import { ReactComponent as BackBtn } from "../../images/previous.svg";

const AboutPage = ({ handler }) => {
  return (
    <div className="about-page">
      <BackBtn className="about-page__back-btn" onClick={handler} />
      <div className="about-page__image-container">
        <img
          src={require("../../images/me.webp")}
          className="about-page__image-container--img"
          alt="Me"
        />
        <p className="about-page__content">
          I am Shweta Kumari, an architect graduated from University Of Mumbai.
          <br />
          <br /> Experienced in heading graphic and communication design teams.
          Skilled in Autocad, Photoshop, Rhino, Revit, Sketchup, Lumion, Enscape
          and Illustrator. I love to design user experiences through spaces or
          apps. Art therapy is my passion and I love to help people express
          themselves through art.
          <br />
          <br />
          <br />
          <span className="about-page__content--sub">
            {" "}
            Want to work with me? Do contact me.
            <br />
            <br />
            Email: <u>kumarishweta.email@gmail.com</u>
            <br />
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
