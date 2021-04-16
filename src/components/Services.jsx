import { Grid } from "@material-ui/core";
import React from "react";
import backend_icon from "../static/images/backend.svg";
import frontend_icon from "../static/images/frontend.svg";
import portfolio_icon from "../static/images/portfolio.svg";
import e_commerce_icon from "../static/images/e-commerce.svg";
import project_icon from "../static/images/project.svg";
import ui_ux_icon from "../static/images/ui-ux.svg";
const Services = (props) => {
  const allServices = [
    {
      name: "Front End Development",
      img: frontend_icon,
    },
    {
      name: "E-commerce",
      img: e_commerce_icon,
    },
    {
      name: "Portfolio",
      img: portfolio_icon,
    },
    {
      name: "Back End Development",
      img: backend_icon,
    },
    {
      name: "UI/UX Design",
      img: ui_ux_icon,
    },
  ];
  return (
    <>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="flex-start"
        xs={10}
        id="services"
      >
        <Grid item xs={12} className="title my-3">
          Services_
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          spacing={3}
          className="p-4"
        >
          {allServices.map(({ name, img }, index) => (
            <Grid
              xs={11}
              sm={5}
              md={3}
              item
              className="text-center border mx-md-3 mx-auto py-3 my-2 rounded service-div"
              key={index}
            >
              <div className="img-hover-zoom">
                <img
                  src={img}
                  className="img-fluid my-3 service-icon"
                  style={{ width: "50%" }}
                />
              </div>
              <p className="service-name">{name}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Services;
