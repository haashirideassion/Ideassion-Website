import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from "@iconify/react";
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Agents from './pages/Agents';
import Work from './pages/Work';
import Sprints from './pages/Sprints';
import Book from './pages/Book';

// ── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
    const [open, setOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => setOpen(false), [location]);

    // Hero is roughly 100vh. Past that we're in white sections.
    const pastHero = scrollY > (window.innerHeight * 0.8);
    const lifted = scrollY > 20;

    const links = [
        { to: '/how-it-works', label: 'How It Works', icon: 'solar:route-bold-duotone' },
        { to: '/agents', label: 'Agents', icon: 'solar:widget-bold-duotone' },
        { to: '/work', label: 'Work', icon: 'solar:folder-bold-duotone' },
        { to: '/sprints', label: 'Sprints', icon: 'solar:calendar-bold-duotone' },
    ];

    // Dynamic styles based on scroll position
    const navBg = pastHero
        ? 'bg-brand-beige/70 backdrop-blur-xl border-b border-black/8 shadow-[0_2px_24px_rgba(0,0,0,0.06)]'
        : lifted
            ? 'bg-brand-teal/80 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.25)]'
            : 'bg-transparent';

    const linkClass = (isActive) => pastHero
        ? `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive ? 'text-brand-teal bg-brand-teal/8' : 'text-brand-teal hover:text-brand-teal hover:bg-brand-teal/5'}`
        : `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive ? 'text-brand-neon-green bg-brand-beige/10' : 'text-brand-beige/75 hover:text-brand-beige hover:bg-brand-beige/10'}`;

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo — swaps based on bg */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={pastHero ? '/lightmode_logo.svg' : '/darkmode_logo.svg'}
                            alt="Dizrupt"
                            className="h-9 transition-opacity duration-300"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map(l => (
                            <NavLink key={l.to} to={l.to} className={({ isActive }) => linkClass(isActive)}>
                                <div className="flex items-center gap-2">
                                    <Icon icon={l.icon} className="w-4 h-4" />
                                    {l.label}
                                </div>
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="http://localhost:5175/login"
                            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 ${pastHero
                                ? 'border-brand-teal/30 text-brand-teal hover:bg-brand-teal/5'
                                : 'border-white/25 text-brand-beige/75 hover:text-brand-beige hover:border-white/50'
                                }`}
                        >
                            Login
                        </a>
                        <Link to="/book" className="btn-secondary px-5 py-2 text-sm">
                            Book a Sprint Call
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`md:hidden p-2 transition-colors ${pastHero ? 'text-brand-teal' : 'text-brand-beige/80 hover:text-brand-beige'}`}
                    >
                        {open
                            ? <Icon icon="solar:close-circle-bold-duotone" className="w-6 h-6" />
                            : <Icon icon="solar:hamburger-menu-bold-duotone" className="w-6 h-6" />
                        }
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className={`md:hidden border-t px-6 py-4 space-y-1 ${pastHero ? 'bg-brand-beige/90 backdrop-blur-xl border-black/8' : 'bg-brand-teal-dark/95 backdrop-blur-xl border-white/10'}`}>
                        {links.map(l => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `block px-4 py-3 text-sm font-medium rounded-lg ${isActive
                                        ? pastHero ? 'text-brand-teal bg-brand-teal/8' : 'text-brand-neon-green bg-brand-beige/10'
                                        : pastHero ? 'text-brand-teal' : 'text-brand-beige/70'
                                    }`
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <Icon icon={l.icon} className="w-5 h-5" />
                                    {l.label}
                                </div>
                            </NavLink>
                        ))}
                        <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                            <a href="http://localhost:5175/login" className={`block px-4 py-2 text-sm font-medium text-center rounded-lg ${pastHero ? 'text-brand-teal' : 'text-brand-beige/70'}`}>
                                Login
                            </a>
                            <Link to="/book" className="btn-secondary w-full justify-center">
                                Book a Sprint Call
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Spacer */}
            <div className="h-16" />
        </>
    );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
    return (
        <footer className="bg-brand-teal-dark text-brand-beige">
            {/* CTA band */}
            <div className="bg-brand-teal border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <div className="section-label mb-3">Ready to ship?</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-beige">
                            Start your first sprint this week.
                        </h2>
                        <p className="text-brand-beige/60 mt-2 max-w-md">
                            30-minute call. We'll scope your sprint, name the outcome, and tell you exactly what ships by Friday.
                        </p>
                    </div>
                    <Link to="/book" className="btn-secondary whitespace-nowrap flex items-center gap-2 px-8 py-4 text-base">
                        Book a Sprint Call
                        <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/darkmode_logo.svg" alt="Dizrupt" className="h-9" />
                        </div>
                        <p className="text-brand-beige/50 text-sm leading-relaxed max-w-sm">
                            An AI-native software studio delivering production-grade software in weekly sprints — 10x faster than the team you're waiting on.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-9 h-9 rounded-lg bg-brand-beige/8 hover:bg-brand-neon-green hover:text-brand-teal flex items-center justify-center text-brand-beige/60 transition-all">
                                <Icon icon="solar:share-bold-duotone" className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-brand-beige/8 hover:bg-brand-neon-green hover:text-brand-teal flex items-center justify-center text-brand-beige/60 transition-all">
                                <Icon icon="solar:globus-bold-duotone" className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-brand-beige/8 hover:bg-brand-neon-green hover:text-brand-teal flex items-center justify-center text-brand-beige/60 transition-all">
                                <Icon icon="solar:code-bold-duotone" className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-neon-green mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm text-brand-beige/60">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/how-it-works', label: 'How It Works' },
                                { to: '/agents', label: 'Agents' },
                                { to: '/work', label: 'Work' },
                                { to: '/sprints', label: 'Sprints' },
                            ].map(l => (
                                <li key={l.to}>
                                    <Link to={l.to} className="hover:text-brand-neon-green transition-colors">{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-neon-green mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-brand-beige/60">
                            <li>
                                <a href="mailto:hello@dizrupt.io" className="flex items-center gap-2 hover:text-brand-neon-green transition-colors">
                                    <Icon icon="solar:letter-bold-duotone" className="w-4 h-4 flex-shrink-0" />
                                    hello@dizrupt.io
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-2">
                                    <Icon icon="solar:map-point-bold-duotone" className="w-4 h-4 flex-shrink-0" />
                                    Pakistan · UAE · UK
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-beige/30">
                    <span>© {new Date().getFullYear()} Dizrupt Studio. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-brand-beige/60 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-beige/60 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-brand-beige">
            <Nav />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/agents" element={<Agents />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/sprints" element={<Sprints />} />
                    <Route path="/book" element={<Book />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
