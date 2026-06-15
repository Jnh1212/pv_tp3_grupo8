import Layout from "./components/Layout";
import ListaProyectos from "./components/ListaProyectos";
import "./css/estilos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProyecto from "./components/ListaProyectos";
import DetalleProyecto from "./components/DetalleProyecto";
import PerfilUsuario from "./components/PerfilUsuario";
import { UsuarioProvider } from "./context/UsuarioContext";

import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proyectos" element={<ListaProyectos />} />
            <Route path="/proyectos/:id" element={<DetalleProyecto />} />
            <Route path="/perfil" element={<PerfilUsuario />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
