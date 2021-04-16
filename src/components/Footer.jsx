import { Grid } from "@material-ui/core";
import React from "react";
import ContactFooter from "./Footer/ContactForm";
import FooterAbout from "./Footer/FooterAbout";

const Footer = (props) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        id="footer"
        className="py-3"
      >
        <Grid item xs={10} className="title fs-3 my-3" >
          Get in touch_
        </Grid>
        <Grid
          container
          xs={10}
          item
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className="my-3"
          id="contact"
        >
          <FooterAbout contact={props.contact} contactLinks={props.contactLinks} />
          <ContactFooter />
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
