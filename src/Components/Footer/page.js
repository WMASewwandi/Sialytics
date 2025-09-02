"use client";
import React from "react";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh",
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
        direction="column"
        spacing={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 3,
          width: { xs: "90%", md: "80%" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // 👈 always column
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              p: 2,
              width: "100%",
            }}
          >
            <Box
              component="img"
              src="https://framerusercontent.com/images/Meg2UdYRmDUv1QAt3p3TYHTMYE.png?width=1024&height=264"
              alt="Logo"
              sx={{ height: 55 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#114dc7",
                color: "white",
                textTransform: "none",
                fontSize: "16px",
                borderRadius: "25px",
                px: 3,
                "&:hover": { backgroundColor: "#114dc7" },
              }}
            >
              Book a call
            </Button>
          </Box>
        </Grid>

        <Grid item>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Let’s unlock the full potential of your data
          </Typography>
        </Grid>

        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              p: 2,
              width: "100%",
            }}
          >
            <Typography sx={{ color: "#114dc7", fontSize: "1rem" }}>
              getsialytics@gmail.com
            </Typography>
            <Typography sx={{ color: "#114dc7", fontSize: "1rem" }}>
              469-835-4062
            </Typography>
            <Typography sx={{ color: "#114dc7", fontSize: "1rem" }}>
              sialytics.com
            </Typography>
            <Box
              sx={{ cursor: "pointer" }}
              display="flex"
              gap={1}
              alignItems="center"
              justifyContent="center"
            >
              <a
                href="https://www.linkedin.com/in/sia-zahedi-1532987/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <IconButton sx={{ color: "#114dc7" }}>
                  <LinkedInIcon />
                </IconButton>
                <Typography sx={{ color: "#fff" }}>Let&apos;s Connect</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
