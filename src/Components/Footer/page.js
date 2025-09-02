"use client";
import React from "react";
import { Box, Typography, Grid, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          bottom: { xs: "50%", md: 100 },
          left: { xs: "50%", md: 150 },
          transform: {
            xs: "translate(-50%, 50%)",
            md: "none",
          },
          textAlign: { xs: "center", md: "left" },
          zIndex: 3,
          width: { xs: "90%", md: "80%" },
        }}
      >
        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
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
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              p: 2,
              width: "100%",
            }}
          >
            <Box>
              <Typography sx={{ color: "#114dc7", fontSize: "1rem" }}>
                getsialytics@gmail.com
              </Typography>
              <Typography sx={{ color: "#114dc7", fontSize: "1rem" }}>
                469-835-4062
              </Typography>
              <Typography sx={{ color: "#114dc7", fontSize: "1rem" }}>
                sialytics.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              {/* <IconButton sx={{ color: "#114dc7" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#114dc7" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#114dc7" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#114dc7" }}>
                <YouTubeIcon />
              </IconButton> */}
              <Box sx={{cursor: 'pointer'}} display="flex" gap={1} alignItems="center">
                <IconButton sx={{ color: "#114dc7" }}>
                  <LinkedInIcon />
                </IconButton>
                <Typography sx={{color: '#fff'}}>Let's Connect</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
