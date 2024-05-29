/* eslint-disable no-console */
import { useRef, useState } from 'react'

import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input'
import Image from 'next/image'
import { toast } from 'react-toastify'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputBase from '@mui/material/InputBase'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'

import FormInput from '../shared/FormInput'

import PaperPlaneIcon from '@/public/icons/paper-plane-icon.svg'

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
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
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
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))

const BootstrapTextArea = styled(TextField)(({ theme }) => ({
  borderRadius: 4,
  position: 'relative',
  transition: theme.transitions.create([
    'border-color',
    'background-color',
    'box-shadow'
  ]),
  '&:focus': {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main
  },
  '& .MuiFormHelperText-root': {
    backgroundColor: 'none'
  }
}))

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [radioSelected, setRadioSelected] = useState('email')
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

  const handleRadioChange = (event) => {
    setRadioSelected(event.target.value)
  }

  const onSubmit = (data) => {
    setIsLoading(true)
    const payload = {
      from_name: data.name,
      name: data.name,
      message: data.message,
      [radioSelected]: data[radioSelected]
    }

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
          toast.success('Thanks for submit your request!')
          setIsLoading(false)
        },
        (error) => {
          console.log('FAILED...', error)
          toast.error('Oops something went wrong!')
          setIsLoading(false)
        }
      )
  }

  return (
    <div className="w-[90%] mt-10 mb-5 md:mb-10 flex flex-col gap-3">
      <Box className="flex lg:flex-row flex-col lg:items-center mb-0.625 gap-5">
        <Typography
          variant="body1"
          sx={{
            color: '#000000',
            lineHeight: '1.5rem',
            letterSpacing: '-1.1%'
          }}
        >
          Please select type contact
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          sx={{
            '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
              color: 'black'
            }
          }}
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
        className="flex lg:flex-row flex-col gap-6 mt-5 justify-between"
        color="#9395A2"
        noValidate
      >
        <Stack className="lg:w-[48%] gap-6">
          <FormInput
            id="name"
            name="name"
            label="Your name "
            control={control}
            errors={errors}
            rules={{ required: true }}
            placeholder="Input your name"
            errorText="This field is required!"
            component={BootstrapInput}
            isRequired
          />

          {radioSelected === 'email' && (
            <FormInput
              id="email"
              name="email"
              errors={errors}
              label="Your email"
              isRequired
              rules={{
                required: true,
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
              }}
              control={control}
              placeholder="Input your email"
              component={BootstrapInput}
              errorText={
                errors?.email?.type === 'required'
                  ? 'This field is required!'
                  : 'Wrong email format!'
              }
            />
          )}

          {radioSelected === 'phone' && (
            <FormInput
              name="phone"
              label="Your phone"
              control={control}
              rules={{
                required: true,
                validate: (value) => matchIsValidTel(value)
              }}
              errors={errors}
              component={BootstrapPhoneInput}
              placeholder="Input your phone"
              defaultCountry="VN"
              isRequired
              errorText={
                errors?.phone?.type === 'validate'
                  ? 'Tel is invalid!'
                  : errors?.phone?.type === 'required'
                    ? 'Tel is required!'
                    : ''
              }
            />
          )}
        </Stack>

        <Stack className="lg:w-[48%]">
          <FormInput
            name="message"
            label="Your notice"
            control={control}
            placeholder="Input your notice"
            component={BootstrapTextArea}
            multiline
            rows={4.8}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Stack>
      </Box>

      <Box className="flex flex-row justify-end lg:pt-4 pt-3">
        <Button
          variant="contained"
          color="primary"
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
          endIcon={
            isLoading ? (
              <CircularProgress size={12} />
            ) : (
              <Image
                loading="lazy"
                src={PaperPlaneIcon}
                width={20}
                height="auto"
                alt="end-icon"
              />
            )
          }
          sx={{
            fontSize: '12px',
            color: 'white',
            padding: '8px',
            textTransform: 'none'
          }}
        >
          Send
        </Button>
      </Box>
    </div>
  )
}

export default ContactForm
