import Button from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({
  children: 'Primary'
});

export const Secondary = Template.bind({});
Secondary.args = {
  className: "secondary",
  children: 'Secondary'
};

export const Remove = Template.bind({});
Remove.args = {
  className: "remove",
  children: 'Remove'
};

export const RemoveSmall = Template.bind({});
RemoveSmall.args = {
  className: "remove small",
  children: 'Remove Small'
};