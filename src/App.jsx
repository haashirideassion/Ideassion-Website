import React, { useState, useEffect, useRef } from 'react';
import {
    ChatCircleText,
    Handshake,
    RocketLaunch,
    Graph,
    Users,
    ShieldCheck,
    Cpu,
    Robot,
    ArrowRight,
    CaretRight,
    Globe,
    Envelope,
    Phone,
    DeviceMobile,
    Monitor,
    Buildings,
    Star,
    CheckCircle,
    X,
    ArrowUpRight,
    LinkedinLogo,
    TwitterLogo,
    House,
    Stack,
    TrendUp
} from "@phosphor-icons/react";

// --- Brand Logos (Actual SVGs) ---
const BrandLogo = ({ name, className = "w-6 h-6" }) => {
    const logos = {
        'ideassion': (
            <svg viewBox="0 0 400 400" fill="currentColor" className={className}>
                <path d="M200 150 C230 100 280 100 280 150 C280 200 230 200 200 200 C170 200 120 200 120 150 C120 100 170 100 200 150 Z" />
                <path d="M200 250 C170 300 120 300 120 250 C120 200 170 200 200 200 C230 200 280 200 280 250 C280 300 230 300 200 250 Z" />
                <path d="M150 200 C100 170 100 120 150 120 C200 120 200 170 200 200 C200 230 200 280 150 280 C100 280 100 230 150 200 Z" />
                <path d="M250 200 C300 230 300 280 250 280 C200 280 200 230 200 200 C200 170 200 120 250 120 C300 120 300 170 250 200 Z" />
                <circle cx="230" cy="170" r="15" />
            </svg>
        ),
        'cursor': (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                <path d="M12.923 20.916l-3.37-8.528-6.195 6.195V2.422l16.106 11.235-7.513 1.074 3.791 8.528-2.819 1.657z" />
            </svg>
        ),
        'supabase': (
            <svg viewBox="0 0 24 24" fill="#3ecf8e" className={className}>
                <path d="M21.362 9.354H12V.347L2.638 10.646h9.362v9.007l9.362-10.299z" />
            </svg>
        ),
        'neon': (
            <svg viewBox="0 0 24 24" fill="#00e599" className={className}>
                <path d="M12 0l10.392 6v12L12 24 1.608 18V6z" opacity=".2" />
                <path d="M12 4l6.928 4v8L12 20 5.072 16V8z" />
            </svg>
        ),
        'react': (
            <svg viewBox="-11.5 -10.232 23 20.463" className={className}>
                <circle r="2.05" fill="#61dafb" />
                <g fill="none" stroke="#61dafb" strokeWidth="1">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        ),
        'nodejs': (
            <svg viewBox="0 0 24 24" fill="#339933" className={className}>
                <path d="M12 2L4.5 6.3V15L12 19.3L19.5 15V6.3L12 2M10.5 15.6L7.1 13.6V10M12 17L5.5 13.3V6.7H5.6L12 3L18.4 6.7L18.5 6.7V13.3L12 17M13.5 15.6V10L16.9 12V15.5L13.5 15.6Z" />
            </svg>
        ),
        'firebase': (
            <svg viewBox="0 0 24 24" fill="#FFCA28" className={className}>
                <path d="M3.89 15.67L5.26 17l10.33-10.33-1.37-1.37zM12 2L4 16h16L12 2z" />
            </svg>
        ),
    };
    return logos[name] || null;
};

// --- Themed Case Study Modal ---
const CaseStudyModal = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <div className="absolute inset-0 bg-ideassion-navy/95 backdrop-blur-xl animate-fade-in" onClick={onClose} />

            <div className="relative w-full max-w-6xl max-h-[90vh] bg-ideassion-cream border-[6px] border-ideassion-navy shadow-[40px_40px_0px_0px_#03FF83] overflow-y-auto animate-reveal-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 w-14 h-14 bg-ideassion-navy text-white flex items-center justify-center hover:bg-ideassion-blue transition-colors z-20"
                >
                    <X weight="bold" className="w-6 h-6" />
                </button>

                <div className="grid lg:grid-cols-12">
                    {/* Header Image/Pattern Area */}
                    <div className="lg:col-span-12 p-12 md:p-20 bg-ideassion-navy text-white relative overflow-hidden">
                        <div className="absolute inset-0 grid-bg opacity-10" />
                        <div className="relative z-10">
                            <span className="text-ideassion-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Case Study // {data.num < 10 ? `0${data.num}` : data.num}</span>
                            <h2 className="text-5xl md:text-8xl font-display font-black leading-tight tracking-tighter mb-8 uppercase">{data.title}</h2>
                        </div>
                    </div>

                    <div className="lg:col-span-7 p-12 md:p-20 space-y-16">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-ideassion-blue mb-10 border-l-4 border-ideassion-blue pl-6">Mission Objective</h4>
                            <p className="text-2xl md:text-3xl font-light text-ideassion-navy leading-snug">
                                {data.challenge || "Transforming complex legacy architectures into high-integrity AI ecosystems designed for exponential scale."}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 bg-white border-2 border-ideassion-navy/10 hover:border-ideassion-navy transition-all">
                                <ShieldCheck weight="duotone" className="w-10 h-10 text-ideassion-blue mb-6" />
                                <h5 className="font-bold text-sm uppercase mb-4 tracking-widest">Protocol Alpha</h5>
                                <p className="text-xs text-ideassion-navy/60 leading-relaxed uppercase font-bold tracking-tighter">Modular core optimization with sub-10ms latency.</p>
                            </div>
                            <div className="p-10 bg-white border-2 border-ideassion-navy/10 hover:border-ideassion-navy transition-all">
                                <Cpu weight="duotone" className="w-10 h-10 text-ideassion-green mb-6" />
                                <h5 className="font-bold text-sm uppercase mb-4 tracking-widest">Protocol Beta</h5>
                                <p className="text-xs text-ideassion-navy/60 leading-relaxed uppercase font-bold tracking-tighter">Bespoke LLM orchestration for autonomous decisioning.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 p-12 md:p-20 bg-ideassion-navy text-white border-l-[6px] border-ideassion-navy">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-ideassion-green mb-12">Performance Metrics</h4>
                        <div className="space-y-16">
                            {[
                                { val: "3.5X", label: "Velocity gain", icon: <TrendUp weight="duotone" /> },
                                { val: "99.9%", label: "Uptime integrity", icon: <ShieldCheck weight="duotone" /> },
                                { val: "85%", label: "Cost reduction", icon: <Star weight="duotone" /> }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-8">
                                    <div className="text-4xl text-ideassion-cyan bg-white/5 w-20 h-20 flex items-center justify-center border border-white/10">{stat.icon}</div>
                                    <div>
                                        <div className="text-5xl font-display font-black text-white">{stat.val}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-ideassion-cyan opacity-60">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => { onClose(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}
                            className="w-full mt-20 py-10 bg-ideassion-green text-ideassion-navy font-display font-black text-xl uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-4"
                        >
                            Launch Similar Project <ArrowUpRight weight="bold" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Dynamic Island Floating Menu ---
const FloatingMenu = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed left-0 right-0 z-50 transition-all duration-700 pointer-events-none flex justify-center ${scrolled ? 'top-8' : 'top-12'}`}>
            <div className={`pointer-events-auto bg-ideassion-navy text-white rounded-full px-8 py-3 flex items-center gap-10 shadow-[0_20px_50px_rgba(0,47,52,0.5)] border border-white/10 transition-all duration-500 scale-100 ${scrolled ? 'scale-105' : ''}`}>
                {/* Logo/Icon */}
                <div className="cursor-pointer hover:scale-110 transition-transform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <BrandLogo name="ideassion" className="w-10 h-10 shadow-[0_0_20px_rgba(3,255,131,0.5)]" />
                </div>

                {/* Separator */}
                <div className="w-px h-8 bg-white/10 hidden md:block" />

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Solutions', id: 'solutions', icon: Globe },
                        { name: 'Architecture', id: 'tech', icon: Stack },
                        { name: 'Partnership', id: 'contact', icon: Handshake }
                    ].map(item => (
                        <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-ideassion-green transition-colors group">
                            <item.icon weight="duotone" className="w-5 h-5 text-ideassion-cyan group-hover:scale-110 transition-transform" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

                {/* Dynamic Island Action Section */}
                <div className="flex items-center gap-6">
                    <div className="w-px h-8 bg-white/10" />

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-ideassion-blue transition-colors"><LinkedinLogo weight="duotone" className="w-6 h-6" /></a>
                        <a href="#" className="hover:text-ideassion-cyan transition-colors"><TwitterLogo weight="duotone" className="w-6 h-6" /></a>
                    </div>

                    <a href="#contact" className="bg-ideassion-green text-ideassion-navy px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all group overflow-hidden">
                        <RocketLaunch weight="duotone" className="w-4 h-4" />
                        <span className="hidden sm:inline">Partner</span>
                        <ArrowUpRight weight="bold" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

// --- Solution Card ---
const SolutionCard = ({ title, desc, icon: IconComponent, num, onOpen }) => (
    <div
        onClick={onOpen}
        className="group relative p-12 bg-white text-ideassion-navy border-2 border-ideassion-navy/10 hover:border-ideassion-navy hover:shadow-[16px_16px_0px_0px_#002F34] transition-all duration-500 cursor-pointer overflow-hidden"
    >
        <div className="absolute top-6 right-8 font-display font-black text-5xl opacity-5">{num}</div>
        <div className="w-20 h-20 flex items-center justify-center mb-12 bg-ideassion-cream border-2 border-ideassion-navy/5 group-hover:bg-ideassion-navy group-hover:text-ideassion-green transition-all duration-500">
            <IconComponent weight="duotone" className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight leading-none">{title}</h3>
        <p className="text-ideassion-navy/60 text-sm leading-relaxed mb-12 font-medium">{desc}</p>
        <div className="pt-6 border-t-2 border-ideassion-navy/5 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Case Study Profile</span>
            <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-3 transition-transform text-ideassion-blue" />
        </div>
    </div>
);

// --- Solutions Section ---
const Solutions = () => {
    const [activeCaseStudy, setActiveCaseStudy] = useState(null);

    const sections = [
        { num: 1, title: "AI for Finance & Operations", icon: Graph, desc: "Predictive liquidity models, automated auditing, and risk mitigation engines for high-stakes capital management." },
        { num: 2, title: "AI for Sales & CRM", icon: Handshake, desc: "Generative CRM systems that synthesize lead intelligence and automate personalized outreach at global scale." },
        { num: 3, title: "AI for HR & Workforce", icon: Users, desc: "Intelligent talent gap analysis, recruitment automation, and predictive retention modeling for hyperscale teams." },
        { num: 4, title: "AI for Process Automation", icon: Cpu, desc: "Hyper-localized RPA that handles complex, unstructured data workflows with near-perfect reliability." },
        { num: 5, title: "AI for Reporting & Decisions", icon: Monitor, desc: "Real-time executive dashboards that simulate strategy outcomes using proprietary LLM inference engines." },
        { num: 6, title: "AI for Industry Specifics", icon: Globe, desc: "Bespoke intelligence for Healthcare (Diagnostics), Logistics (Route-AI), and Industrial Manufacturing." },
        { num: 7, title: "AI for Startup MVPs", icon: RocketLaunch, desc: "From concept to AI-native prototype in 4 weeks. We build the core intelligence your investors demand." },
        { num: 8, title: "AI ChatBots & Agents", icon: Robot, desc: "Autonomous agentic systems that execute multivariable tasks across your entire enterprise stack." }
    ];

    return (
        <section id="solutions" className="py-40 bg-white relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="mb-32">
                    <span className="text-ideassion-blue font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Capability Matrix</span>
                    <h2 className="text-7xl md:text-9xl font-display font-black text-ideassion-navy tracking-tighter leading-[0.8] uppercase">
                        INTELLIGENCE IS <br />
                        <span className="text-ideassion-green bg-ideassion-navy px-8 py-4 inline-block -rotate-1 italic shadow-[10px_10px_0px_0px_#00DAFF]">NOT OPTIONAL.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((s, i) => (
                        <SolutionCard key={i} {...s} onOpen={() => setActiveCaseStudy(s)} />
                    ))}
                </div>
            </div>
            <CaseStudyModal data={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
        </section>
    );
};

// --- Tech Stack ---
const TechStack = () => {
    const categories = [
        {
            name: "THE FORGE", items: [
                { name: "Antigravity", icon: 'ideassion' },
                { name: "Cursor AI", icon: 'cursor' },
                { name: "VS Code", icon: 'monitor_custom' }
            ]
        },
        {
            name: "FRONTEND NATIVE", items: [
                { name: "React Native", icon: 'react' },
                { name: "Vite JS", icon: 'react' },
                { name: "Expo", icon: 'expo_custom' }
            ]
        },
        {
            name: "CORE ENGINE", items: [
                { name: "Node.js", icon: 'nodejs' },
                { name: "TypeScript", icon: 'typescript' },
                { name: "Python AI", icon: 'python' }
            ]
        },
        {
            name: "DATA ARCHITECTURE", items: [
                { name: "Supabase", icon: 'supabase' },
                { name: "Neon DB", icon: 'neon' },
                { name: "Firebase", icon: 'firebase' }
            ]
        }
    ];

    const getTechIcon = (name, brandKey) => {
        if (brandKey === 'monitor_custom') return <Monitor weight="duotone" className="w-8 h-8" />;
        if (brandKey === 'expo_custom') return <Star weight="duotone" className="w-8 h-8" />;
        return <BrandLogo name={brandKey} className="w-8 h-8" />;
    };

    return (
        <section id="tech" className="py-40 bg-ideassion-navy text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ideassion-blue/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center mb-32 relative z-10">
                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none">THE IDEASSION <span className="text-ideassion-blue">STACK.</span></h2>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 relative z-10">
                {categories.map((cat, i) => (
                    <div key={i} className="p-12 border-2 border-white/5 bg-white/5 backdrop-blur-md group hover:bg-white/10 hover:border-ideassion-cyan/30 transition-all duration-500">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-ideassion-cyan mb-12 border-b-2 border-white/10 pb-6">{cat.name}</h4>
                        <div className="space-y-10">
                            {cat.items.map(item => (
                                <div key={item.name} className="flex items-center gap-8 group/item">
                                    <div className="w-16 h-16 flex items-center justify-center bg-white/5 border-2 border-white/10 transition-all duration-300 group-hover/item:border-ideassion-green group-hover/item:bg-white group-hover/item:text-ideassion-navy">
                                        {getTechIcon(item.name, item.icon)}
                                    </div>
                                    <span className="text-xl font-black uppercase tracking-tight opacity-40 group-hover/item:opacity-100 transition-opacity">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- Hero ---
const Hero = () => (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none"></div>

        {/* Animated Mesh Visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-20 pointer-events-none overflow-hidden hover:scale-105 transition-transform duration-[10s]">
            <svg className="w-full h-full animate-[spin_120s_linear_infinite]" viewBox="0 0 1000 1000">
                <defs>
                    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#03FF83" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#00DAFF" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#007EC5" stopOpacity="0.4" />
                    </linearGradient>
                </defs>
                <circle cx="500" cy="500" r="450" fill="none" stroke="url(#heroGrad)" strokeWidth="0.2" strokeDasharray="10 30" />
                <circle cx="500" cy="500" r="350" fill="none" stroke="url(#heroGrad)" strokeWidth="0.2" strokeDasharray="30 60" />
                <path d="M200 500 Q 500 0 800 500 T 200 500" fill="none" stroke="url(#heroGrad)" strokeWidth="1" opacity="0.2" />
                <path d="M500 200 Q 1000 500 500 800 T 500 200" fill="none" stroke="url(#heroGrad)" strokeWidth="1" opacity="0.2" />
            </svg>
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-ideassion-navy text-white mb-12 animate-reveal-up shadow-[6px_6px_0px_0px_#03FF83] rounded-full">
                <Star weight="duotone" className="text-ideassion-green w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Proprietary Engineering Studio</span>
            </div>

            <h1 className="text-[10vw] lg:text-[7vw] leading-[0.9] font-display font-black text-ideassion-navy tracking-tighter mb-12 animate-reveal-up uppercase">
                ARCHITECTING <br />
                <span className="relative inline-block mt-2">
                    <span className="absolute inset-0 bg-ideassion-navy transform -rotate-1 scale-[1.05] -z-10 shadow-[10px_10px_0px_0px_#00DAFF]"></span>
                    <span className="text-white italic px-8">BEYOND</span>
                </span> <br />
                <span className="text-ideassion-blue mt-2 block">INTELLIGENCE.</span>
            </h1>

            <p className="max-w-3xl text-xl lg:text-3xl font-medium text-ideassion-navy/70 leading-relaxed mb-16 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
                A leading <span className="text-ideassion-navy font-black underline decoration-ideassion-green decoration-4 underline-offset-4">AI product studio</span> helping startups turn ideas into scalable, intelligent systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
                <a href="#contact" className="btn-primary !text-lg !px-12 !py-6 flex items-center justify-center gap-3 hover:shadow-[8px_8px_0px_0px_#002F34] transition-all">
                    <RocketLaunch weight="duotone" className="w-6 h-6" />
                    <span>Launch Project</span>
                </a>
                <a href="#solutions" className="btn-outline !text-lg !px-12 !py-6 flex items-center justify-center gap-3 hover:bg-ideassion-cream">
                    <Cpu weight="duotone" className="w-6 h-6" /> Capabilities
                </a>
            </div>
        </div>
    </header>
);

// --- Why Partner Bento Grid ---
const WhyPartner = () => {
    return (
        <section className="py-40 bg-ideassion-navy text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-ideassion-blue/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-ideassion-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block">The Ideassion Advantage</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-none uppercase">
                        Why Founders <br /> <span className="text-ideassion-cyan">Choose Us.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-6 h-auto lg:h-[800px]">
                    {/* Card 1: AI Native */}
                    <div className="lg:col-span-2 lg:row-span-2 bg-white/5 border border-white/10 p-12 flex flex-col justify-between hover:bg-white/10 transition-colors group">
                        <div className="w-24 h-24 bg-gradient-to-br from-ideassion-blue to-ideassion-cyan rounded-3xl flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(0,126,197,0.3)] group-hover:scale-110 transition-transform duration-500">
                            <Star weight="duotone" className="w-12 h-12 text-white" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-display font-black mb-6">AI Native By Default</h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Artificial Intelligence isn't just a layer we add; it's the foundation. We use it to remove friction, accelerate creation, and free you to focus on vision, not code maintenance.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Async */}
                    <div className="lg:col-span-2 bg-ideassion-cream text-ideassion-navy p-10 flex flex-col md:flex-row items-center gap-8 shadow-[8px_8px_0px_0px_#03FF83] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-ideassion-green/20 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-ideassion-navy text-white rounded-full flex items-center justify-center">
                                    <ChatCircleText weight="duotone" className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-xs uppercase tracking-widest opacity-60">Communication Protocol</span>
                            </div>
                            <h3 className="text-2xl font-display font-black mb-4">Clear, Async Collaboration</h3>
                            <p className="text-sm font-medium opacity-70">
                                Stay in sync through weekly sprints and async updates. No endless meetings, no micromanagement—just pure velocity.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 space-y-3 opacity-80 group-hover:opacity-100 transition-opacity">
                            <div className="bg-white p-3 rounded-xl shadow-sm border border-ideassion-navy/5 text-xs">
                                <span className="text-ideassion-blue font-bold">You:</span> Update on the API?
                            </div>
                            <div className="bg-ideassion-navy text-white p-3 rounded-xl shadow-sm text-xs text-right">
                                <span className="text-ideassion-green font-bold">Us:</span> Deployed to staging. ⚡️
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Design Matters */}
                    <div className="lg:col-span-2 bg-white/5 border border-white/10 p-10 flex flex-col justify-center hover:border-ideassion-green/30 transition-all group overflow-hidden relative">
                        <div className="absolute inset-0 bg-ideassion-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-3xl font-display font-black mb-4 relative z-10">Design Matters</h3>
                        <p className="text-gray-400 mb-8 max-w-md relative z-10">
                            In a world filled with generic clones, UX is your moat. We obsess over the details that make technology feel human.
                        </p>
                        <div className="flex gap-4 relative z-10">
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-ideassion-green">Figma</div>
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-ideassion-cyan">Spline</div>
                            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-ideassion-blue">Rive</div>
                        </div>
                    </div>

                    {/* Card 4: Say No More */}
                    <div className="bg-white text-ideassion-navy p-8 flex flex-col justify-center border-l-8 border-red-500">
                        <h3 className="text-xl font-display font-black mb-6">Say No More To</h3>
                        <ul className="space-y-4">
                            {[
                                'Long Meetings',
                                'High Cost Hiring',
                                'Micromanagement',
                                'Generic Templates'
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3 text-sm font-bold">
                                    <X weight="bold" className="text-red-500 w-4 h-4" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 5: Freedom */}
                    <div className="bg-ideassion-green text-ideassion-navy p-8 flex flex-col justify-center border-l-8 border-ideassion-navy">
                        <h3 className="text-xl font-display font-black mb-6">Operate With Freedom</h3>
                        <p className="text-sm font-bold leading-relaxed mb-6">
                            No rigid contracts. Just an open, flexible process that adapts to how you work.
                        </p>
                        <div className="mt-auto flex items-center gap-2">
                            <div className="w-2 h-2 bg-ideassion-navy rounded-full"></div>
                            <div className="w-full h-px bg-ideassion-navy/30"></div>
                            <CheckCircle weight="fill" className="text-ideassion-navy w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Marquee = () => {
    const items = ["Strategy Engine", "Autonomous Nodes", "Generative Core", "Scale Logic", "Risk Integrity"];
    return (
        <div className="w-full bg-ideassion-navy text-white border-y border-white/10 py-16 overflow-hidden relative z-10">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-24 items-center px-12 text-4xl font-black uppercase font-display tracking-[0.3em] opacity-40">
                        {items.map(text => (
                            <React.Fragment key={text}>
                                <span>{text}</span>
                                <span className="text-ideassion-green w-3 h-3 bg-ideassion-green rounded-full shadow-[0_0_15px_#03FF83]"></span>
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ContactForm = () => {
    const [step, setStep] = useState(1);
    return (
        <section id="contact" className="py-40 bg-ideassion-cream/20 relative overflow-hidden border-t-2 border-ideassion-navy/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-32">
                <div className="lg:col-span-12 mb-20 text-center lg:text-left">
                    <span className="text-ideassion-blue font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Transmission Sequence</span>
                    <h2 className="text-7xl md:text-9xl font-display font-black text-ideassion-navy tracking-tighter uppercase leading-none">
                        LET'S BUILD THE <br /> <span className="italic text-ideassion-green underline decoration-ideassion-navy decoration-8 underline-offset-[20px]">IMPOSSIBLE.</span>
                    </h2>
                </div>

                <div className="lg:col-span-5 p-16 bg-white border-4 border-ideassion-navy shadow-[20px_20px_0px_0px_#00DAFF]">
                    <div className="space-y-16">
                        <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-20 h-20 bg-ideassion-navy flex items-center justify-center text-white transition-all group-hover:bg-ideassion-blue shadow-[8px_8px_0px_0px_#03FF83]">
                                <Envelope weight="duotone" className="w-10 h-10" />
                            </div>
                            <div>
                                <div className="text-[11px] font-black uppercase tracking-widest text-ideassion-blue mb-2">Primary Interface</div>
                                <div className="text-3xl font-black font-display group-hover:text-ideassion-blue transition-colors">hello@ideassion.com</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 group cursor-pointer">
                            <div className="w-20 h-20 bg-ideassion-green flex items-center justify-center text-ideassion-navy transition-all group-hover:bg-ideassion-navy group-hover:text-white shadow-[8px_8px_0px_0px_#002F34]">
                                <Phone weight="duotone" className="w-10 h-10" />
                            </div>
                            <div>
                                <div className="text-[11px] font-black uppercase tracking-widest text-ideassion-blue mb-2">Direct Voice</div>
                                <div className="text-3xl font-black font-display group-hover:text-ideassion-blue transition-colors">+1 (555) IDEASSION</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="border-[8px] border-ideassion-navy p-12 md:p-20 shadow-[32px_32px_0px_0px_#002F34] bg-white relative z-10 transition-all hover:shadow-[40px_40px_0px_0px_#03FF83]">
                        <div className="flex gap-16 border-b-4 border-ideassion-navy/10 mb-20 pb-8 text-sm font-black uppercase tracking-[0.2em]">
                            <button
                                onClick={() => setStep(1)}
                                className={`pb-8 relative transition-all flex items-center gap-4 ${step === 1 ? 'text-ideassion-navy' : 'text-gray-300'}`}
                            >
                                <Buildings weight="duotone" className="w-8 h-8" /> 01. Context {step === 1 && <div className="absolute bottom-[-4px] left-0 w-full h-[6px] bg-ideassion-navy" />}
                            </button>
                            <button
                                onClick={() => setStep(2)}
                                className={`pb-8 relative transition-all flex items-center gap-4 ${step === 2 ? 'text-ideassion-navy' : 'text-gray-300'}`}
                            >
                                <Handshake weight="duotone" className="w-8 h-8" /> 02. Alignment {step === 2 && <div className="absolute bottom-[-4px] left-0 w-full h-[6px] bg-ideassion-navy" />}
                            </button>
                        </div>

                        {step === 1 ? (
                            <div className="space-y-16 animate-reveal-up">
                                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                                    {[
                                        { n: 'Web App', i: Monitor }, { n: 'Mobile', i: DeviceMobile }, { n: 'AI Engine', i: Star }, { n: 'Enterprise', i: Buildings }, { n: 'MVP', i: RocketLaunch }
                                    ].map(t => (
                                        <button key={t.n} className="flex flex-col items-center justify-center p-8 border-4 border-ideassion-navy/10 hover:border-ideassion-navy transition-all group aspect-square hover:bg-ideassion-navy hover:text-white shadow-sm hover:shadow-xl">
                                            <t.i weight="duotone" className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-center">{t.n}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="relative group">
                                    <span className="absolute top-4 left-8 text-[11px] font-black uppercase text-ideassion-blue opacity-50">Mission Description</span>
                                    <textarea
                                        className="w-full h-56 bg-ideassion-cream/10 border-4 border-ideassion-navy/10 p-12 pt-20 focus:border-ideassion-navy outline-none text-2xl font-light resize-none transition-all placeholder:opacity-20"
                                        placeholder="Brief our architecture council..."
                                    />
                                </div>
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full py-12 bg-ideassion-navy text-white text-2xl font-display font-black uppercase tracking-[0.2em] flex items-center justify-center gap-6 group hover:bg-ideassion-blue transition-all"
                                >
                                    Confirm Strategic Intent <CaretRight weight="bold" className="group-hover:translate-x-3 transition-transform" />
                                </button>
                            </div>
                        ) : (
                            <div className="animate-reveal-up h-[600px] border-4 border-ideassion-navy/10">
                                <div className="calendly-inline-widget w-full h-full" data-url="https://calendly.com/" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-ideassion-navy text-white py-40 border-t-8 border-ideassion-green relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-4 gap-32 mb-40">
                <div className="col-span-2">
                    <div className="flex items-center gap-6 mb-12">
                        <BrandLogo name="ideassion" className="w-20 h-20 shadow-[0_0_100px_rgba(3,255,131,0.4)]" />
                        <span className="text-6xl font-display font-black tracking-tighter uppercase whitespace-nowrap">Ideassion</span>
                    </div>
                    <p className="text-3xl md:text-4xl font-light text-gray-500 italic max-w-xl leading-snug border-l-4 border-ideassion-blue pl-12 mb-16">
                        "Helping startups turn ideas into scalable, intelligent systems with uncompromising engineering integrity."
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ideassion-blue transition-all hover:-translate-y-2">
                            <LinkedinLogo weight="duotone" className="w-8 h-8 text-ideassion-cyan" />
                        </a>
                        <a href="#" className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ideassion-cyan transition-all hover:-translate-y-2">
                            <TwitterLogo weight="duotone" className="w-8 h-8 text-ideassion-navy" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-ideassion-cyan mb-16 underline decoration-white decoration-2 underline-offset-8">Global Hubs</h4>
                    <ul className="space-y-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">
                        <li className="flex items-center gap-4"><Globe weight="duotone" className="text-ideassion-green w-5 h-5" /> USA / San Francisco</li>
                        <li className="flex items-center gap-4"><Globe weight="duotone" className="text-ideassion-blue w-5 h-5" /> India / Bengaluru</li>
                        <li className="flex items-center gap-4"><Globe weight="duotone" className="text-ideassion-cyan w-5 h-5" /> UAE / Dubai</li>
                        <li className="flex items-center gap-4"><Globe weight="duotone" className="text-ideassion-green w-5 h-5" /> Malaysia / KL</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-ideassion-cyan mb-16 underline decoration-white decoration-2 underline-offset-8">Directives</h4>
                    <ul className="space-y-6 text-[12px] font-black uppercase tracking-widest text-gray-400">
                        <li><a href="#solutions" className="hover:text-ideassion-green transition-colors flex items-center gap-3"><CaretRight weight="bold" /> Strategy Layer</a></li>
                        <li><a href="#tech" className="hover:text-ideassion-green transition-colors flex items-center gap-3"><CaretRight weight="bold" /> Architecture</a></li>
                        <li><a href="#contact" className="hover:text-ideassion-green transition-colors flex items-center gap-3"><CaretRight weight="bold" /> Alignment</a></li>
                    </ul>
                </div>
            </div>
            <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-black text-gray-700 uppercase tracking-[0.5em]">
                <span>© 2024 IDEASSION PRODUCT STUDIO // MISSION READY.</span>
                <div className="flex gap-12 mt-8 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Integrity Charter</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
                </div>
            </div>
        </div>
    </footer>
);

// --- Language Modal ---
const LanguageModal = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 left-8 z-[60] w-12 h-12 bg-ideassion-navy text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_#03FF83] border border-white/10 group"
            >
                <Globe weight="duotone" className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-ideassion-navy/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="relative bg-ideassion-cream border-4 border-ideassion-navy p-8 max-w-sm w-full shadow-[20px_20px_0px_0px_#00DAFF] animate-reveal-up">
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-ideassion-navy hover:text-ideassion-blue transition-colors">
                            <X weight="bold" className="w-6 h-6" />
                        </button>

                        <span className="text-ideassion-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Regional Settings</span>
                        <h3 className="font-display font-black text-3xl uppercase mb-8 text-ideassion-navy leading-none">Select <br /> Language</h3>

                        <div className="space-y-4">
                            {[
                                { code: 'en', label: 'English', sub: 'Global' },
                                { code: 'ar', label: 'Arabic', sub: 'MENA' }
                            ].map(opt => (
                                <button
                                    key={opt.code}
                                    onClick={() => { onSelect(opt.code); setIsOpen(false); }}
                                    className="w-full p-4 bg-white border-2 border-ideassion-navy/10 hover:border-ideassion-navy hover:bg-ideassion-navy hover:text-white flex items-center justify-between group transition-all duration-300"
                                >
                                    <div className="text-left">
                                        <div className="font-bold uppercase tracking-widest text-sm">{opt.label}</div>
                                        <div className="text-[10px] font-bold opacity-50 group-hover:text-ideassion-green">{opt.sub}</div>
                                    </div>
                                    <CheckCircle weight="fill" className="w-6 h-6 opacity-0 group-hover:opacity-100 text-ideassion-green transition-all -translate-x-4 group-hover:translate-x-0" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// --- Root ---
function App() {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className={`antialiased bg-ideassion-cream selection:bg-ideassion-green selection:text-ideassion-navy font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
            <LanguageModal onSelect={setLang} />
            <FloatingMenu />
            <Hero />
            <Marquee />
            <WhyPartner />
            <Solutions />
            <TechStack />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
