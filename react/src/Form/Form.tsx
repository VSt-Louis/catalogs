import React, { useState, useRef } from 'react'
import Flex from '../Flex'
import TextField from '@material-ui/core/TextField'
import styles from './Form.module.scss'
import {
  formValidator,
  Validator,
  fieldValidators as fv,
} from './InputValidation'
import Grid from '@material-ui/core/Grid'

type Field<InputType> = {
  name: string
  title?: string
  multiline?: boolean
  emphasis?: string
  placeholder?: string
  defaultValue?: string
  isRequired?: boolean
  type?: 'password'
  onChange?: (v: InputType) => void
  validators?: Validator<InputType>[]
}

type Props = {
  fields: (string | Field<any>)[]
  title: string
  onSubmit: (formData: Record<string, FormDataEntryValue>) => void
}

export default function Form({ fields, title, onSubmit }: Props) {
  const [showErrors, setShowErrors] = useState(false)
  const fieldValidators = fields.reduce((fv, f) => {
    if (typeof f === 'object' && f?.validators?.length) {
      return { ...fv, [f.name]: f.validators }
    }
    return fv
  }, {})

  const validator = useRef(formValidator(fieldValidators))

  // useEffect(() => {
  //   validator.current = formValidator(fieldValidators)
  // }, [])

  return (
    <Flex column>
      <Flex className={styles.title}>{title}</Flex>
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault()
          const formData = Object.fromEntries(
            new FormData(e.target as HTMLFormElement).entries()
          )
          const errors = validator.current.checkErrors(formData)
          setShowErrors(true)
          if (!errors) {
            onSubmit(formData)
          }
        }}
      >
        <Grid container spacing={2} direction='column' alignItems='center'>
          {fields.map(f => {
            if (typeof f === 'string') {
              return (
                <Grid item key={f}>
                  <TextField error={showErrors} id={f} label={f} />
                </Grid>
              )
            } else {
              const errorText = showErrors && validator.current.errors(f.name)
              return (
                <Grid item key={f.name}>
                  <TextField
                    type={f.type === 'password' ? 'password' : undefined}
                    name={f.name}
                    multiline={f.multiline}
                    error={!!errorText}
                    id={f.name}
                    label={f.title || f.emphasis || f.name}
                    defaultValue={f.defaultValue}
                    helperText={errorText}
                    variant='outlined'
                    required={f?.validators?.includes(fv.isRequired)}
                  />
                </Grid>
              )
            }
          })}
          <Grid item key='submit'>
            <input type='submit'></input>
          </Grid>
        </Grid>
      </form>
    </Flex>
  )
}
