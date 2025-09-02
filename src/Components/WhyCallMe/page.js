"use client";
import React from "react";
import { Box, Typography, Card } from "@mui/material";

const cards = [
    { image:"https://framerusercontent.com/images/n8HMpzedaXF8jLdJUoKTRVfYU.png?width=200&height=200", text: "They’re growing fast but lack a clear data strategy" },
    { image:"https://framerusercontent.com/images/BJsQndmHASwCTOqOKBwMDU4a7k4.png?width=200&height=200", text: "KPIs are undefined or misaligned with business goals" },
    { image:"https://framerusercontent.com/images/6FGK4paffV3fEFsSketj0MHsEOE.png?width=200&height=200", text: "Data is siloed, insights are slow, and decisions are reactive" },
    { image:"https://framerusercontent.com/images/3opBHtwrisVEwlK1WP51kFG08I.png?width=200&height=200", text: "Leadership wants investor-ready metrics and a clear execution roadmap" },
];

export default function WhyCallMePage() {
    return (
        <Box sx={{ px: { xs: 3, md: 10 }, pt: { xs: 5, md: 10 }, backgroundColor: '#0041c2'}}>
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600, mb: 6, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } ,color: '#191919'}}>
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
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                {card.text}
                            </Typography>
                        </Box>
                    </Card>
                ))}

            </Box>
        </Box>
    );
}
