"use client";
import React from "react";
import { Box, Typography, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CardData from "./data";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ServicesPage() {
    return (
        <Box sx={{ px: { xs: 3, md: 10 }, pt: { xs: 5, md: 10 }, backgroundColor: '#0041c2', minHeight: '90vh' }}>
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600, mb: 6, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                My Services
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
                justifyItems: 'center',
                pb: { xs: 5 }
            }}>
                {CardData.map((card, index) => (
                    <Card
                        key={index}
                        sx={{
                            backgroundColor: '#fff',
                            color: '#000',
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{ flex: 1,p:3 }}>
                            <Box display="flex" justifyContent={{xs: "center", md: 'start'}} alignItems="center" gap={2} px={2} pt={2}>
                                <img src={card.image} width={60} height={60} />
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} p={2}>
                                <Typography variant="h6" sx={{ fontWeight: '600' }}>{card.name}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="start">
                                <List>
                                    {card.list.map((item, index) => (
                                        <ListItem key={index} disablePadding sx={{ width: "100%" }}>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <CheckCircleOutlineIcon sx={{ color: '#538ffd' }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ sx: { fontSize: "0.9rem", color: '#7d7d7d' } }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Card>
                ))}

            </Box>
        </Box>
    );
}
