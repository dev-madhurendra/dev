import { Meta, StoryFn } from '@storybook/react';
import MyButton, { buttonProps } from '.';

export default {
  title: 'Atoms/MyButton',
  component: MyButton,
  argTypes: {
    onButtonClick: { action: 'clicked' },
    variant:{
      control: {
        type:'select',
        options:['outlined','contained']
      }
    }
  },
  
} as Meta;

const Template: StoryFn<buttonProps> = (args) => <MyButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  buttonText: 'Basic Button',
  variant: 'contained',
  width: '200px',
  height: '80px',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  buttonText: 'Button with Icon',
  variant: 'contained',
  color:"red",
  startIcon: <span>🚀</span>,
  width: 'fit-content',
  height: '80px',
};

export const Outlined = Template.bind({});
Outlined.args = {
  buttonText: 'Outlined Button',
  variant: 'outlined',
  width: 'fit-content',
  height: '80px',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  buttonText: 'Custom Styles',
  variant: 'contained',
  width: 'fit-content',
  height: '80px',
  bgColor: '#ff9900',
  color: '#ffffff',
  hoverBgColor: '#ff6600',
  hoverColor: '#ffffff',
};

export const CustomStylesWithIcon = Template.bind({});
CustomStylesWithIcon.args = {
  buttonText: 'Custom Styles with Icon',
  variant: 'contained',
  startIcon: <span>🎉</span>,
  width: 'fit-content',
  height: '50px',
  bgColor: '#4CAF50',
  color: '#ffffff',
  hoverBgColor: '#45a049',
  hoverColor: '#ffffff',
};
