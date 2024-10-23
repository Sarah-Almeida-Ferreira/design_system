import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "text",
    name: "text-input",
    placeholder: "placeholder",
    value: "",
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    id: "default-input",
    value: "test",
    onChange: fn(),
  },
};

export const Text = {
  args: {
    type: "text",
    value: "",
    placeholder: "Text input",
    onChange: fn(),
  },
};

export const Email = {
  args: {
    id: "email-input",
    type: "email",
    value: "",
    placeholder: "E-mail input",
    onChange: fn(),
  },
};

export const Password = {
  args: {
    id: "password-input",
    type: "password",
    value: "",
    placeholder: "Password input",
    onChange: fn(),
  },
};
