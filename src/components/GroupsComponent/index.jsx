import React from "react";
import data from "./Groups.json";
import StudentProfileComponent from "./StudentProfileComponent";
import StudentTableComponent from "./StudentTableComponent";

const GroupsComponent = () => {
  return (
    <>
      <StudentTableComponent 
        title="Current Students"
        studentData={data?.currentStudents}
      />
      
      <StudentTableComponent 
        title="Alumni"
        studentData={data?.alumni}
      />
    </>
  );
};

export default GroupsComponent;