import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard";
import RegistroActividad from "./RegistroActividad";
import DetalleProyecto from "./DetalleProyecto";
import FormularioProyecto from "./FormularioProyecto";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(
    proyectoService.obtenerProyectos(),
  );
  const [busqueda, setBusqueda] = useState("");
  const [ultimaActualizacion, setUltimaActualizacion] = useState("");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const isFirstRender = useRef(true);
  const isFilterChange = useRef(false);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isFilterChange.current) {
      isFilterChange.current = false;
      return;
    }
    setUltimaActualizacion(new Date().toLocaleString());
  }, [proyectos]);

  const eliminarProyecto = (id) => {
    proyectoService.eliminarProyecto(id);
    const nuevaLista = proyectos.filter((proy) => proy.id !== id);
    setProyectos(nuevaLista);
  };
  const handleAgregar = (nuevo) => {
    proyectoService.agregarProyecto(nuevo);
    setProyectos([...proyectos, nuevo]);
  };
  // Función para ver detalle
  const verDetalle = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  // Función para volver a la lista
  const volver = () => {
    setProyectoSeleccionado(null);
  };
  const handleBusquedaChange = (e) => {
    isFilterChange.current = true;
    setBusqueda(e.target.value);
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
    <Container className="mt-4">
      <h2 className="titulo">Lista de Proyectos </h2>
      <Form.Control
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={handleBusquedaChange}
          className="mb-3"
      />

      <FormularioProyecto onAgregar={handleAgregar} />

      <Row>
        {proyectosFiltrados.map((proy) => (
          <Col md={4} key={proy.id}>
            <ProyectoCard
              proyecto={proy}
              onEliminar={eliminarProyecto}
              onVerDetalle={() => verDetalle(proy)}
            />
          </Col>
        ))}
      </Row>
      {ultimaActualizacion && (
        <RegistroActividad fechaHora={ultimaActualizacion} />
      )}
    </Container>
  );
};

export default ListaProyectos;
