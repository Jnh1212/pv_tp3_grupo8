import { Link } from "react-router-dom";
import "./../css/estilos.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProyectoCard = ({ proyecto, onEliminar }) => {
  const { titulo, categoria, estado, id } = proyecto;

  return (
    <Card className="proyecto mb-3">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          <strong>Categoría:</strong> {categoria}
        </Card.Text>
        <Card.Text>
          <strong>Estado:</strong> {estado}
        </Card.Text>
        <Button
          className="me-2"
          variant="danger"
          onClick={() => onEliminar(id)}
        >
          Eliminar
        </Button>
        <Link to={`/proyectos/${id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProyectoCard;
