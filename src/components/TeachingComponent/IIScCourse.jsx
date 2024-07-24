import React from "react";
import parse from 'html-react-parser';
import { getBadgeColor } from "../../utility";

const IIScCourse = ({ data }) => {
  return (
    <div className="row alignBaseline seminarsContainerPadding">
      <div className="col">
        <span className="headingFontSize">{data.year}</span>
        <div>
          <div className="d-flex align-items-center">
            <span className="badge dateColor seminarDateMargin">{data.courseMonth}</span>
            <span className="contentPadding">{parse(data.title)}</span>
          </div>
          <table border={1} className="tablePadding">
            <tbody>
              <tr>
                <td className="tableCellPadding">{data.noOfInstructors > 1 ? 'Course instructors' : 'Course instructor'}</td>
                <td className="tableCellPadding">{parse(data.courseInstructor)}</td>
              </tr>
              <tr>
                <td className="tableCellPadding">Course website</td>
                <td className="tableCellPadding breakWord">{parse(data.courseWebsite)}</td>
              </tr>
              <tr>
                <td className="tableCellPadding">Term</td>
                <td className="tableCellPadding">{data.term}</td>
              </tr>
            </tbody>
          </table>
          <div className="headingFontSize"><span>Notes</span></div>
          <span>{parse(data.notesDesc)}</span>
          <ul>
            {data.notesList.map((note, index1) => {
              return (
                <li key={index1}>
                  <span className="noteTitlePadding">{parse(note.title)}</span>
                  {note.badgesData && note.badgesData.map((badge, index2) => {
                      return (
                        <a key={index2} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge dataBadge" style={{ "--backgroundColor": getBadgeColor(index2) }}>{badge.badgeDisplayName}</span></a>
                      )
                    })
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IIScCourse;