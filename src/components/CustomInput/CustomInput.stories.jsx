import { CustomInput } from "./CustomInput";
import "./CustomInput.css";

export default {
  title: "components/CustomInput",
  component: CustomInput,
  args: {
    type: "text",
    id: "custom-input",
    placeholder: "Escribe lo que desees",
    value: "",
  },
};

const Template = (args) => <CustomInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Escribe texto",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Escribe tu contraseña",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "Deshabilitado",
  disabled: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  type: "text",
  placeholder: "Con valor",
  value: "Valor inicial",
};