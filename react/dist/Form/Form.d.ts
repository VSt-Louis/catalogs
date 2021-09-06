/// <reference types="react" />
import { Validator } from './InputValidation';
declare type Field<InputType> = {
    name: string;
    title?: string;
    multiline?: boolean;
    emphasis?: string;
    placeholder?: string;
    defaultValue?: string;
    isRequired?: boolean;
    type?: 'password';
    onChange?: (v: InputType) => void;
    validators?: Validator<InputType>[];
};
declare type Props = {
    fields: (string | Field<any>)[];
    title: string;
    onSubmit: (formData: Record<string, FormDataEntryValue>) => void;
};
export default function Form({ fields, title, onSubmit }: Props): JSX.Element;
export {};
