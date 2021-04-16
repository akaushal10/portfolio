import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const FooterAbout = (props) => {
  return (
    <>
      <Grid item xs={12} md={4} className="footer-info-table">
        <table>
          <tbody>
            {props.contact ? (
              props.contact.map(({ name, id },index) => (
                <tr key={index}>
                  <td className="text-uppercase">{name}</td>
                  <td className="small">{id}</td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
        <ul className="footer-links my-3">
          {console.log("Props : ",props.contactLinks)}
          {props.contactLinks ? (
            props.contactLinks.map(({name,url},index) => (
              <li key={index}>
                <a href={url} target="_blank">
                {name}
                </a>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </Grid>
    </>
  );
};
export default FooterAbout;
