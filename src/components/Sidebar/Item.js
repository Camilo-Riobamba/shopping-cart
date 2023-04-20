import { Add, Delete, Remove } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useShoppingCart } from 'context/ShoppingCart';

export default function Item({ product }) {
    const { removeProduct } = useShoppingCart();

    return (
        <Box
            sx={{
                mt: 1,
                p: 1,
                backgroundColor: 'whites.main',
                display: 'flex',
            }}
        >
            <Box>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '100px' }}
                />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {product.name}
                </Typography>
                <Typography variant="body2">${product.price}</Typography>
                <Grid container justifyContent="space-between">
                    <Grid
                        item
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                        <IconButton size="small">
                            <Remove />
                        </IconButton>
                        <Typography>{product.quantity}</Typography>
                        <IconButton size="small">
                            <Add />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => removeProduct(product)}>
                            <Delete />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
