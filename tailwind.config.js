/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ideassion: {
                    navy: '#002F34',
                    cream: '#F1F1DE',
                    green: '#03FF83',
                    cyan: '#00DAFF',
                    blue: '#007EC5',
                }
            },
            fontFamily: {
                display: ['Space Grotesk', 'sans-serif'],
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                revealUp: {
                    'from': { opacity: '0', transform: 'translateY(40px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
