import React from "react";
import "../css/styles.css";
import NewsComponent from "./NewsComponent";

const Home = () => {
  return (
    <>
      <div className="row">
        {/* <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div> */}
        <div className="col-md-12">
          <div className="headingFontSize"><span>About</span><span>Me</span></div>
          <p className="contentFontSize">
            <p className="m-0">
              I am an Assistant Professor in the <a href="https://ai.iith.ac.in/" target="_blank" rel="noopener noreferrer">Department of Artificial Intelligence</a> at the <a href="https://iith.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Technology, Hyderabad</a> (IIT Hyderabad). Prior to this, I was a Research Fellow in the <a href="https://ids.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Institute of Data Science</a> at the <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer">National University of Singapore</a> (NUS),
              where I worked alongside Prof. <a href="https://vyftan.github.io/index.html" target="_blank" rel="noopener noreferrer">Vincent Y. F. Tan.</a> Prior to joining NUS, I obtained the Ph.D. and Master of Science (Engineering) dual degree from the <a href="https://ece.iisc.ac.in" target="_blank" rel="noopener noreferrer">Department of Electrical Communication Engineering</a> at the <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer">Indian Institute of Science</a> (IISc), Bengaluru, where I was fortunate to be advised by Prof. <a href="https://ece.iisc.ac.in/~rajeshs/" target="_blank" rel="noopener noreferrer">Rajesh Sundaresan</a>.
              Much earlier to joining the dual degree programme, I worked as a Project Assistant in Prof. <a href="https://ece.iisc.ac.in/~cmurthy/doku.php?id=home" target="_blank" rel="noopener noreferrer">Chandra R. Murthy</a>'s lab at IISc, where I was introduced to the world of research.
              I hold a Bachelor of Engineering degree in Electronics and Communications from <a href="https://rvce.edu.in/" target="_blank" rel="noopener noreferrer">R V College of Engineering</a>, Bengaluru.
            </p>
          </p>
        </div>
      </div>
      <div className="row alignBaseline">
        {/* <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div> */}
        <div className="col-md-12">
          <div className="headingFontSize"><span>Research</span><span>Interests</span></div>
          <p className="contentFontSize">Multi-armed bandits, statistical learning, federated learning, transfer learning, information theory, sequential analysis, hypothesis testing, Markov decision processes, anomaly detection, stochastic adaptive control</p>
        </div>
      </div>
      <NewsComponent />
    </>
  );
};

export default Home;