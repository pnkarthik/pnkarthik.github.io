import React from "react";
import tableData from "./TeachingTableData.json";

const Courses = () => {
  return (
    <>
      <div className="col">
        <p></p>
        <p className="headingFontSize">Teaching at IIT Hyderabad</p>
        <div className="w-100 max-w-100 overflow-auto">
          <table border={1}>
            <thead>
              <tr>
                <th className="py-2 px-4">Term</th>
                <th className="py-2 px-4">Code</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Enrolment</th>
                <th className="py-2 px-4">Course Rating</th>
                <th className="py-2 px-4">Instructor Rating</th>
                <th className="py-2 px-4">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.iith?.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">
                    {/* Reusing badge/button snippet for displaying term */}
                    <div className="d-flex flex-row newsContainer">
                      <div className="talkDate newsDateContainer">
                        <div className="badge dateColor p-1 newsDate">
                          {data?.term}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{data?.courseCode}</td>
                  <td className="py-2 px-4">
                    <a
                      href={data?.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data?.courseTitle}
                    </a>
                  </td>
                  <td className="py-2 px-4">{data?.noOfStudents}</td>
                  <td className="py-2 px-4">{data?.courseRating}</td>
                  <td className="py-2 px-4">{data?.instructorRating}</td>
                  <td className="py-2 px-4">
                    <a
                      href={data?.feedback}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Comments
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col">
        <p></p>
        <p className="headingFontSize">Teaching at IISc</p>
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
              {tableData?.iisc?.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">
                    {/* Wrap the term in a badge container */}
                    <div className="d-flex flex-row newsContainer">
                      <div className="talkDate newsDateContainer">
                        <div className="badge dateColor p-1 newsDate">
                          {data?.term}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{data?.courseCode}</td>
                  <td className="py-2 px-4">
                    <a
                      href={data?.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data?.courseTitle}
                    </a>
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

export default Courses;
