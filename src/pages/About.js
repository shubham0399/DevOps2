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
        <Typography variant="h4">Welcome To Jhaji's Kitchen</Typography>
        <p>
        An all-round cuisine restaurant  that serves a variety of dishes from different cuisines around the world. The menu typically includes options from Indian, Chinese, Italian, Mexican, and other international cuisines, providing a diverse range of options for diners.
        </p>
        <br />
        <p>
        The idea behind an all-round cuisine restaurant is to cater to customers who may have different tastes or dietary preferences. This type of restaurant offers a wide selection of dishes, ranging from vegetarian and vegan options to meat-based dishes, to cater to a variety of dietary needs.

In addition to providing a diverse range of cuisines, all-round cuisine restaurants often have a relaxed and comfortable atmosphere that encourages diners to stay and enjoy their meal. The ambiance is typically warm and inviting, with soft lighting and comfortable seating.

All-round cuisine restaurants may also offer a selection of beverages, including soft drinks, beer, wine, and cocktails, to complement the meal.

Overall, an all-round cuisine restaurant offers a great dining experience for people who enjoy trying new foods and want to explore different cuisines without having to go to different restaurants. It provides a one-stop-shop for a variety of tastes and preferences and is a great place to dine out with friends and family.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
