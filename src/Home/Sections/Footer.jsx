import { Box, Stack, Typography } from "nms-creative-ui";
import React from "react";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";


const Footer = () => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Box
      sx={{
        backgroundImage: theme === "dark" ? `url("/images/footer-bg-darkMode.png")` : `url("/images/platforms-section-bg.jpg")`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "335px",
        position: "relative",
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
      }}
    >
      <Stack
        sx={{
          isplay: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          gap: "8px",
        }}
      >
       <img src="/logo/nmsLogo.svg" alt="NMS LOGO" />
        <Typography variant="h4" color="primary">
          NMS Creative UI
        </Typography>
        <Typography
          variant="body1"
        >
         design.nmscreative.com
        </Typography>
        <Typography
          variant="body1"
        >
         © All rights reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
