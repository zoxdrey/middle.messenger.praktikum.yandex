import "../profile.css";
import Block from "../../../core/block";
import template from "./changePassword.hbs";
import {Input} from "../../../components/input/input";
import Button from "../../../components/button";
import {Validator} from "../../../heplers/validator/validator";

interface ChangePasswordPageProps {
}

export class ChangePasswordPage extends Block {


  formObj: any = {};
  validator = new Validator();

  constructor(props: ChangePasswordPageProps) {
    super('div', {
      ...props,
    });
  }

  init() {
    this.children.inputPassword = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputPassword);
      },
      type: "text",
      placeholder: "••••••••••••",
      name: "password",
      label: 'Пароль'
    });

    this.children.inputOldPassword = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputOldPassword);
      },
      type: "text",
      placeholder: "••••••••••••",
      name: "oldpassword",
      label: 'Старый пароль'
    });

    this.children.inputNewPassword = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputNewPassword);
      },
      type: "text",
      placeholder: "••••••••••••",
      name: "newpassword",
      label: 'Новый пароль'
    });

    this.children.buttonChangePassword = new Button({
      text: "Сохранить",
      onClick: (e) => {
        e?.preventDefault();
        this.validator.formValidate(this.children)
        console.log(this.formObj);
      }
    })
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
