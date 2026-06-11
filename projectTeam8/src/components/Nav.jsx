import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navegacion">
      <Link to="/dashboard">Inicio</Link> {" | "}
      <Link to="/proyectos">Proyectos</Link> {" | "}
      <Link to="/perfil">Perfil</Link>
    </nav>
  );
};

export default Nav;