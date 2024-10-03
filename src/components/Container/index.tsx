import { createTheme, Theme, ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

const theme: Theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    typography: {
        fontFamily: '"Exo 2", "Roboto", sans-serif',
    },
    direction: 'ltr',
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#F9F9FE',
                    paper: '#EEEEF9',
                },
            },
        },
        dark: {
            palette: {
                background: {
                    default: '#2A4364',
                    paper: '#112E4D',
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "SET_THEME", payload: theme });
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppContainer;