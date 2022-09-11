import "./register.css";
import Block from "../../core/block";
import template from './register.hbs'
import {Input} from "../../components/input/input";
import Button from "../../components/button";
import NavLink from "../../components/navLink";
import {Validator} from "../../heplers/validator/validator";

interface RegisterPagePageProps {
}

export class RegisterPage extends Block {

  formObj: any = {};
  validator = new Validator();

  constructor(props: RegisterPagePageProps) {

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
      error: "Почта может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
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
      name: "login",
      label: "Логин"
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
      name: "first_name",
      label: "Имя"
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
      name: "second_name",
      label: 'Фамилия'
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
      placeholder: "+7 (909) 967 30 30",
      name: "phone",
      label: 'Телефон'
    });

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

    this.children.inputRepassword = new Input({
      onChange: (e) => {
        this.formObj[e.target.name] = e.target.value;
      },
      onFocus: (e) => {
      },
      onBlur: (e) => {
        this.validator.inputValidate(e.target, this.children.inputRepassword);
      },
      type: "text",
      placeholder: "••••••••••••",
      name: "repassword",
      label: 'Пароль (ещё раз)'
    });

    this.children.buttonRegister = new Button({
      text: "Зарегистрироваться",
      onClick: (e) => {
        e?.preventDefault();
        console.log(this.formObj);
        this.validator.formValidate(this.children)
      }
    })

    this.children.navLink = new NavLink({
      text: 'Войти',
      href: '/login'
    })
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
