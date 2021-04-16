import { Grid, LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  circularProgressBar:{
      borderRadius:'5px !important',
      height:'5px'
  }
}));

const Skills = ({name,grade}) => {
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="space-between"
        alignItems="center"
        className="skill my-2"
      >
        <Grid item className="text-dark skill-title">
          {name}
        </Grid>
        <Grid item className="text-dark text-right skill-value">
          {grade} %
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress variant="determinate" className={`${classes.circularProgressBar}`} value={parseInt(grade)} />
      </Grid>
    </>
  );
};
const GeneralSkills = (props) => {
  return (
    <>
    <Grid id="resume-general-skills" container item xs={12}>
      <Grid item xs={12} className="my-4 title">
        GENERAL SKILLS
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={10}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {props.generalSkills.map(({name,grade}, index) => (
            <Grid key={index} container item md={5} className="my-2">
              <Skills name={name} grade={grade} />
            </Grid>
        ))}
      </Grid>
    </Grid>

    </>
  );
};
export default GeneralSkills;
