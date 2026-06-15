<<<<<<< HEAD
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/listaproyectos" 
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/proyectos" 
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/perfil" 
            className={({ isActive }) => (isActive ? "activo" : "")}
          >
            Perfil
          </NavLink>
        </li>
      </ul>
=======
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navegacion">
      <Link to="/dashboard">Inicio</Link> {" | "}
      <Link to="/proyectos">Proyectos</Link> {" | "}
      <Link to="/perfil">Perfil</Link>
>>>>>>> 2be4f96d7582d55ecf8997dfeec6d56f7151f3ac
    </nav>
  );
};

export default Nav;