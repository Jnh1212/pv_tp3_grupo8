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
    </nav>
  );
};

export default Nav;
