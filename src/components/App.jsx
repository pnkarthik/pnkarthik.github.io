import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bio from "./BioComponent";
import Header from "./common/Header";
import Home from "./Home";
import Publications from "./PublicationsComponent/index";
import TalksAndSeminars from "./TalksAndSeminars";
import { MathJaxContext } from "better-react-mathjax";
import BlogsComponent from "./BlogsComponent";
import RamanAndHisInnerClock from "./BlogsComponent/RamanAndHisInnerClockBlog";
import PhdLifeBlog from "./BlogsComponent/PhdLifeBlog";
import ArchivedNews from "./NewsComponent/ArchivedNews";
import Footer from "./common/Footer";
import CollaboratorsComponent from "./CollaboratorsComponent";
import Profile from "./common/Profile";
import CourseInformation from "./TeachingComponent/CourseInformation";
import TestimonialsComponent from "./TeachingComponent/Testimonials";
import Courses from "./TeachingComponent/Courses";
import TeachingPhilosophy from "./TeachingComponent/TeachingPhilosophy";
import GradingScheme from "./TeachingComponent/GradingScheme";
import ContactComponent from "./ContactComponent";
import GroupsComponent from "./GroupsComponent";
import FundingComponent from "./FundingComponent";


const App = () => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ],
      macros: {
        textsc: ['\\style{font-variant-caps: small-caps}{\\text{#1}}', 1]
      }
    },
    chtml: {
      mtextFont: "sans-serif",
    },
    svg: {
      mtextFont: "serif"
    }
  };

  document.addEventListener("scroll", () => {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  });

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <MathJaxContext version={3} config={config}>
      <HashRouter>
        <Header />
          <div className="contentContainer">
            <div className="container-fluid col-md-12 col-lg-10">
              <div className="row col-12 p-0 m-0">
                <Profile />
                <div className="col paddingTop30">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/talksAndSeminars" element={<TalksAndSeminars />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/blogs" element={<BlogsComponent />} />
                    <Route path="/blogs/raman-and-his-inner-clock" element={<RamanAndHisInnerClock />} />
                    <Route path="/blogs/what-1756-days-of-phd-life-has-taught-me" element={<PhdLifeBlog />} />
                    <Route path="/archivedNews" element={<ArchivedNews />} />
                    <Route path="/collaborators" element={<CollaboratorsComponent />} /> 
                    <Route path="/teaching/:courseName" element={<CourseInformation />} />
                    <Route path="/testimonials" element={<TestimonialsComponent />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/teachingPhilosophy" element={<TeachingPhilosophy />} />
                    <Route path="/gradingScheme" element={<GradingScheme />} />
                    <Route path="/contact" element={<ContactComponent />} />
                    <Route path="/group" element={<GroupsComponent />} />
                    <Route path="/funding" element={<FundingComponent />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={() => goToTop()} id="myBtn" className="topButton"><i className="fas fa-angle-up"></i></button>
        <Footer />
      </HashRouter>
    </MathJaxContext>
  );
};

export default App;