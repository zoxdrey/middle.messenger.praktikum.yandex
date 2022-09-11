import Block from "../../core/block";
import template from "./navLink.hbs";

interface NavLinkProps {
    text: string;
    href: string;
}

export class NavLink extends Block {
    constructor({text, href}: NavLinkProps) {
        super('div', {text, href});
    }

    render() {
        return this.compile(template, this.props)
    }
}
