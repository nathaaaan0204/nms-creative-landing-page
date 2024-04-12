import { Button } from "nms-creative-ui";
import React from "react";

import { Fragment } from "react";

const OutlinedButtonSizes = () => {
  return (
    <Fragment>
      <Button variant="outlined" size="small" color="secondary">
        small
      </Button>
      <Button variant="outlined" size="medium" color="secondary">
        medium
      </Button>
    </Fragment>
  );
};

export default OutlinedButtonSizes;
