import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <ul className="list">
        <li>
          <NavLink  style={({isActive}) => {
            return isActive ? {color:"white"} : {}
          }} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => {
            return isActive ? {color:"white"} : {}
          }} to="/Skills">Skills</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => {
            return isActive ? {color:"white"} : {}
          }} to="/Application">Application</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => {
            return isActive ? {color:"white"} : {}
          }} to="/Advisor"> Advisor report</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => {
            return isActive ? {color:"white"} : {}
          }} to="/Photography"> Photography</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
