import "./Link.css";
import { NavLink } from "react-router-dom";
const Link = ({ label, path }) => {
  return (
    <NavLink to={path} activeclassname="active" className="link">
      {label}
    </NavLink>
  );
};

export default Link;
