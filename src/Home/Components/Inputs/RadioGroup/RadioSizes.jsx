import { Radio, Stack } from "nms-creative-ui";

const RadioSizes = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Radio size="small" label="Small" value="small" />
      <Radio size="medium" label="Medium" value="medium" />
      <Radio size="large" label="Large" value="large" />
    </Stack>
  );
};

export default RadioSizes;
