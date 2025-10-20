"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
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
import WhyUsPage from "@/Components/WhyUs/page";
import Footer from "@/Components/Footer/page";

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
    { label: "Who I Work With", id: "clients" },
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

  const navigateToCalendly = () => {
    window.open("https://calendly.com/getsialytics/30min", "_blank", "noopener,noreferrer");
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
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          minHeight: "auto",
          overflow: "hidden",
          "&": {
            "@media (max-width: 1400px)": {
              px: 2
            },
            "@media (max-width: 1280px)": {
              px: 1
            }
          }
        }}>
          <Box sx={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 1, 
            p: { md: 2, lg: 2 },
            flexShrink: 0,
            "&": {
              "@media (max-width: 1400px)": {
                px: 1
              },
              "@media (max-width: 1280px)": {
                px: 0.5
              }
            }
          }}>
            <Box
              component="img"
              src={
                scrolled
                  ? '/logo/logo-b.png'
                  : '/logo/logo-w.png'
              }
              alt="Logo"
              sx={{ 
                height: 55,
                "&": {
                  "@media (max-width: 1400px)": {
                    height: 50
                  },
                  "@media (max-width: 1280px)": {
                    height: 45
                  }
                }
              }}
              onClick={() => handleScrollTo("home")}
            />
          </Box>

          <Box sx={{ 
            display: { xs: "none", md: "flex" }, 
            gap: 2,
            alignItems: "center",
            flexShrink: 0,
            "&": {
              "@media (max-width: 1400px)": {
                gap: 1.5
              },
              "@media (max-width: 1280px)": {
                gap: 1
              }
            }
          }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                sx={{
                  color: scrolled ? "#114dc7" : "white",
                  textTransform: "none",
                  fontSize: { md: "16px", lg: "16px" },
                  fontWeight: 500,
                  background: "transparent",
                  position: "relative",
                  transition: "transform 0.3s ease",
                  minWidth: "auto",
                  whiteSpace: "nowrap",
                  px: { md: 1, lg: 2 },
                  "&": {
                    "@media (max-width: 1400px)": {
                      fontSize: "15px",
                      px: 0.5
                    },
                    "@media (max-width: 1280px)": {
                      fontSize: "14px",
                      px: 0.5
                    }
                  },
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
                  "&:hover": {
                    transform: "rotate(15deg)",
                  },
                  "&:hover::after": {
                    // width: "100%",
                  },
                }}
              >
                {item.label}
              </Button>

            ))}
          </Box>

          <Box sx={{ 
            display: { xs: "none", md: "flex" },
            flexShrink: 0,
            ml: 1
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: scrolled ? "#114dc7" : "#114dc7",
                color: "white",
                textTransform: "none",
                fontSize: { md: "16px", lg: "16px" },
                borderRadius: "25px",
                px: { md: 2, lg: 3 },
                whiteSpace: "nowrap",
                "&": {
                  "@media (max-width: 1400px)": {
                    fontSize: "15px",
                    px: 2
                  },
                  "@media (max-width: 1280px)": {
                    fontSize: "14px",
                    px: 1.5
                  }
                },
                "&:hover": {
                  backgroundColor: scrolled ? "#114dc7" : "#1565c0",
                },
              }}
              onClick={navigateToCalendly}
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
              <ListItem key={item.id} component="button" sx={{ border: 'none', background: 'transparent' }} onClick={() => handleScrollTo(item.id)}>
                <ListItemText sx={{ color: '#114dc7' }} primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box id="home" sx={{ height: "100vh" }}>
        <HomePage />
      </Box>
      <Box id="about" sx={{ background: '#fff' }}>
        <AboutPage />
      </Box>
      <Box id="whycallme">
        <WhyCallMePage />
      </Box>
      <Box id="clients" sx={{ background: '#fff' }}>
        <ClientsPage />
      </Box>
      <Box id="services">
        <ServicesPage />
      </Box>
      <Box id="casestudy" sx={{ background: '#fff' }}>
        <CaseStudyPage />
      </Box>
      <Box id="whysialytics">
        <WhyUsPage />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
