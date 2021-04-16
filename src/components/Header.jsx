import { Button, Grid, makeStyles } from "@material-ui/core";
import resume from "../static/files/Abhishekkoushal-Resume.pdf";
import React from "react";
const useStyles = makeStyles((theme) => ({
  downlaodButton: {
    borderRadius: "30px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid id="header" item container xs={10} className="my-md-5 my-3 mb-5">
        <Grid item xs={12} className="fs-2 my-3 title">
          Hi_
        </Grid>
        <Grid item xs={10} className="my-3">
          {props.about}
        </Grid>
        <Grid item xs={12} className="text-left mt-3">
          <Button
            className={`${classes.downlaodButton} text-uppercase btn-download-cv p-2 px-3`}
          >
            <a href={resume} download >
              <i className="fa fa-download"></i>&nbsp; &nbsp;{" "}
              <span className=""> Downlaod Cv</span>
            </a>
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className="hr-border" style={{ width: "100hw" }}></div>
      </Grid>
    </>
  );
};
export default Header;
