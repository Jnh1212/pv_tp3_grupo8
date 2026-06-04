const DetalleProyecto = ({ proyecto, onVolver }) => {
  if (!proyecto) {
    return <p>Seleccioná un proyecto para ver los detalles.</p>;
  }

  // 👇 Desestructuración de las props del proyecto
  const {
    titulo,
    fechaInicio,
    categoria,
    estado,
    descripcion,
    descripcion2,
    recursoGitHub,
    recursoDrive,
    recursoPDF,
    equipo,
  } = proyecto;

  return (
    <div className="detalle_proyecto">
      <button className="boton_volver" onClick={onVolver}>
        ← Volver a la lista
      </button>
      <h2>{titulo}</h2>
      <p>
        <strong>Fecha de inicio:</strong> {fechaInicio || "No especificada"}
      </p>
      <p>
        <strong>Categoría:</strong> {categoria}
      </p>
      <p>
        <strong>Estado:</strong> {estado}
      </p>

      <h3>Descripción extendida</h3>
      <p>{descripcion || "Descripción no disponible."}</p>
      <p>{descripcion2 || "Segundo párrafo de descripción."}</p>

      <h3>Recursos y materiales</h3>
      <ul>
        <li>
          <a href={recursoGitHub || "#"}>Repositorio GitHub</a>
        </li>
        <li>
          <a href={recursoDrive || "#"}>Google Drive</a>
        </li>
        <li>
          <a href={recursoPDF || "#"}>Documento PDF</a>
        </li>
      </ul>

      <h3>Equipo de trabajo</h3>
      <ul>
        {equipo &&
          equipo.map((miembro, index) => (
            <li key={index}>
              <strong>{miembro.nombre}</strong> - {miembro.rol}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DetalleProyecto;