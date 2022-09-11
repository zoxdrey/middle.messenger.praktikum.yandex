/*import notFound from "./pages/notFound";
import { LoginPage } from "./pages/login/login";
import NotFoundPage from "./pages/notFound";
import { renderDOM, registerComponent } from "./core";
import Button from "./components/button";
import Input from "./components/input";
import Devider from "./components/divider";
import MessageList from "./components/messageList";
import ChatList from "./components/chatList";
import { ServerErrorPage } from "./pages/serverError/serverError";
import { NavLink } from "./components/navLink/navLink";
import Block from "./core/block";
import { RegisterPage } from "./pages/register/register";
import { ProfilePage } from "./pages/profile/profile";
import { ChangePasswordPage } from "./pages/profile/changePassword/changePassword";
import { ChangeProfilePage } from "./pages/profile/changeProfile/changeProfile";
import { ChatPage } from "./pages/chat/chat";
import { ValidationError } from "./components/input/validationError/validationError";
import { DumbImput } from "./components/input/dumpInput/validationError";

registerComponent(Button);
registerComponent(NavLink);
registerComponent(Input);
registerComponent(Devider);
registerComponent(MessageList);
registerComponent(ChatList);
registerComponent(ValidationError);
registerComponent(DumbImput);

export class DefaultPage extends Block {
  render(): string {
    return `<main class="main">
    {{{ NavLink href='/not-found' text='Не найдено' }}}
    {{{ NavLink href='/server-error' text='Ошибка сервера' }}}
    {{{ NavLink href='/login' text='Форма логина' }}}
    {{{ NavLink href='/regsiter' text='Форма регистрации' }}}
    {{{ NavLink href='/profile' text='Профиль' }}}
    {{{ NavLink href='/change-profile' text='Изменить профиль' }}}
    {{{ NavLink href='/change-password' text='Изменить пароль' }}}
    {{{ NavLink href='/chat' text='Чат' }}}
      </main>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.location.pathname);
  switch (document.location.pathname) {
    case "/not-found":
      const notFoundPage = new NotFoundPage({});
      renderDOM(notFoundPage);
      break;
    case "/server-error":
      const serverErrorPage = new ServerErrorPage({});
      renderDOM(serverErrorPage);
      break;
    case "/login":
      const loginPage = new LoginPage({});
      renderDOM(loginPage);
      break;
    case "/regsiter":
      const regsiterPage = new RegisterPage({});
      renderDOM(regsiterPage);
      break;
    case "/profile":
      const profilePage = new ProfilePage({});
      renderDOM(profilePage);
      break;
    case "/change-profile":
      const changeProfilePage = new ChangeProfilePage({});
      renderDOM(changeProfilePage);
      break;
    case "/change-password":
      const changePasswordPage = new ChangePasswordPage({});
      renderDOM(changePasswordPage);
      break;
    case "/chat":
      const chatPage = new ChatPage({});
      renderDOM(chatPage);
      break;
    default:
      const defaultPage = new DefaultPage();
      renderDOM(defaultPage);
  }
});
*/

import {NotFoundPage} from './pages/notFound/notFound';
import {ServerErrorPage} from './pages/serverError/serverError';
import Block from "./core/block";
import {LoginPage} from './pages/login/login';
import RegisterPage from "./pages/register";
import ChangePasswordPage from "./pages/profile/changePassword";
import {ChatPage} from "./pages/chat/chat";
import ChangeProfilePage from "./pages/profile/changeProfile";
import ProfilePage from "./pages/profile";


export class DefaultPage extends Block {

    constructor(props = {}) {
        super('div', props);
    }

    render() {
        return this.compile(this.defaultPageRender, this.props);
    }

    defaultPageRender(): string {
        return `<main class="main">
    <a href='/not-found'>Не найдено</a>
    <a href='/server-error'>Ошибка сервера</a>
    <a href='/login'>Форма логина</a>
    <a href='/register'>Форма регистрации</a>
    <a href='/profile'>Профиль</a>
    <a href='/change-profile'>Изменить профиль</a>
    <a href='/change-password'>Изменить пароль</a>
    <a href='/chat'>Чат</a>
      </main>`;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    console.log(document.location.pathname);
    const root = document.querySelector('#app')!;
    switch (document.location.pathname) {
        case "/not-found":
            const homePage = new NotFoundPage({});
            root.append(homePage.getContent()!);
            homePage.dispatchComponentDidMount();
            break;
        case "/server-error":
            const serverErrorPage = new ServerErrorPage({});
            root.append(serverErrorPage.getContent()!);
            serverErrorPage.dispatchComponentDidMount();
            break;
        case "/login":
            const loginPage = new LoginPage({});
            root.append(loginPage.getContent()!);
            loginPage.dispatchComponentDidMount();
            break;
        case "/register":
            const registerPage = new RegisterPage({});
            root.append(registerPage.getContent()!);
            registerPage.dispatchComponentDidMount();
            break;
        case "/profile":
            const profilePage = new ProfilePage({});
            root.append(profilePage.getContent()!);
            profilePage.dispatchComponentDidMount();
            break;
        case "/change-profile":
            const changeProfilePage = new ChangeProfilePage({});
            root.append(changeProfilePage.getContent()!);
            changeProfilePage.dispatchComponentDidMount();
            break;
        case "/change-password":
            const changePasswordPage = new ChangePasswordPage({});
            root.append(changePasswordPage.getContent()!);
            changePasswordPage.dispatchComponentDidMount();
            break;
        case "/chat":
            const chatPage = new ChatPage({});
            root.append(chatPage.getContent()!);
            chatPage.dispatchComponentDidMount();
            break;
        default:
            const defaultPage = new DefaultPage({});
            root.append(defaultPage.getContent()!);
            defaultPage.dispatchComponentDidMount();
    }
});
