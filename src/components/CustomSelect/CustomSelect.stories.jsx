import { CustomSelect } from "./CustomSelect"
import "./CustomSelect.css"

export default {
  title: "components/CustomSelect",
  component: CustomSelect,
  args: {
    id: "custom-select",
    label: "Elige una opción",
    options: [
      { value: "value-1", label: "Label 1" },
      { value: "value-2", label: "Label 2" },
      { value: "value-3", label: "Label 3" },
    ],
  },
}

const Template = (args) => <CustomSelect {...args} />

export const Default = Template.bind({})
Default.args = {
  id: "custom-select",
  label: "Elige una opción",
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: "custom-select",
  label: "Elige una opción",
  disabled: true,
}

export const WithPreselectedOption = Template.bind({})
WithPreselectedOption.args = {
  id: "custom-select",
  label: "Elige una opción",
  value: "value-3",
}
