import React, { useEffect, useState } from "react";

const Header = () => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        document.documentElement.classList.toggle('dark', newMode === 'dark');
        
        const rootElement = document.getElementById('root');
        if (newMode === 'dark') {
            rootElement.style.backgroundColor = '#5c4033'; 
        } else {
            rootElement.style.backgroundColor = '#f5f0e1';
        }

        localStorage.setItem('displayMode', newMode);
    };

    useEffect(() => {
        const savedMode = localStorage.getItem('displayMode');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedMode) {
            setMode(savedMode);
            document.documentElement.classList.toggle('dark', savedMode === 'dark');

            const rootElement = document.getElementById('root');
            rootElement.style.backgroundColor = savedMode === 'dark' ? '#5c4033' : '#f5f0e1';
        } else {
            const defaultMode = systemPrefersDark ? 'dark' : 'light';
            setMode(defaultMode);
            document.documentElement.classList.toggle('dark', defaultMode === 'dark');

            const rootElement = document.getElementById('root');
            rootElement.style.backgroundColor = defaultMode === 'dark' ? '#5c4033' : '#f5f0e1';
            localStorage.setItem('displayMode', defaultMode);
        }
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 flex flex-row justify-end p-4 lg:p-5 backdrop-blur-sm bg-opacity-20 z-50 transition-colors duration-400 ease-in-out ${mode === 'light' ? 'bg-gray-300' : 'bg-gray-800'}`}>
            <img
                src={mode === 'light' ? './light-mode.png' : './dark-mode.png'}
                alt={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                style={{ width: '30px', height: '30px', cursor: 'pointer', marginRight: '9vw'}}
                onClick={toggleMode} 
            />
            {/* <span className={`ms-3 text-sm font-medium ${mode === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>
                {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </span> */}
        </div>
    );
};

export default Header;
