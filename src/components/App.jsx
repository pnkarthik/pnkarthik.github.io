import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Bio from "./Bio";
import Header from "./common/Header";
import Home from "./Home";
import Publications from "./PublicationsComponent/index";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="contentContainer">
        <div className="container col-md-12 col-lg-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;