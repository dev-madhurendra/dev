import { Meta, StoryFn } from "@storybook/react";
import MyAvatar from ".";
import avatar from '../../../assets/avatar.svg';
export default {
  title: "Atoms/MyAvatar",
  component: MyAvatar,
} as Meta<typeof MyAvatar>;

const Template: StoryFn<typeof MyAvatar> = (args) =>  <MyAvatar {...args} />


export const Default = Template.bind({});
Default.args = {
  src: avatar,
  alt: "Avatar",
  sx: { width: 40, height: 40 },
};