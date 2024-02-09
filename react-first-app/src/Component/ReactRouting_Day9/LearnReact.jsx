import { NavLink } from "react-router-dom";
import "./customDiv.css";
const LearnReact = () => {
  return (
    <>
      <h3> React JS Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/React/Introduction">
            React Introduction
          </NavLink>
        </li>
        <li>React Render HTML</li>
        <li>React JSX</li>
        <li>React Components</li>
        <li>React Class Components</li>
        <li>React Functional Components</li>
        <li>React Router</li>
      </ul>
    </>
  );
};

export default LearnReact;
