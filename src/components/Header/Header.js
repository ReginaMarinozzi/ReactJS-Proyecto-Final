import { Stack, Typography } from '@mui/material'

const Header = () => {
  return (
    <Stack justifyContent='center' sx={{
      backgroundImage: 'url("https://i.ibb.co/SKX5jc6/pawel-czerwinski-Gw-A9-CZi7f-PE-unsplash.jpg")',
      height: `600px`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      Width: 1
    }}
    >
      <Typography
        variant="h1"
        component='h1'
        align='center'
        sx={{
          textDecoration: 'none',
          color: '#FFFFFF',
        }}
      >
        Pensamos en tu piel
      </Typography>
    </Stack>
  )
}

export default Header