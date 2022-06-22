import "./chat.css";
import Block from "../../core/block";

interface ChatPageProps {}

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super({
      ...props,
    });
  }

  render(): string {
    return `<main class="main">
    <div class="chat-container"> 
        {{{ ChatList }}}
    {{{ MessageList }}}</div>
</main>
{{{ NavLink href='/' text='Назад' }}}`;
  }
}
