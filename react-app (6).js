import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const customStyles = {
  body: {
    backgroundColor: '#F1F1DE',
    color: '#002F34',
  },
  sharpBorder: {
    border: '1px solid #002F34',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  sharpBorderHover: {
    boxShadow: '6px 6px 0px 0px #002F34',
    transform: 'translate(-2px, -2px)',
  },
  sharpShadow: {
    boxShadow: '6px 6px 0px 0px #002F34',
  },
  btnPrimary: {
    backgroundColor: '#002F34',
    color: '#FFFFFF',
    padding: '1rem 2.5rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: '1px solid #002F34',
    position: 'relative',
    overflow: 'hidden',
  },
  btnPrimaryHover: {
    backgroundColor: '#03FF83',
    color: '#002F34',
    boxShadow: '4px 4px 0px 0px #002F34',
    transform: 'translate(-2px, -2px)',
  },
  btnOutline: {
    backgroundColor: 'transparent',
    color: '#002F34',
    padding: '1rem 2.5rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    border: '1px solid #002F34',
  },
  btnOutlineHover: {
    backgroundColor: '#002F34',
    color: '#FFFFFF',
    boxShadow: '4px 4px 0px 0px #002F34',
    transform: 'translate(-2px, -2px)',
  },
};

const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    menu: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
    search: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    'flask-conical': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>,
    code: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    rocket: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
    check: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>,
    'check-circle-2': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
    plus: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>,
    cpu: <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>,
  };
  return icons[name] || null;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 bg-[#F1F1DE]/90 backdrop-blur-md border-b border-[#002F34]/10 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 relative text-ideassion-navy">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-ideassion-navy font-display">IDEASSION<span className="text-xs align-top ml-0.5">TM</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
          <a onClick={() => scrollToSection('overview')} className="nav-link hover:text-ideassion-blue transition-colors cursor-pointer">Offerings</a>
          <a onClick={() => scrollToSection('process')} className="nav-link hover:text-ideassion-blue transition-colors cursor-pointer">Process</a>
          <a onClick={() => scrollToSection('pricing')} className="nav-link hover:text-ideassion-blue transition-colors cursor-pointer">Pricing</a>
          <a onClick={() => scrollToSection('faq')} className="nav-link hover:text-ideassion-blue transition-colors cursor-pointer">FAQ</a>
          <a onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-ideassion-navy text-white hover:bg-ideassion-blue transition-colors font-semibold sharp-border border-transparent hover:border-ideassion-navy hover:shadow-none !transform-none !box-shadow-none cursor-pointer">
            Start AI Project
          </a>
        </div>

        <button className="md:hidden">
          <Icon name="menu" className="w-8 h-8 text-ideassion-navy" />
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <header className="relative pt-48 pb-32 bg-ideassion-navy text-white overflow-hidden px-6">
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ideassion-blue/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm mb-8 reveal-up" style={{animationDelay: '0.1s'}}>
          <span className="w-2 h-2 bg-ideassion-green rounded-full shadow-[0_0_10px_#03FF83]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-white">Specialized Service</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tighter reveal-up" style={{animationDelay: '0.2s'}}>
          AI <span className="text-ideassion-green">NATIVE</span><br />
          ENGINEERING.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light reveal-up" style={{animationDelay: '0.3s'}}>
          Moving beyond "wrappers." We architect bespoke intelligence layers that transform business operations, automate complex workflows, and create predictive advantages.
        </p>
      </div>
    </header>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="py-32 bg-ideassion-cream border-b border-ideassion-navy/10 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="reveal-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ideassion-navy mb-12">Intelligence as a <br />Core Component.</h2>
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center font-display font-bold text-xl sharp-border group-hover:bg-ideassion-blue transition-colors">01</div>
                  <h3 className="text-2xl font-bold font-display text-ideassion-navy">LLM & Generative Systems</h3>
                </div>
                <p className="text-ideassion-navy/70 text-lg pl-16">Custom fine-tuning of open-source models (Llama, Mistral) or integration with frontier models (OpenAI, Anthropic) to handle your domain-specific knowledge.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center font-display font-bold text-xl sharp-border group-hover:bg-ideassion-green group-hover:text-ideassion-navy transition-colors">02</div>
                  <h3 className="text-2xl font-bold font-display text-ideassion-navy">RAG & Vector Infrastructure</h3>
                </div>
                <p className="text-ideassion-navy/70 text-lg pl-16">Retrieval-Augmented Generation architectures that allow AI to safely and accurately query your private internal documentation with zero hallucinations.</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center font-display font-bold text-xl sharp-border group-hover:bg-ideassion-cyan group-hover:text-ideassion-navy transition-colors">03</div>
                  <h3 className="text-2xl font-bold font-display text-ideassion-navy">Autonomous Agentic Workflows</h3>
                </div>
                <p className="text-ideassion-navy/70 text-lg pl-16">Building self-correcting agents that can execute multi-step tasks across your software stack, from customer support to automated code review.</p>
              </div>
            </div>
          </div>
          <div className="relative reveal-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-ideassion-navy p-12 sharp-shadow aspect-square flex flex-col justify-center text-white">
              <div className="mb-8">
                <Icon name="cpu" className="w-16 h-16 text-ideassion-green" />
              </div>
              <h4 className="text-3xl font-display font-bold mb-6">The "Native" Difference</h4>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Unlike traditional agencies that integrate AI as an afterthought, we start with the data architecture. We ensure your data is clean, vectorizable, and ready for model consumption before we write a single line of UI code.
              </p>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-center gap-3 text-ideassion-cyan">
                  <Icon name="check-circle-2" className="w-4 h-4" /> PRIVACY-FIRST LOCAL DEPLOYMENT
                </li>
                <li className="flex items-center gap-3 text-ideassion-cyan">
                  <Icon name="check-circle-2" className="w-4 h-4" /> ZERO-DATA RETENTION POLICIES
                </li>
                <li className="flex items-center gap-3 text-ideassion-cyan">
                  <Icon name="check-circle-2" className="w-4 h-4" /> SCALE-READY GPU ORCHESTRATION
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 reveal-up">
          <span className="text-ideassion-blue font-bold tracking-widest uppercase text-sm mb-4 block">Our Method</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-ideassion-navy">The AI Blueprint</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-ideassion-navy/10 hidden md:block"></div>
          
          <div className="bg-ideassion-cream p-8 sharp-border relative z-10 hover:bg-white transition-colors group">
            <span className="text-6xl font-display font-black text-ideassion-navy/5 absolute -top-6 left-4">01</span>
            <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center mb-6 group-hover:bg-ideassion-blue transition-colors">
              <Icon name="search" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-display">Audit & Discovery</h3>
            <p className="text-sm text-ideassion-navy/60">We analyze your data silos and identify high-leverage automation opportunities within 1 week.</p>
          </div>

          <div className="bg-ideassion-cream p-8 sharp-border relative z-10 hover:bg-white transition-colors group">
            <span className="text-6xl font-display font-black text-ideassion-navy/5 absolute -top-6 left-4">02</span>
            <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center mb-6 group-hover:bg-ideassion-green group-hover:text-ideassion-navy transition-colors">
              <Icon name="flask-conical" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-display">Proof of Concept</h3>
            <p className="text-sm text-ideassion-navy/60">A rapid prototype (2-3 weeks) testing model accuracy and feasibility with your real-world data.</p>
          </div>

          <div className="bg-ideassion-cream p-8 sharp-border relative z-10 hover:bg-white transition-colors group">
            <span className="text-6xl font-display font-black text-ideassion-navy/5 absolute -top-6 left-4">03</span>
            <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center mb-6 group-hover:bg-ideassion-cyan group-hover:text-ideassion-navy transition-colors">
              <Icon name="code" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-display">Core Engineering</h3>
            <p className="text-sm text-ideassion-navy/60">4-8 weeks of intensive build. We develop the API, fine-tune models, and build the custom UI/UX.</p>
          </div>

          <div className="bg-ideassion-navy p-8 sharp-border relative z-10 text-white">
            <span className="text-6xl font-display font-black text-white/5 absolute -top-6 left-4">04</span>
            <div className="w-12 h-12 bg-ideassion-green text-ideassion-navy flex items-center justify-center mb-6">
              <Icon name="rocket" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 font-display">Scaling & MLOps</h3>
            <p className="text-sm text-gray-400">Post-launch monitoring, feedback loops, and continuous model improvement as more data flows in.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="pricing" className="py-32 bg-ideassion-navy text-white px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="text-ideassion-green font-bold tracking-widest uppercase text-sm mb-4 block">Investment</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold">AI Packages</h2>
          </div>
          <p className="text-gray-400 max-w-sm mt-6 md:mt-0">Transparent, value-based pricing for products that actually move the needle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 border border-white/10 hover:border-ideassion-blue transition-colors flex flex-col">
            <h3 className="text-2xl font-bold font-display mb-2">AI Strategy Pod</h3>
            <div className="text-4xl font-display font-bold text-ideassion-blue mb-6">$15k<span className="text-lg text-gray-500 font-sans">/mo</span></div>
            <p className="text-gray-400 mb-8 flex-grow">Best for companies exploring AI. Includes 1 Lead Architect and weekly strategy sprints.</p>
            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Data Audit & Readiness</li>
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> AI Roadmap Design</li>
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Toolstack Selection</li>
            </ul>
            <button className="btn-outline w-full !border-white !text-white hover:!bg-white hover:!text-ideassion-navy">Get Started</button>
          </div>

          <div className="p-10 border-2 border-ideassion-green relative overflow-hidden flex flex-col scale-105 bg-white/5">
            <div className="absolute top-0 right-0 bg-ideassion-green text-ideassion-navy font-bold text-[10px] uppercase tracking-tighter px-4 py-1">Most Popular</div>
            <h3 className="text-2xl font-bold font-display mb-2">Product Build</h3>
            <div className="text-4xl font-display font-bold text-ideassion-green mb-6">$45k<span className="text-lg text-gray-500 font-sans">/start</span></div>
            <p className="text-gray-400 mb-8 flex-grow">End-to-end production. We build and launch your custom AI product in 8-12 weeks.</p>
            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Custom LLM Integration</li>
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Full Stack Web/App UI</li>
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Performance Tuning</li>
            </ul>
            <button className="btn-primary w-full !bg-ideassion-green !text-ideassion-navy !border-ideassion-green">Book a Kickoff</button>
          </div>

          <div className="p-10 border border-white/10 hover:border-ideassion-cyan transition-colors flex flex-col">
            <h3 className="text-2xl font-bold font-display mb-2">Enterprise Core</h3>
            <div className="text-4xl font-display font-bold text-ideassion-cyan mb-6">Custom<span className="text-lg text-gray-500 font-sans">/yr</span></div>
            <p className="text-gray-400 mb-8 flex-grow">For massive scale. Dedicated engineering team, custom GPU hosting, and private LLMs.</p>
            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Private Local Models</li>
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> 24/7 MLOps Support</li>
              <li className="flex items-center gap-3"><Icon name="check" className="text-ideassion-green w-4 h-4" /> Unlimited User Scaling</li>
            </ul>
            <button className="btn-outline w-full !border-white !text-white hover:!bg-white hover:!text-ideassion-navy">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you handle data privacy?",
      answer: "We prioritize SOC2 compliance standards. For highly sensitive data, we deploy local models on your own AWS/Azure/GCP VPC, ensuring your data never leaves your infrastructure and is never used to train public models."
    },
    {
      question: "Will we own the IP of the AI solution?",
      answer: "Absolutely. Unlike \"SaaS AI\" tools, any custom logic, fine-tuned model weights, or specific RAG architectures we build for you are 100% owned by your company."
    },
    {
      question: "How long does a typical build take?",
      answer: "A production-ready MVP usually takes between 8 to 12 weeks. Simple AI automations can be delivered in as little as 4 weeks."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-ideassion-cream px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-display font-bold text-ideassion-navy mb-16 text-center">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group bg-white p-8 sharp-border cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold font-display text-ideassion-navy">{faq.question}</h4>
                <Icon 
                  name="plus" 
                  className={`w-6 h-6 text-ideassion-blue transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-4 text-ideassion-navy/60 transition-all">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#002529] text-white pt-24 pb-12 border-t border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
              </svg>
              <span className="text-3xl font-bold font-display tracking-tight">IDEASSION</span>
            </div>
            <h3 className="text-2xl font-light text-gray-400 max-w-md leading-relaxed">
              Building the next generation of intelligent digital products for forward-thinking brands.
            </h3>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-wider text-sm">AI Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">LLM Fine-tuning</a></li>
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">Vector Search</a></li>
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">Agentic Apps</a></li>
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">Data Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">LinkedIn</a></li>
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">Twitter / X</a></li>
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">Instagram</a></li>
              <li><a href="#" className="hover:text-ideassion-green transition-colors block py-1">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div>© 2024 Ideassion AI. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: #F1F1DE;
        color: #002F34;
      }
      
      html {
        scroll-behavior: smooth;
      }

      ::selection {
        background-color: #03FF83;
        color: #002F34;
      }

      .sharp-border {
        border: 1px solid #002F34;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .sharp-border:hover {
        box-shadow: 6px 6px 0px 0px #002F34;
        transform: translate(-2px, -2px);
      }

      .sharp-shadow {
        box-shadow: 6px 6px 0px 0px #002F34;
      }

      .btn-primary {
        background-color: #002F34;
        color: #FFFFFF;
        padding: 1rem 2.5rem;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 1px solid #002F34;
        position: relative;
        overflow: hidden;
      }

      .btn-primary:hover {
        background-color: #03FF83;
        color: #002F34;
        box-shadow: 4px 4px 0px 0px #002F34;
        transform: translate(-2px, -2px);
      }

      .btn-outline {
        background-color: transparent;
        color: #002F34;
        padding: 1rem 2.5rem;
        font-weight: 600;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 1px solid #002F34;
      }

      .btn-outline:hover {
        background-color: #002F34;
        color: #FFFFFF;
        box-shadow: 4px 4px 0px 0px #002F34;
        transform: translate(-2px, -2px);
      }

      .nav-link {
        position: relative;
      }
      
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #007EC5;
        transition: width 0.3s ease;
      }
      
      .nav-link:hover::after {
        width: 100%;
      }

      .grid-bg {
        background-image: linear-gradient(#002F34 1px, transparent 1px), linear-gradient(90deg, #002F34 1px, transparent 1px);
        background-size: 40px 40px;
        background-position: center center;
        opacity: 0.03;
      }

      .reveal-up {
        animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
        transform: translateY(40px);
      }

      @keyframes revealUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .timeline-line {
        background: linear-gradient(to bottom, #002F34 0%, #002F34 100%);
        background-size: 2px 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <div className="antialiased overflow-x-hidden selection:bg-ideassion-green selection:text-ideassion-navy">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;