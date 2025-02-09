import React from "react";
import tableData from "./TeachingTableData.json";

const TeachingComponent = () => {

  return (
    <>
      <div className="pb-5 w-100 max-w-100">
        <h2 className="pb-3">Teaching at IIT Hyderabad</h2>
        <div className="w-100 max-w-100 overflow-auto">
          <table border={1}>
            <thead>
              <tr>
                <th className="py-2 px-4">Term</th>
                <th className="py-2 px-4">Course Code</th>
                <th className="py-2 px-4">Course Title</th>
                <th className="py-2 px-4">No of Students</th>
                <th className="py-2 px-4">Course Rating</th>
                <th className="py-2 px-4">Instructor Rating</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.iith?.map((data) => (
                <tr>
                  <td className="py-2 px-4">{data?.term}</td>
                  <td className="py-2 px-4">{data?.courseCode}</td>
                  <td className="py-2 px-4">
                    <a href={data?.courseLink} target="_blank" rel="noopener noreferrer">{data?.courseTitle}</a>
                  </td>
                  <td className="py-2 px-4">{data?.noOfStudents}</td>
                  <td className="py-2 px-4">{data?.courseRating}</td>
                  <td className="py-2 px-4">{data?.instructorRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-100 max-w-100">
        <h2 className="pb-3">Teaching at IISc</h2>
        <div className="w-100 max-w-100 overflow-auto">
          <table border={1}>
            <thead>
              <tr>
                <th className="py-2 px-4">Term</th>
                <th className="py-2 px-4">Course Code</th>
                <th className="py-2 px-4">Course Title</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.iisc?.map((data) => (
                <tr>
                  <td className="py-2 px-4">{data?.term}</td>
                  <td className="py-2 px-4">{data?.courseCode}</td>
                  <td className="py-2 px-4">
                    <a href={data?.courseLink} target="_blank" rel="noopener noreferrer">{data?.courseTitle}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeachingComponent;