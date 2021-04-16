import React from "react";
const EducationBlock = ({ name, start, end, about }) => {
  return (
    <div className="resume-list__block">
      <p className="resume-list__block-title">{name}</p>
      <p className="resume-list__block-date">
        <span>{start}</span> - <span>{end}</span>
      </p>
      <p className="resume-list__block-content">{about}</p>
    </div>
  );
};
const Education = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 section__resume resume-list">
          <h3 className="resume-list_title">education</h3>
          {props.education ? (
            props.education.map(({ name, start, end, about }, index) => (
              <EducationBlock
                key={index}
                name={name}
                start={start}
                end={end}
                about={about}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Education;
