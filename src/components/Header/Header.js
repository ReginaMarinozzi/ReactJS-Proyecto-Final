import { Stack, Typography } from '@mui/material'

const Header = () => {

  return (

    <Stack
      justifyContent='center'
      height='80vh'
      sx={{
        backgroundImage: 'url("https://i.ibb.co/SKX5jc6/pawel-czerwinski-Gw-A9-CZi7f-PE-unsplash.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Typography
        variant="h1"
        component='h1'
        align='center'
        color='#FFFFFF'
      >
        Pensamos en tu piel
      </Typography>
    </Stack>

  )
}

export default Header