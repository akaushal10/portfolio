import React from "react";
import ResumeHeader from "./Resume/ResumeHeader";
import GeneralSkills from "./Resume/GeneralSkills";
import Education from "./Resume/Education";
import Employment from "./Resume/Employment";
import { Grid } from "@material-ui/core";

const Resume = ({ resumeData }) => {
  return (
    <>
      <Grid
        container
        item
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        xs={10}
        id="resume"
      >
        {resumeData ? (
          <>
            <ResumeHeader header={resumeData.header} />
            <Education education={resumeData.education} />
            <Employment employment={resumeData.employment} />
            <GeneralSkills generalSkills={resumeData.generalSkills} />
          </>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
};
export default Resume;
