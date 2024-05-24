/* eslint-disable no-console */
'use client'
import { useRef, useState } from 'react'

import { useForm, Controller } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useSnackbar } from 'notistack'
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input'

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputBase,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import { paperPLaneIcon } from '@/shared/constants'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid',
    borderColor: '#E0E3E7',
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
    border: '1px solid',
    borderColor: '#E0E3E7',
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
  borderColor: '#E0E3E7',
  borderRadius: 4,
  position: 'relative',
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

  const [radioSelected, setRadioSelected] = useState('email')

  const handleRadioChange = (event) => {
    setRadioSelected(event.target.value)
  }

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      message: data.message,
      [radioSelected]: data[radioSelected]
    }
    console.log(payload)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
        payload,
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
    <div className="w-[85%]  mt-10 mb-10 bg-white flex flex-col  gap-3">
      <Box className="flex lg:flex-row flex-col lg:items-center lg:gap-14">
        <Typography
          variant="p"
          sx={{
            color: '#000000',
            fontFamily: 'var(--font-nunito)',
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '-1.1%'
          }}
        >
          Please select type contact
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className="md:gap-10"
          value={radioSelected}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="phone" control={<Radio />} label="Phone" />
          <FormControlLabel value="email" control={<Radio />} label="Email" />
        </RadioGroup>
      </Box>

      <hr />
      <Box
        ref={form}
        component="form"
        noValidate
        className="flex lg:flex-row flex-col  gap-3 mt-5"
      >
        <Stack className="lg:w-1/2 justify-between">
          <FormControl variant="standard">
            <Typography
              variant="p"
              sx={{
                color: '#9395A2',
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '-1.1%'
              }}
            >
              Your name <span className="text-red-600">*</span>
            </Typography>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <BootstrapInput
                  {...field}
                  id="name"
                  placeholder="Input your name"
                />
              )}
            />
            {errors.name && (
              <p className="text-app-green font-nunito font-medium">
                This field is required!
              </p>
            )}
          </FormControl>

          {radioSelected === 'email' && (
            <FormControl variant="standard">
              <Typography
                variant="p"
                sx={{
                  color: '#9395A2',
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '-1.1%'
                }}
              >
                Your email <span className="text-red-600">*</span>
              </Typography>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                }}
                render={({ field }) => (
                  <BootstrapInput
                    {...field}
                    id="email"
                    placeholder="Input your email"
                  />
                )}
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
          )}

          {radioSelected === 'phone' && (
            <FormControl variant="standard">
              <Typography
                variant="p"
                sx={{
                  color: '#9395A2',
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '-1.1%'
                }}
              >
                Your phone <span className="text-red-600">*</span>
              </Typography>

              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) => matchIsValidTel(value)
                }}
                render={({ field }) => (
                  <BootstrapPhoneInput
                    {...field}
                    defaultCountry="VN"
                    required
                    placeholder="Input your phone"
                  />
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
          )}
        </Stack>

        <FormControl variant="standard" className="lg:w-1/2">
          <Typography
            variant="p"
            sx={{
              color: '#9395A2',
              fontFamily: 'var(--font-nunito)',
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '-1.1%'
            }}
          >
            Your notice
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
                placeholder="Input your notice"
                rows={7.9}
                multiline
              />
            )}
          />
        </FormControl>
      </Box>

      <Box className="flex flex-row justify-end !mt-5">
        <Button
          variant="contained"
          color="success"
          className="w-[5rem] "
          onClick={handleSubmit(onSubmit)}
          endIcon={paperPLaneIcon}
        >
          Send
        </Button>
      </Box>
    </div>
  )
}

export default ContactForm
