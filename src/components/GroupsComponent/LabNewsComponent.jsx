import LabNewsData from "./labNews.json";
import { getBadgeColor } from "../../utility";
import parse from 'html-react-parser';

const LabNewsComponent = () => {
  return (
     <div className="row alignBaseline">
      <div className="col-md-12">
        <div className="headingFontSize"><span>Lab News</span></div>
        {LabNewsData.map((d, index) => {
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
  )
}

export default LabNewsComponent;
