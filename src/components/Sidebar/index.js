import { useShoppingCart } from 'context/ShoppingCart';

import {
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import Item from 'components/Sidebar/Item';

import { CloseRounded } from '@mui/icons-material';

export default function SideBar({ open, handler }) {
    const { products } = useShoppingCart();

    return (
        <Drawer
            open={open}
            onClose={() => handler(false)}
            keepMounted
            anchor="right"
            PaperProps={{
                sx: {
                    minWidth: 200,
                    maxWidth: 400,
                    p: 2,
                },
            }}
        >
            <IconButton
                onClick={() => handler(false)}
                sx={{ position: 'absolute', right: 10, top: 10 }}
            >
                <CloseRounded />
            </IconButton>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Carrito de compras
            </Typography>

            {products.length ? (
                <Box>
                    {products.map((product, index) => (
                        <Item key={index} product={product} />
                    ))}

                    <Divider sx={{ mt: 2 }} />

                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="body1">Subtotal:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">
                                $
                                {products.reduce(
                                    (sum, product) => sum + product.price,
                                    0
                                )}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Ir al carrito
                    </Button>
                </Box>
            ) : (
                <Typography variant="body1">
                    No hay productos en el carrito
                </Typography>
            )}
        </Drawer>
    );
}
