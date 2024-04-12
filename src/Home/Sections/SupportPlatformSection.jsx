import { Box, Card, Stack, Typography } from "nms-creative-ui";
import React from "react";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";
import Marquee from "react-fast-marquee";
const PLATFORMS = [
  {
    name: "Edge",
    imageSource: "/images/platforms/edge.svg",
    alt: "Edge",
    description: "version 91 and above",
  },
  {
    name: "Firefox",
    imageSource: "/images/platforms/firefox.svg",
    alt: "Firefox",
    description: "version 78 and above",
  },
  {
    name: "Chrome",
    imageSource: "/images/platforms/chrome.svg",
    alt: "Chrome",
    description: "version 90 and above",
  },
  {
    name: "Safari",
    imageSource: "/images/platforms/safari.svg",
    alt: "Safari",
    description: "version 14 and above",
  },
  {
    name: "Opera",
    imageSource: "/images/platforms/opera.svg",
    alt: "Opera",
    description: "version 80 and above",
  },
];
const SupportedPlatformSection = () => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        backgroundImage:
          theme === "dark"
            ? 'url("/images/platforms-section-bg-dark.jpg")'
            : 'url("/images/platforms-section-bg.jpg")',
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        padding: {
          mobile: "50px 0px",
          tablet: "48px 0px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: {
            mobile: "0px 16px",
            tablet: "0px 16px",
          },
        }}
      >
        <Typography variant="h4">Suggested Platforms</Typography>
        <Typography variant="body1">
          Unleash creativity by exploring a wealth of features that revolve
          around an extensive library of design elements and components.
        </Typography>
      </Box>
      <Stack
        sx={{
        display: {mobile:"none", desktop:"flex"},
          flexDirection: "row",
         alignItems:"center",
          gap: "48px",
        }}
      >
        {PLATFORMS.map((item, key) => (
          <Card sx={{ maxWidth: "max-content" }}>
            <Stack
              sx={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                padding: "24px",
              }}
            >
              <img
                src={item.imageSource}
                alt={item.alt}
                style={{ width: "50px" }}
              />
              <Typography variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
      <Box sx={{ display: {mobile:"block", desktop:"none"}, width:"1000px" }}>
      <Marquee direction="right" >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
         alignItems:"center",
        }}
      >
        {PLATFORMS.map((item, key) => (
          <Card sx={{ maxWidth: "max-content",  marginRight:"48px",}}>
            <Stack
              sx={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                padding: "24px",
              }}
            >
              <img
                src={item.imageSource}
                alt={item.alt}
                style={{ width: "50px" }}
              />
              <Typography variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
                    </Marquee>
                    </Box>
    </Box>
  );
};
export default SupportedPlatformSection;