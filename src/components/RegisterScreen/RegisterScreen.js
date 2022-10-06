import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useLoginContext } from '../../context/LoginContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
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
        // password: Yup.string()
        //   .required('Please Enter your password')
        //   .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        //   )
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
        <Container sx={{ marginTop: 15 }}>

          <Typography variant="h4" component='h5' sx={{ marginBottom: 5 }}>Register</Typography>
          <Box>
            <Grid container spacing={3} >
              <Form >
                <Grid item md={12}>
                  {error && <Typography variant="body1" component='p'>{error}</Typography>}
                  <Field sx={{ margin: 1 }}
                    component={TextField}
                    type="nombre"
                    name="nombre"
                    label="Nombre"
                  />
                  <Field sx={{ margin: 1 }}
                    component={TextField}
                    type="apellido"
                    name="apellido"
                    label="Apellido"
                  />
                </Grid>
                <Grid item md={12}>
                  <Field sx={{ margin: 1 }}
                    component={TextField}
                    type="direccion"
                    name="direccion"
                    label="Dirección"
                  />
                  <Field sx={{ margin: 1 }}
                    component={TextField}
                    type="telefono"
                    name="telefono"
                    label="Telefono"

                  />
                </Grid>
                <Grid item md={12}>
                  <Field sx={{ margin: 1 }}
                    component={TextField}
                    type="email"
                    name="email"
                    label="eMail"
                  />
                  <Field sx={{ margin: 1 }}
                    component={TextField}
                    type="password"
                    name="password"
                    label="password"
                    helperText="Your password must Contain 8 Characters, One Uppercase, 
                    One Lowercase, One Number and one special case Character "
                  />
                </Grid>
                <Grid item md={12} sx={{ margin: 1 }} >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Crear Usuario
                  </Button>
                  <Typography sx={{ margin: 1 }} variant="body1" component={Link} to='/login'>Already have an Account?</Typography>
                </Grid>
              </Form>
            </Grid>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default RegisterScreen