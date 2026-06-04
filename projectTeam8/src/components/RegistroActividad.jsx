import React from 'react';

const RegistroActividad = ({ fechaHora }) => {
    if (!fechaHora) return null;

    return (
        <div className="registro-actividad" style={{ marginTop: "20px", textAlign: "center", color: "#555" }}>
            <p>{fechaHora}</p>
        </div>
    );
};

export default RegistroActividad;