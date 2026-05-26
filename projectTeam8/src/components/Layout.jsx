import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import React, { useState } from 'react';
import ProyectoService from './ProyectoService';


const Layout = ({ children }) => {
    const [seccion, setSeccion] = useState("inicio");
    return (
        <div>
            <Header />
            <Nav onNavigate={setSeccion} />
            <main>
                {seccion === "inicio" && children}
                {seccion === "proyectos" && <ProyectoService />}
                               
            </main>
            <Footer />
        </div>
    );
};

export default Layout;