import React from "react";

import "./architect-page.styles.scss";

import { ReactComponent as BackBtn } from "../../images/previous.svg";

const ArchitectPage = ({ handler }) => {
  const data = [
    {
      imgUrl: require("../../images/architect/project-1.webp"),
      name: "Sample Project 1",
      description: "Sample Description for Project 1",
      projectUrl: "https://drive.google.com/drive/my-drive",
      tools: [
        require("../../images/sotwareIcons/lumion.png"),
        require("../../images/sotwareIcons/photoshop.png"),
        require("../../images/sotwareIcons/revit.png"),
      ],
    },
  ];
  return (
    <div className="architect-page">
      <BackBtn className="architect-page__back-btn" onClick={handler} />
      <h1 className="architect-page__heading">
        Architecture Projects I Have Worked On
      </h1>
      <div className="architect-page__project-list">
        {data.map((obj) => (
          <div className="architect-page__project-card">
            <img
              src={obj.imgUrl}
              alt={obj.name}
              className="architect-page__project-card--image"
            />
            <div className="architect-page__project-card--content">
              <h4 className="architect-page__project-card--name">{obj.name}</h4>
              <p className="architect-page__project-card--description">
                {obj.description}
              </p>
              <div className="architect-page__project-card--btn-group">
                <a
                  href={obj.projectUrl}
                  className="architect-page__project-card--button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Complete Project
                </a>
              </div>
            </div>
            <div className="architect-page__project-card--tools">
              <h4 className="architect-page__project-card--tools-title">
                Made With
              </h4>
              {obj.tools.map((url) => (
                <img
                  src={url}
                  className="architect-page__project-card--tools-icon"
                  alt="Icon"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitectPage;
