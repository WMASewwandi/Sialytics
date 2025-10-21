"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CardData from "./data";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ServicesPage() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Box ref={sectionRef} sx={{ px: { xs: 3, md: 10 }, pt: { xs: 5, md: 10 }, backgroundColor: '#0041c2' }}>
            <Typography variant="h4" sx={{ 
                color: '#fff', 
                fontWeight: 600, 
                mb: 6, 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                "&": {
                    "@media (max-width: 1400px)": {
                        fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.2rem' }
                    },
                    "@media (max-width: 1280px)": {
                        fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
                    }
                }
            }}>
                My Services
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
                justifyItems: 'center',
                pb: { xs: 5 }
            }}>
                {CardData.map((card, cardIndex) => (
                    <Card
                        key={cardIndex}
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
                        <Box sx={{ flex: 1, p: 3 }}>
                            <Box display="flex" justifyContent={{ xs: "center", md: 'start' }} alignItems="center" gap={2} px={2} pt={2}>
                                <img src={card.image} width={60} height={60} alt={card.name} />
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} p={2}>
                                <Typography variant="h6" sx={{ 
                                    fontWeight: '600',
                                    "&": {
                                        "@media (max-width: 1400px)": {
                                            fontSize: "1.1rem"
                                        },
                                        "@media (max-width: 1280px)": {
                                            fontSize: "1rem"
                                        }
                                    }
                                }}>{card.name}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="start">
                                <List>
                                    {card.list.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                            sx={{
                                                width: "100%",
                                                transform: visible ? "translateY(0)" : "translateY(20px)",
                                                opacity: visible ? 1 : 0,
                                                transition: `all 0.5s ease ${index * 0.2}s`
                                            }}
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <CheckCircleOutlineIcon sx={{ color: '#538ffd' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    primaryTypographyProps={{ 
                                                        sx: { 
                                                            fontSize: "1.2rem", 
                                                            color: '#191919',
                                                            "&": {
                                                                "@media (max-width: 1400px)": {
                                                                    fontSize: "1rem"
                                                                },
                                                                "@media (max-width: 1280px)": {
                                                                    fontSize: "0.9rem"
                                                                }
                                                            }
                                                        } 
                                                    }}
                                                />
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
