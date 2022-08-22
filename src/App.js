import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import DestinationPage from "./components/destinationPage";
import obj from "./data.json";
import "./styles/App.css";

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
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="destinations" element={<DestinationPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
