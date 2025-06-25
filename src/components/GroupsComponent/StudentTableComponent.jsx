import React from "react";
import "../CollaboratorsComponent/collaborators.css";

const StudentTableComponent = ({ title, studentData }) => {
  if (!studentData || studentData.length === 0) return null;

  return (
    <div className="row alignBaseline">
      <div className="col">
        <p className="headingFontSize bg-blue">
          <span>{title}</span>
        </p>
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle w-100">
            <thead className="thead-light">
              <tr>
                <th style={{ width: "10%" }}>Photo</th>
                <th style={{ width: "22%" }}>Name</th>
                <th style={{ width: "15%" }}>Department</th>
                <th style={{ width: "18%" }}>Institute</th>
                <th style={{ width: "18%" }}>Program</th>
                <th style={{ width: "17%" }}>Engagement</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((person, index) => (
                <tr key={index}>

                  {/* PHOTO COLUMN */}
                  <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    <img
                      src={process.env.PUBLIC_URL + `/images/StudentPhotos/${person.photo || "default-user.png"}`}
                      alt={person.fullName}
                      className="rounded-circle"
                      style={{ width: "70px", height: "70px", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = process.env.PUBLIC_URL + "/images/StudentPhotos/default-user.png";
                      }}
                    />
                  </td>

                  {/* NAME COLUMN */}
                  <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    <div className="font-weight-bold" style={{ fontSize: "1rem" }}>
                      {person.websiteLink ? (
                        <a href={person.websiteLink} target="_blank" rel="noopener noreferrer">
                          {person.fullName}
                        </a>
                      ) : (
                        person.fullName
                      )}
                    </div>
                  </td>

                  {/* DEPARTMENT COLUMN */}
                  <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    {person.department}
                  </td>

                  {/* INSTITUTE COLUMN */}
                  <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    {person.institute}
                  </td>

                  {/* PROGRAM + BATCH COLUMN */}
                  <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    {person.program}
                    <div className="text-muted" style={{ fontSize: "0.875rem" }}>
                      Batch of {person.batch}
                    </div>
                  </td>

                  {/* ENGAGEMENT COLUMN */}
                  <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                      <div className="talkDate newsDateContainer">
                        <div className="badge dateColor p-1 newsDate">
                          {person.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.875rem" }}>
                      {person.role}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTableComponent;
