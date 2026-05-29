import "./../css/estilos.css";

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  const { titulo, categoria, estado, id } = proyecto;

  return (
    <div className="proyecto">
      <h3>{titulo}</h3>
      <p>
        <strong>Categoría:</strong> {categoria}
      </p>
      <p>
        <strong>Estado:</strong> {estado}
      </p>
      <button className="boton_eliminar" onClick={() => onEliminar(id)}>
        Eliminar
      </button>
      <button className="boton_detalle" onClick={onVerDetalle}>
        Ver detalle
      </button>
    </div>
  );
};

export default ProyectoCard;
