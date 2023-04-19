import { useRouteError } from 'react-router-dom';

import { Container, Typography } from '@mui/material';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <Container>
            <Typography variant="h1">{error.status}</Typography>
            <Typography variant="body1">{error.statusText}</Typography>
        </Container>
    );
}
