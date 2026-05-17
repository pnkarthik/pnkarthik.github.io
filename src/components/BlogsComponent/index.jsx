import React from "react";
import data from "./Blogs.json";
import "../../css/styles.css";
import parse from 'html-react-parser';

const BlogsComponent = () => {
  return (
    <div className="w-100 d-flex gap-3">
      {data.map((d) => {
        return (
          <div className="w-50 card d-flex flex-column col blogCardMargin cardBorder">
            <div className="card-body cardContent">
              <div className="headingFontSize">{parse(d.title)}</div>
              <div className="card-subtitle badge dateColor p-1 blogDateMargin">{d.date}</div>
              <div className="card-text">{d.initialContent}</div>
              <a href={d.blogLink} className="card-link readMore" target="_blank" rel="noopener noreferrer"><button type="button" className="btn readMoreBtn"><span>Read More</span></button></a>
              {/* <a href="#" class="card-link">Another link</a> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsComponent;