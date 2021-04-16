import { Grid } from "@material-ui/core";
import React from "react";

const ResumeHeader = (props) => {
  return (
    <>
      <Grid id="resume-header" container item xs={12}>
        <Grid item xs={12} className="my-2 my-md-3">
          <div className="fs-2 my-2 my-md-3 title"> Resume_</div>
        </Grid>
        <Grid item xs={12} md={10}  className="content">
          {props.header}
        </Grid>
      </Grid>
    </>
  );
};
export default ResumeHeader;
