import Block from "../../core/block";

import "./navLink.css";

interface NavLinkProps {
  text: string;
  href: string;
}

export class NavLink extends Block {
  constructor({ text, href }: NavLinkProps) {
    super({ text, href });
  }

  protected render(): string {
    // language=hbs
    return `
    <a href='{{href}}' class='link'>{{text}}</a> 
    `;
  }
}
