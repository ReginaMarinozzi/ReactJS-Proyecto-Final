import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLoginContext } from '../../context/LoginContext'
import { Button, Typography, Box, Grid, TextField } from '@mui/material'
import { Container } from "@mui/system"

const LoginScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useLoginContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
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
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value })

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate(-1)
    } catch (error) {
      setError(error.message)
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container sx={{ height: '100vh', marginTop: 15, maxWidth: '100%' }}>
      
        <Typography variant="h4" component='h5'>Login</Typography>
        <Box sx={{ display: 'flex', flexFlow: 'column wrap', justifyContent: 'center', margin: 2}}>
        
          <form
            onSubmit={handleSubmit}
          >
            <Grid container>
            <Grid item md={12} sx={{ padding: 2 }}>
              {error && <Typography variant="body1" component='p'>{error}</Typography>}
              <TextField
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="eMail"
              />
            </Grid>
            <Grid item md={12} sx={{ padding: 2 }}>
              <TextField
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="*************"
              />
            </Grid>

            <Grid item md={12} sx={{ padding: 2 }}>
              <Button
                type="submit"
              >
                Sign In
              </Button>
              <Button component={Link}
                to="#!"
                onClick={handleResetPassword}
              >
                Forgot Password?
              </Button>
            </Grid>
            <Grid item md={12} sx={{ padding: 2 }}>
              <Button
                onClick={handleGoogleSignin}
              >
                Google login
              </Button>
              <Typography sx={{ margin: 1 }} variant="body1" component={Link} to='/register'>Register</Typography>
            </Grid>
            </Grid>
          </form>
       
      </Box>
    </Container>
  );
}
export default LoginScreen