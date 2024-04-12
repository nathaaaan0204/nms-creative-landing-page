import { Grid, Switch } from "nms-creative-ui";
import React from "react";


const Sizes = () => {
  return (
    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center" }}>
      <Grid item>
        <Switch color="secondary" size="small" checked />
        <Switch color="secondary" size="small" />
      </Grid>

      <Grid item>
        <Switch color="secondary" size="medium" checked />
        <Switch color="secondary" size="medium" />
      </Grid>
    </Grid>
  );
};

export default Sizes;
