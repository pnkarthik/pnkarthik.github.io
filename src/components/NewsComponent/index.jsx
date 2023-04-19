import React from "react";
import "../../css/styles.css";
import NewsData from "./NewsContent.json";
import { getBadgeColor } from "../../utility";
import parse from 'html-react-parser';

const NewsContent = () => {
  return (
    <div className="row alignBaseline">
      {/* <div className="col-md-2">
        <hr className="headingBar col-md-8" />
      </div> */}
      <div className="col-md-12">
        <div className="headingFontSize"><span>News</span>(<a href="#/archivedNews" target="_blank" rel="noopener noreferrer"><span className="px-0">Archived</span></a>)</div>
        {NewsData.map((d, index) => {
          return (
            <>
              {!d.isArchived && (
                <div key={index} className="d-flex flex-row newsContainer">
                  <div className="talkDate newsDateContainer">
                    <div className="badge dateColor p-1 newsDate">{d.date}</div>
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

export default NewsContent;