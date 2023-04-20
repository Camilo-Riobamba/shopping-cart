import { AppBar, Toolbar, IconButton } from '@mui/material';

import { ShoppingCartOutlined } from '@mui/icons-material';

import title from 'components/Header/title.png';

export default function Header({ onClick }) {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img src={title} alt="Academlo" width={150} />

                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="shopping cart"
                    onClick={onClick}
                >
                    <ShoppingCartOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
