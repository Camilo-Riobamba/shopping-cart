import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const customTheme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: '#434343',
                contrastText: '#fff',
            },

            secondary: {
                main: '#eb4a5a',
                contrastText: '#fff',
            },

            whites: {
                main: '#f9fafc',
                dark: '#f6f3f3',
                contrastText: '#000000',
            },
        },

        typography: {
            fontFamily: ['Lato', 'sans-serif'].join(','),

            h1: { fontSize: '3rem', fontFamily: 'Lato', fontWeight: 800 },
            h2: { fontSize: '2.25rem', fontFamily: 'Lato', fontWeight: 800 },
            h3: { fontSize: '1.75rem', fontFamily: 'Lato', fontWeight: 600 },
            h4: { fontSize: '1.25rem', fontFamily: 'Lato', fontWeight: 600 },
            h5: { fontSize: '1rem', fontFamily: 'Lato', fontWeight: 600 },
            h6: { fontSize: '1rem', fontFamily: 'Lato', fontWeight: 600 },

            button: { fontSize: '1rem' },
        },

        shape: {
            borderRadius: 10,
        },

        shadows: [
            'none',
            'rgba(149, 157, 165, 0.2) 0px 1px 3px',
            'rgba(149, 157, 165, 0.2) 0px 2px 6px',
            'rgba(149, 157, 165, 0.2) 0px 3px 9px',
            'rgba(149, 157, 165, 0.2) 0px 4px 12px',
            'rgba(149, 157, 165, 0.2) 0px 5px 15px',
            'rgba(149, 157, 165, 0.2) 0px 6px 18px',
            'rgba(149, 157, 165, 0.2) 0px 7px 21px',
            'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            'rgba(149, 157, 165, 0.2) 0px 9px 27px',
            'rgba(149, 157, 165, 0.2) 0px 10px 30px',
            'rgba(149, 157, 165, 0.2) 0px 11px 33px',
            'rgba(149, 157, 165, 0.2) 0px 12px 36px',
            'rgba(149, 157, 165, 0.2) 0px 13px 39px',
            'rgba(149, 157, 165, 0.2) 0px 14px 42px',
            'rgba(149, 157, 165, 0.2) 0px 15px 45px',
            'rgba(149, 157, 165, 0.2) 0px 16px 48px',
            'rgba(149, 157, 165, 0.2) 0px 17px 51px',
            'rgba(149, 157, 165, 0.2) 0px 18px 54px',
            'rgba(149, 157, 165, 0.2) 0px 20px 60px',
            'rgba(149, 157, 165, 0.2) 0px 22px 66px',
            'rgba(149, 157, 165, 0.4) 0px 24px 72px',
            'rgba(149, 157, 165, 0.4) 0px 26px 78px',
            'rgba(149, 157, 165, 0.6) 0px 28px 84px',
            'rgba(149, 157, 165, 0.6) 0px 30px 90px',
        ],

        // Components
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    },
                },
            },

            MuiListItemButton: {
                variants: [
                    {
                        props: { variant: 'navigation' },
                        style: {
                            borderRadius: '10px',
                        },
                    },
                ],
            },
        },
    })
);

export default customTheme;
