import React from "react";
import "../../css/styles.css";

const Profile = () => {
  return (
    <div className="profile col-lg-3 col-12 d-flex flex-column">
      <img className="profileImage" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" height="240px" width="240px" />
      <div className="d-flex flex-column">
        <h3 className="profileName">P. N. Karthik</h3>
        <div className="profileDesc d-flex flex-column">
          <span>Research Fellow,</span>
          <span>Institute of Data Science,</span>
          <span>National University of Singapore</span>
        </div>
        {/* <a href="https://goo.gl/maps/XJmF4WL223HnTcrWA" target="_blank" className="addressTag" rel="noopener noreferrer">#06-12, Block E4, Engineering Drive 3,
          National University of Singapore, 117583</a>
        <div className="fa-2xl socialMediaLinks">
          <a href="mailto:karthik@nus.edu.sg"><button type="button" className="btn btn-primary buttonLineHeight gmailColor">email me</button></a>
          <a href="https://www.linkedin.com/in/pnkarthik/" target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight linkedinColor">linkedin</button></a>
          <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F4lrq7BxwkcnHZtGOnaSDEMBKjl2L2R9_V87cSPMkeXAuIS1GhjaxhV_xHcvmneVgkm1U9TA8Q2NH3mW3H4pbhjxzjV2Xgouv7sD7Kbl4l8JoFYOcw&user=D39u7bkAAAAJ" target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight scholarColor">scholar</button></a>
          <a href={process.env.PUBLIC_URL + '/cv/pnkarthik-cv.pdf'} target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight curriculumVitae">cv</button></a>
        </div> */}
        <div className="d-flex flex-column socialLinks">
          <div>
            <i class="fa-solid fa-map-marker addressTag col-1 fa-lg socialLink" aria-hidden="true" />
            <a href="https://goo.gl/maps/XJmF4WL223HnTcrWA" className="col-10" target="_blank" rel="noopener noreferrer">Singapore</a>
          </div>
          <div>
            <i class="fa-solid fa-envelope gmailColor col-1 fa-lg socialLink" aria-hidden="true" />
            <a href="mailto:karthik@nus.edu.sg" className="col-10" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
          <div>
            <i class="fab fa-linkedin col-1 fa-lg socialLink linkedinColor" aria-hidden="true" />
            <span><a href="https://www.linkedin.com/in/pnkarthik/" className="col-10" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>
          <div>
            <i class="fa-solid fa-graduation-cap scholarColor col-1 fa-lg socialLink" aria-hidden="true" />
            <span><a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F4lrq7BxwkcnHZtGOnaSDEMBKjl2L2R9_V87cSPMkeXAuIS1GhjaxhV_xHcvmneVgkm1U9TA8Q2NH3mW3H4pbhjxzjV2Xgouv7sD7Kbl4l8JoFYOcw&user=D39u7bkAAAAJ" className="col-10" target="_blank" rel="noopener noreferrer">Google Scholar</a></span>
          </div>
          <div>
            <i class="fa-solid fa-file-text curriculumVitae col-1 fa-lg socialLink" aria-hidden="true" />
            <span><a href={process.env.PUBLIC_URL + '/cv/pnkarthik-cv.pdf'} className="col-10" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;