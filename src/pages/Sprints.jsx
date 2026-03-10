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

const tiers = [
    {
        name: 'Starter Sprint',
        price: 'From $4,500',
        period: 'per sprint',
        icon: 'solar:bolt-bold-duotone',
        description: 'One sprint. One defined outcome. Perfect for validating an idea or shipping a specific feature fast.',
        features: [
            '1 sprint (5 business days)',
            'PM Agent spec included',
            'Builder + QA agent pipeline',
            'Weekly Friday demo',
            'Full source code delivered',
            'Staging + production deploy'
        ],
        cta: 'Book a Starter Sprint',
        highlight: false,
        badge: null,
    },
    {
        name: 'Growth Pack',
        price: 'From $15,000',
        period: '4 sprints',
        icon: 'solar:rocket-bold-duotone',
        description: 'Four consecutive sprints with compounding velocity. Ideal for building a full MVP or core product.',
        features: [
            '4 sprints (4 weeks)',
            'Full agent pipeline enabled',
            'PM + Builder + QA + DevOps',
            'Design Agent included',
            'Client sprint dashboard access',
            'Priority response + weekly calls'
        ],
        cta: 'Book a Strategy Call',
        highlight: true,
        badge: 'Most Popular',
    },
    {
        name: 'Studio Partner',
        price: 'Custom',
        period: 'ongoing',
        icon: 'solar:users-group-rounded-bold-duotone',
        description: 'Embedded sprint capacity for startups and companies that need continuous, reliable delivery.',
        features: [
            'Dedicated sprint capacity',
            'Custom sprint cadence',
            'Full internal agent system',
            'Direct engineer access',
            'Integration with your repo/infra',
            'SLA-backed delivery commitments'
        ],
        cta: 'Talk to Us',
        highlight: false,
        badge: null,
    },
];

const included = [
    { label: 'Full source code ownership — always' },
    { label: 'Documentation delivered with every sprint' },
    { label: 'Deployment pipeline setup + handoff' },
    { label: 'Working demo every Friday' },
    { label: 'No retainers. No hourly billing.' },
    { label: 'Outcome-based — you pay for delivery' },
];

const faqs = [
    {
        q: 'What if my project needs more than 1 sprint?',
        a: 'Most products need 3–8 sprints for a full MVP. Our Growth Pack bundles 4 sprints at a better rate. For longer engagements, Studio Partner gives you ongoing sprint capacity with a custom cadence.'
    },
    {
        q: 'What\'s included in "full source code"?',
        a: 'You get the complete codebase, all documentation, CI/CD pipeline scripts, deployment configs, and repository access. Everything to operate and extend the product independently.'
    },
    {
        q: 'Can I pause between sprints?',
        a: 'Yes, especially on Starter Sprints. Many clients run one sprint, validate the outcome, then commission the next. No forced commitments.'
    },
    {
        q: 'What happens if a sprint doesn\'t deliver?',
        a: 'We scope tightly enough that this is rare. But if, for unavoidable reasons, a sprint falls short, we add catch-up time at no extra cost.'
    },
];

export default function Sprints() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="bg-brand-teal py-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.08) 0%, transparent 70%)' }} />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <span className="section-label mb-6 inline-flex">Sprint Packages</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-beige leading-tight mb-6">
                            Transparent.<br />
                            <span className="text-brand-neon-green">Fixed. Outcome-based.</span>
                        </h1>
                        <p className="text-lg text-brand-beige/60 max-w-2xl mx-auto">
                            You pay per sprint, not per hour. No scope creep. No retainers. Just shipped outcomes with source code included.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Pricing Cards ────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tiers.map((t, i) => (
                            <Reveal key={t.name} delay={i * 80}>
                                <div className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${t.highlight
                                    ? 'bg-brand-teal text-brand-beige shadow-2xl shadow-brand-primary/30 ring-2 ring-brand-secondary scale-[1.02]'
                                    : 'bg-brand-beige border border-brand-border hover:shadow-lg hover:border-brand-teal/30'
                                    }`}>
                                    {t.badge && (
                                        <span className="text-xs font-semibold bg-brand-neon-green text-brand-teal px-3 py-1 rounded-full w-fit mb-4">{t.badge}</span>
                                    )}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.highlight ? 'bg-brand-neon-green/15' : 'bg-brand-teal/8'}`}>
                                            <Icon icon={t.icon} className={`w-5 h-5 ${t.highlight ? 'text-brand-neon-green' : 'text-brand-teal'}`} />
                                        </div>
                                        <h3 className={`text-lg font-bold ${t.highlight ? 'text-brand-beige' : 'text-brand-teal'}`}>{t.name}</h3>
                                    </div>
                                    <div className="mb-4">
                                        <span className={`text-3xl font-black ${t.highlight ? 'text-brand-beige' : 'text-brand-teal'}`}>{t.price}</span>
                                        <span className={`text-sm ml-2 ${t.highlight ? 'text-brand-beige/60' : 'text-brand-muted'}`}>{t.period}</span>
                                    </div>
                                    <p className={`text-sm mb-6 leading-relaxed ${t.highlight ? 'text-brand-beige/70' : 'text-brand-muted'}`}>{t.description}</p>
                                    <ul className="space-y-3 mb-8 flex-1">
                                        {t.features.map(f => (
                                            <li key={f} className="flex items-start gap-3 text-sm">
                                                <Icon icon="solar:check-circle-bold-duotone" className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.highlight ? 'text-brand-neon-green' : 'text-brand-teal'}`} />
                                                <span className={t.highlight ? 'text-brand-beige/80' : 'text-brand-teal'}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/book"
                                        className={`text-center py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${t.highlight
                                            ? 'bg-brand-neon-green text-brand-teal hover:brightness-110'
                                            : 'border border-brand-teal text-brand-teal hover:bg-brand-surface'
                                            }`}
                                    >
                                        {t.cta}
                                        <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What's always included ──────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-12">
                        <span className="section-label-light mb-4 inline-flex">Always Included</span>
                        <h2 className="text-3xl font-bold text-brand-teal mt-3">Every sprint comes with</h2>
                    </Reveal>
                    <Reveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {included.map(item => (
                                <div key={item.label} className="flex items-center gap-3 p-4 bg-brand-beige rounded-xl border border-brand-border hover:border-brand-teal/30 hover:shadow-md transition-all">
                                    <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-brand-neon-green flex-shrink-0" />
                                    <span className="text-sm font-medium text-brand-teal">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-teal">Pricing questions</h2>
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
                        <h2 className="text-3xl font-bold text-brand-beige mb-4">Choose your sprint.</h2>
                        <p className="text-brand-beige/60 mb-8">Book a 30-minute call and we'll recommend the right package for your project scope.</p>
                        <Link to="/book" className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base">
                            Book a Sprint Call <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
