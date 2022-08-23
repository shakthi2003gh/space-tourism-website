import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import DestinationPage from "./components/destinationPage";
import CrewPage from "./components/crewPage";
import obj from "./data.json";
import "./styles/App.css";
import TechnologyPage from "./components/technologyPage";

function App() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const tabs = ["home"];
    Object.keys(obj).forEach((tab) => tabs.push(tab));
    setTabs(tabs);
  }, []);

  return (
    <Fragment>
      <Header tabs={tabs} />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="destinations" element={<DestinationPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route index element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
