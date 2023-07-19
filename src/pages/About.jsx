import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to the exquisite world of our restaurant! We pride ourselves
          on delivering an unforgettable dining experience that tantalizes your
          taste buds and leaves you with cherished memories. Our restaurant is
          more than just a place to eat; it's a culinary journey, a celebration
          of flavors, and a haven for food enthusiasts.
        </p>
        <br />
        <p>
          Customer Service: We believe that exceptional food should be
          complemented by top-notch service. Our dedicated and friendly staff is
          committed to making your dining experience memorable, ensuring your
          needs are met, and providing recommendations tailored to your
          preferences. Reservations: To ensure we can accommodate your party, we
          recommend making a reservation in advance. However, walk-ins are also
          welcome, and our team will do their best to accommodate you. Thank you
          for choosing our restaurant to be part of your culinary journey. We
          look forward to serving you and creating a remarkable dining
          experience that will keep you coming back for more. Bon appétit!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
