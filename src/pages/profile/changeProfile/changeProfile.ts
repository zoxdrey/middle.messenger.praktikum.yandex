import "../profile.css";
import Block from "../../../core/block";

interface ChangeProfilePageProps {}

export class ChangeProfilePage extends Block {
  constructor(props: ChangeProfilePageProps) {
    super({
      ...props,
    });
  }

  render(): string {
    return `
   
<main class="main">
  
<div class="backarrow">
    <img src="../../../img/back-arrow.png" class="backarrow__image">
</div>
<div class="profile">
     <div class="avatar">
     <img src="../../../img/avatar-placeholder.png" class="backarrow__image">
      </div>

<form class="form">
<h1 class="form__title">Иван</h1>
  {{{ Input type='email' name='email' label='Почта' placeholder='pochta@yandex.ru' }}}
  {{{ Devider }}}
  {{{ Input type='text' name='login' label='Логин' placeholder='ivanivanov' }}}
      {{{ Devider }}}
  {{{ Input type='text' name='name' label='Имя' placeholder='Иван' }}}
  {{{ Devider }}}
  {{{ Input type='text' name='subname' label='Фамилия' placeholder='Иванов' }}}
  {{{ Devider }}}
  {{{ Input type='text' name='chat-name' label='Имя в чате' placeholder='Иван' }}}
  {{{ Devider }}}
  {{{ Input type='tel' name='telephone' label='Телефон' placeholder='+7(909)9673030' }}}
{{{ Button text="Сохранить" }}}
</form>
</div>

</main>
`;
  }
}
