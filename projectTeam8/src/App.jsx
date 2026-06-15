import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ListaProyectos from "./components/ListaProyectos";
<<<<<<< HEAD
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
=======
import Dashboard from "./views/Dashboard";
import PerfilUsuario from "./views/PerfilUsuario";
import DetalleProyecto from "./components/DetalleProyecto";
import "./css/Estilos.css";

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
        <Route path="/proyectos/:id" element={<DetalleProyecto />} />
      </Routes>
    </Layout>
>>>>>>> 2be4f96d7582d55ecf8997dfeec6d56f7151f3ac
  );
}

export default App;
