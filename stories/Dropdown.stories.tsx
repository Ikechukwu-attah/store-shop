import Dropdown, { DropdownType } from "@/shared/components/dropdown/dropdown";
import type { Meta, StoryObj } from "@storybook/react";
import flag from "./assets/flag.png";

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

    data: [
      { label: "Shipt To", flag: flag.src },
      { label: "Shipt To", flag: flag.src },
      { label: "Shipt To", flag: flag.src },
    ],
    onSelect: (select: string | string[]) => {
      console.log(select);
    },
  },
};

export const MultiSelect: Story = {
  args: {
    type: DropdownType.multiSelect,
    data: [{ label: "Option1" }, { label: "Option2" }, { label: "Option3" }],
    width: "50%",
    onSelect: (select: string | string[]) => {
      console.log(select);
    },
  },
};

export const Checkbox: Story = {
  args: {
    type: DropdownType.checkbox,
    data: [{ label: "Option1" }, { label: "Option2" }, { label: "Option3" }],
    onSelect: (select: string | string[]) => {
      console.log(select);
    },
  },
};
