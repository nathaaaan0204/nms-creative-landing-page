import { Divider } from "@mui/material";
import { Box, Switch, Typography } from "nms-creative-ui";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";

const ThemeSection = () => {
  const [{ theme }, { setTheme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  const handleThemeChange = () => {
    const changedTheme = theme === "light" ? "dark" : "light";
    setValueTheme(changedTheme);
    setTheme(changedTheme);
  };

  const imageSource =
    theme === "dark"
      ? "/images/Theme Dashboard Dark.jpg"
      : "/images/Theme Dashboard.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "48px",
        textAlign: "center",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center center",
        backgroundImage: theme === "dark" ? 'url("/images/themeSectionBg-Dark.png")' : 'url("/images/featuresbg-light.png")',
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
       
     
      }}
    >
      <Box>
        <Typography variant="h4">Theme</Typography>
        <Typography variant="h2" color="primary">
          Flexible theme customization
        </Typography>
        <Divider
          orientation="horizontal"
          variant="middle"
          style={{
            width: "200px",
            borderWidth: "1.5px",
            borderColor: "#FF4545",
            margin: "12px auto",
          }}
        />
        <Typography variant="body1">
          Dive into the night with our UI Library's sleek Dark Mode, offering a
          stylish interface for a visually enhanced experience. Elevate your
          design aesthetics effortlessly.
        </Typography>
      </Box>

      <Switch
        color="primary"
        checked={theme === "dark"}
        onChange={handleThemeChange}
        inputProps={{ "aria-label": "Enable Dark Mode" }}
        label="Enable Dark Mode"
        labelPlacement="left"
      />
      <img
        src={imageSource}
        alt="theme dashboard"
        style={{ width: "100%", maxWidth: "1100px", borderRadius: "12px" }}
      />
    </Box>
  );
};

export default ThemeSection;
