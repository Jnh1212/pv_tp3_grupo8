import React, { createContext, useEffect, useState } from "react";

// 1. Crear el contexto
export const UsuarioContext = createContext();

const usuarioPorDefecto = {
  nombre: "Juan Pérez",
  dni: "12345678",
  rol: "Alumno",
  institucion: "Escuela N°168",
};
// 2. Crear el proveedor
export const UsuarioProvider = ({ children }) => {
  // Estado inicial simulado (usuario ya logueado)
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
      return JSON.parse(usuarioGuardado);
    }
    return usuarioPorDefecto;
  });

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

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
