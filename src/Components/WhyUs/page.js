"use client";
import React from "react";
import { Box, Typography, Card } from "@mui/material";
import CardData from "./data";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function WhyUsPage() {
    return (
        <Box sx={{ px: { xs: 3, md: 10 }, pt: { xs: 5, md: 10 }, backgroundColor: '#0041c2' }}>
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600, mb: 6, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                Why Choose Sialytics
            </Typography>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
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
                        <Box sx={{ flex: 1, p: 3 }}>
                            <Box display="flex" justifyContent={{ xs: "center", md: 'start' }} alignItems="center" gap={2} px={2} pt={2}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: 60, height: 60, borderRadius: '50%', background: '#dfdbdbff' }}>
                                    <Typography variant="h5" sx={{ fontWeight: '600',color: '#0a49c4' }}>{card.number}</Typography>
                                    <CheckCircleIcon sx={{position: 'absolute',bottom: 0, right: 0,color: '#0a49c4'}}/>
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2} p={2}>
                                <Typography variant="h6" sx={{ fontWeight: '600' }}>{card.name}</Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}

            </Box>
        </Box>
    );
}
