import { Button } from "@mui/material";
import React, { Fragment } from "react";

const TextButtonSizes = () => {
  return (
    <Fragment>
      <Button variant="text" size="small" color="secondary">
        small
      </Button>

      <Button variant="text" size="medium" color="secondary">
        medium
      </Button>
    </Fragment>
  );
};

export default TextButtonSizes;
