import React from "react";
import "../../css/styles.css";
import NewsData from "./NewsContent.json";
import { getBadgeColor } from "../../utility";
import parse from 'html-react-parser';

const ArchivedNews = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <div className="col paddingTop30">
        <div className="headingFontSize"><span>Archived</span><span>News</span></div>
        {NewsData.map((d, index) => {
          return (
            <>
             {d.isArchived && (
                <div key={index} className="d-flex flex-row newsContainer">
                  <div className="talkDate newsDateContainer">
                    <span className="badge dateColor p-1 newsDate">{d.date}</span>
                  </div>
                  <span className="contentFontSize newsContentPadding">
                    <p className="contentPadding mb-0">{parse(d.content)}</p>
                    {d.badgesData && d.badgesData.map((badge, index) => {
                      return (
                        <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge dataBadge" style={{ "--backgroundColor": getBadgeColor(index) }}>{badge.badgeDisplayName}</span></a>
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