export type Validator<InputType> = (value: InputType) => string | false

export type FormValidator = (
  fieldsTests: Record<string, Validator<unknown>[]>
) => {
  errors: (fieldName: keyof typeof fieldsTests) => false | string
  checkErrors: (
    values: Record<keyof typeof fieldsTests, FormDataEntryValue>
  ) => boolean
}

export const formValidator: FormValidator = fieldsTests => {
  const cachedValues: Record<string, string> = {}
  return {
    errors: fieldName => {
      return (
        (fieldsTests[fieldName] || [])
          .map(test => test(cachedValues[fieldName]))
          .find(result => result) || false
      )
    },
    checkErrors: (formData): boolean => {
      Object.assign(cachedValues, formData)
      return Object.entries(fieldsTests).some(
        ([key, tests]) =>
          key && tests.length && tests.some(test => test(formData[key]))
      )
    },
  }
}

type FunctionToValidator<T> = (...a: any[]) => Validator<T>
type FieldValidators = {
  minLength: FunctionToValidator<string>
  maxLength: FunctionToValidator<string>
  isType: FunctionToValidator<any>
  isRequired: Validator<any>
  matches: FunctionToValidator<string>
}
export const fieldValidators: FieldValidators = {
  minLength:
    (n: number) =>
    (val: string): false | string =>
      val?.length < n && `This field has to be at least ${n} characters long`,
  maxLength:
    (n: number) =>
    (val: any): false | string =>
      val?.length > n && `This field has to be at most ${n} characters long`,
  isRequired: (val: any): false | string => !val && 'This field is required',
  isType:
    (type: string) =>
    (val: any): false | string =>
      typeof val !== type && `This field should be of type ${type}`,
  matches:
    (otherValue: string, valuesName?: string) =>
    (value: string): false | string =>
      value !== otherValue && `${valuesName || 'Values'} do not match`,
}
