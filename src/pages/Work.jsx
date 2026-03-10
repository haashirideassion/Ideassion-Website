import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

function useInView(threshold = 0.1) {
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

const allCaseStudies = [
    {
        id: 'srd-fleetsense',
        tag: 'Logistics',
        title: 'SRD FleetSense',
        subtitle: 'From Manual Dispatch to Intelligent Logistics Command Center',
        timeline: '2 sprints · 2 weeks',
        stack: 'Next.js · Supabase · React',
        icon: 'solar:truck-bold-duotone',
        stats: [
            { label: 'Reduction in unplanned shipments', value: '73%' },
            { label: 'Improvement in zone allocation', value: '61%' },
            { label: 'Manual spreadsheets passed to drivers', value: 'Zero' },
        ],
        challenge: 'When SRD Logistics engaged us, their inbound logistics operation was drowning in spreadsheets. Warehouse teams manually sorted parcels into delivery zones using paper bins and handwritten notes. Dispatch planners juggled multiple Excel files to allocate trucks and vehicles.',
        solution: 'We built SRD FleetSense — a production-ready logistics command center. The Command Center Dashboard gives operations leadership real-time visibility they never had: incoming trucks by day, zone-wise shipment distribution, and dispatch status breakdowns. The system automatically flags overloaded zones, allowing planners to rebalance before congestion becomes a problem.',
        impact: 'What started as chaos — spreadsheets, phone calls, and manual sorting — is now an automated, auditable, intelligent operation. Real-time visibility for leadership means operations calls are now data-driven, not guesswork.',
        quote: 'Planners no longer email each other trying to find an available vehicle — the system shows capacity and availability.',
    },
    {
        id: 'bls-aram',
        tag: 'Compliance',
        title: 'BLS ARAM',
        subtitle: 'Turning Regulatory Chaos Into Operational Clarity',
        timeline: '3 sprints · 3 weeks',
        stack: 'Next.js · PostgreSQL · TypeScript',
        icon: 'solar:shield-check-bold-duotone',
        stats: [
            { label: 'Missed compliance deadlines post-launch', value: 'Zero' },
            { label: 'Reduction in auditor review time', value: '50%' },
            { label: 'Seconds to pull a complete audit trail', value: '<5' },
        ],
        challenge: 'A large industrial organization operated across multiple facilities, each subject to dozens of overlapping regulatory requirements. When a compliance deadline was missed, no one knew until a regulator called. There was no centralized view of what was due, what was submitted, or what was in review.',
        solution: 'We built a compliance management platform where companies assign themselves regulatory requirements, submit documents, and reviewers verify compliance — all tracked with complete audit accountability. Pre-populated with 50+ common industrial compliance requirements, multi-level review workflows, and an immutable audit trail.',
        impact: 'The system transformed compliance from a reactive scramble to a managed operational workflow. Companies knew exactly what they owed, auditors had visibility into the entire cycle, and regulators could see that compliance wasn\'t left to chance.',
        quote: 'Instant regulatory readiness — auditors can pull a complete audit trail in seconds instead of reconstructing from records.',
    },
    {
        id: 'gaslink',
        tag: 'UtilityTech',
        title: 'Gaslink',
        subtitle: 'Bridging Customer Expectations and Delivery Reality in LPG Distribution',
        timeline: '3 sprints · 3 weeks',
        stack: 'React · Supabase · MSG91 API',
        icon: 'solar:graph-up-bold-duotone',
        stats: [
            { label: 'Address updates resolved in 48 hours', value: '80%' },
            { label: 'Reduction in missed deliveries', value: '35%' },
            { label: 'Customer satisfaction in address verification', value: '+36pts' },
        ],
        challenge: 'A major LPG utility company faced a fundamental trust and operational problem. Thousands of customers had outdated delivery addresses on file. When delivery agents arrived at wrong locations, customers either weren\'t there or the address was completely incorrect. The entire workflow relied on spreadsheets and manual data entry.',
        solution: 'We built a two-sided platform where customers self-service address corrections via interactive map (lat/long + landmarks) while agency staff maintain operational control through an intelligent verification queue. Automated SMS/WhatsApp notifications in English and Tamil with deep-link resubmission flows.',
        impact: 'The workflow was transparent, fast, and scalable. What was a manual, opaque process became an automated, customer-centric system that agency staff could manage in minutes instead of hours.',
        quote: '90% of rejected addresses were resubmitted correctly on the second attempt — because customers understood the reason.',
    },
    {
        id: 'offisbay',
        tag: 'PropTech',
        title: 'OffisBay',
        subtitle: 'Workspace & Meeting Room Management Platform',
        timeline: '2 sprints · 2 weeks',
        stack: 'React · TypeScript · Supabase',
        icon: 'solar:buildings-bold-duotone',
        stats: [
            { label: 'Booking conflicts eliminated', value: '100%' },
            { label: 'Admin overhead reduction', value: 'Significant' },
            { label: 'Stakeholder groups served', value: '3' },
        ],
        challenge: 'Before OffisBay, office operations relied on a mix of shared calendars, spreadsheets, and chat threads to manage who sits where and which rooms were free. Double bookings were common. Admins became bottlenecks for simple tasks like adding a new meeting room.',
        solution: 'We delivered OffisBay — a responsive web app with conflict-aware booking flows, real-time space status across all rooms, a visual floor overview for facilities teams, and self-service room search for employees. Role-based access for Admins, Facility Managers, and Employees.',
        impact: 'Organizations moved from reactive, manual coordination to a proactive, insight-driven approach. Even as an MVP delivered in under two weeks, the system meaningfully reduces scheduling conflicts and provides a foundation for continuous office space optimization.',
        quote: 'Admins and facilities teams now manage their entire workspace portfolio from a single pane of glass.',
    },
    {
        id: 'iitt',
        tag: 'EdTech',
        title: 'IITT Assessment Platform',
        subtitle: 'Enabling Rapid Talent Evaluation at Scale',
        timeline: '2 sprints · 2 weeks',
        stack: 'React · Supabase · Recharts',
        icon: 'solar:check-circle-bold-duotone',
        stats: [
            { label: 'Reduction in assessment admin time', value: '~80%' },
            { label: 'Question types supported', value: '9' },
            { label: 'Participants scalable without extra staff', value: '1000+' },
        ],
        challenge: 'The Ideassion Institute for Talent Transformation ran assessment administration through manual, fragmented processes. Organizations had to create questionnaires using generic tools, manually score responses, send individual emails, and compile results in disconnected spreadsheets.',
        solution: 'A Typeform-like WYSIWYG builder allowing non-technical admins to design sophisticated questionnaires, auto-grading for objective questions, Supabase Edge Functions for mass email invitations, and unified dashboards with heatmaps and completion analytics. White-label flexibility with dual branding.',
        impact: 'ITT transformed from a manual assessment coordinator into a scalable talent platform. Organizations can now deploy hundreds of participants across multiple assessment formats and receive real-time completion insights — without reassigning staff to administrative work.',
        quote: 'Scalable, automated talent assessment that previously required teams of coordinators now runs on its own.',
    },
    {
        id: 'workforce-management',
        tag: 'HR Tech',
        title: 'Workforce Management System',
        subtitle: 'Enterprise Resource Planning for Professional Services',
        timeline: '2 sprints · 2 weeks',
        stack: 'React · TypeScript · Supabase',
        icon: 'solar:graph-up-bold-duotone',
        stats: [
            { label: 'Monthly HR admin hours saved', value: '15–20h' },
            { label: 'Earlier risk identification', value: '30 days' },
            { label: 'Risk categories tracked', value: '4' },
        ],
        challenge: 'A professional services firm had no unified system to monitor who was available, for how long, or why. Project managers maintained separate allocation records. HR tracked employee status through spreadsheets. Decisions about layoffs, retraining, or project extensions relied on outdated information.',
        solution: 'Automated bench status calculation tracking employees across four risk categories (Healthy → Review Required → At Risk → Layoff Consideration) with a color-coded dashboard. Project history timeline with chronological records of every assignment, duration, and manager feedback.',
        impact: 'Resource planning shifted from reactive (responding to layoff pressure) to predictive (identifying at-risk employees 30 days earlier). For a 200-person firm, catching one preventable layoff justifies the platform\'s entire existence.',
        quote: 'The bench tracking system gives us clear visibility into exactly who we need to act on — before it becomes a problem.',
    },
    {
        id: 'dizrupt-os',
        tag: 'SaaS',
        title: 'DizruptOS',
        subtitle: 'Internal Operating System for Modern Teams',
        timeline: '4 sprints · 4 weeks',
        stack: 'React · TypeScript · Supabase',
        icon: 'solar:buildings-bold-duotone',
        stats: [
            { label: 'Tools consolidated into one platform', value: '7+' },
            { label: 'Database tables powering the system', value: '25+' },
            { label: 'User role types supported', value: '3' },
        ],
        challenge: 'A typical workflow before DizruptOS: work planned in one tool, tasks and time logs in spreadsheets, communication in chat apps, and knowledge scattered across drives and email. No single source of truth for "what\'s going on" across projects, people, and timelines.',
        solution: 'DizruptOS consolidates dashboard analytics, project management, Kanban boards, attendance, meetings, knowledge base, team directory, chat, notifications, and a collaborative whiteboard into one unified workspace. Real-time subscriptions, presence indicators, and role-aware experiences for Managers, Members, and Clients.',
        impact: 'A smoother operating rhythm: less time hunting for information, more time executing and improving. New hires can discover "how we do things" at the moment they need it — without tribal knowledge.',
        quote: 'Real-time visibility across projects, people, and timelines — all from one workspace that your entire team actually uses.',
    },
];

const tags = ['All', ...Array.from(new Set(allCaseStudies.map(c => c.tag)))];

export default function Work() {
    const [selectedTag, setSelectedTag] = useState('All');
    const [expandedId, setExpandedId] = useState(null);

    const filtered = selectedTag === 'All' ? allCaseStudies : allCaseStudies.filter(c => c.tag === selectedTag);

    return (
        <div className="overflow-x-hidden">

            {/* ── Hero ────────────────────────────────────────────────────── */}
            <section className="bg-brand-teal py-24 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,245,120,0.08) 0%, transparent 70%)' }} />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="section-label mb-6 inline-flex">Shipped Work</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-beige leading-tight mb-6">
                            Products we've<br />
                            <span className="text-brand-neon-green">shipped.</span>
                        </h1>
                        <p className="text-lg text-brand-beige/60 max-w-2xl">
                            Real products. Real outcomes. Every case study below was built in weekly sprints and shipped to production.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Filter ──────────────────────────────────────────────────── */}
            <div className="bg-brand-beige border-b border-brand-border sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-3 flex-wrap">
                        <Icon icon="solar:filter-bold-duotone" className="w-4 h-4 text-brand-muted" />
                        {tags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${selectedTag === tag
                                    ? 'bg-brand-teal text-brand-beige'
                                    : 'text-brand-teal hover:bg-brand-surface'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Case Studies Grid ────────────────────────────────────────── */}
            <section className="py-16 bg-brand-beige">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-6">
                        {filtered.map((c, i) => (
                            <Reveal key={c.id} delay={i * 60}>
                                <div className="rounded-2xl border border-brand-border bg-brand-beige overflow-hidden hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300">
                                    {/* Card header */}
                                    <div className="p-8 flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Icon + tag */}
                                        <div className="flex items-center gap-4 md:flex-col md:items-start md:w-40 shrink-0">
                                            <div className="w-14 h-14 rounded-2xl bg-brand-teal flex items-center justify-center">
                                                <Icon icon={c.icon} className="w-7 h-7 text-brand-neon-green" />
                                            </div>
                                            <span className="text-xs font-semibold text-brand-teal bg-brand-teal/8 px-2.5 py-1 rounded-full">{c.tag}</span>
                                        </div>

                                        {/* Main content */}
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-brand-teal">{c.title}</h3>
                                                    <p className="text-brand-muted text-sm mt-1">{c.subtitle}</p>
                                                    <p className="text-brand-muted text-xs mt-2 font-mono">{c.timeline} · {c.stack}</p>
                                                </div>
                                                <button
                                                    onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}
                                                    className="btn-outline text-sm shrink-0 flex items-center gap-2"
                                                >
                                                    {expandedId === c.id ? 'Show less' : 'Read case study'}
                                                    <Icon icon="solar:arrow-right-up-bold-duotone" className={`w-3.5 h-3.5 transition-transform ${expandedId === c.id ? 'rotate-90' : ''}`} />
                                                </button>
                                            </div>

                                            {/* Stats row */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                {c.stats.map(stat => (
                                                    <div key={stat.label} className="bg-brand-neon-green/8 border border-brand-neon-green/15 rounded-xl p-3">
                                                        <div className="text-xl font-bold text-brand-teal">{stat.value}</div>
                                                        <div className="text-xs text-brand-muted">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded content */}
                                    {expandedId === c.id && (
                                        <div className="border-t border-brand-border bg-brand-beige px-8 py-8 grid md:grid-cols-3 gap-8">
                                            <div>
                                                <h4 className="text-xs font-semibold text-brand-neon-green uppercase tracking-widest mb-3">The Challenge</h4>
                                                <p className="text-sm text-brand-muted leading-relaxed">{c.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-semibold text-brand-neon-green uppercase tracking-widest mb-3">The Solution</h4>
                                                <p className="text-sm text-brand-muted leading-relaxed">{c.solution}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-semibold text-brand-neon-green uppercase tracking-widest mb-3">The Impact</h4>
                                                <p className="text-sm text-brand-muted leading-relaxed mb-4">{c.impact}</p>
                                                <blockquote className="border-l-2 border-brand-neon-green pl-4 text-sm italic text-brand-teal">
                                                    "{c.quote}"
                                                </blockquote>
                                            </div>
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
                        <h2 className="text-3xl font-bold text-brand-beige mb-4">Your product could be next.</h2>
                        <p className="text-brand-beige/60 mb-8">Every case study above started with a 30-minute call. Let's define your Sprint 1.</p>
                        <Link to="/book" className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base">
                            Book a Sprint Call <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
