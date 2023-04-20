import { useParams } from 'react-router-dom';
import { useProducts } from 'context/ProductsProvider';
import { useState } from 'react';

import {
    Grid,
    Box,
    Typography,
    Button,
    Stack,
    ToggleButton,
} from '@mui/material';
import { useShoppingCart } from 'context/ShoppingCart';

export default function ProductInfo() {
    const { id } = useParams();
    const product = useProducts().find((p) => p.id === parseInt(id));

    const { addProduct } = useShoppingCart();

    const [size, setSize] = useState();

    return (
        <Box
            component="section"
            sx={{
                mt: 2,
                mb: 6,
                display: 'flex',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',

                    mt: 2,
                    flexBasis: '60%',
                    order: {
                        xs: 2,
                        md: 1,
                    },
                    flexGrow: 1,
                }}
            >
                <Typography component="h1" variant="h3" mb={2}>
                    {product.name}
                </Typography>

                <Typography variant="h2" mb={4}>
                    ${product.price}
                </Typography>

                <Typography variant="body1" mb={1}>
                    {product.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Typography component="span" variant="h6">
                        Colores
                    </Typography>
                    <Grid container sx={{ my: 1 }}>
                        <Grid
                            item
                            sx={{
                                p: 2,
                                backgroundColor: 'primary.main',
                                borderRadius: '1000px',
                                mr: 1,
                            }}
                        />

                        <Grid
                            item
                            sx={{
                                p: 2,
                                backgroundColor: 'secondary.main',
                                borderRadius: '1000px',
                            }}
                        />
                    </Grid>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Grid
                        container
                        justifyContent="space-between"
                        sx={{ mb: 1 }}
                    >
                        <Grid item>
                            <Typography>Tallas</Typography>
                        </Grid>
                        <Grid item>Guia de tallas</Grid>
                    </Grid>
                    <Stack direction="row" gap={2} flexWrap="wrap">
                        {['S', 'M', 'L', 'XL', '2XL', '3XL'].map(
                            (currentSize, index) => (
                                <ToggleButton
                                    key={index}
                                    value="check"
                                    selected={size === currentSize}
                                    onChange={() => setSize(currentSize)}
                                    sx={{
                                        p: 2,
                                        flexBasis: '50px',
                                    }}
                                >
                                    {currentSize}
                                </ToggleButton>
                            )
                        )}
                    </Stack>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => addProduct(product)}
                        sx={{
                            width: {
                                xs: '100%',
                                md: 'auto',
                            },
                        }}
                    >
                        Añadir al carrito
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    p: 2,
                    ml: 20,
                    flexGrow: 1,
                    flexBasis: '40%',
                    order: {
                        xs: 1,
                        md: 2,
                    },

                    backgroundColor: 'secondary.main',
                }}
            >
                <Box sx={{ ml: -20 }}>
                    <img src={product.image} alt={product.name} width="100%" />
                </Box>
            </Box>
        </Box>
    );
}
