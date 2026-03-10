import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

// ── Intersection-observer hook ─────────────────────────────────────────────
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

// ── Data ───────────────────────────────────────────────────────────────────
const pains = [
    {
        icon: 'solar:clock-circle-bold-duotone',
        title: 'Weeks before a line of code',
        body: 'Traditional agencies spend the first month in meetings, decks, and "discovery phases" — before a single feature ships.'
    },
    {
        icon: 'solar:dollar-minimalistic-bold-duotone',
        title: 'Billed for hours, not outcomes',
        body: 'You pay for time regardless of results. The incentive is to go slow. Ours is to ship fast and prove value every single week.'
    },
    {
        icon: 'solar:cpu-bold-duotone',
        title: 'Fragmented AI tools, zero velocity',
        body: 'ChatGPT here, Copilot there. Nothing integrated. Nothing moving fast enough. AI potential completely unrealised.'
    },
];

const sprintSteps = [
    {
        num: '01',
        icon: 'solar:settings-bold-duotone',
        title: 'System Review',
        body: 'A structured intake call where we map your problem, constraints, and success criteria. The PM Agent turns this into a full PRD within hours.'
    },
    {
        num: '02',
        icon: 'solar:cpu-bold-duotone',
        title: 'Parallel Execution',
        body: 'Builder, QA, DevOps, and Design agents run simultaneously — not sequentially. What takes teams weeks compresses into days.'
    },
    {
        num: '03',
        icon: 'solar:bolt-bold-duotone',
        title: 'Weekly Demo',
        body: 'Every Friday, you see a live working build. Not a mockup. Not a progress update. A real, deployed product you can click through.'
    },
    {
        num: '04',
        icon: 'solar:rocket-bold-duotone',
        title: 'Production Handoff',
        body: 'Approved features ship to production with full documentation, source code, and deployment pipeline included.'
    },
];

const agents = [
    { name: 'PM Agent', role: 'Specification Engine', icon: 'solar:settings-bold-duotone', output: 'Full PRD, task breakdown, sprint scope, dependency map' },
    { name: 'Builder Agent', role: 'Code Execution Engine', icon: 'solar:code-bold-duotone', output: 'Implementation code, inline docs, test stubs, PR submission' },
    { name: 'QA Agent', role: 'Test Execution Engine', icon: 'solar:bug-bold-duotone', output: 'Unit + integration tests, pass/fail summary, regression flags' },
    { name: 'DevOps Agent', role: 'Deployment Engine', icon: 'solar:cloud-upload-bold-duotone', output: 'Staging deploy, smoke tests, changelog entry, production push' },
    { name: 'Design Agent', role: 'UI Scaffolding Engine', icon: 'solar:palette-bold-duotone', output: 'Component scaffolds, variant suggestions, accessibility notes' },
];

const caseStudies = [
    {
        tag: 'Logistics',
        title: 'SRD FleetSense',
        subtitle: 'From Manual Dispatch to Intelligent Logistics Command Center',
        timeline: '2 sprints · 2 weeks',
        stack: 'Next.js · Supabase · React',
        stat: '73% reduction in unplanned shipments',
        quote: 'What started as chaos—spreadsheets, phone calls, and manual sorting—is now an automated, auditable, intelligent operation.'
    },
    {
        tag: 'Compliance',
        title: 'BLS ARAM',
        subtitle: 'Turning Regulatory Chaos Into Operational Clarity',
        timeline: '3 sprints · 3 weeks',
        stack: 'Next.js · PostgreSQL · TypeScript',
        stat: '50% reduction in auditor review time',
        quote: 'The system transformed compliance from a reactive scramble to a managed operational workflow.'
    },
    {
        tag: 'UtilityTech',
        title: 'Gaslink',
        subtitle: 'Bridging Customer Expectations and Delivery Reality',
        timeline: '3 sprints · 3 weeks',
        stack: 'React · Supabase · MSG91 API',
        stat: '80% of address updates resolved in 48h',
        quote: '35% reduction in missed deliveries due to accurate address capture.'
    },
];

const stats = [
    { icon: 'solar:graph-up-bold-duotone', value: '10x', label: 'Faster than traditional agencies' },
    { icon: 'solar:box-bold-duotone', value: '5 days', label: 'Average time to first working build' },
    { icon: 'solar:users-group-rounded-bold-duotone', value: '50+', label: 'Products shipped across industries' },
    { icon: 'solar:check-circle-bold-duotone', value: '100%', label: 'Full source code delivered' },
];

// ── Pricing tiers ──────────────────────────────────────────────────────────
const tiers = [
    {
        name: 'Starter Sprint',
        price: 'From $4,500',
        period: 'per sprint',
        description: 'One sprint. One defined outcome. Perfect for validating an idea or shipping a specific feature fast.',
        features: ['1 sprint (5 business days)', 'PM Agent spec included', 'Builder + QA agent pipeline', 'Weekly Friday demo', 'Full source code delivered', 'Staging + production deploy'],
        cta: 'Book a Sprint Call',
        highlight: false,
    },
    {
        name: 'Growth Pack',
        price: 'From $15,000',
        period: '4 sprints',
        description: 'Four consecutive sprints with compounding velocity. Ideal for building a full MVP or core product.',
        features: ['4 sprints (4 weeks)', 'Full agent pipeline enabled', 'PM + Builder + QA + DevOps', 'Design Agent included', 'Client sprint dashboard access', 'Priority response + weekly calls'],
        cta: 'Book a Strategy Call',
        highlight: true,
    },
    {
        name: 'Studio Partner',
        price: 'Custom',
        period: 'ongoing',
        description: 'Embedded sprint capacity for startups and companies that need continuous, reliable delivery.',
        features: ['Dedicated sprint capacity', 'Custom sprint cadence', 'Full internal agent system', 'Direct engineer access', 'Integration with your repo/infra', 'SLA-backed delivery commitments'],
        cta: 'Talk to Us',
        highlight: false,
    },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
    return (
        <main className="overflow-x-hidden">

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center bg-brand-teal overflow-hidden">
                {/* Grid BG */}
                <div className="absolute inset-0 grid-bg-dark pointer-events-none" />
                {/* Green glow */}
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.10) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.06) 0%, transparent 70%)' }} />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
                    <div className="max-w-4xl">
                        {/* Label */}
                        <div className="animate-fade-in mb-6">
                            <span className="section-label">
                                <Icon icon="solar:bolt-bold-duotone" className="w-3 h-3" />
                                AI-Native Software Studio
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="animate-slide-up text-5xl sm:text-6xl lg:text-[72px] font-bold text-brand-beige leading-[1.06] tracking-tight mb-6"
                            style={{ animationDelay: '80ms' }}>
                            Ship software<br />
                            that works.<br />
                            <span className="text-brand-neon-green">This week.</span>
                        </h1>

                        {/* Sub */}
                        <p className="animate-slide-up text-lg sm:text-xl text-brand-beige/60 leading-relaxed max-w-2xl mb-10"
                            style={{ animationDelay: '160ms' }}>
                            Dizrupt is an AI-native studio delivering production-grade software in weekly sprints —
                            10x faster than the team you're waiting on.
                        </p>

                        {/* CTAs */}
                        <div className="animate-slide-up flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
                            style={{ animationDelay: '240ms' }}>
                            <Link to="/book" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                                Book a Sprint Call
                                <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                            </Link>
                            <Link to="/how-it-works" className="btn-ghost text-base px-8 py-4">
                                See How It Works
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div className="animate-fade-in flex flex-wrap items-center gap-6 text-sm text-brand-beige/50"
                            style={{ animationDelay: '360ms' }}>
                            {['Working build every Friday', 'No retainers. No hours. Outcomes.', 'Full source code delivered'].map(t => (
                                <div key={t} className="flex items-center gap-2">
                                    <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-brand-neon-green flex-shrink-0" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-beige/30 text-xs">
                    <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
                </div>
            </section>

            {/* ── Stats ─────────────────────────────────────────────────────── */}
            <section className="py-16 bg-brand-beige border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <Reveal key={s.label} delay={i * 80}>
                                <div className="text-center">
                                    <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-3">
                                        <Icon icon={s.icon} className="w-5 h-5 text-brand-teal" />
                                    </div>
                                    <div className="text-3xl font-bold text-brand-teal mb-1">{s.value}</div>
                                    <div className="text-sm text-brand-muted">{s.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── The Problem ──────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">The Problem</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">
                            You need software. You're stuck.
                        </h2>
                        <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                            Every option has a fatal flaw. Here's why the market is broken.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pains.map((p, i) => (
                            <Reveal key={p.title} delay={i * 100}>
                                <div className="card h-full">
                                    <div className="w-12 h-12 rounded-xl bg-brand-neon-green/10 flex items-center justify-center mb-5">
                                        <Icon icon={p.icon} className="w-6 h-6 text-brand-teal" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-brand-teal mb-3">{p.title}</h3>
                                    <p className="text-brand-muted text-sm leading-relaxed">{p.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── The Model ─────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">The Model</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">
                            One week. One outcome. Shipped.
                        </h2>
                        <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                            We collapsed the traditional delivery timeline into a single sprint cycle.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {/* Without Dizrupt */}
                            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                        <Icon icon="solar:close-circle-bold-duotone" className="w-4 h-4 text-red-500" />
                                    </div>
                                    <h3 className="font-semibold text-brand-teal">Without Dizrupt</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Week 1–2: Discovery calls & NDAs',
                                        'Week 3–4: Proposal & scope negotiation',
                                        'Week 5–6: Design mockups & revisions',
                                        'Week 7–10: Development begins (finally)',
                                        'Week 11–12: QA and "staging"',
                                        'Week 13+: Launch (maybe)'
                                    ].map(item => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-brand-muted">
                                            <Icon icon="solar:close-circle-bold-duotone" className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-6 border-t border-red-200">
                                    <p className="text-sm font-semibold text-red-600">Total: 13+ weeks before production</p>
                                </div>
                            </div>

                            {/* With Dizrupt */}
                            <div className="rounded-2xl border border-brand-neon-green/30 bg-brand-neon-green/5 p-8 relative overflow-hidden">
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs font-semibold bg-brand-neon-green text-brand-teal px-3 py-1 rounded-full">10x faster</span>
                                </div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                                        <Icon icon="solar:bolt-bold-duotone" className="w-4 h-4 text-brand-teal" />
                                    </div>
                                    <h3 className="font-semibold text-brand-teal">With Dizrupt</h3>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Day 1: System Review → PM Agent spec',
                                        'Day 2: Parallel agent execution begins',
                                        'Day 3: First working build in staging',
                                        'Day 4: QA Agent test suite complete',
                                        'Day 5: Friday demo — live, working product',
                                        'Same day: Production push approved'
                                    ].map(item => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-brand-teal">
                                            <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-brand-neon-green flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-6 border-t border-brand-neon-green/20">
                                    <p className="text-sm font-semibold text-brand-teal">Total: 5 business days to production</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Sprint Structure ─────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">Sprint Structure</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">
                            How a sprint works
                        </h2>
                        <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                            Four phases. Five days. One shipped product.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sprintSteps.map((s, i) => (
                            <Reveal key={s.num} delay={i * 80}>
                                <div className="card h-full group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-4xl font-black text-brand-teal/8 group-hover:text-brand-neon-green/30 transition-colors">{s.num}</div>
                                        <div className="w-10 h-10 rounded-xl bg-brand-teal/8 group-hover:bg-brand-neon-green/15 flex items-center justify-center transition-colors">
                                            <Icon icon={s.icon} className="w-5 h-5 text-brand-teal" />
                                        </div>
                                    </div>
                                    <h3 className="text-base font-semibold text-brand-teal mb-3">{s.title}</h3>
                                    <p className="text-sm text-brand-muted leading-relaxed">{s.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Agent Stack (Dark) ─────────────────────────────────────────── */}
            <section className="py-24 bg-brand-teal text-brand-beige relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-50" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[130px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.08) 0%, transparent 70%)' }} />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label mb-4 inline-flex">The Agent Stack</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-beige mt-3">
                            Five agents. One pipeline.
                        </h2>
                        <p className="mt-4 text-brand-beige/50 max-w-lg mx-auto">
                            These agents run inside our sprint engine — not exposed to clients, but they're why we're fast.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {agents.map((a, i) => (
                            <Reveal key={a.name} delay={i * 80}>
                                <div className="rounded-xl border border-white/10 bg-brand-beige/5 p-6 hover:border-brand-neon-green/30 hover:bg-brand-beige/8 transition-all duration-200 h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-semibold text-brand-beige text-base">{a.name}</h3>
                                            <p className="text-xs text-brand-beige/40 mt-0.5">{a.role}</p>
                                        </div>
                                        <div className="w-9 h-9 rounded-lg bg-brand-neon-green/10 border border-brand-neon-green/20 flex items-center justify-center flex-shrink-0">
                                            <Icon icon={a.icon} className="w-5 h-5 text-brand-neon-green" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-brand-beige/50 leading-relaxed">{a.output}</p>
                                </div>
                            </Reveal>
                        ))}

                        {/* CTA card */}
                        <Reveal delay={agents.length * 80}>
                            <div className="rounded-xl border border-brand-neon-green/20 bg-brand-neon-green/5 p-6 flex flex-col justify-between h-full">
                                <p className="text-sm text-brand-beige/60 leading-relaxed">
                                    Want to see the full agent architecture in detail?
                                </p>
                                <Link to="/agents" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-neon-green hover:gap-3 transition-all">
                                    Explore the Agent Stack
                                    <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── Work ─────────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="section-label-light mb-3 inline-flex">Shipped Work</span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-2">
                                Products we've shipped
                            </h2>
                        </div>
                        <Link to="/work" className="btn-outline text-sm">
                            View all case studies
                        </Link>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caseStudies.map((c, i) => (
                            <Reveal key={c.title} delay={i * 80}>
                                <div className="card h-full flex flex-col bg-brand-beige">
                                    <div className="h-1 rounded-t-lg -mx-6 -mt-6 mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                                    <span className="text-xs font-semibold text-brand-teal bg-brand-teal/8 px-2 py-1 rounded w-fit mb-3">{c.tag}</span>
                                    <h3 className="font-bold text-brand-teal text-lg mb-1">{c.title}</h3>
                                    <p className="text-sm text-brand-muted mb-2">{c.subtitle}</p>
                                    <p className="text-xs text-brand-muted mb-4">{c.timeline}</p>
                                    <div className="flex-1 p-3 rounded-lg bg-brand-neon-green/8 border border-brand-neon-green/15 mb-4">
                                        <p className="text-xs font-semibold text-brand-teal flex items-center gap-1.5">
                                            <Icon icon="solar:graph-up-bold-duotone" className="w-4 h-4 text-brand-teal" />
                                            {c.stat}
                                        </p>
                                    </div>
                                    <p className="text-xs text-brand-muted italic mb-4">"{c.quote}"</p>
                                    <p className="text-xs text-brand-muted font-mono mt-auto pt-4 border-t border-brand-border">{c.stack}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pricing ──────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">Pricing</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">
                            Transparent. Fixed. Outcome-based.
                        </h2>
                        <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                            You pay per sprint, not per hour. No scope creep. No retainers. Just shipped outcomes.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tiers.map((t, i) => (
                            <Reveal key={t.name} delay={i * 80}>
                                <div className={`rounded-2xl p-8 h-full flex flex-col ${t.highlight
                                    ? 'bg-brand-teal text-brand-beige shadow-2xl shadow-brand-primary/30 ring-2 ring-brand-secondary'
                                    : 'bg-brand-beige border border-brand-border'
                                    }`}>
                                    {t.highlight && (
                                        <span className="text-xs font-semibold bg-brand-neon-green text-brand-teal px-3 py-1 rounded-full w-fit mb-4">Most Popular</span>
                                    )}
                                    <h3 className={`text-lg font-bold mb-1 ${t.highlight ? 'text-brand-beige' : 'text-brand-teal'}`}>{t.name}</h3>
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
                                        className={`text-center py-3 rounded-lg font-semibold text-sm transition-all ${t.highlight
                                            ? 'bg-brand-neon-green text-brand-teal hover:brightness-110'
                                            : 'border border-brand-teal text-brand-teal hover:bg-brand-surface'
                                            }`}
                                    >
                                        {t.cta}
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ─────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-teal relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-50" />
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 60% 50%, rgba(0,245,120,0.09) 0%, transparent 60%)' }} />
                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <Reveal>
                        <span className="section-label mb-6 inline-flex">Get Started</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-beige mb-4">
                            Ready to ship?
                        </h2>
                        <p className="text-brand-beige/60 text-lg mb-2">
                            30-minute Sprint Strategy Call.
                        </p>
                        <p className="text-brand-beige/40 text-base mb-10">
                            We'll define your first sprint, name the outcome, and tell you exactly what ships by Friday.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/book" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                                Book a Sprint Call
                                <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                            </Link>
                            <Link to="/sprints" className="btn-ghost text-base px-8 py-4">
                                View sprint packages
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

