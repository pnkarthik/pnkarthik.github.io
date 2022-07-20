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
import TeachingComponent from "./TeachingComponent";
import { MathJaxContext } from "better-react-mathjax";

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
      ]
    }
  };
  return (
    <MathJaxContext version={3} config={config}>
      <HashRouter>
        <Header />
          <div className="contentContainer">
            <div className="container col-md-12 col-lg-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/talksAndSeminars" element={<TalksAndSeminars />} />
                <Route path="/teaching" element={<TeachingComponent />} />
                <Route path="/bio" element={<Bio />} />
              </Routes>
            </div>
          </div>
      </HashRouter>
    </MathJaxContext>
  );
};

export default App;