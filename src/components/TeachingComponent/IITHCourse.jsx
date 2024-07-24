import React from "react";
import parse from 'html-react-parser';
import { getBadgeColor } from "../../utility";

const IITHCourse = ({ data }) => {
  const isMobile = window.innerWidth <= 991;
  const tableContents = [
    { title: data.noOfInstructors > 1 ? 'Course instructors' : 'Course instructor', content: parse(data.courseInstructor)},
    { title: 'Term', content: data.term },
    { title: 'Segment', content: data.segment },
    { title: 'Timetable Slot', content: data.timeTableSlot },
    { title: 'Class Hours', content: data.classHours },
    { title: 'No of Credits', content: data.noOfCredits }
  ];

  return (
    <div className="row alignBaseline seminarsContainerPadding">
      <div className="col">
        <div className="headingFontSize">{parse(data.title)}</div>
        <div>
          <table border={1} className="tablePadding">
            <tbody>
              {tableContents?.map((tData) => (
                <tr>
                  <td className="tableCellPadding">{tData?.title}</td>
                  <td className="tableCellPadding">{tData?.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="paddingTop30">
          {data?.courseContents?.map((course) => (
            <div>
              <div className="headingFontSize">{course?.title}</div>
              {course?.description && (
                <span>{parse(data.notesDesc)}</span>
              )}
              {course?.isCard ? (
                 <div className="row col-12">      
                  {course?.list.map((d, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-4 col-6 flex-col" key={index}>
                      <div className="collaboratorCard">
                        <div className="collabImageContainer">
                          <div className="collabImageWrapper">
                            <div className="collabImage">
                              <img className="" src={process.env.PUBLIC_URL + `/images/TeachingAssistantsPhotos/${d?.profilePhoto}`} alt="Card image cap" />
                            </div>
                          </div>
                        </div>
                        <div className={`text-center ${isMobile ? '' : 'pt-2'}`}>
                          <a href={d?.link} target="_blank" className="card-title">{d?.name}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ol>
                  {course.list.map((note, index1) => {
                    return (
                      <li key={index1}>
                        {note?.authors ? (
                          <>
                            <div className="noteTitlePadding">{parse(note.title)}</div>
                            <div>{note?.authors}</div>
                            {note?.description && (
                              <div>{note?.description}</div>
                            )}
                          </>
                        ) : (
                          <>
                            <span className="noteTitlePadding">{parse(note.title)}</span>
                          </>
                        )}
                        {note.badgesData && note.badgesData.map((badge, index2) => {
                          return (
                            <a key={index2} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge dataBadge" style={{ "--backgroundColor": getBadgeColor(index2) }}>{badge.badgeDisplayName}</span></a>
                          )
                        })}
                      </li>
                    )
                  })}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IITHCourse;