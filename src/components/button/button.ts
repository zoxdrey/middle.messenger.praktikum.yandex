import Block from "../../core/block";
import "./button.css";
import template from "./button.hbs";

interface ButtonProps {
  text: string;
  onClick: (e?: MouseEvent) => void;
}

export class Button extends Block {
  constructor({text, onClick}: ButtonProps) {
    super('div', {text, events: {click: onClick}});
  }

  render() {
    return this.compile(template, this.props)
  }
}
