import React from "react";

import "./projects-page.styles.scss";

import { ReactComponent as BackBtn } from "../../images/previous.svg";
import { ReactComponent as Vue } from "../../images/vue-js-1.svg";
import { ReactComponent as Firebase } from "../../images/firebase-1.svg";
import { ReactComponent as ReactIcon } from "../../images/react-2.svg";
import { ReactComponent as Redux } from "../../images/redux.svg";
import { ReactComponent as Node } from "../../images/nodejs-icon.svg";
import { ReactComponent as MongoDb } from "../../images/mongodb.svg";
import { ReactComponent as Algolia } from "../../images/logo-algolia-square-dark.svg";

const ProjectsPage = ({ handler }) => {
  return (
    <div className="project-page">
      <BackBtn className="project-page__back-btn" onClick={handler} />
      <h1 className="project-page__heading">Websites I have worked on</h1>
      <div className="project-page__project-list">
        <div className="project-page__project-card">
          <img
            src={require("../../images/Capture6.webp")}
            alt="Edube"
            className="project-page__project-card--image"
          />
          <div className="project-page__project-card--content">
            <h4 className="project-page__project-card--name">Edube</h4>
            <p className="project-page__project-card--description">
              My first paid project. It's a platform for sahring notes and
              conducting discussions on doubts and question papers for college
              students. I implemeted the chat feature for this website using Vue
              for frontend and Firebase for backend. It's a one-to-one chat
              feature. This project was my forst hands on project with Vue as
              frontend framework.
            </p>
            <div className="project-page__project-card--btn-group">
              <a
                href="https://edube.app/"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
          <div className="project-page__project-card--tools">
            <h4 className="project-page__project-card--tools-title">
              Made With
            </h4>
            <Vue className="project-page__project-card--tools-icon" />
            <Firebase className="project-page__project-card--tools-icon" />
            <Algolia className="project-page__project-card--tools-icon" />
          </div>
        </div>
        <div className="project-page__project-card">
          <img
            src={require("../../images/Capture2.webp")}
            alt="Tacos And Love"
            className="project-page__project-card--image"
          />
          <div className="project-page__project-card--content">
            <h4 className="project-page__project-card--name">Tacos and Love</h4>
            <p className="project-page__project-card--description">
              My second project with Nodesjs, Express and MongoDb. This is a
              restaurant management application, enriched with all necessary
              features, including customer side services like food selection,
              online orders for home delivery, online payment with credit cards
              and admin side services like managing the staffs, their work and
              salaries, viewing everyday sales figures etc.
            </p>
            <div className="project-page__project-card--btn-group">
              <a
                href="https://tacosandlove.herokuapp.com/"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/hkjal1605/TacosAndLove"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
            </div>
          </div>
          <div className="project-page__project-card--tools">
            <h4 className="project-page__project-card--tools-title">
              Made With
            </h4>
            <ReactIcon className="project-page__project-card--tools-icon" />
            <Redux className="project-page__project-card--tools-icon" />
            <Node className="project-page__project-card--tools-icon" />
            <MongoDb className="project-page__project-card--tools-icon" />
          </div>
        </div>
        <div className="project-page__project-card">
          <img
            src={require("../../images/Capture.webp")}
            alt="Natours"
            className="project-page__project-card--image"
          />
          <div className="project-page__project-card--content">
            <h4 className="project-page__project-card--name">Natours</h4>
            <p className="project-page__project-card--description">
              My first MERN stack application. This is a tour booking website
              with features including viewing tour specs and duration, prices,
              tour-guides along with online payment features and map showing the
              stops during the tour days. The API contains a dverse set of
              dataypes includng geoJson data used for showing the places on the
              map.
            </p>
            <div className="project-page__project-card--btn-group">
              <a
                href="https://natours-express-react.herokuapp.com/"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/hkjal1605/Natours"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
            </div>
          </div>
          <div className="project-page__project-card--tools">
            <h4 className="project-page__project-card--tools-title">
              Made With
            </h4>
            <ReactIcon className="project-page__project-card--tools-icon" />
            <Redux className="project-page__project-card--tools-icon" />
            <Node className="project-page__project-card--tools-icon" />
            <MongoDb className="project-page__project-card--tools-icon" />
          </div>
        </div>
        <div className="project-page__project-card">
          <img
            src={require("../../images/Capture3.webp")}
            alt="Divine Homes"
            className="project-page__project-card--image"
          />
          <div className="project-page__project-card--content">
            <h4 className="project-page__project-card--name">Divine Homes</h4>
            <p className="project-page__project-card--description">
              The project I started my web-development journey with. This
              project is mainly focused on frontend development with React. The
              database is a small one and is hosted on Firebase. This is a
              simple Real-Estate property booking website with basic features
              including routing to different pages, UI components with
              animations etc
            </p>
            <div className="project-page__project-card--btn-group">
              <a
                href="https://divine-homes.herokuapp.com/"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/hkjal1605/divine-homes"
                className="project-page__project-card--button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
            </div>
          </div>
          <div className="project-page__project-card--tools">
            <h4 className="project-page__project-card--tools-title">
              Made With
            </h4>
            <ReactIcon className="project-page__project-card--tools-icon" />
            <Redux className="project-page__project-card--tools-icon" />
            <Firebase className="project-page__project-card--tools-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
