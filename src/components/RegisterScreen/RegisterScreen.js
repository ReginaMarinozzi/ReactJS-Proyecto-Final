import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useLoginContext } from '../../context/LoginContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Grid, Stack } from '@mui/material'
import { useState } from "react"


const RegisterScreen = () => {

  const { signup } = useLoginContext()

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  return (
    <Formik
      initialValues={{ nombre: '', apellido: '', direccion: '', telefono: '', email: '', password: '' }}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required('Requerido'),
        apellido: Yup.string()
          .required('Requerido'),
        direccion: Yup.string()
          .required('Requerido'),
        email: Yup.string()
          .email('eMail incorrecto')
          .required('Requerido'),
        telefono: Yup.string()
          .matches(phoneRegExp, 'Telefono incorrecto')
          .required('Requerido'),
        password: Yup.string()
          .required('Please Enter your password')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Debe tener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
          )
      })}
      onSubmit={async (values) => {
        setError("")
        try {
          await signup(values.email, values.password)
          navigate(-1)
        } catch (error) {
          if (error.code === 'auth/email-already-in-use')
            setError('El usuario ya existe')
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Stack
          m={20}
          alignItems="center"
          height='100vh'
        >
          <Typography
            variant="h4"
            component='h5'
            mb={5}
          >
            Register
          </Typography>

          <Form >

            <Grid container
              justifyContent="center"
              spacing={2}
            >
              <Grid item
                md={6}
              >
                {error &&
                  <Typography
                    variant="body1"
                    component='p'
                  >
                    {error}
                  </Typography>}
                <Field
                  component={TextField}
                  fullWidth
                  type="nombre"
                  name="nombre"
                  label="Nombre"
                />
              </Grid>
              <Grid item
                md={6}
              >
                <Field
                  component={TextField}
                  fullWidth
                  type="apellido"
                  name="apellido"
                  label="Apellido"
                />
              </Grid>
              <Grid item
                md={6}
              >
                <Field
                  component={TextField}
                  fullWidth
                  type="direccion"
                  name="direccion"
                  label="Dirección"
                />
              </Grid>
              <Grid item
                md={6}
              >
                <Field
                  component={TextField}
                  fullWidth
                  type="telefono"
                  name="telefono"
                  label="Telefono"

                />
              </Grid>
              <Grid item
                md={6}
              >
                <Field
                  component={TextField}
                  fullWidth
                  type="email"
                  name="email"
                  label="eMail"
                />
              </Grid>
              <Grid item
                md={6}
              >
                <Field
                  component={TextField}
                  fullWidth
                  type="password"
                  name="password"
                  label="password"
                  helperText="Your password must Contain 8 Characters, One Uppercase, 
                    One Lowercase, One Number and one special case Character"
                />
              </Grid>

            </Grid>

            <Stack
              mt={2}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Crear Usuario
              </Button>
              <Typography
                variant="body1"
                component={Link} to='/login'
                sx={{ textDecoration: 'none'}}
              >
                Already have an Account?
              </Typography>
            </Stack>

          </Form>

        </Stack>
      )}

    </Formik >
  )
}

export default RegisterScreen