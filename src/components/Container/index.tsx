import React, { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    const theme = useSelector((state: any) => state?.theme?.theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default AppContainer;