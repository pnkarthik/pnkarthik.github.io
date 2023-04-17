import React from "react";
import data from "./TeachingData.json";
import "../../css/styles.css";
import parse from 'html-react-parser';
import { getBadgeColor } from "../../utility";
import Profile from "../common/Profile";

const TeachingComponent = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <Profile />
      <div className="col paddingTop30">
        {data.map((d, index) => {
          return (
            <div className="row alignBaseline seminarsContainerPadding" key={index}>
              <div className="col">
                <span className="headingFontSize">{d.year}</span>
                <div>
                  <div className="d-flex align-items-center">
                    <span className="badge dateColor seminarDateMargin">{d.courseMonth}</span>
                    <span className="contentPadding">{parse(d.title)}</span>
                  </div>
                  <table border={1} className="tablePadding">
                    <tbody>
                      <tr>
                        <td className="tableCellPadding">{d.noOfInstructors > 1 ? 'Course instructors' : 'Course instructor'}</td>
                        <td className="tableCellPadding">{parse(d.courseInstructor)}</td>
                      </tr>
                      <tr>
                        <td className="tableCellPadding">Course website</td>
                        <td className="tableCellPadding breakWord">{parse(d.courseWebsite)}</td>
                      </tr>
                      <tr>
                        <td className="tableCellPadding">Term</td>
                        <td className="tableCellPadding">{d.term}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="headingFontSize"><span>Notes</span></div>
                  <span>{parse(d.notesDesc)}</span>
                  <ul>
                    {d.notesList.map((note, index1) => {
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
        })}
      </div>
    </div>
  );
};

export default TeachingComponent;