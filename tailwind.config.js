/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dPrimary: '#2462eb',
                primary: '#000b60',
                secondary: '#1997C2',
                accent: '#1EB7EB',
                nuetral: '#1e2837',
                background: '#dfdfdf',
                text: '#000000'
            }
        },
    },
    plugins: [],
}

