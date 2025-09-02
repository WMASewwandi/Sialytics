"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Card, List, ListItem, ListItemText, Typography } from "@mui/material";
import CardData from "./data";

export default function CaseStudyPage() {
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

  const listItems = [
    "System alignment: Identifying options for unifying fragmented customer data and evaluating integration approaches.",
    "Customer KPIs: Defining the right performance measures that connect directly to business goals.",
    "Customer models: Outlining the types of analytical models that can surface profitability, retention, and growth drivers."
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        width: "100vw",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          flex: { xs: "1", md: "6" },
          alignItems: "flex-start",
          justifyContent: "start",
          marginLeft: { xs: 0, md: "5rem" },
          mt: { xs: 10, md: 5 },
          px: { xs: 3, md: 3 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h5" sx={{ color: '#1444c3', fontWeight: 600 }}>Sample Engagement</Typography>
        <Typography variant="h4" sx={{ color: '#4c4d52', fontWeight: 600, mt: 2 }}>
          Customer Analytics and Lifetime Value (LTV) Expansion
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, color: '#4c4d52', fontWeight: 600 }}>Challenge</Typography>
        <Typography sx={{ mt: 2, fontWeight: 200, color: '#191919', fontSize: '1rem', width: '90%' }}>
          Many companies struggle to capture the full value of their customer data. Information is often fragmented across legacy systems, limiting visibility into who customers really are, why they transact, and how best to engage them. Without a unified view, leaders find it difficult to measure profitability, retention, or the true impact of digital initiatives.
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, color: '#4c4d52', fontWeight: 600 }}>How I Partner</Typography>
        <Typography sx={{ mt: 2, fontWeight: 200, color: '#191919', fontSize: '1rem', width: '90%' }}>
          I work with you to create a plan and set of initiatives that unify and enrich customer data, enabling a more complete view of the customer base. My role is to help leadership prioritize and shape the path forward so teams can execute with clarity. Planning considerations may include:
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {listItems.map((text, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                transform: visible ? "translateY(0)" : "translateY(20px)",
                opacity: visible ? 1 : 0,
                transition: `all 0.5s ease ${index * 0.2}s`
              }}
            >
              <ListItemText primary={text} primaryTypographyProps={{ sx: { fontSize: "0.9rem", color: '#191919' } }} />
            </ListItem>
          ))}
        </List>
        <Typography sx={{ my: 2, fontWeight: 200, color: '#191919', fontSize: '1rem', width: '90%' }}>
          From this foundation, segmentation and journey mapping can reveal which customers to target, which behaviors to influence, and how to accelerate digital adoption. Predictive insights and engagement strategies can then provide forward-looking guidance, helping companies shape customer actions and unlock more effective acquisition, retention, and growth.
        </Typography>
      </Box>

      <Box
        sx={{
          flex: { xs: "1", md: "4" },
          backgroundColor: "#001f54",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pt: { xs: 5, md: 10 },
          px: { xs: 3, md: 10 },
          position: "relative",
        }}
      >
        <Typography variant="h5" sx={{ color: "#3f6fdd", fontWeight: 600 }}>Impact:</Typography>
        <Box width="100%" mt={2}>
          {CardData.map((card, index) => (
            <Card
              key={card.id || index}
              sx={{
                backgroundColor: "#182a4f",
                color: "#fff",
                width: "100%",
                borderRadius: 3,
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                display: "flex",
                mt: 2,
                px: 3,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                opacity: visible ? 1 : 0,
                transition: `all 0.5s ease ${index * 0.2}s`
              }}
            >
              <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" width="100%">
                <Box sx={{ width: { xs: "100%", md: "25%" }, display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center", p: 2 }}>
                  <img src={card.image} width={70} height={70} alt={card.name} />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "75%" }, p: 2, textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{card.name}</Typography>
                  <Typography sx={{ my: 2, fontWeight: 200, color: "#9d9b98", fontSize: "1rem", maxWidth: "90%", mx: { xs: "auto", md: 0 } }}>
                    {card.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
