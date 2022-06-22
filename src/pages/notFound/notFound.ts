import Block from "../../core/block";
import "./notFound.css";

interface NotFoundPageProps {}

export class NotFoundPage extends Block {
  constructor(props: NotFoundPageProps) {
    super({
      ...props,
    });
  }

  render(): string {
    return `<main class="main">
    <div class="content">
      <h1 class="content__title">404</h1>
      <p class="content__subtitle">Не туда попали</p>
    </div>
  </main>`;
  }
}
