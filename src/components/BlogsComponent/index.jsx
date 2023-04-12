import React from "react";
import data from "./Blogs.json";
import "../../css/styles.css";
import Profile from "../common/Profile";

const BlogsComponent = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <Profile />
      <div className="col paddingTop30">
        {data.map((d) => {
          return (
            <div className="card d-flex flex-column col blogCardMargin cardBorder">
              <div className="card-body cardContent">
                <div className="headingFontSize">{d.title}</div>
                <div className="card-subtitle badge dateColor p-1 blogDateMargin">{d.date}</div>
                <div className="card-text">{d.initialContent}</div>
                <a href={d.blogLink} className="card-link readMore" target="_blank" rel="noopener noreferrer"><button type="button" className="btn readMoreBtn"><span>Read More</span></button></a>
                {/* <a href="#" class="card-link">Another link</a> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsComponent;