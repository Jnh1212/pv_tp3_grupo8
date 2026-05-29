const proyectos = [
  {
    id: 1,
    titulo: "Proyecto de Matemáticas",
    categoria: "Ciencias Exactas",
    estado: "En curso",
    fechaInicio: "10-05-2026",
    descripcion: "Este proyecto busca mejorar la enseñanza de matemáticas en escuelas secundarias mediante talleres prácticos y olimpiadas matemáticas.",
    descripcion2: "Se capacitará a docentes en nuevas metodologías y se entregarán guías de ejercicios para estudiantes.",
    recursoGitHub: "https://github.com/ejemplo/matematicas",
    recursoDrive: "https://drive.google.com/matematicas",
    recursoPDF: "https://ejemplo.com/matematicas.pdf",
    equipo: [
      { nombre: "Emilio", rol: "Coordinador" },
      { nombre: "Karina", rol: "Diseñadora de actividades" }
    ]
  },
  {
    id: 2,
    titulo: "Proyecto de Lengua",
    categoria: "Humanidades",
    estado: "Finalizado",
    fechaInicio: "05-03-2026",
    descripcion: "Proyecto de promoción de la lectura y escritura creativa en escuelas rurales.",
    descripcion2: "Se realizaron talleres de redacción y se publicó una antología de cuentos escritos por estudiantes.",
    recursoGitHub: "https://github.com/ejemplo/lengua",
    recursoDrive: "https://drive.google.com/lengua",
    recursoPDF: "https://ejemplo.com/lengua.pdf",
    equipo: [
      { nombre: "Maximiliano", rol: "Coordinador" },
      { nombre: "Karina", rol: "Diseñadora de talleres" }
    ]
  },
  {
    id: 3,
    titulo: "Proyecto de Informática",
    categoria: "Tecnología",
    estado: "En curso",
    fechaInicio: "20-04-2026",
    descripcion: "Capacitación en hardware y software libre para escuelas secundarias de la Quebrada.",
    descripcion2: "Se entregarán kits de robótica educativa y se dictarán talleres de programación básica.",
    recursoGitHub: "https://github.com/ejemplo/informatica",
    recursoDrive: "https://drive.google.com/informatica",
    recursoPDF: "https://ejemplo.com/informatica.pdf",
    equipo: [
      { nombre: "Benjamin", rol: "Especialista en hardware" },
      { nombre: "Emilio", rol: "Programador" }
    ]
  },
  {
    id: 4,
    titulo: "Proyecto de Historia",
    categoria: "Humanidades",
    estado: "En curso",
    fechaInicio: "15-02-2026",
    descripcion: "Investigación sobre la historia local y producción de materiales didácticos digitales.",
    descripcion2: "Se entrevistará a pobladores mayores y se digitalizarán documentos históricos.",
    recursoGitHub: "https://github.com/ejemplo/historia",
    recursoDrive: "https://drive.google.com/historia",
    recursoPDF: "https://ejemplo.com/historia.pdf",
    equipo: [
      { nombre: "Julio", rol: "Investigador" },
      { nombre: "Karina", rol: "Diseñadora de contenidos" }
    ]
  },
  {
    id: 5,
    titulo: "Proyecto de Biología",
    categoria: "Ciencias Naturales",
    estado: "Finalizado",
    fechaInicio: "01-03-2026",
    descripcion: "Estudio de la flora y fauna local con salidas de campo y elaboración de guías ilustradas.",
    descripcion2: "Se creó un herbario digital colaborativo con estudiantes.",
    recursoGitHub: "https://github.com/ejemplo/biologia",
    recursoDrive: "https://drive.google.com/biologia",
    recursoPDF: "https://ejemplo.com/biologia.pdf",
    equipo: [
      { nombre: "Maximiliano", rol: "Biólogo" },
      { nombre: "Benjamin", rol: "Documentalista" }
    ]
  }
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
        p.titulo.toLowerCase().includes(texto.toLowerCase())
      );
    },
  };
})();

export default proyectoService;
