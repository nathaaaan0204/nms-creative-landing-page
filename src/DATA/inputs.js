import BasicAutocomplete from "../Home/Components/Inputs/Autocomplete/BasicAutocomplete";
import FreeSolo from "../Home/Components/Inputs/Autocomplete/FreeSolo";
import MultipleValue from "../Home/Components/Inputs/Autocomplete/MultipleValue";
import ContainedButtonSizes from "../Home/Components/Inputs/Buttons/ContainedButtonSizes";
import OutlinedButtonSizes from "../Home/Components/Inputs/Buttons/OutlinedButtonSizes";
import TextButtonSizes from "../Home/Components/Inputs/Buttons/TextButtonSizes";
import BasicCheckbox from "../Home/Components/Inputs/Checkbox/BasicCheckbox";
import Colors from "../Home/Components/Inputs/Checkbox/Colors";
import IconCheckbox from "../Home/Components/Inputs/Checkbox/IconCheckbox";
import BasicRadio from "../Home/Components/Inputs/RadioGroup/BasicRadio";
import Controlled from "../Home/Components/Inputs/RadioGroup/Controlled";
import RadioSizes from "../Home/Components/Inputs/RadioGroup/RadioSizes";
import BasicSelect from "../Home/Components/Inputs/Select/BasicSelect";
import Filled from "../Home/Components/Inputs/Select/Filled";
import Standard from "../Home/Components/Inputs/Select/Standard";
import BasicSwitch from "../Home/Components/Inputs/Switch/BasicSwitch";
import LabelPlacement from "../Home/Components/Inputs/Switch/LabelPlacement";
import Sizes from "../Home/Components/Inputs/Switch/Sizes";
import Filledtextfield from "../Home/Components/Inputs/Text Field/FilledTextField";
import OutlinedTextField from "../Home/Components/Inputs/Text Field/OutlinedTextField";
import StandardTextfield from "../Home/Components/Inputs/Text Field/StandardTextField";

const INPUTS = [
  {
    id: 1,
    name: "Buttons",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [ContainedButtonSizes, OutlinedButtonSizes, TextButtonSizes],
  },
  {
    id: 2,
    name: "Textfield",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [StandardTextfield, OutlinedTextField, Filledtextfield],
  },
  {
    id: 3,
    name: "Checkbox",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [BasicCheckbox, IconCheckbox, Colors],
  },
  {
    id: 4,
    name: "Switch",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [BasicSwitch, Sizes, LabelPlacement],
  },
  {
    id: 5,
    name: "Radio Button",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [BasicRadio, Controlled, RadioSizes],
  },
  {
    id: 6,
    name: "Autocomplete",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Multiple", "Free Solo"],
    component: [BasicAutocomplete, MultipleValue, FreeSolo],
  },
  {
    id: 7,
    name: "Select",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Filled", "Standard"],
    component: [BasicSelect, Filled, Standard],
  },
];

export default INPUTS;
