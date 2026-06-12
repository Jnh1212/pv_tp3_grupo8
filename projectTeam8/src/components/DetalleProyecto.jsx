import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import proyectoService from "../services/proyectoService";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const DetalleProyecto = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    const proyectos = proyectoService.obtenerProyectos();
    const encontrado = proyectos.find((p) => p.id === parseInt(id));
    setProyecto(encontrado);
  }, [id]);

  if (!proyecto) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <Container className="mt-4">
      <Link to="/proyectos">
        <Button variant="secondary" className="mb-3">
          ← Volver a la lista
        </Button>
      </Link>
      <h2>{proyecto.titulo}</h2>
      <p>
        <strong>Fecha de inicio:</strong>{" "}
        {proyecto.fechaInicio || "No especificada"}
      </p>
      <p>
        <strong>Categoría:</strong> {proyecto.categoria}
      </p>
      <p>
        <strong>Estado:</strong> {proyecto.estado}
      </p>

      <h3>Descripción extendida</h3>
      <p>{proyecto.descripcion || "Descripción no disponible."}</p>
      <p>{proyecto.descripcion2 || "Segundo párrafo de descripción."}</p>

      <h3>Recursos y materiales</h3>
      <ul>
        <li>
          <a href={proyecto.recursoGitHub || "#"} target="_blank">
            Repositorio GitHub
          </a>
        </li>
        <li>
          <a href={proyecto.recursoDrive || "#"} target="_blank">
            Google Drive
          </a>
        </li>
        <li>
          <a href={proyecto.recursoPDF || "#"} target="_blank">
            Documento PDF
          </a>
        </li>
      </ul>

      <h3>Equipo de trabajo</h3>
      <ul>
        {proyecto.equipo &&
          proyecto.equipo.map((miembro, index) => (
            <li key={index}>
              <strong>{miembro.nombre}</strong> - {miembro.rol}
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default DetalleProyecto;
