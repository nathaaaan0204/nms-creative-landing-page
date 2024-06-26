import { Chip, Stack } from "nms-creative-ui";
import React from "react";

const Colors = () => {
  return (
    <Stack direction={"row"} spacing={1} alignItems="center">
      <Stack direction="column" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
        <Chip label="warning" color="warning" />
        <Chip label="info" color="info" />
        <Chip label="error" color="error" />
      </Stack>

      <Stack direction="column" spacing={1}>
        <Chip label="primary" color="primary" variant={"outlined"} />
        <Chip label="success" color="success" variant={"outlined"} />
        <Chip label="warning" color="warning" variant={"outlined"} />
        <Chip label="info" color="info" variant={"outlined"} />
        <Chip label="error" color="error" variant={"outlined"} />
      </Stack>
    </Stack>
  );
};

export default Colors;
