import React from "react";
import parse from 'html-react-parser';
import "../../css/styles.css";

const Publication = (props) => {
  return (
    <div className="col">
      <p className="headingFontSize">{props.heading}</p>
      <ol>
        {props.data.map((d, index) => {
          return (
            <li key={index}>
              <div className="contentPadding">{parse(d.title)}</div>
              <div>{parse(d.authors)}</div>
              {d.status && <div>{parse(d.status)}</div>}
              {d.hasAbstract && (
                <><span className="badge abstractBadge abstractMargin dataBadge" data-bs-toggle="collapse" data-bs-target={`#${d.id}`} aria-expanded="false" aria-controls="publication" style={{ "--backgroundColor": props.getBadgeColor(0) }}>abstract</span></>
              )}
              {d.badgesData && d.badgesData.map((badge, index) => {
                return (
                  <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge dataBadge" style={{ "--backgroundColor": props.getBadgeColor(index+1) }}>{badge.badgeDisplayName}</span></a>
                )
              })}
              {d.hasAbstract && (
                <div className="collapse abstractContentPadding" id={d.id}>
                  <div className="card card-body">
                    {parse(d.abstract)}
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default Publication;