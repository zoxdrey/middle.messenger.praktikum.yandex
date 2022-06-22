import Block from "../../core/block";
import "./serverError.css";

interface ServerErrorPageProps {}

export class ServerErrorPage extends Block {
  constructor(props: ServerErrorPageProps) {
    super({
      ...props,
    });
  }

  render(): string {
    return `<main class="main">
    <div class="content">
      <h1 class="content__title">500</h1>
      <p class="content__subtitle">Мы уже фиксим</p>
      {{{ NavLink href='/' text='Назад к чатам' }}}
    </div>
  </main>`;
  }
}
