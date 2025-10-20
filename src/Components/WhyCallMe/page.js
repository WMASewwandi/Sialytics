"use client";
import React from "react";
import { Box, Typography, Card } from "@mui/material";

const cards = [
    { image:'/images/wcm1.avif', text: "They’re growing fast but lack a clear data strategy" },
    { image:'/images/wcm2.avif', text: "KPIs are undefined or misaligned with business goals" },
    { image:'/images/wcm3.avif', text: "Data is siloed, insights are slow, and decisions are reactive" },
    { image:'/images/wcm4.avif', text: "Leadership wants investor-ready metrics and a clear execution roadmap" },
];

export default function WhyCallMePage() {
    return (
        <Box sx={{ px: { xs: 3, md: 10 }, pt: { xs: 5, md: 10 }, backgroundColor: '#0041c2'}}>
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
                Why Companies Call Me
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
                gap: 4,
                justifyItems: 'center',
                pb: {xs:5}
            }}>
                {cards.map((card, index) => (
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
                            height: 230,
                        }}
                    >
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={card.image} width={90} height={90}/>
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2 }}>
                            <Typography sx={{ 
                                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' }, 
                                fontWeight: 600,
                                lineHeight: 1.3,
                                "&": {
                                    "@media (max-width: 1400px)": {
                                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                                        lineHeight: 1.2
                                    },
                                    "@media (max-width: 1280px)": {
                                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                                        lineHeight: 1.1
                                    }
                                }
                            }}>
                                {card.text}
                            </Typography>
                        </Box>
                    </Card>
                ))}

            </Box>
        </Box>
    );
}
