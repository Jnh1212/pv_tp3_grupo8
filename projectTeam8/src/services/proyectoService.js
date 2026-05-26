
const proyectoService = (() => {
  let proyectos = [
    { id: 1, titulo: "Proyecto de Matemáticas", categoria: "Ciencias Exactas", estado: "En curso" },
    { id: 2, titulo: "Proyecto de Lengua", categoria: "Humanidades", estado: "Finalizado" },
    { id: 3, titulo: "Proyecto de Informática", categoria: "Tecnología", estado: "En curso" },
    { id: 4, titulo: "Proyecto de Historia", categoria: "Humanidades", estado: "En curso" },
    { id: 5, titulo: "Proyecto de Biología", categoria: "Ciencias Naturales", estado: "Finalizado" }
  ];

  const obtenerProyectos = () => [...proyectos];

  const agregarProyecto = (proyecto) => {
    proyectos.push(proyecto);
  };

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter(p => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));
  };

  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;
