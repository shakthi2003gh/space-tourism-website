import { Fragment, useEffect, useState } from "react";
import "./styles/App.css";
import obj from "./data.json";
import Header from "./components/Header";
import Home from "./components/home";

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
      <Home />
    </Fragment>
  );
}

export default App;
