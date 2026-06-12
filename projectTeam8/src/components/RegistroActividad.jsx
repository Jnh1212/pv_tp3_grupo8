import Alert from "react-bootstrap/Alert";

const RegistroActividad = ({ fechaHora }) => {
  if (!fechaHora) return null;

  let fechaObjeto = fechaHora;

  if (typeof fechaHora === "string") {
    fechaObjeto = new Date(fechaHora);
  }

  if (!(fechaObjeto instanceof Date) || isNaN(fechaObjeto)) {
    return null;
  }

  const dia = fechaObjeto.getDate().toString().padStart(2, "0");
  const mes = (fechaObjeto.getMonth() + 1).toString().padStart(2, "0");
  const anio = fechaObjeto.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${anio}`;

  const horas = fechaObjeto.getHours().toString().padStart(2, "0");
  const minutos = fechaObjeto.getMinutes().toString().padStart(2, "0");
  const horaFormateada = `${horas}:${minutos}`;

  return (
    <Alert variant="info" className="mt-3">
        Última actualización: {fechaFormateada} - {horaFormateada}
    </Alert>
  );
};

export default RegistroActividad;
