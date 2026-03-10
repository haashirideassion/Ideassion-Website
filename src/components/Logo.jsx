import React from 'react';

// variant="dark" → white text logo for dark backgrounds (nav, footer, dark sections)
// variant="light" → dark text logo for light/white backgrounds
export default function Logo({ className = "h-8 w-auto", variant = "dark" }) {
    const src = variant === "light" ? "/lightmode_logo.svg" : "/darkmode_logo.svg";
    return (
        <img src={src} alt="Dizrupt" className={className} />
    );
}
