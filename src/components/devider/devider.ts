import Block from "../../core/block";

export class Devider extends Block {
  protected render(): string {
    return `
      <div class="devider"></div>
    `;
  }
}
