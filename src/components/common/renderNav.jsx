import { NavLink } from "react-router-dom";

const Nav = ({ tabs, onClick }) => {
  return (
    <ul className="tabs">
      {tabs.map((tab, index) => (
        <li key={index}>
          <NavLink to={tab} onClick={onClick}>
            <span className="index">0{index}</span>
            <span className="tab-name">{tab}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
