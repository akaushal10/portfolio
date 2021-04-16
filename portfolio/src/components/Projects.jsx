import { Button, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  shadow: {
    boxShadow: " 0 1px 4px rgb(0 0 0 / 14%)",
  },
}));

const ProjectSection = ({ image, title, content, tech, url }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} className="border rounded project-div my-3">
        <Grid item sm={5} md={4} xs={12}>
          <img
            className="img-fluid project-image"
            src={image}
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item sm={6} md={7} xs={12} className="p-3 project-section">
          <div className="text-uppercase project-title my-3">{title}</div>
          <div className="project-content">{content}</div>
          <div>
            <div className="text-uppercase mt-3 project-stack">
              USED stacks:
            </div>
            <div className="my-3">
              {tech ? (
                tech.map((technology, index) => (
                  <Button
                    key={index}
                    className={`${classes.shadow} mx-2 my-2 project-tech`}
                    size="small"
                  >
                    {technology}
                  </Button>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            <a
              href={url}
              style={{ maxWidth: "80%" }}
              target="_blank"
              className="project-url d-inline-block text-truncate"
            >
              {url}
            </a>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
const ProjectSkeleton = () => {
  return (
    <>
      <Grid container item xs={12} className="border rounded project-div my-3">
        <Grid item md={4} xs={12}>
          <Skeleton
            className="img-fluid project-image"
            animation="wave"
            variant="rect"
            width={"100%"}
            height={"100%"}
            style={{minHeight:'300px'}}
          />
        </Grid>
        <Grid item md={7} xs={12} className="p-3 project-section">
          <Skeleton className=" project-title my-3 py-3" variant="text" />
          <Skeleton className="project-content" variant="text" />
          <Skeleton className=" project-stack" variant="text" />
          <Skeleton className="project-stack my-3" variant="text" />
        </Grid>
      </Grid>
    </>
  );
};
const Projects = (props) => {
  return (
    <>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="flex-start"
        xs={10}
        id="projects"
        className="my-3"
      >
        <Grid item xs={12} className="title my-4">
          My Projects_
        </Grid>
        {props.projects ? (
          props.projects.map(({ image, title, content, tech, url }, index) => (
            <ProjectSection
              key={index}
              image={image}
              title={title}
              content={content}
              tech={tech}
              url={url}
            />
          ))
        ) : (
          <>
        <ProjectSkeleton/>
        <ProjectSkeleton/>
          </>
        )}
      </Grid>
    </>
  );
};
export default Projects;
