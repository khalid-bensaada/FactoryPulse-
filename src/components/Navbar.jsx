import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end >Dashboard</NavLink>
      <NavLink to="/machines" end >Machines</NavLink>
      <NavLink to="/machines/new" end >Add Machine</NavLink>
      <NavLink to="/kanban" end >Kanban</NavLink>
    </nav>
  );
}

export default Navbar;