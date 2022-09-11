import "./chat.css";
import Block from "../../core/block";
import template from './chat.hbs'
import ChatList from "../../components/chatList";
import MessageList from "../../components/messageList";

interface ChatPageProps {
}

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super('div', {
      ...props,
    });
  }

  init() {
    this.children.chatList = new ChatList()
    this.children.messageList = new MessageList()
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
