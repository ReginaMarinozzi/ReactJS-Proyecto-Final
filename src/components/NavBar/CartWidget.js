import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const ShoppingCart = () => {

    const { cartQuantity } = useCartContext()

    return (

        <Badge
            badgeContent={cartQuantity()}
            component={Link} to="/cart"
            sx={{ mx: 3, color: '#FFFFFF' }}
        >
            <ShoppingCartIcon
                sx={{ display: { xs: 'flex', md: 'flex' } }}
            />
        </Badge>

    )
}

export default ShoppingCart