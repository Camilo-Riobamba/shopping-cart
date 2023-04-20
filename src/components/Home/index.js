import { useProducts } from 'context/ProductsProvider';

import { Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import ProductCard from 'utils/ProductCard';

import logo from 'components/Home/logo.png';

export default function Home() {
    const products = useProducts();

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 5,

                    backgroundColor: 'secondary.main',
                }}
            >
                <img src={logo} alt="logo" />
            </Box>
            <Container component="section" sx={{ p: { xs: 2, md: 5 } }}>
                <Toolbar>
                    <Typography variant="h2">
                        Todos nuestros productos
                    </Typography>
                </Toolbar>
                <Stack
                    gap={{
                        xs: 1,
                        md: 2,
                    }}
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
