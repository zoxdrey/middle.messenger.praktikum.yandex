import "../profile.css";
import Block from "../../../core/block";
import {Input} from "../../../components/input/input";
import Button from "../../../components/button";
import {Validator} from "../../../heplers/validator/validator";
import template from "./changeProfile.hbs";

interface ChangeProfilePageProps {
}

export class ChangeProfilePage extends Block {

  formObj: any = {};
  validator = new Validator();


  constructor(props: ChangeProfilePageProps) {
    super('div', {
      ...props,
    });
  }

  init() {

    this.children.inputEmail = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputEmail);
      },
      type: "email",
      placeholder: "pochta@yandex.ru",
      value: "",
      label: 'Почта',
      name: "email"
    });

    this.children.inputLogin = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputLogin);
      },
      type: "text",
      placeholder: "ivanivanov",
      value: "",
      label: 'Логин',
      name: "login"
    });

    this.children.inputName = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputName);
      },
      type: "text",
      placeholder: "Иван",
      value: "",
      label: 'Имя',
      name: "first_name"
    });

    this.children.inputSubname = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputSubname);
      },
      type: "text",
      placeholder: "Иванов",
      value: "",
      label: 'Фамилия',
      name: "second_name"
    });

    this.children.inputChatName = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputChatName);
      },
      type: "text",
      placeholder: "ivanivanov",
      value: "",
      label: 'Имя в чате',
      name: "chat_name"
    });

    this.children.inputTel = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputTel);
      },
      type: "text",
      placeholder: "+7 (909) 967 30 3",
      value: "",
      label: 'Телефон',
      name: "phone"
    });

    this.children.buttonSave = new Button({
      text: "Зарегистрироваться",
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
