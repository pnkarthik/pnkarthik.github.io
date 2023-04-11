import React from "react";
import data from "./TalksAndSeminarsData.json";
import "../../css/styles.css";
import parse from 'html-react-parser';
import { getBadgeColor } from "../../utility";
import { MathJax } from "better-react-mathjax";
import Profile from "../common/Profile";

const TalksAndSeminars = () => {
  return (
    <MathJax>
      <div className="row col-12 p-0 m-0">
        <Profile />
        <div className="col paddingTop30">
          {Object.keys(data).sort().reverse().map((year, index) => {
            return (
              <div className="row alignBaseline seminarsContainerPadding" key={index}>
                <div className="col-md-10">
                  <span className="headingFontSize">{year}</span>
                    {data[year].map((d, index1) => {
                      return (
                        <div key={index1} className="seminarsContentPadding d-flex flex-row alignBaseline">
                          <span class="badge dateColor seminarDateMargin p-1 seminarDate">{d.date}</span>
                          <span className="contentFontSize newsContentPadding">
                            <span className="contentPadding">{parse(d.title)}</span><br />
                            <span>{parse(d.description)}</span><br />
                            {d.badgesData && d.badgesData.map((badge, index) => {
                              return (
                                <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge" style={{ color: getBadgeColor(index), border: `2px solid ${getBadgeColor(index)}` }}>{badge.badgeDisplayName}</span></a>
                              )
                            })}
                          </span>
                        </div>
                      )
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MathJax>
  );
};

export default TalksAndSeminars;