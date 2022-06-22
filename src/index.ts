import notFound from "./pages/notFound";
import { LoginPage } from "./pages/login/login";
import NotFoundPage from "./pages/notFound";
import { renderDOM, registerComponent } from "./core";
import Button from "./components/button";
import Input from "./components/input";
import Devider from "./components/devider";
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

registerComponent(Button);
registerComponent(NavLink);
registerComponent(Input);
registerComponent(Devider);
registerComponent(MessageList);
registerComponent(ChatList);
registerComponent(ValidationError);

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
  // DEV: мини роутиинг
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
