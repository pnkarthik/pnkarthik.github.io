import React from "react";
import data from "./Groups.json";
import StudentProfileComponent from "./StudentProfileComponent";
import StudentTableComponent from "./StudentTableComponent";
import LabNewsComponent from "./LabNewsComponent";

const GroupsComponent = () => {
  return (
    <>
      <StudentTableComponent 
        title="Current Students"
        studentData={data?.currentStudents}
        hideInstitute
      />

      <StudentTableComponent 
        title="Alumni (Students)"
        studentData={data?.alumniStudents}
        showNextHop
        showDissertation
        hideInstitute
        hideDepartment
        centerEngagementRole
      />
      
      <StudentTableComponent 
        title="Alumni (Other)"
        studentData={data?.alumni}
      />
    </>
  );
};

export default GroupsComponent;
