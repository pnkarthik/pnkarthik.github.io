import React from "react";
import "../css/styles.css";
import NewsComponent from "./NewsComponent";

const Home = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <div className="col-md-4 col-xxl-3"><img src={process.env.PUBLIC_URL + '/images/profile.jpeg'} alt="" width="185px" height="250px" /></div>
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
          <div className="headingFontSize">About Me</div>
          <p className="contentFontSize">
            <p className="m-0">
              I am a research fellow at the <a href="https://ids.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Institute of Data Science</a> of the <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer">National University of Singapore</a> (NUS),
              where I work with Prof. <a href="https://vyftan.github.io/index.html" target="_blank" rel="noopener noreferrer">Vincent Y. F. Tan.</a> Prior to joining NUS, I was a research associate in the <a href="https://ece.iisc.ac.in" target="_blank" rel="noopener noreferrer">Department of ECE</a> at the <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer">Indian Institute of Science, Bangalore,</a> where I worked with Prof. <a href="https://ece.iisc.ac.in/~rajeshs/" target="_blank" rel="noopener noreferrer">Rajesh Sundaresan</a>.
              I was fortunate to have Prof. Rajesh as also my PhD supervisor. My PhD thesis was titled <a href="https://karthikpn.com/wp-content/uploads/2021/11/main.pdf" target="_blank" rel="noopener noreferrer">Sequential Controlled Sensing to Detect an Anomalous Process</a>. Between August 2014 and July 2015, I was a project assistant in Prof. <a href="https://ece.iisc.ac.in/~cmurthy/doku.php?id=home" target="_blank" rel="noopener noreferrer">Chandra R. Murthy</a>‘s lab, where I worked on some aspects of target localisation.
              It was during this stint at IISc that I got introduced to the world of research and got motivated to pursue PhD studies. I am truly grateful to Chandra for nurturing the seed that would later germinate and embrace the wonderful world that research is.
              I graduated with a Bachelor of Engineering in Electronics and Communications from <a href="https://rvce.edu.in/" target="_blank" rel="noopener noreferrer">Rashtreeya Vidyalaya College of Engineering</a> in 2014.
            </p>
          </p>
        </div>
      </div>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <div className="headingFontSize">Research Interests</div>
          <p className="contentFontSize">Markov decision problems, statistical learning, statistical inference, stochastic adaptive control, optimal stopping problems</p>
        </div>
      </div>
      <NewsComponent />
    </div>
  );
};

export default Home;