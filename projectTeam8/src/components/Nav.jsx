const Nav = ({ onNavigate }) => {
  return (
    <nav>
      <a
        href="#inicio"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("inicio");
        }}
      >
        Inicio
      </a>{" "}
      |{" "}
      <a
        href="#proyectos"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("proyectos");
        }}
      >
        Proyectos
      </a>{" "}
      |{" "}
      <a
        href="#perfil"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("perfil");
        }}
      >
        Perfil
      </a>
    </nav>
  );
};

export default Nav;
