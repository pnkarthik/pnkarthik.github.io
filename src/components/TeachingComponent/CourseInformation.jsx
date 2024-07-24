import React from "react";
import { useParams } from "react-router-dom";
import courseData from './TeachingData.json';
import IIScCourse from "./IIScCourse";
import IITHCourse from "./IITHCourse";

const CourseInformation = () => {
  const { courseName } = useParams();
  const data = courseData[courseName];
  const isIISc = data?.isIISc;

  return (
    <div>
      {isIISc ? (
        <IIScCourse data={data} />
      ) : (
        <IITHCourse data={data} />
      )}
    </div>
  );
};

export default CourseInformation;