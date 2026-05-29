import { useState } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import DetalleProyecto from "./DetalleProyecto";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
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
      fechaInicio: new Date().toLocaleDateString(),
      descripcion: "Descipcion del nuevo proyecto.",
      descripcion2: "Segundo parrafo de descripcion.",
      recursoGithub: "#",
      recursoDrive: "#",
      recursoPDF: "#",
      equipo: [],
    };
    proyectoService.agregarProyecto(nuevo);
    setProyectos([...proyectos, nuevo]);
  };
  // Función para ver detalle (NUEVO)
  const verDetalle = (proyecto) => {
    console.log("Click en ver detalle, proyecto:", proyecto.titulo);
    setProyectoSeleccionado(proyecto);
  };

  // Función para volver a la lista (NUEVO)
  const volver = () => {
    setProyectoSeleccionado(null);
  };
  const proyectosFiltrados = proyectos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );

  if (proyectoSeleccionado) {
    return (
      <main>
        <DetalleProyecto proyecto={proyectoSeleccionado} onVolver={volver} />
      </main>
    );
  }

  return (
    <main>
      <h2 className="titulo">Lista de Proyectos </h2>
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
          <ProyectoCard
            key={proy.id}
            proyecto={proy}
            onEliminar={eliminarProyecto}
            onVerDetalle={() => verDetalle(proy)}
          />
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;
