import React, { useContext, useState, useEffect } from "react";
import {
    Container,
    Paper,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Divider,
    Avatar,
    TextField,
    Button
} from "@mui/material";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);
    const [editando, setEditando] = useState(false);
    const [datosForm, setDatosForm] = useState({ ...usuario });

    useEffect(() => {
        setDatosForm({ ...usuario });
    }, [usuario]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosForm({
            ...datosForm,
            [name]: value,
        });
    };

    const handleGuardar = () => {
        actualizarPerfil(datosForm);
        setEditando(false);
    };

    const handleCancelar = () => {
        setDatosForm({ ...usuario });
        setEditando(false);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
            <Paper elevation={4} sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "12px" }}>

                <Avatar
                    sx={{ width: 90, height: 90, bgcolor: "#1976d2", fontSize: "2.5rem", mb: 2, boxShadow: 2 }}
                >
                    {usuario.nombre ? usuario.nombre.charAt(0).toUpperCase() : "E"}
                </Avatar>

                <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 1 }}>
                    Perfil de Usuario
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom sx={{ mb: 3 }}>
                    Información académica y roles del sistema
                </Typography>

                <Box sx={{ width: "100%" }}>
                    <List sx={{ bgcolor: "background.paper" }}>

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>Nombre Completo</Typography>}
                                secondary={
                                    editando ? (
                                        <TextField fullWidth size="small" variant="outlined" name="nombre" value={datosForm.nombre || ""} onChange={handleChange} sx={{ mt: 1 }} />
                                    ) : (
                                        <Typography variant="body1">{usuario.nombre}</Typography>
                                    )
                                }
                            />
                        </ListItem>
                        <Divider variant="middle" component="li" />

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>Rol en el Sistema</Typography>}
                                secondary={
                                    editando ? (
                                        <TextField fullWidth size="small" variant="outlined" name="rol" value={datosForm.rol || ""} onChange={handleChange} sx={{ mt: 1 }} />
                                    ) : (
                                        <Typography variant="body1">{usuario.rol}</Typography>
                                    )
                                }
                            />
                        </ListItem>
                        <Divider variant="middle" component="li" />

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>Institución</Typography>}
                                secondary={
                                    editando ? (
                                        <TextField fullWidth size="small" variant="outlined" name="institucion" value={datosForm.institucion || ""} onChange={handleChange} sx={{ mt: 1 }} />
                                    ) : (
                                        <Typography variant="body1">{usuario.institucion}</Typography>
                                    )
                                }
                            />
                        </ListItem>
                        <Divider variant="middle" component="li" />

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>DNI</Typography>}
                                secondary={
                                    editando ? (
                                        <TextField fullWidth size="small" variant="outlined" name="dni" value={datosForm.dni || ""} onChange={handleChange} sx={{ mt: 1 }} />
                                    ) : (
                                        <Typography variant="body1">{usuario.dni || "No cargado"}</Typography>
                                    )
                                }
                            />
                        </ListItem>

                    </List>
                </Box>

                <Box sx={{ mt: 4, display: "flex", gap: 2, width: "100%", justifyContent: "center" }}>
                    {!editando ? (
                        <Button variant="contained" color="primary" onClick={() => setEditando(true)}>
                            Editar Perfil
                        </Button>
                    ) : (
                        <>
                            <Button variant="contained" color="success" onClick={handleGuardar}>
                                Guardar Cambios
                            </Button>
                            <Button variant="outlined" color="error" onClick={handleCancelar}>
                                Cancelar
                            </Button>
                        </>
                    )}
                </Box>

            </Paper>
        </Container>
    );
};

export default PerfilUsuario;