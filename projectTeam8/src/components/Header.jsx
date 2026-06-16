import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {
    // Consumir el estado global del usuario
    const { usuario } = useContext(UsuarioContext);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#87CEEB', color: 'white' }}>
            <h1>Gestión de Proyectos Educativos</h1>
            <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0 }}><strong>{usuario?.nombre || "Invitado"}</strong></p>
                <p style={{ margin: 0, fontSize: '0.8em' }}>{usuario?.rol || ""}</p>
            </div>
        </header>
    );
};

export default Header;