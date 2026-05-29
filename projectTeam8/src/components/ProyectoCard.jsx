const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { titulo, categoria, estado, id } = proyecto;

  return (
    <div className="proyecto">
      <h3>{titulo}</h3>
      <p>Categoría: {categoria}</p>
      <p>Estado: {estado}</p>
      <button className="boton" onClick={() => onEliminar(id)}>
        Eliminar
      </button>
      <button>Ver detalle</button>
    </div>
  );
};

export default ProyectoCard;
