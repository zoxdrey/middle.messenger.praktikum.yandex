import Block from "../../core/block";

export class ChatList extends Block {
  protected render(): string {
    // language=hbs
    return ` 
 <div class="chat-list">
 <div class="chat-list__nav-link">Профиль ></div>
  <div class="chat-list__search">Поиск</div>
<ul class="chat-list__items">
<li class="chat-list__item">Чебурашка</li>
<li class="chat-list__item">Крокодил Гена</li>
<li class="chat-list__item">Шапокляк</li>
</ul>
</div>
    `;
  }
}
