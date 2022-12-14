import React from "react";
import parse from 'html-react-parser';
import "../../css/styles.css";

const Publication = (props) => {
  return (
    <div className="row alignBaseline">
      <div className="col-md-2">
        <hr className="headingBar col-md-8" />
      </div>
      <div className="col-md-10">
        <p className="headingFontSize">{props.heading}</p>
        <ol>
          {props.data.map((d, index) => {
            return (
              <li key={index}>
                <span className="contentPadding">{parse(d.title)}</span>
                {d.hasAbstract && (
                  <span className="badge abstractBadge abstractMargin" data-bs-toggle="collapse" data-bs-target={`#${d.id}`} aria-expanded="false" aria-controls="publication" style={{ backgroundColor: props.getBadgeColor(0) }}>abstract</span>
                )}
                {d.badgesData && d.badgesData.map((badge, index) => {
                  return (
                    <a key={index} href={badge.link} target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge" style={{ backgroundColor: props.getBadgeColor(index + 1) }}>{badge.badgeDisplayName}</span></a>
                  )
                })}
                <br />
                {d.hasAbstract && (
                  <div className="collapse abstractContentPadding" id={d.id}>
                    <div className="card card-body">
                      {parse(d.abstract)}
                    </div>
                  </div>
                )}
                <span>{parse(d.authors)}</span><br />
                <span>{parse(d.status)}</span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  );
};

export default Publication;