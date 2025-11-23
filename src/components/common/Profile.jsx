import React from "react";
import "../../css/styles.css";

const Profile = () => {
  const isMobile = window.innerWidth <= 991;
  return (
    <div className="profile col-lg-3 col-12 d-flex sticky">
        {isMobile ? (
          <>
            <div className="imageDiv col-lg-12 col-3">
              <a href="/"><img className="profileImage" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" height="240px" width="240px" /></a>
            </div>
            <div className="d-flex flex-column col-6">
              <h3 className="profileName m-0">P. N. Karthik</h3>
              <div className="profileDesc m-0">
                <span>Assistant Professor, IIT Hyderabad</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="imageDiv col-lg-12 col-3">
              <img className="profileImage" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" height="240px" width="240px" />
            </div>
            <div className="d-flex flex-column col-lg-12 col-7">
              <h3 className="profileName">P. N. Karthik</h3>
              <div className="profileDesc d-flex flex-column">
                <span>Assistant Professor,</span>
                <span>Department of Artificial Intelligence,</span>
                <span>IIT Hyderabad</span>
              </div>
            </div>
          </>
        )}
        {isMobile ? (
          <div>
          <div class="dropdown">
            <button class="btn connectBtn" type="button" id="socialLinks" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Connect
            </button>
            <div class="dropdown-menu" aria-labelledby="socialLinks">
              <div className="dropdownItem row flex-row col-12">
                <i className="fa-solid fa-map-marker addressTag col-1 fa-lg socialLink" aria-hidden="true" />
                <a href="https://maps.app.goo.gl/upMF7dmHeHZPCmNCA" className="col" target="_blank" rel="noopener noreferrer">704/A, Academic Block C</a>
              </div>
              <div className="dropdownItem row flex-row col-12">
                <i className="fa-solid fa-envelope gmailColor col-1 fa-lg socialLink" aria-hidden="true" />
                <a href="mailto:pnkarthik@ai.iith.ac.in" className="col" target="_blank" rel="noopener noreferrer">Email Me</a>
              </div>
              <div className="dropdownItem row flex-row col-12">
                <i className="fab fa-linkedin col-1 fa-lg socialLink linkedinColor" aria-hidden="true" />
                <a href="https://www.linkedin.com/in/pnkarthik/" className="col" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
              </div>
              <div className="dropdownItem row flex-row col-12">
                <i className="fa-brands fa-x-twitter twitter col-1 fa-lg socialLink" aria-hidden="true" />
                <a href="https://twitter.com/karthikpn15" className="col" target="_blank" rel="noopener noreferrer">My Twitter</a>
              </div>
              <div className="dropdownItem row flex-row col-12">
                <i className="fa-solid fa-graduation-cap scholarColor col-1 fa-lg socialLink" aria-hidden="true" />
                <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F4lrq7BxwkcnHZtGOnaSDEMBKjl2L2R9_V87cSPMkeXAuIS1GhjaxhV_xHcvmneVgkm1U9TA8Q2NH3mW3H4pbhjxzjV2Xgouv7sD7Kbl4l8JoFYOcw&user=D39u7bkAAAAJ" className="col" target="_blank" rel="noopener noreferrer">My Google Scholar</a>
              </div>
              <div className="dropdownItem row flex-row col-12">
                <i className="fa-solid fa-file-text curriculumVitae col-1 fa-lg socialLink" aria-hidden="true" />
                <a href={process.env.PUBLIC_URL + '/cv/pnkarthik-cv.pdf'} className="col" target="_blank" rel="noopener noreferrer">My Curriculum Vitae</a>
              </div>
            </div>
          </div>
           {/* <div className="connectBtn dropdownItem d-flex gap-2">
           <i className="fa-solid fa-file-text curriculumVitae col-1 fa-lg socialLink" aria-hidden="true" />
           <a href={process.env.PUBLIC_URL + '/cv/pnkarthik-cv.pdf'} className="col" target="_blank" rel="noopener noreferrer">CV</a>
         </div> */}
         </div>
        ) : (
          <div>
            <div className="d-flex flex-column socialLinks">
              <div>
                <i className="fa-solid fa-map-marker addressTag col-1 fa-lg socialLink" aria-hidden="true" />
                <a href="https://maps.app.goo.gl/upMF7dmHeHZPCmNCA" className="col" target="_blank" rel="noopener noreferrer">704/A, Academic Block C</a>
              </div>
              <div>
                <i className="fa-solid fa-envelope gmailColor col-1 fa-lg socialLink" aria-hidden="true" />
                <a href="mailto:pnkarthik@ai.iith.ac.in" className="col-10" target="_blank" rel="noopener noreferrer">Email Me</a>
              </div>
              <div>
                <i className="fab fa-linkedin col-1 fa-lg socialLink linkedinColor" aria-hidden="true" />
                <span><a href="https://www.linkedin.com/in/pnkarthik/" className="col-10" target="_blank" rel="noopener noreferrer">My LinkedIn</a></span>
              </div>
              <div>
                <i className="fa-brands fa-x-twitter twitter col-1 fa-lg socialLink" aria-hidden="true" />
                <span><a href="https://twitter.com/karthikpn15" className="col-10" target="_blank" rel="noopener noreferrer">My Twitter</a></span>
              </div>
              <div>
                <i className="fa-solid fa-graduation-cap scholarColor col-1 fa-lg socialLink" aria-hidden="true" />
                <span><a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F4lrq7BxwkcnHZtGOnaSDEMBKjl2L2R9_V87cSPMkeXAuIS1GhjaxhV_xHcvmneVgkm1U9TA8Q2NH3mW3H4pbhjxzjV2Xgouv7sD7Kbl4l8JoFYOcw&user=D39u7bkAAAAJ" className="col-10" target="_blank" rel="noopener noreferrer">My Google Scholar</a></span>
              </div>
              <div>
                <i className="fa-solid fa-file-text curriculumVitae col-1 fa-lg socialLink" aria-hidden="true" />
                <span><a href={process.env.PUBLIC_URL + '/cv/pnkarthik-cv.pdf'} className="col-10" target="_blank" rel="noopener noreferrer">My Curriculum Vitae</a></span>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default Profile;