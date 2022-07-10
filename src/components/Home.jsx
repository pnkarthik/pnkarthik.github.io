import React from "react";
import "../css/styles.css";
import ProfileImage from "../images/profile.jpeg"; 

const Home = () => {
  return (
    <div class="contentContainer">
      <div class="container col-md-6">
        <div class="row col-12 p-0 m-0">
          <div class="col-md-4"><img src={ProfileImage} alt="" width="215px" height="300px" /></div>
          <div class="d-flex flex-column col-md-6">
            <span class="fontSize36">P. N. Karthik</span>
            <span class="fontSize25">Research Fellow,</span>
            <span class="fontSize25">Institute of Data Science,</span>
            <span class="fontSize25">National University of Singapore</span>
            <a href="https://goo.gl/maps/XJmF4WL223HnTcrWA" target="_blank" class="addressTag" rel="noopener noreferrer">06-12, Block E4, Engineering Drive 3,
              National University of Singapore
              Singapore 117583</a>
            <div class="fa-2xl socialMediaLinks">
              <a href="mailto:karthik@nus.edu.sg"><i class="fa fa-envelope gmailColor"></i></a>
              <a href="https://www.linkedin.com/in/pnkarthik/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin linkedinColor"></i></a>
              <a href="https://www.youtube.com/channel/UCK2ogVOxtEXzCmMWT4DsaNw" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube youtubeColor"></i></a>
              <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F4lrq7BxwkcnHZtGOnaSDEMBKjl2L2R9_V87cSPMkeXAuIS1GhjaxhV_xHcvmneVgkm1U9TA8Q2NH3mW3H4pbhjxzjV2Xgouv7sD7Kbl4l8JoFYOcw&user=D39u7bkAAAAJ" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"></i></a>
            </div>
          </div>
          <div>
            <p class="infoSection m-0">
              I am a research fellow at the <a href="https://ids.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Institute of Data Science</a> of the <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer">National University of Singapore</a> (NUS),
              where I work with <a href="https://vyftan.github.io/index.html" target="_blank" rel="noopener noreferrer">Prof. Vincent Y. F. Tan.</a> Prior to joining NUS, I was a research associate in the <a href="https://ece.iisc.ac.in" target="_blank" rel="noopener noreferrer">Department of ECE</a> at the <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer">Indian Institute of Science, Bangalore,</a> where I worked with <a href="https://ece.iisc.ac.in/~rajeshs/" target="_blank" rel="noopener noreferrer">Prof. Rajesh Sundaresan</a>.
              I was fortunate to have Prof. Rajesh as also my PhD supervisor. My PhD thesis was titled <a href="https://karthikpn.com/wp-content/uploads/2021/11/main.pdf" target="_blank" rel="noopener noreferrer">Sequential Controlled Sensing to Detect an Anomalous Process</a>.
            </p>
            <p class="infoSection m-0">
              My research interests are in the areas of information theory, statistical learning theory, detection and estimation theory, and information geometry.
            </p>
            <p class="infoSection m-0">
              Between August 2014 and July 2015, I was a project assistant in Prof. <a href="https://ece.iisc.ac.in/~cmurthy/doku.php?id=home" target="_blank" rel="noopener noreferrer">Chandra R. Murthy</a>‘s lab, where I worked on some aspects of target localisation.
              It was during this stint at IISc that I got introduced to the world of research and got motivated to pursue PhD studies. I am truly grateful to Chandra for nurturing the seed that would later germinate and embrace the wonderful world that research is.
              I graduated with a Bachelor of Engineering in Electronics and Communications from <a href="https://rvce.edu.in/" target="_blank" rel="noopener noreferrer">Rashtreeya Vidyalaya College of Engineering</a> in 2014.
            </p>
            <p class="infoSection m-0">
              I love to travel the world and learn about the different cultures that mankind has come to know over the years. I have an intense passion for teaching. I also possess a keen interest in Carnatic classical music in its slow-paced form that places emphasis on bringing out the right mood ingrained with the lyrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;