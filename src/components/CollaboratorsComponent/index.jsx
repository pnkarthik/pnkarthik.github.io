import React from "react";
import data from "../PublicationsComponent/Publications.json";
import './collaborators.css';

const CollaboratorsComponent = () => {
  const isMobile = window.innerWidth <= 991;

  const CurrentAndPastCollaborators = ({ title, collabData }) => {
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
                // <div className="card bg-blue col-xl-3 col-lg-4 col-md-4" key={index}>
                //   <div className="">
                //     <img className="" height="200px" width="170px" src={process.env.PUBLIC_URL + `/images/CollaboratorsPhotos/${collab?.photo}`} alt="Card image cap" />
                //   </div>
                //   <div className="card-body">
                //     <a href={collab?.websiteLink} target="_blank" className="card-title">{collab?.name}</a>
                //   </div>
                // </div>
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

  return (
    <>
      <p className="contentFontSize">For me, one of the most rewarding aspects of pursuing academic research has been the opportunity to engage in a diverse range of disciplines, spanning both applied and theoretical domains. I have been fortunate to forge fruitful collaborative relationships with some brilliant minds listed below. As a researcher, I am committed to strengthening these relationships, while also seeking new opportunities to learn and grow.</p>
      <CurrentAndPastCollaborators 
        title='' 
        collabData={data?.collaborators} 
      />
    </>
  );
};

export default CollaboratorsComponent;