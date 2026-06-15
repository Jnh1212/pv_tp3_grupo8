import React from "react";
import { Container, Typography, Card, CardContent, Grid, Paper, Box } from "@mui/material";

const Dashboard = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4, backgroundColor: "#f8f9fa" }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
                    Panel de Control Educativo
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Bienvenido al sistema de gestión. Aquí podés visualizar el estado general de las iniciativas y métricas clave de la plataforma.
                </Typography>
            </Paper>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderLeft: "5px solid #1976d2", boxShadow: 2 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom variant="overline" sx={{ fontSize: "1rem" }}>
                                    Total de Proyectos
                                </Typography>
                                <Typography variant="h3" component="div" sx={{ fontWeight: "bold" }}>
                                    12
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderLeft: "5px solid #2e7d32", boxShadow: 2 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom variant="overline" sx={{ fontSize: "1rem" }}>
                                    Proyectos en Curso
                                </Typography>
                                <Typography variant="h3" component="div" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
                                    5
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderLeft: "5px solid #ed6c02", boxShadow: 2 }}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom variant="overline" sx={{ fontSize: "1rem" }}>
                                    Proyectos Finalizados
                                </Typography>
                                <Typography variant="h3" component="div" sx={{ fontWeight: "bold", color: "#ed6c02" }}>
                                    7
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Dashboard;