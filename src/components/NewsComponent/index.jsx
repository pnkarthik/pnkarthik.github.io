import React from "react";
import "../../css/styles.css";
import DOMPurify from "dompurify";
import NewsData from "./NewsContent.json";

const NewsContent = () => {
  const getBadgeColor = (badgeName) => {
    let badgeColor = '';
    switch (badgeName) {
      case 'arxiv':
        badgeColor = "#6495ED";
        break;
      case 'paper':
      case 'thesis':
        badgeColor = "#9FE2BF";
        break;
      case 'xplore':
        badgeColor = "#DE3163";
        break;
      case 'slides':
      case 'certificate':
        badgeColor = "#BDB76B";
        break;
      case 'video':
        badgeColor = "#DDA0DD";
        break;
      default :
        badgeColor = '';
    }
    return badgeColor;
  }

  return (
    <div className="row alignBaseline">
      <div className="col-md-2">
        <hr className="headingBar col-md-8" />
      </div>
      <div className="col-md-10">
        <div className="headingFontSize">News</div>
        {NewsData.map((d, index) => {
          return (
            <div key={index} className="d-flex flex-row newsContainer">
              <div className="badge rounded-pill dateColor col-sm-2 col- dateContainer p-1">{d.date}</div>
              <span className="contentFontSize newsContentPadding">
                <span dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(d.content)} } className="contentPadding"></span>
                {d.badgesData && d.badgesData.map((badge, index) => {
                  return (
                    <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor(badge.badgeName) }}>{badge.badgeDisplayName}</span></a>
                  )
                })}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default NewsContent;