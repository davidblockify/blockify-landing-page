/* eslint-disable no-console */
import { useRef, useState } from 'react'

import { useForm, Controller } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { matchIsValidTel, MuiTelInput } from 'mui-tel-input'
import Image from 'next/image'
import { toast } from 'react-toastify'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputBase from '@mui/material/InputBase'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import RotateRightIcon from '@mui/icons-material/RotateRight'

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

  const [radioSelected, setRadioSelected] = useState('email')

  const handleRadioChange = (event) => {
    setRadioSelected(event.target.value)
  }

  const onSubmit = (data) => {
    setIsLoading(true)
    const payload = {
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
    <div className="w-[85%] mt-10 mb-10 flex flex-col gap-3">
      <Box className="flex lg:flex-row flex-col lg:items-center lg:gap-14 gap-5">
        <Typography
          variant="body1"
          sx={{
            color: '#000000',
            lineHeight: '30px',
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
        noValidate
        className="flex lg:flex-row flex-col gap-5 md:gap-10 mt-5"
      >
        <Stack className="lg:w-1/2 justify-between gap-1">
          <FormControl variant="standard">
            <Typography
              variant="body1"
              sx={{
                color: '#9395A2',
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
              <p className="text-app-green font-medium">
                This field is required!
              </p>
            )}
            <p
              className={`text-app-green font-medium ${errors.name ? 'visible' : 'invisible'}`}
            >
              This field is required!
            </p>
          </FormControl>

          {radioSelected === 'email' && (
            <FormControl variant="standard">
              <Typography
                variant="body1"
                sx={{
                  color: '#9395A2',
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
              <p
                className={`text-app-green font-medium ${['required', 'pattern'].includes(errors?.email?.type) ? 'visible' : 'invisible'}`}
              >
                {errors?.email?.type === 'required'
                  ? 'This field is required!'
                  : 'Wrong email format!'}
              </p>
            </FormControl>
          )}

          {radioSelected === 'phone' && (
            <FormControl variant="standard">
              <Typography
                variant="body1"
                sx={{
                  color: '#9395A2',
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
                <p className="text-app-green font-medium">Tel is invalid!</p>
              )}
              {errors?.phone?.type === 'required' && (
                <p className="text-app-green font-medium">Tel is required!</p>
              )}
            </FormControl>
          )}
        </Stack>

        <FormControl variant="standard" className="lg:w-1/2">
          <Typography
            variant="body1"
            sx={{
              color: '#9395A2',
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
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                id="message"
                placeholder="Input your notice"
                rows={5}
                multiline
              />
            )}
          />
        </FormControl>
      </Box>

      <Box className="flex flex-row justify-end mt-5">
        <Button
          variant="contained"
          color="primary"
          className="w-[5rem]"
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          <span className="text-white normal-case mr-1">Send</span>

          {isLoading ? (
            <RotateRightIcon className="animate-spin" />
          ) : (
            <Image
              loading="lazy"
              src={PaperPlaneIcon}
              width={20}
              height="auto"
              alt="end-icon"
            />
          )}
        </Button>
      </Box>
    </div>
  )
}

export default ContactForm
