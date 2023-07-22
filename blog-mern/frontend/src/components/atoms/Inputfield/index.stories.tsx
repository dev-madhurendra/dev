import type { Meta, StoryObj } from "@storybook/react";
import MyTextField from ".";

const meta: Meta<typeof MyTextField> = {
  title: "Atoms/TextField",
  component: MyTextField,
};

export default meta;

type Story = StoryObj<typeof MyTextField>;

export const DefaultTextField: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const CustomWidthTextField: Story = {
  args: {
    placeholder: "Placeholder",
    width: '500px',
  },
};

export const CustomWidthAndHeightTextField: Story = {
    args: {
      placeholder: "Placeholder",
      width: '500px',
    },
  };