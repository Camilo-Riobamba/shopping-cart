import { Box, Grid, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ id, image, name, price }) {
    return (
        <Paper
            component={NavLink}
            to={'/product/' + id}
            elevation={4}
            sx={{
                flexBasis: {
                    xs: 160,
                    md: 250,
                },
                textDecoration: 'none',
                backgroundColor: 'whites.main',

                '&:hover': {
                    boxShadow: 12,
                },
            }}
        >
            <Box sx={{ backgroundColor: '#fff' }}>
                <img src={image} alt={name} width="100%" />
            </Box>

            <Box sx={{ p: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>

                <Grid container sx={{ my: 1 }}>
                    <Grid
                        item
                        sx={{
                            p: 1,
                            backgroundColor: 'primary.main',
                            borderRadius: '1000px',
                            mr: 1,
                        }}
                    />

                    <Grid
                        item
                        sx={{
                            p: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: '1000px',
                        }}
                    />
                </Grid>

                <Typography
                    variant="body1"
                    sx={{ textAlign: 'right', fontWeight: 'bold' }}
                >
                    ${price}
                </Typography>
            </Box>
        </Paper>
    );
}
