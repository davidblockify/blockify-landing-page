import React from 'react'

import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import FormHelperText from '@mui/material/FormHelperText'

export default function FormInput(props) {
  const {
    name,
    label,
    control,
    rules = {},
    placeholder,
    errors = {},
    errorText = '',
    component: Component,
    defaultCountry = 'VN',
    multiline = false,
    InputLabelProps = { shrink: false },
    rows = 1
  } = props

  const isError = !!errors[name]?.type

  return (
    <FormControl variant="standard">
      <Typography
        variant="body1"
        sx={{
          lineHeight: '30px',
          letterSpacing: '-1.1%'
        }}
      >
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Component
            {...field}
            id={name}
            defaultCountry={defaultCountry}
            placeholder={placeholder}
            multiline={multiline}
            InputLabelProps={InputLabelProps}
            rows={rows}
          />
        )}
      />
      {isError && <FormHelperText error>{errorText}</FormHelperText>}
    </FormControl>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string || PropTypes.node,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
  errorText: PropTypes.string,
  component: PropTypes.elementType.isRequired
}
