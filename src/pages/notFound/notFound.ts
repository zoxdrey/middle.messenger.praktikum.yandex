import Block from "../../core/block";
import "./notFound.css";
import template from './notFound.hbs';


interface NotFoundPageProps {
}

export class NotFoundPage extends Block {
  constructor(props: NotFoundPageProps) {
    super('div', props);
  }

  init() {
  }

  render() {
    return this.compile(template, this.props);
  }
}
