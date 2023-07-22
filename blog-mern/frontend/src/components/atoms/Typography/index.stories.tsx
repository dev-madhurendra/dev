import { Meta, StoryFn } from "@storybook/react";
import MyTypography, { MyTypographyProps } from ".";

export default {
    title:'Atoms/MyTypography',
    component:MyTypography
} as Meta

const Template : StoryFn<MyTypographyProps> = (args) => <MyTypography {...args} />

export const Basic = Template.bind({});

Basic.args = {
    typographyText : 'Basic '
}

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  typographyText: 'Custom Styled Typography',
  sx: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'blue',
  },
};