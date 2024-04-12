import React, { Fragment } from "react";

import { Checkbox } from "nms-creative-ui";
import { lightTheme } from "../../../../Components/theme/light";

const Colors = () => {
  return (
    <Fragment>
      <Checkbox style={{ color: lightTheme.palette.primary[100] }} />
      <Checkbox color="info" checked />
      <Checkbox color="warning" variant="warning" />
      <Checkbox checked disabled />
    </Fragment>
  );
};

export default Colors;
