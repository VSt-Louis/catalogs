export declare type Validator<InputType> = (value: InputType) => string | false;
export declare type FormValidator = (fieldsTests: Record<string, Validator<unknown>[]>) => {
    errors: (fieldName: keyof typeof fieldsTests) => false | string;
    checkErrors: (values: Record<keyof typeof fieldsTests, FormDataEntryValue>) => boolean;
};
export declare const formValidator: FormValidator;
declare type FunctionToValidator<T> = (...a: any[]) => Validator<T>;
declare type FieldValidators = {
    minLength: FunctionToValidator<string>;
    maxLength: FunctionToValidator<string>;
    isType: FunctionToValidator<any>;
    isRequired: Validator<any>;
    matches: FunctionToValidator<string>;
};
export declare const fieldValidators: FieldValidators;
export {};
