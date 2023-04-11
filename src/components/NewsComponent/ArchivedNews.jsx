import React from "react";
import "../../css/styles.css";
import NewsData from "./NewsContent.json";
import { getBadgeColor } from "../../utility";
import parse from 'html-react-parser';
import Profile from "../common/Profile";

const ArchivedNews = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <Profile />
      <div className="col paddingTop30">
        <div className="headingFontSize">Archived News</div>
        {NewsData.map((d, index) => {
          return (
            <>
             {d.isArchived && (
                <div key={index} className="d-flex flex-row newsContainer">
                  <div className="badge dateColor p-1">{d.date}</div>
                  <span className="contentFontSize newsContentPadding">
                    <span className="contentPadding">{parse(d.content)}</span><br />
                    {d.badgesData && d.badgesData.map((badge, index) => {
                      return (
                        <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge" style={{ color: getBadgeColor(index), border: `2px solid ${getBadgeColor(index)}` }}>{badge.badgeDisplayName}</span></a>
                      )
                    })}
                  </span>
                </div>
             )}
            </>
          )
        })}
      </div>
    </div>
  );
};

export default ArchivedNews;