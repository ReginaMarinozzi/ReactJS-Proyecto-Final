import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLoginContext } from '../../context/LoginContext'
import { Button, Typography, Grid, TextField, Stack } from '@mui/material'

const LoginScreen = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { login, loginWithGoogle, resetPassword } = useLoginContext()

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate(-1)
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Correo invalido')
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña invalida')
      }
      if (error.code === ' auth/user-not-found') {
        setError('Usuario no encontrado')
      }
    }
  }

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value })

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate(-1)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    if (!user.email) return setError("Write an email to reset password")
    try {
      await resetPassword(user.email)
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message)
    }
  };

  return (

    <Stack
      m={20}
      alignItems="center"
      height='100vh'
    >
      <Typography
        variant="h4"
        component='h5'
        mb={2}
      >
        Login
      </Typography>
      <form
        onSubmit={handleSubmit}
      >
        <Grid container
          justifyContent="center"
          spacing={2}
        >
          <Grid item
            md={12}
          >
            {error &&
              <Typography
                variant="body1"
                component='p'
              >
                {error}
              </Typography>}

            <TextField
              fullWidth
              label='eMail'
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item
            md={12}
          >
            <TextField
              fullWidth
              label='password'
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Stack
          mt={2}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          direction='row'
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Button
            onClick={handleGoogleSignin}
            variant="contained"
            color="primary"
          >
            Google login
          </Button>
          <Button
            component={Link}
            to="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </Button>
          <Typography
            variant="body1"
            component={Link} to='/register'
            sx={{ textDecoration: 'none' }}
          >
            Register
          </Typography>
        </Stack>

      </form>
    </Stack>

  )
}
export default LoginScreen