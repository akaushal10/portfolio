import { Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import passportPhoto from "../static/images/Abhishek_koushal.jpg";

const useStyles = makeStyles((theme) => ({
  centerImage: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "-80px",
    },
  },
}));

const Introduction = (props) => {
  const classes = useStyles();
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="flex-start"
        xs={12}
        className={`bg-intro-dark text-light py-md-5 py-2 ${classes.centerImage}`}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          item
          id="intro"
          sm={10}
          xs={12}
          className="mx-auto mx-lg-0"
        >
          <Grid item xs={12} sm={5} md={4} className={`pt-5 text-center-sm`}>
            {loading ? (
              <Skeleton
                className="img-fluid rounded intro-img mx-auto"
                animation="wave"
                variant="rect"
                width={"80%"}
                height={300}
              />
            ) : (
              <img
                src={passportPhoto}
                className="img-fluid rounded intro-img"
                style={{ marginBottom: "-30px", height: "300px", width: "80%",maxWidth:'300px' }}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={7} className="pt-5 mx-4">
            {loading ? (
              <div className="mb-3 text-center-sm">
                <Skeleton className="intro-name h1 py-3" variant="text" />
                <Skeleton className="intro-highlight " variant="text" />
              </div>
            ) : (
              <div className="mb-3 text-center-sm">
                <h1 className="intro-name">{props.name}</h1>
                <p className="intro-highlight">
                  {props.highlights ? props.highlights.join(",") : ""}
                </p>
              </div>
            )}

            {loading ? (
              <>
                <Skeleton className="h3 my-2 col-12 col-md-6" variant="text" />
                <Skeleton className="h3 my-2 col-12 col-md-6" variant="text" />
                <Skeleton className="h3 my-2 col-12 col-md-6" variant="text" />
                <Skeleton className="h3 my-2 col-12 col-md-6" variant="text" />
              </>
            ) : (
              <table id="introductionTable" style={{}}>
                <tbody>
                  <tr>
                    <td className="text-uppercase">age:</td>
                    <td className="px-2">{props.age}</td>
                  </tr>
                  <tr>
                    <td className="text-uppercase">PHONE:</td>
                    <td className="px-2">
                      <a href={`tel:${props.phone}`} className="mobile">
                        {props.phone}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-uppercase">EMAIL:</td>
                    <td className="px-2">
                      <a href={`mainto:${props.email}`} className="email">
                        {props.email}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-uppercase">ADDRESS:</td>
                    <td className="px-2">{props.address}</td>
                  </tr>
                </tbody>
              </table>
            )}
            {loading ? (
              <Skeleton className="h3 my-2 col-12 col-md-6" variant="text" />
            ) : (
              <div className="intro-profile-icons my-2">
                <a
                  href={props.socialLinks?props.socialLinks.github:"#"}
                  target="_blank"
                  className="mx-2 h5"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href={props.socialLinks?props.socialLinks.linkedin:"#"}
                  target="_blank"
                  className="mx-2 h5"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                  href={props.socialLinks?props.socialLinks.instagram:"#"}
                  target="_blank"
                  className="mx-2 h5"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>

    </>
  );
};
export default Introduction;
