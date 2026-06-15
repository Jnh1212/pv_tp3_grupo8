import React, { createContext, useState } from "react";

// 1. Crear el contexto
export const UsuarioContext = createContext();

// 2. Crear el proveedor
export const UsuarioProvider = ({ children }) => {
  // Estado inicial simulado (usuario ya logueado)
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    dni: "12345678",
    rol: "Alumno",
    institucion: "Escuela N°168"
  });

  // Función para actualizar perfil
  const actualizarPerfil = (nuevoPerfil) => {
    setUsuario(nuevoPerfil);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};