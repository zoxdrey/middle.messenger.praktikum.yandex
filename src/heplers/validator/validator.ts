import Block from "../../core/block";

export class Validator {

  defaultErrorText = 'Поле заполнено неверно'
  validatorPatternsByNameMap = new Map<string, RegExp>()

  constructor() {
    this.validatorPatternsByNameMap.set('first_name', new RegExp('^[А-ЯA-Z][а-яА-Яa-zA-Z-]*$'))
    this.validatorPatternsByNameMap.set('second_name', new RegExp('^[А-ЯA-Z][а-яА-Яa-zA-Z-]*$'))
    this.validatorPatternsByNameMap.set('login', new RegExp('^[a-zA-Z0-9-_]{3,20}$'))
    this.validatorPatternsByNameMap.set('email', new RegExp('^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$'))
    this.validatorPatternsByNameMap.set('password', new RegExp('^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,40})\\S$'))
    this.validatorPatternsByNameMap.set('repassword', new RegExp('^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,40})\\S$'))
    this.validatorPatternsByNameMap.set('oldpassword', new RegExp('^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,40})\\S$'))
    this.validatorPatternsByNameMap.set('newpassword', new RegExp('^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,40})\\S$'))
    this.validatorPatternsByNameMap.set('phone', new RegExp('^(?:\\+7|8)?9(?:\\d{9,15})$'))
    this.validatorPatternsByNameMap.set('message', new RegExp('[\S\s]+[\S]+'))
  }


  inputValidate(input: HTMLInputElement, component: Block, errorText = this.defaultErrorText) {
    console.log(input)
    const isError = this.validate(input.name, input.value)
    component.setProps({
      isError: !isError,
      value: input.value,
      error: errorText
    })
  }

  formValidate(form: Record<string, Block>) {
    for (const [key, block] of Object.entries(form)) {
      const name = form[key].getName();
      if (name !== null && (typeof name !== 'undefined')) {
        const isError = this.validate(name, (block.getContent() as HTMLInputElement).value)
        block.setProps({
          isError: !isError,
          error: this.defaultErrorText
        })
      }
    }
  }


  private validate(inputName: string, value: string): boolean {
    if (this.validatorPatternsByNameMap.has(inputName)) {
      const result = this.validatorPatternsByNameMap.get(inputName)?.test(value)
      if (result) {
        return result
      } else {
        return false
      }
    }
    return true
  }
}
