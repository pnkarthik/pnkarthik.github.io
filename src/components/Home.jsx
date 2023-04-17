import React from "react";
import "../css/styles.css";
import NewsComponent from "./NewsComponent";
import Profile from "./common/Profile";
import cn from "classnames";

const Home = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <Profile />
      <div className="col paddingTop30">
        <div className="row">
          {/* <div className="col-md-2">
            <hr className="headingBar col-md-8" />
          </div> */}
          <div className="col-md-12">
            <div className="headingFontSize"><span>About</span><span>Me</span></div>
            <p className="contentFontSize">
              <p className="m-0">
                I am a Research Fellow in the <a href="https://ids.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Institute of Data Science</a> at the <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer">National University of Singapore</a> (NUS),
                where I am supervised by Prof. <a href="https://vyftan.github.io/index.html" target="_blank" rel="noopener noreferrer">Vincent Y. F. Tan.</a> Prior to joining NUS, I obtained the Ph.D. and Master of Science (Engineering) dual degree from the <a href="https://ece.iisc.ac.in" target="_blank" rel="noopener noreferrer">Department of Electrical Communication Engineering</a> at the <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer">Indian Institute of Science</a> (IISc), Bengaluru, with Prof. <a href="https://ece.iisc.ac.in/~rajeshs/" target="_blank" rel="noopener noreferrer">Rajesh Sundaresan</a> as my supervisor.
                Much earlier to joining for the dual degree programme, I worked as a Project Assistant in Prof. <a href="https://ece.iisc.ac.in/~cmurthy/doku.php?id=home" target="_blank" rel="noopener noreferrer">Chandra R. Murthy</a>'s lab.
                It was during this stint at IISc that Prof. Chandra introduced me to the world of research and subsequently motivated me to take up Ph.D. studies. I am truly grateful to Prof. Chandra for nurturing the seed that would later germinate and embrace the wonderful world that research is.
                I also hold a Bachelor of Engineering degree in Electronics and Communications from <a href="https://rvce.edu.in/" target="_blank" rel="noopener noreferrer">R V College of Engineering</a>.
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
            <p className="contentFontSize">Markov decision problems, statistical learning, multi-armed bandits, statistical inference, stochastic adaptive control, optimal stopping problems, federated learning</p>
          </div>
        </div>
        <NewsComponent />
      </div>
    </div>
  );
};

export default Home;