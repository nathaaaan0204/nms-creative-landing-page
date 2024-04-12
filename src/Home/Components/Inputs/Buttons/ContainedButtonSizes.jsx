import { Button } from "nms-creative-ui";
import React from "react";

import { Fragment } from "react";

const ContainedButtonSizes = () => {
  return (
    <Fragment>
      <Button size="small" color="secondary">
        small
      </Button>
      <Button size="medium" color="secondary">
        medium
      </Button>
      <Button color="secondary">large</Button>
    </Fragment>
  );
};

export default ContainedButtonSizes;
