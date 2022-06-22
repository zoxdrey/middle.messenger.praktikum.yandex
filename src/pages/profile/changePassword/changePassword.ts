import "../profile.css";
import Block from "../../../core/block";

interface ChangePasswordPageProps {}

export class ChangePasswordPage extends Block {
  constructor(props: ChangePasswordPageProps) {
    super({
      ...props,
    });
  }

  render(): string {
    return `<main class="main">
  
    <div class="backarrow">
        <img src="../../../img/back-arrow.png" class="backarrow__image">
    </div>
    <div class="profile">
         <div class="avatar">
         <img src="../../../img/avatar-placeholder.png" class="backarrow__image">
          </div>
   
   <form class="form">
   <h1 class="form__title">Иван</h1>
       {{{ Input type='password' name='password' label='Старый пароль' placeholder='•••••••••' }}}
       {{{ Devider }}}
       {{{ Input type='password' name='oldpassword' label='Новый пароль' placeholder='•••••••••' }}}
       {{{ Devider }}}
       {{{ Input type='password' name='newpassword' label='Повторите новый пароль' placeholder='•••••••••' }}}
       {{{ Button text="Сохранить" }}}
   </form>
    </div>
    
  </main>
`;
  }
}
