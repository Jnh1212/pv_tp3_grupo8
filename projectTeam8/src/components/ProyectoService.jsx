import { useState } from "react"; 
import proyectoService from "../services/proyectoService";

const ProyectoService = () => {
    const [proyectos, setProyectos] = useState([]);
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [busqueda, setBusqueda] = useState("");

    // Agregar proyecto
    const agregarProyecto = () => {
      if (nuevoTitulo.trim() === "") return;
        const nuevo = {
        id: Date.now(),
        titulo: nuevoTitulo,
        categoria: "General",
        estado: "En curso"
      };
      proyectoService.agregarProyecto(nuevo);
      setProyectos(proyectoService.obtenerProyectos());
      setNuevoTitulo("");
    };
    // Eliminar proyecto
    const eliminarProyecto = (id) => {
      proyectoService.eliminarProyecto(id);
      setProyectos(proyectoService.obtenerProyectos());
    };
    // Buscar proyecto
    const buscarProyecto = () => {
      if (busqueda.trim() === "") {
        setProyectos(proyectoService.obtenerProyectos());
      } else {
        setProyectos(proyectoService.buscarProyecto(busqueda));
      }
    };

    return (
        
        <div>
            <h2>Lista de Proyectos</h2>
            <div>
                <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                />
                <button onClick={buscarProyecto}>Buscar</button>
            </div>
            <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                <input
                type="text"
                placeholder="Nuevo proyecto..."
                value={nuevoTitulo}
                onChange={(e) => setNuevoTitulo(e.target.value)}
                />
                <button onClick={agregarProyecto}>Agregar</button>
            </div>
            <div>
                {proyectos.map(proy => (
                    <div key={proy.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                        <h3>{proy.titulo}</h3>
                        <p>Categoría: {proy.categoria}</p>
                        <p>Estado: {proy.estado}</p>
                        <button onClick={() => eliminarProyecto(proy.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProyectoService;