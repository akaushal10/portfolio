import { Grid } from "@material-ui/core";
import React from "react";

const ProjectCarousel = () => {
  return (
    <>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="flex-start"
        xs={12}
        id="projects"
        className="my-3"
      >
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner w-100 border border-danger">
            <div className="carousel-item active">
              <div style={{height:'200px'}} className="w-100 bg-success row col-12">
                <div className="col-12 border">
                  <p>ds </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div style={{height:'200px'}} className="w-100 bg-primary">df</div>
            </div>
            <div className="carousel-item">
              <div style={{height:'200px'}} className="w-100 bg-danger">df</div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Grid>
    </>
  );
};
export default ProjectCarousel;
