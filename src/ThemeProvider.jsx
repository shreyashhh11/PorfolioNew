import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('displayMode', newMode);
        setMode(newMode);
    };

    useEffect(() => {
        const savedMode = localStorage.getItem('displayMode') || 'light';
        setMode(savedMode);
    }, []);

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
