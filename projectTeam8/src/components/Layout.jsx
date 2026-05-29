import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import Listaproyectos from "./ListaProyectos";

const Layout = ({ children }) => {
  const [seccion, setSeccion] = useState("inicio");
  return (
    <div>
      <Header />
      <Nav onNavigate={setSeccion} />
      <main>
        {seccion === "inicio" && children}
        {seccion === "proyectos" && <Listaproyectos />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
