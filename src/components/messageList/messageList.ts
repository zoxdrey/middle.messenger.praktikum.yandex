import Block from "../../core/block";

export class MessageList extends Block {
  protected render(): string {
    // language=hbs
    return `
    
 <div class="message-list">
 <div class="message-list__header"></div>
 <ul class="message-list__items">
    <li class="message__item">Чебурашка</li>
    <li class="message__item">Крокодил Гена</li>
    <li class="message__item">Шапокляк</li>
  </ul>
{{{ Input type='text' name='login' label='Логин' placeholder='ivanivanov' }}}
  </div>
    `;
  }
}
