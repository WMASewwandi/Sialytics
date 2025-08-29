"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomePage from "@/Components/Home/page";
import AboutPage from "@/Components/About/page";
import WhyCallMePage from "@/Components/WhyCallMe/page";
import ClientsPage from "@/Components/Clients/page";
import ServicesPage from "@/Components/Services/page";
import CaseStudyPage from "@/Components/CaseStudy/page";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section, div[id]");
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 80;
        if (window.scrollY >= top) current = sec.getAttribute("id");
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { label: "About", id: "about" },
    { label: "Why Call Me", id: "whycallme" },
    { label: "Clients", id: "clients" },
    { label: "Services", id: "services" },
    { label: "Case Study", id: "casestudy" },
    { label: "Why Sialytics", id: "whysialytics" },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; 
      window.scrollTo({ top, behavior: "smooth" });
      setMobileOpen(false);
    }
  };


  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "white" : "transparent",
          transition: "0.3s ease",
          px: { xs: 2, md: 10 },
          boxShadow: scrolled ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}>
            <Box
              component="img"
              src={
                scrolled
                  ? "https://framerusercontent.com/images/EsvMCDiMo5S52D5AYrO8J0MJdQ.png?width=1024&height=257"
                  : "https://framerusercontent.com/images/Meg2UdYRmDUv1QAt3p3TYHTMYE.png?width=1024&height=264"
              }
              alt="Logo"
              sx={{ height: 55 }}
              onClick={() => handleScrollTo("home")}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                sx={{
                  color: scrolled ? "#114dc7" : "white",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  background: 'transparent',
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: activeSection === item.id ? "100%" : "0%",
                    height: "2px",
                    bgcolor: scrolled ? "#114dc7" : "white",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>

            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: scrolled ? "#114dc7" : "##114dc7",
                color: "white",
                textTransform: "none",
                fontSize: "16px",
                borderRadius: "25px",
                px: 3,
                "&:hover": {
                  backgroundColor: scrolled ? "#114dc7" : "#1565c0",
                },
              }}
            >
              Book a call
            </Button>
          </Box>

          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: scrolled ? "114dc7" : "white",
            }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} component="button" sx={{border: 'none',background: 'transparent'}} onClick={() => handleScrollTo(item.id)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#114dc7",
                  color: "white",
                  textTransform: "none",
                  borderRadius: "25px",
                  "&:hover": { backgroundColor: "#114dc7" },
                }}
              >
                Book a call
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box id="home" sx={{ height: "100vh" }}>
        <HomePage />
      </Box>
      <Box id="about" sx={{ height: "100vh" }}>
        <AboutPage />
      </Box>
      <Box id="whycallme">
        <WhyCallMePage />
      </Box>
      <Box id="clients">
        <ClientsPage/>
      </Box>
      <Box id="services">
        <ServicesPage/>
      </Box>
      <Box id="casestudy">
        <CaseStudyPage/>
      </Box>
      <Box id="whysialytics" sx={{ height: "100vh", bgcolor: "#f1f8e9", p: 5 }}>
        <Typography variant="h4">Why Sialytics Section</Typography>
      </Box>
    </>
  );
}
