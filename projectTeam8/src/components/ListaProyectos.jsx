import { useState } from "react";
import proyectoService from "../services/proyectoService";
proyectoService.obtenerProyectos();

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    const nuevaLista = proyectos.filter((proy) => proy.id !== id);
    setProyectos(nuevaLista);
  };

  const agregarProyecto = () => {
    const nuevo = {
      id: Date.now(),
      titulo: "Nuevo Proyecto",
      categoria: "General",
      estado: "Pendiente",
    };
    proyectoService.agregarProyecto(nuevo);
    setProyectos([...proyectos, nuevo]);
  };

  const proyectosFiltrados = proyectos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <aside>
      <h2>Lista de Proyectos</h2>
      <div className="controles">
        <input
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button onClick={agregarProyecto}>Agregar Proyecto</button>
      </div>
      <div className="presentacion">
        {proyectosFiltrados.map((proy) => (
          <div key={proy.id} className="proyecto">
            <h3>{proy.titulo}</h3>
            <p>Categoría: {proy.categoria}</p>
            <p>Estado: {proy.estado}</p>
            <button className="boton" onClick={() => eliminarProyecto(proy.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ListaProyectos;
