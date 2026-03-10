/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    beige: '#F7F7F2',
                    'beige-alt': '#EBEAE1',
                    teal: '#0A2530',
                    'teal-dark': '#06171E',
                    'neon-green': '#00FF7A',
                    blue: '#0088FF',
                    white: '#FFFFFF',
                    black: '#000000',
                    muted: '#62767D',
                    border: '#D3D8D6',
                    'border-light': '#E2E5E3',
                }
            },
            fontFamily: {
                display: ['Space Grotesk', 'system-ui', 'sans-serif'],
                sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 35s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.7s ease forwards',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                slideUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                revealUp: {
                    'from': { opacity: '0', transform: 'translateY(40px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 245, 120, 0.4)' },
                    '50%': { boxShadow: '0 0 0 8px rgba(0, 245, 120, 0)' },
                },
            }
        },
    },
    plugins: [],
}
