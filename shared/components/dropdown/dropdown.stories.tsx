import type { Meta, StoryObj } from "@storybook/react";
import Dropdown, { DropdownType } from "./dropdown";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    type: {
      options: ["basic", "multiSelect", "checkbox"],
      control: { type: "radio" },
    },
    data: {
      control: { type: "array" },
    },
    onSelect: {
      action: "onSelect",
    },
    width: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: DropdownType.basic,
    data: ["Option 1", "Option 2", "Option 3"],
    onSelect: (select: string | string[]) => {
      console.log(select);
    },
  },
};

export const MultiSelect: Story = {
  args: {
    type: DropdownType.multiSelect,
    data: ["Option 1", "Option 2", "Option 3"],
    onSelect: (select: string | string[]) => {
      console.log(select);
    },
  },
};

export const Checkbox: Story = {
  args: {
    type: DropdownType.checkbox,
    data: ["Option 1", "Option 2", "Option 3"],
    onSelect: (select: string | string[]) => {
      console.log(select);
    },
  },
};
