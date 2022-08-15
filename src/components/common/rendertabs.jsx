import { NavLink } from "react-router-dom";

const Tabs = ({ tabs }) => {
  return (
    <ul className="tabs">
      {tabs.map((tab, index) => (
        <li key={index}>
          <NavLink to={tab}>
            <span className="index">0{index}</span>
            <span className="tab-name">{tab}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
