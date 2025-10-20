"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardMedia, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Global } from "@emotion/react";

const listItems = [
  "Former CDAO at MoneyGram International – led global data transformation",
  "Built high-performing analytics teams and modernized infrastructure",
  "Delivered measurable business impact — from digital adoption to valuation growth",
  "Proven record in financial services, healthcare, defense, and technology"
];

export default function AboutPage() {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleCount(count);
            if (count === listItems.length) clearInterval(interval);
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Global
        styles={`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(24px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .list-item-animate { opacity: 0; }
          .list-item-animate.active { animation: fadeUp 0.7s ease forwards; }
        `}
      />
      <Box
        ref={sectionRef}
        sx={{
          display: "flex",
          width: "100vw",
          minHeight: { lg: "100vh", xl: "65vh" },
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: { xs: "1", md: "6.5" },
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "center",
            marginLeft: { xs: 0, md: "5rem" },
            mt: { xs: 10, md: 0 },
            px: { xs: 3, md: 0 },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: "1.5rem", md: "2rem",color: '#191919' } }}>
              25+ Years of <br />Leadership Experience
            </Typography>
            <List sx={{ mt: 2, px: 0 }}>
              {listItems.map((item, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  className={`list-item-animate ${index < visibleCount ? "active" : ""}`}
                  sx={{ width: { xs: "100%", md: "75%" }, mx: { xs: "auto", md: 0 } }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon sx={{ color: '#538ffd' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} primaryTypographyProps={{ sx: { fontSize: { xs: "0.9rem", md: "1rem" },color: '#191919' } }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            flex: { xs: "1", md: "3.5" },
            backgroundColor: "#001f54",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            pt: { xs: 5, md: 20 },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: { xs: "static", md: "absolute" },
              top: { md: "80%" },
              left: { md: "10%" },
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 3, md: 0 }
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  color: "#538ffd",
                  fontWeight: "bold",
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  fontSize: { xs: "0.9rem", md: "1.3rem" },
                  color: "#538ffd",
                },
              }}
              primary="Sia Zahedi"
              secondary="Data Analytics Consultant"
            />
          </Box>

          <Card
            sx={{
              width: { xs: "180px", sm: "220px" },
              height: { xs: "220px", sm: "270px" },
              borderRadius: "20px",
              my: { xs: 3, md: 0 },
              display: { xs: "block", md: "none" }
            }}
          >
            <CardMedia
              component="img"
              image='/images/sia.avif'
              alt="Example Image"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Box>

        <Card
          sx={{
            position: "absolute",
            top: { md: "50%" },
            left: { md: "65%" },
            transform: { md: "translate(-50%, -50%)" },
            width: { md: "300px" },
            height: { md: "350px" },
            borderRadius: "20px",
            zIndex: 2,
            display: { xs: "none", md: "block" },
            "&": {
              "@media (max-width: 1400px)": {
                width: "220px",
                height: "250px"
              },
              "@media (max-width: 1280px)": {
                width: "180px",
                height: "210px"
              }
            }
          }}
        >
          <CardMedia
            component="img"
            image='/images/sia.avif'
            alt="Example Image"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
      </Box>
    </>
  );
}
