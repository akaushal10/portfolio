import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import ProjectCarousel from "../components/ProjectsCarousel";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Projects";
import { useDispatch, useSelector } from "react-redux";
import { requestUserData } from "../redux/actions/actions";
import Services from "../components/Services";

const Portfolio = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.data);
  console.log("USerData : ", userData);
  useEffect(()=>{
    dispatch(requestUserData())
  },[])
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Navbar />
        <Introduction
          name={userData.name}
          highlights={userData.highlights}
          age={userData.age}
          phone={userData.phone}
          email={userData.email}
          address= {userData.address}
          socialLinks={userData.socialLinks}
        />
        <Header about={userData.about} resumeFile={userData.resumeFile} />
        <Resume resumeData={userData.resume} />
        <Project projects={userData.projects} />
        {/* <ProjectCarousel /> */}
        <Services/>
        <Footer contact={userData.contact} contactLinks={userData.contactLinks} />
      </Grid>
    </>
  );
};

export default Portfolio;
