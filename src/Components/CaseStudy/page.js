"use client";
import React from "react";
import { Box, Card, CardMedia, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CardData from "./data";


export default function CaseStudyPage() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        // minHeight: "100vh",
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
          // background: '#fff'
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: '#1444c3', fontWeight: '600' }}>Sample Engagement</Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ color: '#4c4d52', fontWeight: '600' }}>
            Customer Analytics and Lifetime Value (LTV) Expansion
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mt: 3, color: '#4c4d52', fontWeight: '600' }}>
            Challenge
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 200, color: '#9d9b98', fontSize: '1rem', width: '90%' }}>
            Many companies struggle to capture the full value of their customer data. Information is often fragmented across legacy systems, limiting visibility into who customers really are, why they transact, and how best to engage them. Without a unified view, leaders find it difficult to measure profitability, retention, or the true impact of digital initiatives.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mt: 3, color: '#4c4d52', fontWeight: '600' }}>
            How I Partner
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 200, color: '#9d9b98', fontSize: '1rem', width: '90%' }}>
            I work with you to create a plan and set of initiatives that unify and enrich customer data, enabling a more complete view of the customer base. My role is to help leadership prioritize and shape the path forward so teams can execute with clarity. Planning considerations may include:
          </Typography>
        </Box>
        <Box>
          <List sx={{ listStyleType: "disc", pl: 2 }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <span>
                    <strong>System alignment:</strong> Identifying options for unifying fragmented customer data and evaluating integration approaches.
                  </span>
                }
                primaryTypographyProps={{ sx: { fontSize: "0.9rem", color: '#7d7d7d' } }}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <span>
                    <strong>Customer KPIs:</strong> Defining the right performance measures that connect directly to business goals.
                  </span>
                }
                primaryTypographyProps={{ sx: { fontSize: "0.9rem", color: '#7d7d7d' } }}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={
                  <span>
                    <strong>Customer models:</strong> Outlining the types of analytical models that can surface profitability, retention, and growth drivers.
                  </span>
                }
                primaryTypographyProps={{ sx: { fontSize: "0.9rem", color: '#7d7d7d' } }}
              />
            </ListItem>
          </List>

        </Box>
        <Box>
          <Typography sx={{ my: 2, fontWeight: 200, color: '#9d9b98', fontSize: '1rem', width: '90%' }}>
            From this foundation, segmentation and journey mapping can reveal which customers to target, which behaviors to influence, and how to accelerate digital adoption. Predictive insights and engagement strategies can then provide forward-looking guidance, helping companies shape customer actions and unlock more effective acquisition, retention, and growth.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flex: { xs: "1", md: "4" },
          backgroundColor: "#001f54",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pt: { xs: 5, md: 20 },
          px: { xs: 3, md: 10 },
          position: "relative",
        }}
      >
        <Box display="flex" justifyContent="start" width="100%">
          <Box width="100%">
            <Typography
              variant="h5"
              sx={{ mt: 2, color: "#3f6fdd", fontWeight: "600" }}
            >
              The Results:
            </Typography>

            <Box display="flex" justifyContent="center" width="100%">
              <Box width="100%" mb={2}>
                {CardData.map((card, index) => (
                  <Card
                    key={index}
                    sx={{
                      backgroundColor: "#182a4f",
                      color: "#fff",
                      width: "100%",
                      borderRadius: 3,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      display: "flex",
                      mt: 2,
                      px: 3,
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection={{ xs: "column", md: "row" }}
                      alignItems="center"
                      width="100%"
                    >
                      {/* Left side (Image) */}
                      <Box
                        sx={{
                          width: { xs: "100%", md: "40%" },
                          display: "flex",
                          justifyContent: { xs: "center", md: "flex-start" },
                          alignItems: "center",
                          p: 2,
                        }}
                      >
                        <img src={card.image} width={70} height={70} />
                      </Box>

                      {/* Right side (Text) */}
                      <Box
                        sx={{
                          width: { xs: "100%", md: "60%" },
                          p: 2,
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "600" }}>
                          {card.name}
                        </Typography>
                        <Typography
                          sx={{
                            my: 2,
                            fontWeight: 200,
                            color: "#9d9b98",
                            fontSize: "1rem",
                            maxWidth: "90%",
                            mx: { xs: "auto", md: 0 },
                          }}
                        >
                          {card.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


    </Box>
  );
}
