import Block from "../../core/block";
import template from "./input.hbs";

interface InputProps {
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
  label?: string;
  isError?: boolean;
}

export class Input extends Block {
  private controlType = "Input";

  constructor({
    onChange,
    onFocus,
    onBlur,
    type = "text",
    error,
    placeholder,
    value,
    name,
    label,
    isError,
  }: InputProps) {
    super("div", {
      type,
      placeholder,
      name,
      value,
      error,
      label,
      isError,
      events: { input: onChange, focusout: onBlur, focusin: onFocus },
    });
  }

  render() {
    return this.compile(template, this.props);
  }

  getControlType() {
    return this.controlType;
  }
}
