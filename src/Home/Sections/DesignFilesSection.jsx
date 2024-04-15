import React from "react";
import { Box, Button, Card, Grid, Stack, Typography } from "nms-creative-ui";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const DESIGNFILES = [
  {
    title: "COLOR PALLETTE",
    subtitle: "Color Palette for a Splash of Inspiration!",
    description:
      "From soothing pastels to bold and dynamic hues, our palette is crafted to fuel your creativity and bring your designs to life.",
    imageSource: "/images/Color Pallete.png",
    alt: "Color Pallete",
  },
  {
    title: "VARIANTS",
    subtitle: "Multiple Design Variants",
    description:
      "Each component comes with various design options, providing flexibility for cool and unique vibes.",
    imageSource: "/images/Variants.png",
    alt: "Variants",
  },
  {
    title: "TYPOGRAPHY",
    subtitle: "Dynamic Typography ",
    description:
      "Whether you're aiming for sophistication or a contemporary edge, our diverse selection ensures your message stands out.",
    imageSource: "/images/Typography.jpg",
    alt: "Typography",
  },
];

const DesignFilesSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "24px",
        }}
      >
        <Typography variant="h4">Easy View Files</Typography>
        <Typography variant="h2" color="primary">
          Figma Design Files
        </Typography>
        <Divider
          orientation="horizontal"
          variant="middle"
          style={{
            width: "200px",
            borderWidth: "1.5px",
            borderColor: "#FF4545",
            // margin: "12px auto",
          }}
        />
        <Typography variant="body1">
          Level up your Figma design workflow with NMS Creative UI – a treasure
          trove of design elements and components that seamlessly integrate to
          bring your creative vision to life.
        </Typography>
        <Button
          component={Link}
          sx={{
            fontWeight: "700",
            width: { mobile: "100%", tablet: "max-content" },
          }}
          startIcon={
            <img
              src="/svg images/figma logo.svg"
              alt="Figma logo"
              style={{
                width: "24px",
              }}
            />
          }
        >
          Explore In Figma
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ maxWidth: "1300px" }}>
        {DESIGNFILES.map((item, key) => (
          <Grid item tablet={6} laptop={4} mobile={12}>
            <Card
              elevation={6}
              sx={{
                backgroundImage: `url("/images/features-bg.png")`,
                width: "100%",
                "&.MuiPaper-elevation6": {
                  padding: { mobile: "24px", desktop: "48px" },
                },
                display: "flex",
                flexDirection: "column",
                minHeight: { mobile: "436px", desktop: "550px" },
              }}
            >
              <Stack
                spacing={2}
                sx={{
                  marginBottom: {
                    mobile: "48px",
                    tablet: "24px",
                    laptop: "auto",
                  },
                }}
              >
                <Typography variant="h6" color="secondary">
                  {item.title}
                </Typography>
                <Typography variant="h4">{item.subtitle}</Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Stack>
              <img src={item.imageSource} alt={item.alt} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignFilesSection;
