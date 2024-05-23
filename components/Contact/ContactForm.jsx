/* eslint-disable no-console */
'use client'
import { useRef } from 'react'

import { useForm, Controller } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useSnackbar } from 'notistack'
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input'

import {
  Box,
  Button,
  FormControl,
  InputBase,
  TextField,
  Typography
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#E0E3E7',
    border: '1px solid',
    borderColor: '#E0E3E7',
    width: 'auto',
    padding: '10px 12px',
    fontSize: 20,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    fontFamily: 'var(--font-nunito)',
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))

const BootstrapPhoneInput = styled(MuiTelInput)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#E0E3E7',
    border: '1px solid',
    borderColor: '#E0E3E7',
    width: 'auto',
    padding: '10px 12px',
    fontSize: 20,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    fontFamily: 'var(--font-nunito)',
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))

const BootstrapTextArea = styled(TextField)(({ theme }) => ({
  backgroundColor: '#F3F6F9',
  borderColor: '#E0E3E7',
  borderRadius: 4,
  position: 'relative',
  borderColor: '#E0E3E7',
  transition: theme.transitions.create([
    'border-color',
    'background-color',
    'box-shadow'
  ]),
  fontFamily: 'var(--font-nunito)',
  '&:focus': {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main
  },
  '& .MuiFormHelperText-root': {
    backgroundColor: 'none'
  }
}))

const ContactForm = () => {
  const form = useRef()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = (data) => {
    console.log(data)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY
        }
      )
      .then(
        () => {
          console.log('SUCCESS!')
          enqueueSnackbar('Thanks for submit your request!', {
            variant: 'success'
          })
        },
        (error) => {
          console.log('FAILED...', error)
          enqueueSnackbar('Oops something went wrong', {
            variant: 'error'
          })
        }
      )
  }

  return (
    <Box
      ref={form}
      component="form"
      className="flex flex-col items-center gap-3"
      noValidate
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr 1fr' },
          gap: 2
        }}
      >
        <FormControl variant="standard">
          <Typography
            variant="p"
            sx={{
              color: 'white',
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '-1.1%'
            }}
          >
            Name <span className="text-red-600">*</span>
          </Typography>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <BootstrapInput {...field} id="name" />}
          />
          {errors.name && (
            <p className="text-app-green font-nunito font-medium">
              This field is required!
            </p>
          )}
        </FormControl>

        <FormControl variant="standard">
          <Typography
            variant="p"
            sx={{
              color: 'white',
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '-1.1%'
            }}
          >
            Email <span className="text-red-600">*</span>
          </Typography>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            }}
            render={({ field }) => <BootstrapInput {...field} id="email" />}
          />
          {errors?.email?.type === 'required' && (
            <p className="text-app-green font-nunito font-medium">
              This field is required!
            </p>
          )}
          {errors?.email?.type === 'pattern' && (
            <p className="text-app-green font-nunito font-medium">
              Wrong email format!
            </p>
          )}
        </FormControl>

        <FormControl variant="standard">
          <Typography
            variant="p"
            sx={{
              color: 'white',
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '-1.1%'
            }}
          >
            Phone <span className="text-red-600">*</span>
          </Typography>

          <Controller
            control={control}
            rules={{
              required: true,
              validate: (value) => matchIsValidTel(value)
            }}
            render={({ field }) => (
              <BootstrapPhoneInput {...field} defaultCountry="VN" required />
            )}
            name="phone"
          />
          {errors?.phone?.type === 'validate' && (
            <p className="text-app-green font-nunito font-medium">
              Tel is invalid!
            </p>
          )}
          {errors?.phone?.type === 'required' && (
            <p className="text-app-green font-nunito font-medium">
              Tel is required!
            </p>
          )}
        </FormControl>
      </Box>

      <FormControl variant="standard" className="w-full">
        <Typography
          variant="p"
          sx={{
            color: 'white',
            fontFamily: 'var(--font-nunito)',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '-1.1%'
          }}
        >
          Your Message
        </Typography>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <BootstrapTextArea
              {...field}
              inputProps={{ style: { fontSize: 20 } }} // font size of input text
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              id="message"
              rows={15}
              multiline
            />
          )}
        />
      </FormControl>

      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </Box>
  )
}

export default ContactForm
