import React, { useRef, useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
    const [ref, visible] = useInView();
    return (
        <div ref={ref} className={className}
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
            {children}
        </div>
    );
}

const projectTypes = [
    { icon: 'solar:bolt-bold-duotone', label: 'MVP / Prototype' },
    { icon: 'solar:rocket-bold-duotone', label: 'Feature Sprint' },
    { icon: 'solar:buildings-bold-duotone', label: 'Full Product' },
    { icon: 'solar:clock-circle-bold-duotone', label: 'Ongoing Sprints' },
];

const steps = [
    { num: '01', icon: 'solar:calendar-bold-duotone', title: 'Book a 30-minute call', sub: 'Tell us what you\'re building. We\'ll listen and ask the right questions.' },
    { num: '02', icon: 'solar:bolt-bold-duotone', title: 'We scope Sprint 1', sub: 'We define the exact outcome that ships by Friday. No ambiguity.' },
    { num: '03', icon: 'solar:rocket-bold-duotone', title: 'We start Monday', sub: 'Agents activate. Code executes. You have a live demo by end of week.' },
];

export default function Book() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        description: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        // In production: send to your backend / Calendly / etc.
        setSubmitted(true);
    };

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="bg-brand-teal py-20 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.09) 0%, transparent 70%)' }} />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <span className="section-label mb-6 inline-flex">Book a Sprint Call</span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-brand-beige leading-tight mb-4">
                            Let's scope your<br />
                            <span className="text-brand-neon-green">first sprint.</span>
                        </h1>
                        <p className="text-lg text-brand-beige/60">
                            30 minutes. We'll define the outcome, name what ships by Friday, and tell you the exact price.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── How the call works ──────────────────────────────────────── */}
            <section className="py-16 bg-brand-beige border-b border-brand-border">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((s, i) => (
                            <Reveal key={s.num} delay={i * 80}>
                                <div className="text-center">
                                    <div className="text-2xl font-black text-brand-neon-green/40 mb-2">{s.num}</div>
                                    <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center mx-auto mb-3">
                                        <Icon icon={s.icon} className="w-6 h-6 text-brand-neon-green" />
                                    </div>
                                    <h3 className="font-semibold text-brand-teal mb-1 text-sm">{s.title}</h3>
                                    <p className="text-brand-muted text-xs">{s.sub}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Form + Info ─────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Form */}
                    <div className="lg:col-span-3">
                        {submitted ? (
                            <Reveal>
                                <div className="text-center py-16">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-neon-green/15 flex items-center justify-center mx-auto mb-6">
                                        <Icon icon="solar:check-circle-bold-duotone" className="w-8 h-8 text-brand-neon-green" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-brand-teal mb-3">We'll be in touch shortly.</h2>
                                    <p className="text-brand-muted">
                                        Thanks for reaching out. We'll send a calendar link within 24 hours to schedule your Sprint call.
                                    </p>
                                </div>
                            </Reveal>
                        ) : (
                            <Reveal>
                                <h2 className="text-2xl font-bold text-brand-teal mb-8">Tell us about your project</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-brand-teal mb-1.5">Your name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-teal placeholder:text-brand-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-primary/10 text-sm"
                                                placeholder="Jane Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-brand-teal mb-1.5">Work email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-teal placeholder:text-brand-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-primary/10 text-sm"
                                                placeholder="jane@startup.io"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-brand-teal mb-1.5">Company / Startup</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-teal placeholder:text-brand-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-primary/10 text-sm"
                                            placeholder="Acme Inc."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-brand-teal mb-2">What are you building?</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {projectTypes.map(pt => (
                                                <button
                                                    key={pt.label}
                                                    type="button"
                                                    onClick={() => setForm({ ...form, projectType: pt.label })}
                                                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${form.projectType === pt.label
                                                        ? 'border-brand-teal bg-brand-teal text-brand-beige'
                                                        : 'border-brand-border text-brand-teal hover:border-brand-teal/50'
                                                        }`}
                                                >
                                                    <Icon icon={pt.icon} className={`w-4 h-4 ${form.projectType === pt.label ? 'text-brand-neon-green' : ''}`} />
                                                    {pt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-brand-teal mb-1.5">Rough budget range</label>
                                        <select
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-teal focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-primary/10 text-sm bg-brand-beige"
                                        >
                                            <option value="">Select a range</option>
                                            <option>$4,500 – $10,000 (1–2 sprints)</option>
                                            <option>$10,000 – $20,000 (Growth Pack)</option>
                                            <option>$20,000+ (Studio Partner)</option>
                                            <option>Not sure yet</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-brand-teal mb-1.5">Describe your project *</label>
                                        <textarea
                                            name="description"
                                            required
                                            value={form.description}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-teal placeholder:text-brand-muted focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-primary/10 text-sm resize-none"
                                            placeholder="What are you building? What's the main outcome you need from Sprint 1?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
                                    >
                                        Request a Sprint Call
                                        <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                                    </button>
                                    <p className="text-xs text-center text-brand-muted">We'll reply within 24 hours with a calendar link.</p>
                                </form>
                            </Reveal>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        <Reveal delay={100}>
                            <div className="rounded-2xl bg-brand-teal p-6 text-brand-beige">
                                <h3 className="font-bold text-lg mb-4">What happens next</h3>
                                <ul className="space-y-4 text-sm">
                                    {[
                                        { icon: 'solar:letter-bold-duotone', text: 'We\'ll confirm receipt within 1 hour' },
                                        { icon: 'solar:calendar-bold-duotone', text: 'Calendar link sent within 24 hours' },
                                        { icon: 'solar:bolt-bold-duotone', text: '30-min call to define Sprint 1' },
                                        { icon: 'solar:rocket-bold-duotone', text: 'Work starts Monday if approved' },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-brand-neon-green/15 flex items-center justify-center flex-shrink-0">
                                                <Icon icon={item.icon} className="w-4 h-4 text-brand-neon-green" />
                                            </div>
                                            <span className="text-brand-beige/70 mt-0.5">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={160}>
                            <div className="rounded-2xl border border-brand-border bg-brand-beige p-6">
                                <h4 className="font-bold text-brand-teal mb-3 text-sm">Direct email</h4>
                                <a href="mailto:hello@dizrupt.io" className="flex items-center gap-2 text-brand-teal hover:text-brand-neon-green transition-colors font-medium text-sm">
                                    <Icon icon="solar:letter-bold-duotone" className="w-4 h-4" />
                                    hello@dizrupt.io
                                </a>
                                <p className="text-brand-muted text-xs mt-2">Prefer to email directly? Go ahead — we respond fast.</p>
                            </div>
                        </Reveal>

                        <Reveal delay={220}>
                            <div className="rounded-2xl bg-brand-neon-green/8 border border-brand-neon-green/20 p-6">
                                <h4 className="font-bold text-brand-teal mb-3 text-sm flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-brand-neon-green" />
                                    No commitment required
                                </h4>
                                <p className="text-brand-muted text-xs leading-relaxed">
                                    The call is free. We'll scope Sprint 1 together and give you a fixed price. You decide if you want to proceed.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
