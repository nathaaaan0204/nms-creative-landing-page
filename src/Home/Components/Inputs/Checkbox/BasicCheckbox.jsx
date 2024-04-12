import { Checkbox } from "nms-creative-ui";
import React, { Fragment } from "react";

const BasicCheckbox = () => {
  return (
    <Fragment>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox checked disabled />
    </Fragment>
  );
};

export default BasicCheckbox;
