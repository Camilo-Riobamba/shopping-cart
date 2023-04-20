import { NavLink } from 'react-router-dom';

import { Container, Box, Typography, Link, TextField } from '@mui/material';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';

import { ArrowBack } from '@mui/icons-material';

export default function Product() {
    return (
        <Container sx={{ p: { xs: 2, md: 5 } }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <ArrowBack />
                <Link component={NavLink} to="/">
                    Academlo - Tienda oficial
                </Link>
            </Box>

            <ProductInfo />

            <RelatedProducts />

            <Box component="section" sx={{ textAlign: 'center' }}>
                <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
                    Mantente en contacto
                </Typography>
                <Typography variant="body1">
                    ¡Suscribete para recibir noticias de productos y descuentos
                    especiales!
                </Typography>
                <TextField
                    label="Escribe tu email"
                    variant="outlined"
                    sx={{ mt: 2 }}
                />
            </Box>
        </Container>
    );
}
