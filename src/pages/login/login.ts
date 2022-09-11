import "./login.css";
import Block from "../../core/block";
import template from './login.hbs'
import {Input} from "../../components/input/input";
import Button from "../../components/button";
import NavLink from "../../components/navLink";
import {Validator} from "../../heplers/validator/validator";

interface LoginPageProps {
}

export class LoginPage extends Block {

  formObj: any = {};
  validator = new Validator();


  constructor(props: LoginPageProps) {
    super('div', props);
  }

  init() {
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
      placeholder: "text",
      value: "",
      error: "text",
      name: "login",
      label: 'Логин'
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
      placeholder: "text",
      value: "",
      error: "text",
      name: "password",
      label: 'Пароль'
    });

    this.children.button = new Button({
      text: 'Войти',
      onClick: (e: MouseEvent | undefined) => {
        if (e) {
          e.preventDefault()
          this.validator.formValidate(this.children)
          console.log(this.formObj);
        }
      }
    })

    this.children.navLink = new NavLink({
      text: 'Зарегистрироваться',
      href: '/register'
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
