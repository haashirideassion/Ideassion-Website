import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const sprintDays = [
    {
        day: 'Day 1', icon: 'solar:settings-bold-duotone', color: 'secondary',
        title: 'System Review & PM Spec',
        items: [
            'Structured intake call with the client',
            'PM Agent generates a full PRD from call notes',
            'Sprint scope defined and approved',
            'Tasks broken into dependency-mapped units',
            'Agent assignments finalized'
        ]
    },
    {
        day: 'Day 2', icon: 'solar:cpu-bold-duotone', color: 'primary',
        title: 'Parallel Agent Execution',
        items: [
            'Builder Agent starts code execution',
            'Design Agent scaffolds UI components',
            'DevOps Agent provisions staging env',
            'QA Agent defines test specs',
            'All four agents run simultaneously'
        ]
    },
    {
        day: 'Day 3', icon: 'solar:code-bold-duotone', color: 'secondary',
        title: 'First Working Build',
        items: [
            'Core features implemented and deployed',
            'Internal review and bug fix pass',
            'Staging environment live and clickable',
            'Design reviewed against spec',
            'Client preview link shared'
        ]
    },
    {
        day: 'Day 4', icon: 'solar:bug-bold-duotone', color: 'primary',
        title: 'QA & Refinement',
        items: [
            'Unit and integration tests run',
            'Edge cases and regression checks',
            'Final UI polish and responsiveness',
            'Feedback loop from client review',
            'Release candidate prepared'
        ]
    },
    {
        day: 'Day 5', icon: 'solar:rocket-bold-duotone', color: 'secondary',
        title: 'Friday Demo & Production Push',
        items: [
            'Live demo with client — real, working product',
            'Approved features pushed to production',
            'Full documentation delivered',
            'Source code and repo access handed off',
            'Sprint retrospective and next sprint scoped'
        ]
    },
];

const faqs = [
    {
        q: 'What exactly happens in a sprint?',
        a: 'A sprint is 5 business days of focused, parallel delivery. We start Monday with a System Review, run all agents simultaneously from Tuesday, and you see a working product on Friday — not a mockup, but live, clickable software deployed to a staging or production environment.'
    },
    {
        q: 'Can I buy more than one sprint?',
        a: 'Yes. Most products need 4–8 sprints for a full MVP. Our Growth Pack bundles 4 consecutive sprints at a reduced rate, and Studio Partner gives you ongoing sprint capacity month-to-month.'
    },
    {
        q: 'What happens if the sprint doesn\'t deliver the outcome?',
        a: 'We scope each sprint so tightly that this rarely happens. If, for unavoidable reasons, a sprint falls short, we add catch-up sprint time at no extra cost to close the gap.'
    },
    {
        q: 'Do I get the source code?',
        a: 'Yes — every sprint delivers full source code, documentation, and deployment pipelines. You own everything. No vendor lock-in.'
    },
    {
        q: 'What tech stacks can you build on?',
        a: 'We specialize in React / Next.js, Node.js, Python, Supabase, PostgreSQL, and most major cloud providers. Our agents adapt to your existing stack if needed.'
    },
];

export default function HowItWorks() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="bg-brand-teal py-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.08) 0%, transparent 70%)' }} />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="section-label mb-6 inline-flex">How It Works</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-beige leading-tight mb-6">
                            Five days. One outcome.<br />
                            <span className="text-brand-neon-green">Shipped.</span>
                        </h1>
                        <p className="text-lg text-brand-beige/60 max-w-2xl mb-8">
                            We collapsed the traditional delivery lifecycle into a single, repeatable sprint cycle — powered by a parallel agent pipeline that runs in days, not weeks.
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-brand-beige/50">
                            {[
                                { icon: 'solar:calendar-bold-duotone', label: '5 business days per sprint' },
                                { icon: 'solar:bolt-bold-duotone', label: 'Parallel agent execution' },
                                { icon: 'solar:rocket-bold-duotone', label: 'Production deploy on Friday' },
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-2">
                                    <Icon icon={item.icon} className="w-4 h-4 text-brand-neon-green" />
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Day by Day ──────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">The Sprint Timeline</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">What happens each day</h2>
                        <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                            Every sprint follows the same proven structure. Here's exactly what you get.
                        </p>
                    </Reveal>

                    <div className="space-y-6">
                        {sprintDays.map((day, i) => (
                            <Reveal key={day.day} delay={i * 60}>
                                <div className="rounded-2xl border border-brand-border bg-brand-beige p-8 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
                                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-40 shrink-0">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${day.color === 'secondary' ? 'bg-brand-neon-green/15' : 'bg-brand-teal/8'}`}>
                                            <Icon icon={day.icon} className={`w-6 h-6 ${day.color === 'secondary' ? 'text-brand-teal' : 'text-brand-teal'}`} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-brand-neon-green uppercase tracking-widest">{day.day}</div>
                                            <div className="text-sm font-bold text-brand-teal mt-0.5">{day.title}</div>
                                        </div>
                                    </div>
                                    <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {day.items.map(item => (
                                            <div key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                                                <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-brand-neon-green flex-shrink-0 mt-0.5" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Traditional vs Dizrupt comparison ──────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">The Difference</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">Why traditional agencies fail</h2>
                    </Reveal>
                    <Reveal>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-separate border-spacing-y-2">
                                <thead>
                                    <tr>
                                        <th className="text-left px-4 py-3 text-brand-muted font-medium">Aspect</th>
                                        <th className="px-4 py-3 text-brand-muted font-medium">Traditional Agencies</th>
                                        <th className="px-4 py-3 text-brand-neon-green font-semibold">Dizrupt Sprints</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Time to first working build', '6–12 weeks', '3 days'],
                                        ['Pricing model', 'Hourly / retainer', 'Per sprint, fixed price'],
                                        ['Accountability', 'Hours billed', 'Outcome delivered'],
                                        ['Visibility', 'Weekly status reports', 'Working product every Friday'],
                                        ['Source code', 'Often withheld', 'Always delivered'],
                                        ['AI integration', 'Added later', 'Native from Day 1'],
                                        ['Team size', 'Large, sequential', 'Lean, parallel agents'],
                                    ].map(([aspect, bad, good]) => (
                                        <tr key={aspect}>
                                            <td className="px-4 py-3 font-medium text-brand-teal bg-brand-beige rounded-l-xl">{aspect}</td>
                                            <td className="px-4 py-3 text-center text-red-500 bg-brand-beige">{bad}</td>
                                            <td className="px-4 py-3 text-center font-semibold text-brand-teal bg-brand-neon-green/10 rounded-r-xl">{good}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">Common questions</h2>
                    </Reveal>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 60}>
                                <div className="rounded-xl border border-brand-border overflow-hidden">
                                    <button
                                        className="w-full text-left px-6 py-4 flex items-center justify-between font-medium text-brand-teal hover:bg-brand-beige transition-colors"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        {faq.q}
                                        <span className={`transform transition-transform ml-4 text-brand-neon-green ${openFaq === i ? 'rotate-180' : ''}`}>↓</span>
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-6 pb-4 text-sm text-brand-muted leading-relaxed border-t border-brand-border bg-brand-beige">
                                            <div className="pt-4">{faq.a}</div>
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-teal relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-50" />
                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-brand-beige mb-4">Ready to run your first sprint?</h2>
                        <p className="text-brand-beige/60 mb-8">Book a 30-minute call. We'll scope Sprint 1 and tell you exactly what ships by Friday.</p>
                        <Link to="/book" className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2">
                            Book a Sprint Call <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
