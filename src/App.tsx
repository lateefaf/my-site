import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import ProjectsPage from './components/ProjectsPage';
import BlogsPage from './components/BlogsPage';


const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/blogs">
              <BlogsPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Routes>
        </div>
      </Router>
  );
};

export default App;
