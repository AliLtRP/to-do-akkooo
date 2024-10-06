import React, { ReactNode, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    const selectedTheme = useSelector((state: any) => state?.theme?.theme);

    const theme = useMemo(() => selectedTheme, [selectedTheme]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default AppContainer;