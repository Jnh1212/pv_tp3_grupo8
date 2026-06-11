import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ListaProyectos from "./components/ListaProyectos";
// Importamos tus joyas nuevas
import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";
import "./css/estilos.css";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Ruta por defecto que te manda al inicio */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Tus pantallas nuevas de Material UI */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<PerfilUsuario />} />

        {/* La pantalla vieja */}
        <Route path="/proyectos" element={<ListaProyectos />} />
      </Routes>
    </Layout>
  );
}

export default App;