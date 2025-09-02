"use client";
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          zIndex: 1,
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
        }}
      >
        <source
          src="https://framerusercontent.com/assets/sAhkVr5ARdmMQzflRUwXhT5lzMU.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 2,
        }}
      />

      <Grid
        container
        sx={{
          position: "absolute",
          bottom: { xs: "50%", md: 100 },
          left: { xs: "50%", md: 150 },
          transform: {
            xs: "translate(-50%, 50%)",
            md: "none",
          },
          textAlign: { xs: "center", md: "left" },
          justifyContent: "center",
          zIndex: 3,
          width: { xs: "80%", md: "auto" },
        }}
      >
        <Grid item xs={12} md={8} lg={6}>
          <Typography
            variant="h4"
            className="fadeUp"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2rem", md: "5rem" },
            }}
          >
            Turning Data into <br /> a Growth Engine
          </Typography>

          <Typography
            variant="h6"
            className="fadeUp delay"
            sx={{
              color: "white",
              opacity: 0.8,
              mt: 1,
              fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.3rem" },
            }}
          >
            Empowering businesses with insights & innovation
          </Typography>
          <Box sx={{ mt: 2, display: { xs: 'flex', md: 'none' },justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#114dc7",
                color: "white",
                textTransform: "none",
                borderRadius: "25px",
                width: '50%',
                "&:hover": { backgroundColor: "#114dc7" },
              }}
            >
              Book a call
            </Button>
          </Box>
        </Grid>
      </Grid>

      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }
        .fadeUp.delay {
          animation-delay: 0.3s;
        }
      `}</style>
    </Box>
  );
}
