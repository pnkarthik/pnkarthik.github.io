import React from "react";
import "../CollaboratorsComponent/collaborators.css";

const StudentTableComponent = ({
  title,
  studentData,
  showNextHop = false,
  showDissertation = false,
  hideInstitute = false,
  hideDepartment = false,
  centerEngagementRole = false,
}) => {
  if (!studentData || studentData.length === 0) return null;

  const columnWidths = (() => {
    if (hideDepartment && hideInstitute && showNextHop && showDissertation) {
      return {
        photo: "8%",
        name: "22%",
        program: "18%",
        engagement: "18%",
        nextHop: "15%",
        dissertation: "19%",
      };
    }

    if (hideInstitute && showNextHop && showDissertation) {
      return {
        photo: "7%",
        name: "19%",
        department: "12%",
        program: "16%",
        engagement: "17%",
        nextHop: "14%",
        dissertation: "15%",
      };
    }

    if (hideInstitute && showNextHop) {
      return {
        photo: "8%",
        name: "21%",
        department: "14%",
        program: "18%",
        engagement: "19%",
        nextHop: "20%",
      };
    }

    if (hideInstitute) {
      return {
        photo: "10%",
        name: "26%",
        department: "18%",
        program: "24%",
        engagement: "22%",
      };
    }

    if (showNextHop) {
      return {
        photo: "8%",
        name: "18%",
        department: "12%",
        institute: "15%",
        program: "15%",
        engagement: "15%",
        nextHop: "17%",
        dissertation: "17%",
      };
    }

    return {
      photo: "10%",
      name: "22%",
      department: "15%",
      institute: "18%",
      program: "18%",
      engagement: "17%",
      dissertation: "17%",
    };
  })();

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
                <th style={{ width: columnWidths.photo }}>Photo</th>
                <th style={{ width: columnWidths.name }}>Name</th>
                {!hideDepartment && <th style={{ width: columnWidths.department }}>Department</th>}
                {!hideInstitute && <th style={{ width: columnWidths.institute }}>Institute</th>}
                <th style={{ width: columnWidths.program }}>Program</th>
                <th style={{ width: columnWidths.engagement }}>Engagement</th>
                {showNextHop && <th style={{ width: columnWidths.nextHop }}>Next Hop</th>}
                {showDissertation && <th style={{ width: columnWidths.dissertation }}>Dissertation</th>}
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
                    <div className="text-muted" style={{ fontSize: "0.875rem" }} dangerouslySetInnerHTML={{ __html: person.jointSupervision }} />
                  </td>

                  {!hideDepartment && (
                    <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                      {person.department}
                    </td>
                  )}

                  {!hideInstitute && (
                    <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                      {person.institute}
                    </td>
                  )}

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
                    <div
                      className="text-muted"
                      style={{
                        fontSize: "0.875rem",
                        textAlign: centerEngagementRole ? "center" : undefined,
                        width: centerEngagementRole ? "100%" : undefined,
                      }}
                    >
                      {person.role}
                    </div>
                  </td>

                  {showNextHop && (
                    <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                      {person.nextHop}
                    </td>
                  )}

                  {showDissertation && (
                    <td className="align-middle text-center" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                      {person.dissertationLink ? (
                        <a href={person.dissertationLink} target="_blank" rel="noopener noreferrer">
                          {person.dissertationTitle || "Link"}
                        </a>
                      ) : (
                        person.dissertationTitle
                      )}
                    </td>
                  )}

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
