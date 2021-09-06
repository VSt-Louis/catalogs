# Catalogs

Catalogs is a repository of various libraries for the node.js environment. This project is written by Victor St-Louis in typescript, but isn't actively maintained.

## Installation

Catalogs is a scope for the underlying npm packages. To install one of them, refer to it as `@catalogs/[libname]`

ex: `npm i @catalogs/react`

## Libraries

### React

This library contains react components used in the design, layout and logic of an application.

#### Components

##### Flex

A div that has `display: flex;` by default. It also provides helper props to configure common flexbox properties directly in JSX.

###### Props

- **row** : Sets `flex-direction` to `row` instead of the default of `column`
- **vCenter** / **hCenter** : Depending on `flex-direction`, applies `align-items: center;` or `justify-content: center;`
- **flex1** : Applies `flex: 1;`
- **h100** : Applies `height: 100%;`
- **w100** : Applies `width: 100%;`
- other intrinsic div props

##### Form

An easy to use form where you specify inputs in its props only

###### Props

- **fields** : An array of Field objects or strings that will act as the name attribute on a Field
- **title** : A string to be displayed above the form
- **onSubmit** : A function to call with the fields' values upon form's submission

###### Field

The Field object is used to specify fields to add to a form

- **name** : The string key to use in the values object that will be passed to the Form's onSubmit
- **title** : A label for that field
- **multiline** : Boolean, if that field allows multiline input (renders a HTML `<textarea />` instead of `<input type='text' />`)
- **emphasis** : Italic text added after the label
- **placeholder** : UNUSED (not rendered by the mui textfield)
- **defaultValue** : Value inside the field at form creation
- **isRequired** : Boolean, if that field needs to have a non-nullish value for the form to be able to submit. Will also mark the field's label with an asterisk
- **type** : Enum, `'password' | undefined`. If set to password, text entry will be hidden for that input
- **onChange** : Function to call when the value of this input changes, can be used for preSubmit validation
- **validators** : Array of Validators that must all return false in order for that field to be able to be submitted

Note that only the `name` attribute is required

###### Validator

A Validator is a function that tests a certain input's value before submitting. It either returns an error string or false if there are no errors. The Form component will ensure all its fields' validators return false before submitting.

##### Modal

If rendered and visible, will show a darkened overlay above any content and will render its children inside a Flex with rounded corners and a white background. If dismissable, a click outside of that Flex closes the Modal.

###### Props

- **children** : Elements to render inside the Modal
- **dismissable** : Boolean, if the user can close the modal by clicking outside of it
- **visible** : Optional, can be used to show/hide the Modal
- **close** : A Function that will close the modal. (Could be by setting visible to `false`)

##### Spinner

A simple spinner indicating that something is loading for example. It has `height: 100%;`, `width: 100%;` and its content is centered by default.

###### Props

- **size** : Optional, number indicating the size of the spinner in pixels
- **text** : Optional, a string to be displayed in an h2 above the spinner
