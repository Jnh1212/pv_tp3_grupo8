import React from "react";
import { Container, Paper, Typography, Box, List, ListItem, ListItemText, Divider, Avatar } from "@mui/material";

const PerfilUsuario = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
            <Paper elevation={4} sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "12px" }}>
                <Avatar
                    sx={{ width: 90, height: 90, bgcolor: "#1976d2", fontSize: "2.5rem", mb: 2, boxShadow: 2 }}
                >
                    E
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
                                secondary={<Typography variant="body1">Emilio</Typography>}
                            />
                        </ListItem>
                        <Divider variant="middle" component="li" />

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>Rol en el Sistema</Typography>}
                                secondary={<Typography variant="body1">Alumno / Desarrollador Frontend</Typography>}
                            />
                        </ListItem>
                        <Divider variant="middle" component="li" />

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>Institución</Typography>}
                                secondary={<Typography variant="body1">Facultad de Ingeniería - Universidad Nacional de Jujuy</Typography>}
                            />
                        </ListItem>
                        <Divider variant="middle" component="li" />

                        <ListItem>
                            <ListItemText
                                primary={<Typography sx={{ fontWeight: "bold", color: "#555" }}>Carrera</Typography>}
                                secondary={<Typography variant="body1">Analista Programador Universitario (APU)</Typography>}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Paper>
        </Container>
    );
};

export default PerfilUsuario;