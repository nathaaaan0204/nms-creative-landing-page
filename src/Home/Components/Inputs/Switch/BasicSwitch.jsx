import { Stack, Switch } from "nms-creative-ui";
import React from "react";

const BasicSwitch = () => {
  return (
    
      <Stack direction="row">
        <Switch boxShadow="none" color="secondary" checked />
        <Switch color="secondary" />
      </Stack>
  
  );
};

export default BasicSwitch;
