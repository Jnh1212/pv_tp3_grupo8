const DetalleProyecto = ({ proyecto, onVolver }) => {
  if (!proyecto) {
    return <p>Seleccioná un proyecto para ver los detalles.</p>;
  }

  return (
    <div className="detalle_proyecto">
      <button className="boton_volver" onClick={onVolver}>
        ← Volver a la lista
      </button>
      <h2>{proyecto.titulo}</h2>
      <p>
        <strong>Fecha de inicio:</strong>{" "}
        {proyecto.fechaInicio || "No especificada"}
      </p>
      <p>
        <strong>Categoría:</strong> {proyecto.categoria}
      </p>
      <p>
        <strong>Estado:</strong> {proyecto.estado}
      </p>

      <h3>Descripción extendida</h3>
      <p>{proyecto.descripcion || "Descripción no disponible."}</p>
      <p>{proyecto.descripcion2 || "Segundo párrafo de descripción."}</p>

      <h3>Recursos y materiales</h3>
      <ul>
        <li>
          <a href={proyecto.recursoGitHub || "#"}>Repositorio GitHub</a>
        </li>
        <li>
          <a href={proyecto.recursoDrive || "#"}>Google Drive</a>
        </li>
        <li>
          <a href={proyecto.recursoPDF || "#"}>Documento PDF</a>
        </li>
      </ul>

      <h3>Equipo de trabajo</h3>
      <ul>
        {proyecto.equipo &&
          proyecto.equipo.map((miembro, index) => (
            <li key={index}>
              <strong>{miembro.nombre}</strong> - {miembro.rol}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DetalleProyecto;
