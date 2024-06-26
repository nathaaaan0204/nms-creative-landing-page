import { Slider } from "@mui/material";
import { Stack } from "nms-creative-ui";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const DiscreteSliderLabel = () => {
  return (
    <Stack alignItems="center" sx={{ width: "100%", padding: "0 24px " }}>
      <Slider
        aria-label="Default"
        defaultValue={40}
        getAriaValueText={valuetext}
        marks={marks}
        color="secondary"
        valueLabelDisplay="on"
      />
    </Stack>
  );
}
export default DiscreteSliderLabel;
