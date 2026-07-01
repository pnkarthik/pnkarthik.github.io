import React from "react";
import data from "./Groups.json";
import StudentTableComponent from "./StudentTableComponent";

const GroupsComponent = () => {
  return (
    <>
      <StudentTableComponent 
        title="Current Students"
        studentData={data?.currentStudents}
        hideInstitute
        hideDepartment
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
