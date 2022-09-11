import "./profile.css";
import Block from "../../core/block";
import template from './profile.hbs'
import {Input} from "../../components/input/input";
import NavLink from "../../components/navLink";

interface ProfilePagePageProps {
}

export class ProfilePage extends Block {
  constructor(props: ProfilePagePageProps) {
    super('div', {
      ...props,
    });
  }

  init() {

    this.children.inputEmail = new Input({
      type: "email",
      placeholder: "pochta@yandex.ru",
      value: "",
      label: 'Почта',
      name: "email"
    });

    this.children.inputLogin = new Input({
      type: "text",
      placeholder: "ivanivanov",
      value: "",
      label: 'Логин',
      name: "login"
    });

    this.children.inputName = new Input({
      type: "text",
      placeholder: "Иван",
      value: "",
      label: 'Имя',
      name: "first_name"
    });

    this.children.inputSubname = new Input({
      type: "text",
      placeholder: "Иванов",
      value: "",
      label: 'Фамилия',
      name: "second_name"
    });

    this.children.inputChatName = new Input({
      type: "text",
      placeholder: "ivanivanov",
      value: "",
      label: 'Имя в чате',
      name: "chat_name"
    });

    this.children.inputTel = new Input({
      type: "text",
      placeholder: "+7 (909) 967 30 3",
      value: "",
      label: 'Телефон',
      name: "phone"
    });

    this.children.navLinkEditInfo = new NavLink({
      text: 'Изменить данные',
      href: '/login'
    })

    this.children.navLinkEditPass = new NavLink({
      text: 'Изменить пароль',
      href: '/login'
    })

    this.children.navLinkEditExit = new NavLink({
      text: 'Выйти',
      href: '/exit'
    })
  }

  render(): DocumentFragment {
    console.log(template)
    return this.compile(template, this.props);
  }
}
