import { Meta, StoryFn } from '@storybook/react';
import MyIcon, { IconProps } from '.';
import InstagramIcon from '@mui/icons-material/Instagram';
export default {
    title: 'Atoms/MyIcon', 
    component: MyIcon,
    argTypes: {
      onClick: { action: 'clicked' },
    },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <MyIcon {...args} />;
export const Default = Template.bind({});
Default.args = {
    src: <InstagramIcon />,
    width: '50px',
    height: '50px',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    src:  <InstagramIcon sx={{color:"red"}} />,
    width: '100px',
    height: '100px',
};
  