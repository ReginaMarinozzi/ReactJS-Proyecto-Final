import { Stack, Typography, Grid } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LockIcon from '@mui/icons-material/Lock'

const Header = () => {

  return (

    <Stack>

      <Stack
        justifyContent='center'
        height='60vh'
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

      <Grid container
        justifyContent='center'
        mt={3}
        spacing={1}
      >
        <Grid item
          md={2}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <LocalShippingIcon
            sx={{ fontSize: `80px`, color: '#9E9E9E' }}
          />
          <Typography
            color='#9E9E9E'
          >
            Envíos a todo el país
          </Typography>
        </Grid>
        <Grid item
          md={2}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <LockIcon
            sx={{ fontSize: `80px`, color: '#9E9E9E' }}
          />
          <Typography
            color='#9E9E9E'
          >
            Comprá de forma segura
          </Typography>
        </Grid>
        <Grid item
          md={2}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        >
          <CreditCardIcon
            sx={{ fontSize: `80px`, color: '#9E9E9E' }}
          />
          <Typography
            color='#9E9E9E'
          >
            Pagá como quieras
          </Typography>
        </Grid>
      </Grid>

    </Stack>

  )
}

export default Header