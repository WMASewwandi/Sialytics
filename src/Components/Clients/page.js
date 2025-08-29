"use client";
import React from "react";
import { Box, Typography, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CardData from "./data";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ClientsPage() {
    return (
        <Box sx={{ px: { xs: 3, md: 10 }, pt: { xs: 5, md: 10 }, minHeight: '90vh' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 6, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                Who I Work With
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
                            backgroundColor: '#f5f5f5',
                            color: '#000',
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{ flex: 7, p: 2 }}>
                            <Box display="flex" alignItems="center" gap={2} p={2}>
                                <img src={card.image} width={50} height={50} />
                                <Typography variant="h6" sx={{ fontWeight: '600' }}>{card.name}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="start" mt={3}>
                                <Typography sx={{ color: "#6da3fc", fontWeight: '600' }}>Why They Call:</Typography>
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
                        <Box sx={{ flex: 3, background: '#00133d', justifyContent: 'start', alignItems: 'center', px: 2 }}>
                            <Box display="flex" justifyContent="start" alignItems="center" gap={2} p={2}>
                                <CheckCircleOutlineIcon sx={{ color: '#538ffd' }} />
                                <Typography variant="h6" sx={{ fontWeight: '600', color: '#fff' }}>What they gain:</Typography>
                            </Box>
                            <Box display="flex" justifyContent="start" mb={1} p={1}>
                                <Typography sx={{ fontWeight: '400', color: '#fff' }}>{card.bottom}</Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}

            </Box>
        </Box>
    );
}
