import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./containers/Overview";
import Layout from "./components/Layout";
import Page1 from "./containers/Page1";
import Page2 from "./containers/Page2";
import Page3 from "./containers/Page3";
import Page5 from "./containers/Page5";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/page5" element={<Page5 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
