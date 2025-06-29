import React from "react";
import data from "../PublicationsComponent/Publications.json";
import './collaborators.css';
import CollaboratorProfileComponent from "../common/CollaboratorProfileComponent";

const CollaboratorsComponent = () => {
  return (
    <>
      <p className="contentFontSize">For me, one of the most rewarding aspects of pursuing academic research has been the opportunity to engage in a diverse range of disciplines, spanning both applied and theoretical domains. I have been fortunate to forge fruitful collaborative relationships with some brilliant minds listed below. As a researcher, I am committed to strengthening these relationships, while also seeking new opportunities to learn and grow.</p>
      <CollaboratorProfileComponent 
        title='' 
        collabData={data?.collaborators} 
      />
    </>
  );
};

export default CollaboratorsComponent;