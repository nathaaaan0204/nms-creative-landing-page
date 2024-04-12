import { Grid, Switch } from "nms-creative-ui";
import React from "react";

const LabelPlacement = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item>
        <Switch color="secondary" checked label="Top" labelPlacement="top" />
      </Grid>

      <Grid item>
        <Switch color="secondary" label="Left" labelPlacement="left" />
      </Grid>

      <Grid item>
        <Switch color="secondary" label="Right" labelPlacement="right" />
      </Grid>

      <Grid item>
        <Switch color="secondary" label="Bottom" labelPlacement="bottom" />
      </Grid>
    </Grid>
  );
};

export default LabelPlacement;
