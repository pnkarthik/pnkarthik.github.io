import React from "react";
import "../css/styles.css";
import ProfileImage from "../images/profile.jpeg"; 
import NewsComponent from "./NewsComponent";

const Home = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <div className="col-md-4 col-xxl-3"><img src={ProfileImage} alt="" width="185px" height="250px" /></div>
      <div className="d-flex flex-column col-md-8 col-xxl-6">
        <span className="profileName">P. N. Karthik</span>
        <span className="profileDesc">Research Fellow,</span>
        <span className="profileDesc">Institute of Data Science,</span>
        <span className="profileDesc">National University of Singapore</span>
        <a href="https://goo.gl/maps/XJmF4WL223HnTcrWA" target="_blank" className="addressTag" rel="noopener noreferrer">06-12, Block E4, Engineering Drive 3,
          National University of Singapore, 117583</a>
        <div className="fa-2xl socialMediaLinks">
          <a href="mailto:karthik@nus.edu.sg"><button type="button" className="btn btn-primary buttonLineHeight gmailColor">email me</button></a>
          <a href="https://www.linkedin.com/in/pnkarthik/" target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight linkedinColor">linkedin</button></a>
          <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F4lrq7BxwkcnHZtGOnaSDEMBKjl2L2R9_V87cSPMkeXAuIS1GhjaxhV_xHcvmneVgkm1U9TA8Q2NH3mW3H4pbhjxzjV2Xgouv7sD7Kbl4l8JoFYOcw&user=D39u7bkAAAAJ" target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight scholarColor">scholar</button></a>
          <a href={process.env.PUBLIC_URL + '/cv/pnkarthik-cv.pdf'} target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight curriculumVitae">cv</button></a>
        </div>
      </div>
      <div className="row sectionContainer">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <div className="headingFontSize">Research Interests</div>
          <p className="contentFontSize">markov decision problems, statistical inference, stochastic adaptive control, optimal stopping problems</p>
        </div>
      </div>
      <NewsComponent />
    </div>
  );
};

export default Home;