import * as React from 'react';
import { AppBar, Box, Typography, Toolbar, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCart from './CartWidget.js';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginContext'
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

const settings = [
    {
        nombre: 'Mis órdenes',
        link: '/ordenes'
    },
    {
        nombre: 'Mi wishlist',
        link: '/wishlist'
    },
]

const pages = [

    {
        categoria: 'Skincare',
        link: "/productos/skincare"
    },
    {
        categoria: 'Fragance',
        link: '/productos/fragance'
    },
    {
        categoria: 'Makeup',
        link: '/productos/makeup'
    }
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

const ResponsiveAppBar = () => {

    const { logout, user } = useLoginContext();

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
        } catch (error) {
            console.error(error.message);
        }
    };



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?name=${search}`)
    }

    return (
        <AppBar position="fixed" sx={{ bgcolor: '#e1aac1' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        component={Link} to='/'
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        REGINA STORE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu} component={Link} to={page.link}>
                                    {page.categoria}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        component={Link} to='/'
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        R STORE

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (

                            <Button
                                key={index}
                                component={Link} to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.categoria}
                            </Button>

                        ))}
                    </Box>

                    <Search sx={{marginRight: 1}}>
                        <form onSubmit={handleSubmit}>
                            
                            <StyledInputBase
                                placeholder="Buscar..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                id="message"
                                name="message"
                            />

                            <Button
                                variant="outline"
                                type="submit"
                            >
                                Buscar
                            </Button>

                        </form>
                    </Search>

                    <Box sx={{ flexGrow: 0 }}>

                        {user ?
                            <Button
                                onClick={handleLogout}
                                variant="contained"
                                sx={{ marginLeft: 2 }}>
                                Cerrar sesión
                            </Button>
                            :
                            <Button
                                component={Link}
                                to="/login"
                                variant="contained"
                            >
                                Acceder
                            </Button>
                        }

                    </Box>

                    <ShoppingCart />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem
                                    component={Link}
                                    to={setting.link}
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center" sx={{ my: 2, color: 'black' }}> {setting.nombre} </Typography>

                                </MenuItem>
                            ))}
                        </Menu>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;

