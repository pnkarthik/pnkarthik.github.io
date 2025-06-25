import React from "react";
import "../CollaboratorsComponent/collaborators.css";

const CollaboratorProfileComponent = ({ title, collabData }) => {
  const isMobile = window.innerWidth <= 991;

  return (
    <div className="row alignBaseline">
      <div className="col">
        <p className="headingFontSize bg-blue">
          <span>{title}</span>
          <span>Collaborators</span>
        </p>
        <div className="row col-12">
          {collabData?.map((collab, index) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-4 col-6 flex-col" key={index}>
                <div className="collaboratorCard">
                  <div className="collabImageContainer">
                    <div className="collabImageWrapper">
                      <div className="collabImage">
                        <img className="" src={process.env.PUBLIC_URL + `/images/CollaboratorsPhotos/${collab?.photo}`} alt="Card image cap" />
                      </div>
                    </div>
                  </div>
                  <div className={`text-center ${isMobile ? '' : 'pt-2'}`}>
                    <a href={collab?.websiteLink} target="_blank" className="card-title">{collab?.name}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollaboratorProfileComponent