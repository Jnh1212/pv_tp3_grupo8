import { useState } from "react";

const proyectosEjemplo = [
    { id: 1, titulo: "Proyecto de Matemáticas", categoria: "Ciencias Exactas", estado: "En curso" },
    { id: 2, titulo: "Proyecto de Lengua", categoria: "Humanidades", estado: "Finalizado" },
    { id: 3, titulo: "Proyecto de Informática", categoria: "Tecnología", estado: "En curso" },
];

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectosEjemplo);

    const eliminarProyecto = (id) => {
        const nuevaLista = proyectos.filter(proy => proy.id !== id);
        setProyectos(nuevaLista);
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