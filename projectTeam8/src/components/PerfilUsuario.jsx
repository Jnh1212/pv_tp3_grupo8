import React, { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  // Estado local para edición
  const [formData, setFormData] = useState(usuario);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    actualizarPerfil(formData);
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <label>Nombre:</label>
      <input name="nombre" value={formData.nombre} onChange={handleChange} />
      <br />
      <label>DNI:</label>
      <input name="dni" value={formData.dni} onChange={handleChange} />
      <br />
      <label>Rol:</label>
      <select name="rol" value={formData.rol} onChange={handleChange}>
        <option value="Docente">Docente</option>
        <option value="Alumno">Alumno</option>
      </select>
      <br />
      <label>Institución:</label>
      <input
        name="institucion"
        value={formData.institucion}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSave}>Guardar cambios</button>

      <h3>Datos actuales:</h3>
      <p>Nombre: {usuario.nombre}</p>
      <p>DNI: {usuario.dni}</p>
      <p>Rol: {usuario.rol}</p>
      <p>Institución: {usuario.institucion}</p>
    </div>
  );
};

export default PerfilUsuario;