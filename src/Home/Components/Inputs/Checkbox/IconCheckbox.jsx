import { Checkbox } from "nms-creative-ui";
import React, { Fragment } from "react";

import * as SolarIconSet from "solar-icon-set";

const IconCheckbox = () => {
  return (
    <Fragment>
      <Checkbox
        icon={<SolarIconSet.Heart size={24} />}
        checkedIcon={<SolarIconSet.Heart size={24} iconStyle="Bold" />}
      />
      <Checkbox
        icon={<SolarIconSet.MedalRibbon size={24} />}
        checkedIcon={<SolarIconSet.MedalRibbon size={24} iconStyle="Bold" />}
      />
      <Checkbox
        icon={<SolarIconSet.Stars size={24} />}
        checkedIcon={<SolarIconSet.Stars size={24} iconStyle="Bold" />}
      />
    </Fragment>
  );
};

export default IconCheckbox;
