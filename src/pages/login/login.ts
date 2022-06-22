import "./login.css";
import Block from "../../core/block";
import { ValidationError } from "./../../components/input/validationError/validationError";

interface ServerErrorPageProps {}

export class LoginPage extends Block {
  constructor(props: ServerErrorPageProps) {
    super({
      ...props,

      onFocus: () => {
        console.log("focus event");
      },
      onBlur: () => console.log("blur event"),
    });
  }

  render(): string {
    return `<main class="main">
    <form class="form">
      <h1 class="form__title">{{loginButtonText}}</h1>
 
      {{{ Input type='text' name='login' placeholder='ivanivanov' onChange=onChange onFocus=onFocus onBlur=onBlur }}}

 
      <div class="form__row">
      <label class="form__label">Пароль
      {{{ Input type='password' name='password' placeholder='••••••••••••' onChange=onChange onFocus=onFocus onBlur=onBlur }}}
      </label>
      {{{ ValidationError ref="passwordValidationError" }}}
      </div>
      {{{ Button text="Авторизоваться" }}}
      {{{ NavLink text='Нет аккаунта?' href='/register' }}}
      </form>
  </main>`;
  }
}
