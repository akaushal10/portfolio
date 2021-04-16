import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.add("solid-nav");
      document.getElementById("navContanier").style.paddingTop = "0px";
      document.getElementById("hello-link").style.color = "black";
      document.getElementById("resume-link").style.color = "black";
      document.getElementById("project-link").style.color = "black";
      document.getElementById("contact-link").style.color = "black";
      document.getElementById("services-link").style.color = "black";
      document.getElementById("navbar").style.boxShadow =
        " 0 5px 8px 0 rgb(0 0 0 / 14%)";
        document.getElementById("navbarSupportedContent").classList.add('mx-5');
    } else {
      document.getElementById("navbar").classList.remove("solid-nav");
      document.getElementById("navContanier").style.paddingTop = "20px";
      document.getElementById("hello-link").style.color = "white";
      document.getElementById("resume-link").style.color = "white";
      document.getElementById("project-link").style.color = "white";
      document.getElementById("contact-link").style.color = "white";
      document.getElementById("services-link").style.color = "white";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("navbarSupportedContent").classList.remove('mx-5');
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg sticky-top d-none d-lg-block"
        style={{ width: "100%" }}
      >
        <div
          id="navContanier"
          className="container-fluid row col-11 mx-auto"
          style={{ paddingTop: "20px" }}
        >
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Open
          </button>
          <div
            className="collapse navbar-collapse mr-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 text-left">
              <li className="nav-item">
                <NavHashLink id="hello-link" activeClassName="nav-active" className="nav-link" to="#header">
                  Hello
                </NavHashLink>
              </li>
              <li className="nav-item mx-3">
                <NavHashLink id="resume-link" activeClassName="nav-active" className="nav-link" to="#resume">
                  Resume
                </NavHashLink>
              </li>
              <li className="nav-item mx-3">
                <NavHashLink
                  id="project-link"
                  className="nav-link"
                  to="#projects"
                  activeClassName="nav-active"
>
                  Projects
                </NavHashLink>
              </li>

              <li className="nav-item mx-3">
                <NavHashLink
                  id="services-link"
                  className="nav-link"
                  to="#services"
                  activeClassName="nav-active"
                >
                Services
                </NavHashLink>
              </li>
              <li className="nav-item mx-3">
                <NavHashLink
                  id="contact-link"
                  className="nav-link"
                  to="#contact"
                  activeClassName="nav-active"
                >
                  Contact
                </NavHashLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
