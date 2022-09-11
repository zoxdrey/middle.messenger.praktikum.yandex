import Block from "../../core/block";
import template from './messageList.hbs'
import './messageList.css'
import Input from "../input";
import {Validator} from "../../heplers/validator/validator";

export class MessageList extends Block {

  formObj: any = {};
  validator = new Validator();

  constructor() {
    super('div', {});
  }

  init() {
    this.children.input = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.input);
      },
      type: "text",
      placeholder: "Введите",
      name: "message",
      label: 'Сообщение'
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
