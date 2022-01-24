module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            fontFamily: {
                base: '"Josefin Slab", serif',
                cursive: 'Sofia, cursive',
            },
            colors: {
                purpleextralight: '#ba8fc2',
                purplelight: '#8e6096',
                purplemedium: '#683b70',
                purpledark: '#3f1c45',
                pinkdark: '#7d0047',
                pinkmedium: '#a33775',
                white: '#FFFFFF',
            },
            width: {
                300: '300px',
                250: '250px',
                350: '350px',
                'fit-content': 'fit-content',
            },
            inset: {
                46: '46px',
            },
            borderWidth: {
                1: '1px',
            },
            maxWidth: {
                150: '150px',
                250: '250px',
            },
            height: {
                400: '400px',
                225: '225px',
            },
            dropShadow: {
                '2xl': '50px 50px 50px rgba(0, 0, 0, 0.75)',
            },
            container: {
                padding: '1rem',
            },
            screens: {
                xl: '1500px',
                lg: '1062px',
                md: '725px',
                sm: '1px',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'spin-medium': 'spin 6s linear infinite',
                'spin-fast': 'spin 4s linear infinite',
                wiggle: 'wiggle 200ms ease-in-out infinite',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
