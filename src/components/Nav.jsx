import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/sprints', label: 'Sprints' },
    { href: '/agents', label: 'Agents' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-beige/95 backdrop-blur-md shadow-sm border-b border-brand-border' : 'bg-transparent'
            }`}>
            <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex-shrink-0">
                    <img
                        src={scrolled ? "/lightmode_logo.svg" : "/darkmode_logo.svg"}
                        alt="Dizrupt"
                        className="h-7 w-auto"
                    />
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map(l => (
                        <NavLink
                            key={l.href}
                            to={l.href}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'text-brand-blue' : ''}`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/login" className="nav-link text-sm">
                        Log in
                    </Link>
                    <Link to="/book" className="btn-primary text-sm py-2 px-5">
                        Book a Sprint Call
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded-lg text-brand-teal hover:bg-brand-beige transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-brand-beige border-t border-brand-border px-6 py-4 flex flex-col gap-3 shadow-lg">
                    {navLinks.map(l => (
                        <Link
                            key={l.href}
                            to={l.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-brand-teal hover:text-brand-blue py-2"
                        >
                            {l.label}
                        </Link>
                    ))}
                    <div className="pt-3 border-t border-brand-border flex flex-col gap-2">
                        <Link to="/login" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-brand-teal hover:text-brand-blue py-2">
                            Log in
                        </Link>
                        <Link to="/book" onClick={() => setMobileOpen(false)} className="btn-primary text-center">
                            Book a Sprint Call
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
