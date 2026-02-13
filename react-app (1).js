import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const customStyles = {
  body: {
    backgroundColor: '#F1F1DE',
    color: '#002F34'
  },
  sharpBorder: {
    border: '1px solid #002F34',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },
  sharpBorderHover: {
    boxShadow: '6px 6px 0px 0px #002F34',
    transform: 'translate(-2px, -2px)'
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
    border: '1px solid #002F34'
  },
  gridBg: {
    backgroundImage: 'linear-gradient(#002F34 1px, transparent 1px), linear-gradient(90deg, #002F34 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    opacity: '0.03'
  }
};

const StarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const ZapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const BarChart3Icon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const ArrowDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SharpBorderBox = ({ children, className = '', hover = true }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        ...customStyles.sharpBorder,
        ...(isHovered && hover ? customStyles.sharpBorderHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#F1F1DE]/90 backdrop-blur-md border-b border-[#002F34]/10 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative text-ideassion-navy">
            <StarIcon className="w-full h-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-ideassion-navy font-display">
            IDEASSION<span className="text-xs align-top ml-0.5">TM</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
          <a href="#work" className="nav-link relative hover:text-ideassion-blue transition-colors">Work</a>
          <a href="#services" className="nav-link relative hover:text-ideassion-blue transition-colors">Services</a>
          <a href="#contact" className="px-6 py-3 bg-ideassion-navy text-white hover:bg-ideassion-blue transition-colors font-semibold sharp-border border-transparent">
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="pt-48 pb-24 bg-ideassion-cream relative overflow-hidden">
      <div className="absolute inset-0" style={customStyles.gridBg}></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-12 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-ideassion-blue reveal-up">
          <span className="px-3 py-1 bg-ideassion-blue/10 rounded-full">Fintech</span>
          <span>•</span>
          <span>AI Native</span>
        </div>
        <h1 className="text-7xl md:text-9xl font-display font-bold text-ideassion-navy leading-[0.9] tracking-tighter mb-12 reveal-up" style={{ animationDelay: '0.1s' }}>
          TRADEFLOW <span className="text-ideassion-blue">AI</span>
        </h1>
        <div className="grid lg:grid-cols-12 gap-12 items-end reveal-up" style={{ animationDelay: '0.2s' }}>
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl text-ideassion-navy/80 font-light leading-relaxed">
              A real-time predictive dashboard that transformed how institutional traders interpret market sentiment and high-frequency data.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-12 border-l border-ideassion-navy/10 pl-12">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-ideassion-navy/40 mb-2">Duration</span>
              <span className="text-xl font-bold font-display">6 Months</span>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-ideassion-navy/40 mb-2">Role</span>
              <span className="text-xl font-bold font-display">End-to-End Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroImage = () => {
  return (
    <section className="px-6 -mt-12">
      <div className="max-w-[1400px] mx-auto">
        <SharpBorderBox className="w-full aspect-[21/9] bg-ideassion-navy overflow-hidden reveal-up" style={{ animationDelay: '0.3s' }} hover={false}>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-90" 
            alt="TradeFlow UI"
          />
        </SharpBorderBox>
      </div>
    </section>
  );
};

const Overview = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ideassion-blue mb-6">The Client</h3>
              <p className="text-lg text-ideassion-navy/70 leading-relaxed">
                Quantum Capital Group, a leading institutional trading firm managing over $4B in assets, struggling with data fragmentation and latent sentiment analysis.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-ideassion-blue mb-6">The Challenge</h3>
              <p className="text-lg text-ideassion-navy/70 leading-relaxed">
                Traders were using five separate tools to monitor price action, social sentiment, and news cycles. This fragmentation led to an average decision delay of 12 seconds—a lifetime in high-frequency environments.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-ideassion-blue mb-6">The Solution</h3>
            <p className="text-4xl md:text-5xl font-display font-bold text-ideassion-navy leading-tight mb-12">
              We built a unified intelligence layer that aggregates 10M+ data points daily, delivering predictive signals with <span className="text-ideassion-green">89% accuracy</span>.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 border border-ideassion-navy/10 bg-white shadow-sm">
                <ZapIcon className="w-8 h-8 text-ideassion-cyan mb-4" />
                <h4 className="font-bold mb-2">Real-time LLM Synthesis</h4>
                <p className="text-sm text-ideassion-navy/60">Summarizing global financial news and X (Twitter) feeds into actionable sentiment scores every 100ms.</p>
              </div>
              <div className="p-8 border border-ideassion-navy/10 bg-white shadow-sm">
                <BarChart3Icon className="w-8 h-8 text-ideassion-blue mb-4" />
                <h4 className="font-bold mb-2">Predictive Visualizations</h4>
                <p className="text-sm text-ideassion-navy/60">Using custom D3.js components to visualize "Trade Corridors"—likely price movement zones based on historical patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnicalArchitecture = () => {
  return (
    <section className="py-32 bg-ideassion-navy text-white relative">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
          Technical <span className="text-ideassion-cyan">Architecture</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 border border-white/20 flex items-center justify-center font-display font-bold text-xl text-ideassion-green">01</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Data Ingestion Layer</h4>
                <p className="text-gray-400">High-throughput WebSocket connections to Binance, NYSE, and Bloomberg terminals coupled with custom scrapers for social sentiment.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 border border-white/20 flex items-center justify-center font-display font-bold text-xl text-ideassion-cyan">02</div>
              <div>
                <h4 className="text-xl font-bold mb-2">AI Inference Engine</h4>
                <p className="text-gray-400">Deployed on NVIDIA A100s via AWS SageMaker, running custom-trained BERT models for financial sentiment and LSTM networks for price prediction.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 border border-white/20 flex items-center justify-center font-display font-bold text-xl text-ideassion-blue">03</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Reactive UI</h4>
                <p className="text-gray-400">React + Vite with a custom Canvas-based rendering engine to ensure 60FPS performance even with 10,000+ moving data points.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-12 border border-white/10 backdrop-blur-sm" style={customStyles.sharpBorder}>
            <div className="aspect-square flex flex-col gap-4">
              <div className="flex justify-center">
                <div className="px-6 py-3 border border-ideassion-green text-ideassion-green rounded font-mono text-xs uppercase">External Sources</div>
              </div>
              <div className="flex justify-center">
                <ArrowDownIcon className="text-white/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-white/10 bg-white/5 text-center font-mono text-[10px]">KAFKA STREAM</div>
                <div className="p-4 border border-white/10 bg-white/5 text-center font-mono text-[10px]">VECTOR DB</div>
              </div>
              <div className="flex justify-center">
                <ArrowDownIcon className="text-white/20" />
              </div>
              <div className="p-6 bg-ideassion-blue/20 border border-ideassion-blue text-center">
                <span className="block font-bold">SENTIMENT CORE</span>
                <span className="text-[10px] text-gray-400">Python / PyTorch / Transformers</span>
              </div>
              <div className="flex justify-center">
                <ArrowDownIcon className="text-white/20" />
              </div>
              <div className="flex justify-center">
                <div className="px-8 py-4 bg-white text-ideassion-navy font-bold rounded shadow-lg">TRADEFLOW DASHBOARD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ideassion-blue mb-4">Impact Metrics</h3>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ideassion-navy">The Bottom Line</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <SharpBorderBox className="text-center p-12 bg-white">
            <span className="block text-7xl font-display font-bold text-ideassion-blue mb-4">-92%</span>
            <span className="text-sm font-bold uppercase tracking-wider text-ideassion-navy/40">Latency in Analysis</span>
            <p className="mt-4 text-ideassion-navy/70 text-sm">From minutes to milliseconds for full sentiment synthesis.</p>
          </SharpBorderBox>
          <SharpBorderBox className="text-center p-12 bg-white">
            <span className="block text-7xl font-display font-bold text-ideassion-green mb-4">+14%</span>
            <span className="text-sm font-bold uppercase tracking-wider text-ideassion-navy/40">Trade Success Rate</span>
            <p className="mt-4 text-ideassion-navy/70 text-sm">Traders reported higher confidence in entry points.</p>
          </SharpBorderBox>
          <SharpBorderBox className="text-center p-12 bg-white">
            <span className="block text-7xl font-display font-bold text-ideassion-cyan mb-4">420ms</span>
            <span className="text-sm font-bold uppercase tracking-wider text-ideassion-navy/40">Signal Dispatch Time</span>
            <p className="mt-4 text-ideassion-navy/70 text-sm">Industry-leading speed from insight to visual alert.</p>
          </SharpBorderBox>
        </div>
      </div>
    </section>
  );
};

const InterfaceShowcase = () => {
  return (
    <section className="py-32 bg-ideassion-cream border-t border-ideassion-navy/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Interface <span className="text-ideassion-blue">Showcase</span>
        </h2>
      </div>
      
      <div className="space-y-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center px-6 max-w-[1400px] mx-auto">
          <div className="lg:col-span-8">
            <SharpBorderBox className="overflow-hidden bg-white shadow-2xl" hover={false}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" 
                className="w-full" 
                alt="Main Dashboard View"
              />
            </SharpBorderBox>
          </div>
          <div className="lg:col-span-4">
            <span className="text-ideassion-blue font-bold text-xs uppercase mb-2 block">View 01</span>
            <h3 className="text-2xl font-bold font-display mb-4">Unified Command Center</h3>
            <p className="text-ideassion-navy/70 leading-relaxed">The main view aggregates candlestick patterns, order book depth, and real-time sentiment bubbles into a single cohesive interface.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center px-6 max-w-[1400px] mx-auto">
          <div className="lg:col-span-4 lg:order-1 order-2">
            <span className="text-ideassion-green font-bold text-xs uppercase mb-2 block">View 02</span>
            <h3 className="text-2xl font-bold font-display mb-4">Sentiment Heatmaps</h3>
            <p className="text-ideassion-navy/70 leading-relaxed">A geographical and temporal breakdown of market sentiment, allowing traders to see where global momentum is shifting before it hits the price charts.</p>
          </div>
          <div className="lg:col-span-8 lg:order-2 order-1">
            <SharpBorderBox className="overflow-hidden bg-white shadow-2xl" hover={false}>
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" 
                className="w-full" 
                alt="Sentiment Visualization"
              />
            </SharpBorderBox>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center px-6 max-w-[1400px] mx-auto">
          <div className="lg:col-span-8">
            <SharpBorderBox className="overflow-hidden bg-white shadow-2xl" hover={false}>
              <img 
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop" 
                className="w-full" 
                alt="Mobile Companion App"
              />
            </SharpBorderBox>
          </div>
          <div className="lg:col-span-4">
            <span className="text-ideassion-cyan font-bold text-xs uppercase mb-2 block">View 03</span>
            <h3 className="text-2xl font-bold font-display mb-4">Mobile Critical Alerts</h3>
            <p className="text-ideassion-navy/70 leading-relaxed">A specialized mobile view for executive oversight, featuring AI-generated summaries of market movements and risk alerts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-ideassion-navy text-white pt-24 pb-12 border-t border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-white/5 pb-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Next Case Study</h3>
            <button 
              onClick={() => navigate('/')}
              className="text-ideassion-green text-2xl font-display flex items-center group cursor-pointer bg-transparent border-none"
            >
              MediSync Platform 
              <ArrowRightIcon className="ml-4 w-8 h-8 group-hover:translate-x-4 transition-transform" />
            </button>
          </div>
          <a 
            href="#contact" 
            className="btn-primary mt-12 md:mt-0 !bg-white !text-ideassion-navy !border-white hover:!bg-ideassion-green"
            style={{
              ...customStyles.btnPrimary,
              backgroundColor: 'white',
              color: '#002F34',
              borderColor: 'white'
            }}
          >
            Work with us
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-6 h-6 text-white opacity-50">
              <StarIcon className="w-full h-full" />
            </div>
            <span>© 2024 Ideassion AI. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CaseStudyPage = () => {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-ideassion-green selection:text-ideassion-navy" style={customStyles.body}>
      <Navigation />
      <Header />
      <HeroImage />
      <Overview />
      <TechnicalArchitecture />
      <ImpactMetrics />
      <InterfaceShowcase />
      <Footer />
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      
      :root {
        --ideassion-navy: #002F34;
        --ideassion-cream: #F1F1DE;
        --ideassion-blue: #007EC5;
        --ideassion-cyan: #00DAFF;
        --ideassion-green: #03FF83;
      }
      
      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      
      .font-display {
        font-family: 'Space Grotesk', sans-serif;
      }
      
      html {
        scroll-behavior: smooth;
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
      
      .reveal-up {
        animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
        transform: translateY(40px);
      }
      
      @keyframes revealUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .bg-ideassion-navy { background-color: var(--ideassion-navy); }
      .bg-ideassion-cream { background-color: var(--ideassion-cream); }
      .bg-ideassion-blue { background-color: var(--ideassion-blue); }
      .bg-ideassion-cyan { background-color: var(--ideassion-cyan); }
      .bg-ideassion-green { background-color: var(--ideassion-green); }
      
      .text-ideassion-navy { color: var(--ideassion-navy); }
      .text-ideassion-cream { color: var(--ideassion-cream); }
      .text-ideassion-blue { color: var(--ideassion-blue); }
      .text-ideassion-cyan { color: var(--ideassion-cyan); }
      .text-ideassion-green { color: var(--ideassion-green); }
      
      .border-ideassion-navy { border-color: var(--ideassion-navy); }
      .border-ideassion-blue { border-color: var(--ideassion-blue); }
      .border-ideassion-green { border-color: var(--ideassion-green); }
      
      .hover\\:bg-ideassion-blue:hover { background-color: var(--ideassion-blue); }
      .hover\\:bg-ideassion-green:hover { background-color: var(--ideassion-green); }
      .hover\\:text-ideassion-blue:hover { color: var(--ideassion-blue); }
      .hover\\:text-ideassion-navy:hover { color: var(--ideassion-navy); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
};

export default App;