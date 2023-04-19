import React from "react";
import "../../css/styles.css";
import data from "./Bio.json";
import parse from 'html-react-parser';
import { getBadgeColor} from "../../utility";
import Profile from "../common/Profile";

const Bio = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <Profile />
      <div className="col paddingTop30">
        <div className="row alignBaseline">
          <div className="col">
            <p className="headingFontSize"><span>Education</span></p>
            {data["education"].map((d,  index) => {
              return (
                <div className="d-flex flex-row eduElementPadding" key={index}>
                  <div className="logoImagePadding">
                    <img src={`${d.imageUrl}`} alt="" className="bioImage" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>
                      <span className="contentPadding">{d.description}</span>
                      <div className="badge dateColor p-1">{d.year}</div>
                    </span>
                    <span>{parse(d.collegeName)}</span>
                    {d.department && (
                      <span>Department: <a href="https://ece.iisc.ac.in" target="_blank" rel="noopener noreferrer">{d.department}</a></span>
                    )}
                    {d.supervisor && (
                      <span>Supervisor: {parse(d.supervisor)}</span>
                    )}
                    {d.thesisTitle && (
                      <span>
                        <span>Thesis: {d.thesisTitle}</span>
                      </span>
                    )}
                    {d.major && (
                      <span>Major: {d.major}</span>
                    )}
                    {d.gpa && (
                      <span>GPA: {parse(d.gpa)}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row alignBaseline">
          <div className="col">
            <p className="headingFontSize"><span>Experience</span></p>
            {data["experience"].map((d, index) => {
              return (
                <div className="d-flex flex-row eduElementPadding" key={index}>
                  <div className="logoImagePadding">
                    <img src={`${d.imageUrl}`} alt="" height="80px" width="80px" className="bioImage" />
                  </div>
                  <div className="d-flex flex-column">
                    <span>
                      <span className="contentPadding">{d.title}</span>
                      <div className="badge dateColor p-1">{d.year}</div>
                    </span>
                    <span>{parse(d.collegeName)}</span>
                    {d.project && (
                      <span>Project: {d.project}</span>
                    )}
                    {d.supervisor && (
                      <span>Supervisor: {parse(d.supervisor)}</span>
                    )}
                    {d.mentor && (
                      <span>{d.noOfMentors > 1 ? "Mentors" : "Mentor"}: {parse(d.mentor)}</span>
                    )}
                    {d.courseInstructor && (
                      <span>Course Instructors: {parse(d.courseInstructor)}</span>
                    )}
                    {d.description && (
                      <ul>
                        {d.description.map((desc) => {
                          return (
                            <li>{desc}</li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row alignBaseline">
          <div className="col">
            <p className="headingFontSize"><span>Awards</span><span>And</span><span>Honors</span></p>
            <ul>
              {data.awardsAndHonors.map((d, index) => {
                return (
                  <div>
                    <li key={index}>
                      <span className="contentPadding">{parse(d.title)}</span> 
                      {d.badgesData && d.badgesData.map((badge, index) => {
                      return (
                        <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge dataBadge" style={{ "--backgroundColor": getBadgeColor(index) }}>{badge.badgeDisplayName}</span></a>
                      )
                    })} 
                    </li> 
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row alignBaseline">
          <div className="col">
            <p className="headingFontSize"><span>Professional</span><span>Service</span></p>
            <ul>
              {data.professionalService.map((d, index) => {
                return (
                  <li key={index}>{d.title}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;