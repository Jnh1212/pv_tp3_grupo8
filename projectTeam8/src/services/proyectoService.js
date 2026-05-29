const proyectos = [
  {
    id: 1,
    titulo: "Proyecto de Matemáticas",
    categoria: "Ciencias Exactas",
    estado: "En curso",
  },
  {
    id: 2,
    titulo: "Proyecto de Lengua",
    categoria: "Humanidades",
    estado: "Finalizado",
  },
  {
    id: 3,
    titulo: "Proyecto de Informática",
    categoria: "Tecnología",
    estado: "En curso",
  },
  {
    id: 4,
    titulo: "Proyecto de Historia",
    categoria: "Humanidades",
    estado: "En curso",
  },
  {
    id: 5,
    titulo: "Proyecto de Biología",
    categoria: "Ciencias Naturales",
    estado: "Finalizado",
  },
];

const proyectoService = (() => {
  return {
    obtenerProyectos: () => {
      return [...proyectos];
    },

    agregarProyecto: (proyecto) => {
      proyectos.push(proyecto);
    },

    eliminarProyecto: (id) => {
      const indice = proyectos.findIndex((p) => p.id === id);
      if (indice !== -1) {
        proyectos.splice(indice, 1);
      }
    },

    buscarProyecto: (texto) => {
      return proyectos.filter((p) =>
        p.titulo.toLowerCase().includes(texto.toLowerCase()),
      );
    },
  };
})();

export default proyectoService;
