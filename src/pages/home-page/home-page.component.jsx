import React from "react";

import "./home-page.styles.scss";

import { ReactComponent as Blob } from "../../images/blob.svg";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import bgVideo from "../../images/Construction Site - 73470.mp4";
import ArchitectPage from "../architect-page/architect-page.component";
import AboutPage from "../about-page/about-page.component";

class HomePage extends React.Component {
  constructor() {
    super();

    this.handler1 = this.handler1.bind(this);
    this.handler2 = this.handler2.bind(this);

    this.state = {
      architectPage: false,
      aboutPage: false,
      initialLoad: true,
      lastPage: undefined,
    };
  }

  handler1() {
    this.setState({
      architectPage: false,
      initialLoad: false,
      lastPage: "architectPage",
    });
  }

  handler2() {
    this.setState({
      aboutPage: false,
      initialLoad: false,
      lastPage: "aboutPage",
    });
  }

  handleProjectsClick = () => {
    this.setState({
      architectPage: true,
      initialLoad: false,
      lastPage: undefined,
    });
  };

  handleAboutClick = () => {
    this.setState({ aboutPage: true, initialLoad: false, lastPage: undefined });
  };

  render() {
    const { architectPage, initialLoad, aboutPage, lastPage } = this.state;
    return (
      <div className="app">
        <div
          className={
            initialLoad
              ? "home-page"
              : !architectPage && !aboutPage
              ? "home-page home-page__animated"
              : "home-page home-page__hidden"
          }
        >
          <video autoPlay loop muted className="home-page__bg-video">
            <source src={bgVideo} type="video/mp4"></source>
          </video>
          <div className="home-page__video-cover" />
          <div className="custom-shape-divider-bottom-1603420290">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="home-page__content">
            <h4 className="home-page__content--1">Hi. I am</h4>
            <h4 className="home-page__content--2">SHWETA KUMARI</h4>

            <h6 className="home-page__content--3">
              And I work on crazy designs for homes and apps!
            </h6>
            <p className="home-page__content--4">
              Zealous Architect, Interior and UI/UX Designer with the vision of
              creating things no one plans to have ever existed. Want a design
              for your new construction, or want to have an app/website design
              for your business, do contact me!
            </p>
            <div className="home-page__content--contact">
              <a
                href="https://www.facebook.com/bitty.kumari.3785"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="home-page__icon" />
              </a>
              <a
                href="https://www.instagram.com/kwetashumari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="home-page__icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/shweta-kumari-908794146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="home-page__icon" />
              </a>
            </div>
          </div>
          <div>
            <Blob className="home-page__blob" />
          </div>
          <div onClick={this.handleProjectsClick} className="home-page__btn-1">
            <h4>Architecture</h4>
            <span style={{ fontWeight: 700, fontSize: "3rem" }}>&#8744;</span>
          </div>
          <div onClick={this.handleProjectsClick} className="home-page__btn-2">
            <h4>Interiors</h4>
            <span style={{ fontWeight: 700, fontSize: "3rem" }}>&#8744;</span>
          </div>
          <div onClick={this.handleProjectsClick} className="home-page__btn-3">
            <h4>UI/UX</h4>
            <span style={{ fontWeight: 700, fontSize: "3rem" }}>&#8744;</span>
          </div>
          <div onClick={this.handleProjectsClick} className="home-page__btn-4">
            <h4>Product</h4>
            <span style={{ fontWeight: 700, fontSize: "3rem" }}>&#8744;</span>
          </div>
          <div onClick={this.handleAboutClick} className="home-page__about-btn">
            <h4>About</h4>
            <span style={{ fontWeight: 700, fontSize: "3rem" }}>&#8744;</span>
          </div>
          <div className="home-page__contact-info">
            <h4>
              Contact me here:{" "}
              <a
                href="mailto:kumarishweta.email@gmail.com"
                className="home-page__contact-info--email-link"
              >
                kumarishweta.email@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="page-container">
          {!aboutPage && lastPage !== "aboutPage" ? (
            <div
              className={
                initialLoad
                  ? "app__architect-page"
                  : architectPage
                  ? "app__architect-page app__architect-page--shown"
                  : "app__architect-page app__architect-page--hidden"
              }
            >
              <ArchitectPage handler={this.handler1} />
            </div>
          ) : null}

          {!architectPage && lastPage !== "architectPage" ? (
            <div
              className={
                initialLoad
                  ? "app__about-page"
                  : aboutPage
                  ? "app__about-page app__about-page--shown"
                  : "app__about-page app__about-page--hidden"
              }
            >
              <AboutPage handler={this.handler2} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
