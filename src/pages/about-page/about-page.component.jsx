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
          I am Harsh Kumar Jha, a second year undergraduate student at Indian
          Institute of Technology, Kharagpur in the department of Electrical
          Engineering.
          <br />
          <br /> I started my journey of web development in my first year. When
          I started learning, I didn't even have the knowledge of HTML Tags or
          CSS. I satarted with the very basics of HTML and Javascript and since
          then, I have come a long way. Now I know how to play with React, Vue,
          Firebase, Nodejs, Mongodb, Express and have used them in developing
          some beautiful websites, which you can find in the projects section.
          These few months of developing websites have made me fall in love with
          web development.
          <br />
          <br />
          <br />
          <span className="about-page__content--sub">
            {" "}
            Want to work with me? Do contact me.
            <br />
            <br />
            Email: <u>hkjal1605@gmail.com</u>
            <br />
            Phone/Whatsapp: <u>+91-8986623661</u>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
