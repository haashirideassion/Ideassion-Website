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

const agents = [
    {
        name: 'PM Agent',
        role: 'Specification Engine',
        icon: 'solar:settings-bold-duotone',
        accent: 'secondary',
        description: 'Takes your raw problem statement and turns it into a production-ready Product Requirements Document (PRD) within hours. Defines sprint scope, task dependencies, success criteria, and assigns work to other agents.',
        outputs: [
            'Full PRD with feature breakdown',
            'Sprint scope and timeline',
            'Task dependency map',
            'Agent assignment roster',
            'Definition of Done for each feature',
        ]
    },
    {
        name: 'Builder Agent',
        role: 'Code Execution Engine',
        icon: 'solar:cpu-bold-duotone',
        accent: 'primary',
        description: 'Executes the implementation based on the PM Agent\'s spec. Writes clean, production-quality code with inline documentation, test stubs, and PR submissions. Works from the first line to final commit.',
        outputs: [
            'Full implementation code',
            'Inline code documentation',
            'Unit test stubs',
            'Pull request submission',
            'Code review changelog',
        ]
    },
    {
        name: 'QA Agent',
        role: 'Test Execution Engine',
        icon: 'solar:bug-bold-duotone',
        accent: 'secondary',
        description: 'Runs automatically once Builder completes each feature. Executes unit and integration test suites, and flags any regressions before production. Provides a structured pass/fail summary for every deployed build.',
        outputs: [
            'Unit + integration test suites',
            'Pass/fail summary report',
            'Regression detection',
            'Edge case coverage',
            'QA sign-off before push',
        ]
    },
    {
        name: 'DevOps Agent',
        role: 'Deployment Engine',
        icon: 'solar:cloud-upload-bold-duotone',
        accent: 'primary',
        description: 'Handles the full deployment pipeline autonomously. Provisions staging environments, runs smoke tests, and manages production pushes. Writes the changelog and ensures every approved feature ships the same day.',
        outputs: [
            'Staging environment setup',
            'Smoke test execution',
            'Production push automation',
            'Changelog generation',
            'Deployment pipeline as code',
        ]
    },
    {
        name: 'Design Agent',
        role: 'UI Scaffolding Engine',
        icon: 'solar:palette-bold-duotone',
        accent: 'secondary',
        description: 'Works in parallel with Builder to generate consistent UI components from the spec, suggest interaction variants, and flag accessibility issues before they reach QA. Ensures visual consistency at speed.',
        outputs: [
            'Component scaffolds from spec',
            'Interaction variant suggestions',
            'Accessibility audit notes',
            'Design-to-code handoff',
            'Responsive layout checks',
        ]
    },
];

const pipeline = [
    { icon: 'solar:refresh-circle-bold-duotone', label: 'System Review', sub: 'Day 1 AM' },
    { icon: 'solar:notes-bold-duotone', label: 'PM Agent spec', sub: 'Day 1 PM' },
    { icon: 'solar:cpu-bold-duotone', label: 'Parallel build', sub: 'Day 2–3' },
    { icon: 'solar:bug-bold-duotone', label: 'QA sweep', sub: 'Day 4' },
    { icon: 'solar:cloud-upload-bold-duotone', label: 'Production push', sub: 'Day 5' },
];

export default function Agents() {
    const [selected, setSelected] = useState(0);

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="bg-brand-teal py-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.09) 0%, transparent 70%)' }} />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="section-label mb-6 inline-flex">Agent Stack</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-beige leading-tight mb-6">
                            Five agents.<br />
                            <span className="text-brand-neon-green">One pipeline.</span>
                        </h1>
                        <p className="text-lg text-brand-beige/60 max-w-2xl">
                            Our sprint engine is powered by five specialised AI agents that run in parallel — not sequentially. This is why we ship in days, not months.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Pipeline Visual ─────────────────────────────────────────── */}
            <section className="py-16 bg-brand-beige border-b border-brand-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
                        {pipeline.map((step, i) => (
                            <React.Fragment key={step.label}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center mb-2">
                                        <Icon icon={step.icon} className="w-6 h-6 text-brand-neon-green" />
                                    </div>
                                    <div className="text-xs font-semibold text-brand-teal">{step.label}</div>
                                    <div className="text-xs text-brand-muted">{step.sub}</div>
                                </div>
                                {i < pipeline.length - 1 && (
                                    <div className="hidden md:flex items-center px-4 text-brand-neon-green">
                                        <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Agent Deep Dives ────────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Reveal className="text-center mb-16">
                        <span className="section-label-light mb-4 inline-flex">Inside the Stack</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3">Meet the agents</h2>
                        <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                            Click any agent to see what it does, what it produces, and how it fits into the sprint pipeline.
                        </p>
                    </Reveal>

                    {/* Agent Tabs */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {agents.map((a, i) => (
                            <button
                                key={a.name}
                                onClick={() => setSelected(i)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${selected === i
                                    ? 'bg-brand-teal text-brand-beige shadow-lg'
                                    : 'bg-brand-beige text-brand-teal hover:bg-brand-surface'
                                    }`}
                            >
                                <Icon icon={a.icon} className={`w-4 h-4 ${selected === i ? 'text-brand-neon-green' : ''}`} />
                                {a.name}
                            </button>
                        ))}
                    </div>

                    {/* Agent Detail */}
                    {agents.map((a, i) => i === selected && (
                        <div key={a.name} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div className="bg-brand-teal rounded-2xl p-8 text-brand-beige">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-neon-green/15 border border-brand-neon-green/25 flex items-center justify-center">
                                        <Icon icon={a.icon} className="w-8 h-8 text-brand-neon-green" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-beige">{a.name}</h3>
                                        <p className="text-brand-neon-green text-sm">{a.role}</p>
                                    </div>
                                </div>
                                <p className="text-brand-beige/70 leading-relaxed">{a.description}</p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-brand-muted uppercase tracking-widest mb-5">Outputs</h4>
                                {a.outputs.map(item => (
                                    <div key={item} className="flex items-center gap-3 p-4 bg-brand-beige rounded-xl border border-brand-border">
                                        <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-brand-neon-green flex-shrink-0" />
                                        <span className="text-sm font-medium text-brand-teal">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Why Parallel Matters ────────────────────────────────────── */}
            <section className="py-24 bg-brand-beige">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                    <Reveal>
                        <span className="section-label-light mb-4 inline-flex">The Key Insight</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mt-3 mb-6">Parallel &gt; Sequential</h2>
                        <p className="text-brand-muted max-w-2xl mx-auto mb-12">
                            Traditional teams work sequentially: design → handoff → development → test → deploy. That chain takes months. Our agents run all five tracks simultaneously.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {agents.map((a, i) => (
                                <Reveal key={a.name} delay={i * 60}>
                                    <div className="rounded-xl border border-brand-border bg-brand-beige p-4 flex flex-col items-center text-center gap-2 hover:border-brand-teal/30 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-brand-teal/8 flex items-center justify-center">
                                            <Icon icon={a.icon} className="w-5 h-5 text-brand-teal" />
                                        </div>
                                        <span className="text-xs font-semibold text-brand-teal">{a.name}</span>
                                        <div className="w-full h-1 rounded bg-brand-neon-green/60 animate-pulse" />
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <p className="text-brand-neon-green font-semibold mt-6 text-sm">All running simultaneously ↑</p>
                    </Reveal>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────────────── */}
            <section className="py-24 bg-brand-teal relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-50" />
                <div className="relative max-w-3xl mx-auto px-6 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-brand-beige mb-4">See the agents in action</h2>
                        <p className="text-brand-beige/60 mb-8">Book a sprint call and we'll walk you through exactly how the pipeline will work for your project.</p>
                        <Link to="/book" className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base">
                            Book a Sprint Call <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
