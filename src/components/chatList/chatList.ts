import Block from "../../core/block";
import template from "./chatList.hbs";
import "./chatList.css";

export class ChatList extends Block {

  constructor() {
    super('div', {});
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
