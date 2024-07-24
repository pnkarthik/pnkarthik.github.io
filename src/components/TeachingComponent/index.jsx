import React from "react";
import tableData from "./TeachingTableData.json";

const TeachingComponent = () => {

  return (
    <>
      <div className="pb-5">
        <h2 className="pb-3">Courses taught at IIT Hyderabad</h2>
        <table border={1}>
          <thead>
            <tr>
              <th className="py-2 px-4">Term</th>
              <th className="py-2 px-4">Course Code</th>
              <th className="py-2 px-4">Course Title</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="pb-3">Courses taught at IISc</h2>
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
    </>
  );
};

export default TeachingComponent;