import { useProducts } from 'context/ProductsProvider';

import { Box, Typography, Stack } from '@mui/material';
import ProductCard from 'utils/ProductCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RelatedProducts() {
    const products = useProducts();

    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        setRelatedProducts(
            products.sort(() => 0.5 - Math.random()).slice(0, 4)
        );
    }, [id]);

    return (
        <Box component="section" sx={{ mb: 10 }}>
            <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
                Productos relacionados
            </Typography>
            <Stack
                direction="row"
                gap={2}
                flexWrap="wrap"
                justifyContent="center"
            >
                {products &&
                    relatedProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
            </Stack>
        </Box>
    );
}
