import { useState } from "react"; 
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [busqueda, setBusqueda] = useState("");

    // Eliminar proyecto
    const eliminarProyecto = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };

    return (
        
        <div>
            <h2>Lista de Proyectos</h2>

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

export default ListaProyectos;