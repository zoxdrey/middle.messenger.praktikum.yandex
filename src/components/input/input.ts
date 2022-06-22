import Block from "../../core/block";

import "./input.css";

interface InputProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: "text" | "password" | "email";
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
}

export class Input extends Block {
  constructor({
    onChange,
    onFocus,
    onBlur,
    type = "text",
    error,
    placeholder,
    value,
    name,
  }: InputProps) {
    super({
      type,
      placeholder,
      name,
      value,
      error,
      events: { input: onChange, blur: onBlur, focus: onFocus },
    });
  }

  protected render(): string {
    return `
    <div class="input">
    <input class="input__input" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}">
    <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
  </div>
    `;
  }
}
