import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormularioProyecto = ({ onAgregar }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "General",
    estado: "Pendiente",
    descripcion: "",
    descripcion2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevo = {
      id: Date.now(),
      titulo: formData.titulo,
      categoria: formData.categoria,
      estado: formData.estado,
      descripcion: formData.descripcion,
      descripcion2: formData.descripcion2,
      fechaInicio: new Date().toLocaleDateString(),
      recursoGithub: "#",
      recursoDrive: "#",
      recursoPDF: "#",
      equipo: [],
    };

    onAgregar(nuevo);

    setFormData({
      titulo: "",
      categoria: "General",
      estado: "Pendiente",
      descripcion: "",
      descripcion2: "",
    });
  };

  return (
    <form className="formulario-proyecto" onSubmit={handleSubmit}>
      <h3>Agregar Nuevo Proyecto</h3>
      <Form.Control
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <Form.Select
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
      >
        <option value="General">General</option>
        <option value="Ciencias Exactas">Ciencias Exactas</option>
        <option value="Humanidades">Humanidades</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Ciencias Naturales">Ciencias Naturales</option>
      </Form.Select>
      <Form.Select name="estado" value={formData.estado} onChange={handleChange}>
        <option value="Pendiente">Pendiente</option>
        <option value="En curso">En curso</option>
        <option value="Finalizado">Finalizado</option>
      </Form.Select>
      <Form.Control
        as="textarea"
        rows={3}
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <Button variant="primary" type="submit">
        Agregar Proyecto
      </Button>
    </form>
  );
};

export default FormularioProyecto;
