import Block from "../../core/block";
import "./serverError.css";
import template from './serverError.hbs'

interface ServerErrorPageProps {}

export class ServerErrorPage extends Block {
  constructor(props: ServerErrorPageProps) {
    super('div',{
      ...props,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
