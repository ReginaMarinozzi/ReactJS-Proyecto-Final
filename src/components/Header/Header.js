import {Box} from '@mui/material'
import Typography from '@mui/material/Typography';


const Header = () => {
  return (
    <Box sx={{
      backgroundImage: 'url("https://i.ibb.co/SKX5jc6/pawel-czerwinski-Gw-A9-CZi7f-PE-unsplash.jpg")',
      height: `600px`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      Width: 1,
      paddingTop: 10
    }}>
      <Typography variant="h1" align='center' sx={{
        paddingTop: 20, textDecoration: 'none',
        color: '#FFFFFF',
      }} >
        Pensamos en tu piel
      </Typography>
    </Box>

  )
}

export default Header