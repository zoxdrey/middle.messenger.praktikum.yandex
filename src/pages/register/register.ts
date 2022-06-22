import "./register.css";
import Block from "../../core/block";

interface RegisterPagePageProps {}

export class RegisterPage extends Block {
  constructor(props: RegisterPagePageProps) {
    super({
      ...props,
    });
  }

  render(): string {
    return `<main class="main">
    <form class="form">
      <h1 class="form__title">{{loginButtonText}}</h1>
      {{{ Input type='email' name='email' label='Почта' placeholder='pochta@yandex.ru' }}}
      {{{ Input type='text' name='login' label='Логин' placeholder='ivanivanov' }}}
      {{{ Input type='text' name='name' label='Имя' placeholder='Иван' }}}
      {{{ Input type='text' name='subname' label='Фамилия' placeholder='Иванов' }}}
      {{{ Input type='tel' name='telephone' label='Телефон' placeholder='+7 (909) 967 30 30' }}}
      {{{ Input type='password' name='password' label='Пароль' placeholder='••••••••••••' }}}
      {{{ Input type='password' name='repassword' label='Пароль (ещё раз)' placeholder='••••••••••••' }}}
      {{{ Button text="Зарегистрироваться" }}}
      {{{ NavLink text='Войти' href='/login' }}}
    </form>
  </main>`;
  }
}
