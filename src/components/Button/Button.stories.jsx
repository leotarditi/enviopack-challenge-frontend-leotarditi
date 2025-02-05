import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: "secondary",
  children: "Secondary",
};

export const Remove = Template.bind({});
Remove.args = {
  className: "remove",
  children: "Remove",
};

export const RemoveSmall = Template.bind({});
RemoveSmall.args = {
  className: "remove small",
  children: "Remove Small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: "primary",
  children: "Disabled",
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  className: "primary large",
  children: "Large Button",
};

export const Small = Template.bind({});
Small.args = {
  className: "primary small",
  children: "Small Button",
};