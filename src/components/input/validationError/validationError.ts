import Block from "../../../core/block";

interface ValidationErrorProps {
  error?: string;
}

export class ValidationError extends Block {
  constructor({ error }: ValidationErrorProps) {
    super({
      error,
    });
  }
  protected render(): string {
    return `
        <div class="input__error">{{ error }}</div>
    `;
  }
}
