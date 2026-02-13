import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const customStyles = {
  gridBg: {
    backgroundImage: 'linear-gradient(#002F34 1px, transparent 1px), linear-gradient(90deg, #002F34 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    backgroundPosition: 'center center',
    opacity: 0.03,
  },
  brandGradient: {
    background: 'linear-gradient(135deg, #03FF83 0%, #00DAFF 50%, #007EC5 100%)',
  },
};

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyle = variant === 'primary' 
    ? 'bg-ideassion-navy text-white hover:bg-ideassion-green hover:text-ideassion-navy'
    : 'bg-transparent text-ideassion-navy hover:bg-ideassion-navy hover:text-white';
  
  return (
    <button
      onClick={onClick}
      className={`px-10 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:shadow-[4px_4px_0px_0px_#002F34] hover:-translate-x-0.5 hover:-translate-y-0.5 ${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const NavLink = ({ to, children, className = '' }) => {
  return (
    <a
      href={to}
      className={`relative nav-link hover:text-ideassion-blue transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#F1F1DE]/90 backdrop-blur-md border-b border-[#002F34]/10 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative text-ideassion-navy">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-ideassion-navy font-display">
            IDEASSION<span className="text-xs align-top ml-0.5">TM</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
          <NavLink to="#work">Work</NavLink>
          <NavLink to="#services">Services</NavLink>
          <NavLink to="#about">About</NavLink>
          <a
            href="#contact"
            className="px-6 py-3 bg-ideassion-navy text-white hover:bg-ideassion-blue transition-colors font-semibold border border-ideassion-navy"
          >
            Start a Project
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-8 h-8 text-ideassion-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <header className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-ideassion-cream overflow-hidden px-4">
      <div className="absolute inset-0 pointer-events-none" style={customStyles.gridBg}></div>
      
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-ideassion-green/10 rounded-full blur-[80px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-ideassion-blue/10 rounded-full blur-[80px] pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-ideassion-navy/20 rounded-full bg-white/40 backdrop-blur-sm mb-12 reveal-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 bg-ideassion-green rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-ideassion-navy">AI-Native Agency</span>
        </div>

        <h1 className="text-[10vw] sm:text-[11vw] leading-[0.8] font-display font-bold text-ideassion-navy tracking-tighter mb-12 reveal-up" style={{ animationDelay: '0.2s' }}>
          CRAFTING<br />
          <span className="relative inline-block px-4">
            <span className="absolute inset-0 bg-ideassion-navy transform -rotate-2 scale-105 origin-center"></span>
            <span className="relative text-ideassion-green">DIGITAL</span>
          </span><br />
          PRODUCTS.
        </h1>

        <p className="text-xl md:text-2xl text-ideassion-navy/70 max-w-2xl mx-auto leading-relaxed font-light mb-16 reveal-up" style={{ animationDelay: '0.3s' }}>
          We partner with ambitious brands to design, engineer, and scale custom software solutions powered by artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 reveal-up" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="bg-ideassion-navy text-white px-10 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:bg-ideassion-green hover:text-ideassion-navy hover:shadow-[4px_4px_0px_0px_#002F34] hover:-translate-x-0.5 hover:-translate-y-0.5 w-full sm:w-auto text-lg">
            Book a Call
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </a>
          <a href="#work" className="bg-transparent text-ideassion-navy px-10 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:bg-ideassion-navy hover:text-white hover:shadow-[4px_4px_0px_0px_#002F34] hover:-translate-x-0.5 hover:-translate-y-0.5 w-full sm:w-auto text-lg">
            View Our Work
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="7" y1="7" x2="17" y2="17"></line>
              <polyline points="17 7 17 17 7 17"></polyline>
            </svg>
          </a>
        </div>

        <div className="w-full relative aspect-video md:aspect-[21/9] bg-ideassion-navy border border-ideassion-navy shadow-[6px_6px_0px_0px_#002F34] overflow-hidden group cursor-pointer reveal-up" style={{ animationDelay: '0.5s' }} onClick={() => setShowVideo(true)}>
          <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-700" style={customStyles.brandGradient}></div>
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" alt="Agency Reel" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md hover:scale-110 hover:bg-ideassion-green hover:border-ideassion-green hover:text-ideassion-navy text-white transition-all duration-300 z-20">
            <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>

          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-left z-10 w-full bg-gradient-to-t from-ideassion-navy/80 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-ideassion-green font-mono text-sm mb-2 block">LATEST RELEASE</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">2024 Agency Reel</h3>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-white/60 font-mono text-sm block">DURATION</span>
                <span className="text-white font-bold font-display text-xl">01:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const MarqueeSection = () => {
  return (
    <div className="w-full border-y border-ideassion-navy/10 bg-white py-8 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex gap-16 items-center px-8 text-xl font-bold text-ideassion-navy uppercase tracking-widest font-display">
          <span>Product Strategy</span><span className="text-ideassion-green text-2xl">•</span>
          <span>UX/UI Design</span><span className="text-ideassion-blue text-2xl">•</span>
          <span>Web Development</span><span className="text-ideassion-cyan text-2xl">•</span>
          <span>Mobile Apps</span><span className="text-ideassion-green text-2xl">•</span>
          <span>AI Engineering</span><span className="text-ideassion-blue text-2xl">•</span>
          <span>Growth</span><span className="text-ideassion-cyan text-2xl">•</span>
        </div>
        <div className="flex gap-16 items-center px-8 text-xl font-bold text-ideassion-navy uppercase tracking-widest font-display">
          <span>Product Strategy</span><span className="text-ideassion-green text-2xl">•</span>
          <span>UX/UI Design</span><span className="text-ideassion-blue text-2xl">•</span>
          <span>Web Development</span><span className="text-ideassion-cyan text-2xl">•</span>
          <span>Mobile Apps</span><span className="text-ideassion-green text-2xl">•</span>
          <span>AI Engineering</span><span className="text-ideassion-blue text-2xl">•</span>
          <span>Growth</span><span className="text-ideassion-cyan text-2xl">•</span>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-32 px-6 max-w-[1400px] mx-auto" id="about">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-ideassion-navy leading-tight">
            We bridge the gap between human creativity and <span className="text-ideassion-blue">machine intelligence</span>.
          </h2>
        </div>
        <div className="lg:col-span-5 space-y-8 text-lg text-ideassion-navy/70 leading-relaxed">
          <p>
            The digital landscape is evolving faster than ever. To stay ahead, you need more than just a website—you need an intelligent ecosystem.
          </p>
          <p>
            We are an <strong className="text-ideassion-navy">AI-Native</strong> agency. This means we don't just sprinkle AI on top of existing solutions; we architect products with intelligence at their core. From generative interfaces to predictive analytics, we build software that adapts, learns, and scales with your business.
          </p>
          <div className="pt-4">
            <a href="#services" className="inline-flex items-center font-bold text-ideassion-navy border-b-2 border-ideassion-green hover:border-ideassion-blue transition-colors pb-1 group">
              Discover our approach 
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      title: 'Product Strategy',
      description: 'We define the roadmap, validate market fit, and architect scalable solutions that align with business goals.',
      items: ['Market Research', 'MVP Planning', 'User Journey Mapping'],
      color: 'blue',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: 'Design & UX',
      description: 'Human-centric design that converts. We create intuitive interfaces that users love to interact with.',
      items: ['UI/UX Design', 'Design Systems', 'Interaction Design'],
      color: 'green',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: 'Engineering',
      description: 'Clean, scalable code built on modern stacks. We engineer robust applications for web and mobile.',
      items: ['Full Stack Web', 'Mobile Development', 'API Integration'],
      color: 'cyan',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      title: 'AI Solutions',
      description: 'Custom AI models and integration. We make your software smarter, more efficient, and autonomous.',
      items: ['LLM Integration', 'Automation Agents', 'Vector Databases'],
      color: 'purple',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: 'Growth & Scale',
      description: 'Data-driven optimization. We ensure your product continues to perform and grow after launch.',
      items: ['Performance Tuning', 'Analytics', 'Conversion Optimization'],
      color: 'orange',
    },
  ];

  const colorMap = {
    blue: { bg: 'bg-ideassion-blue/20', text: 'text-ideassion-blue', bullet: 'bg-ideassion-blue' },
    green: { bg: 'bg-ideassion-green/20', text: 'text-ideassion-green', bullet: 'bg-ideassion-green' },
    cyan: { bg: 'bg-ideassion-cyan/20', text: 'text-ideassion-cyan', bullet: 'bg-ideassion-cyan' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', bullet: 'bg-purple-400' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', bullet: 'bg-orange-400' },
  };

  return (
    <section className="py-32 bg-ideassion-navy text-white relative overflow-hidden" id="services">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="text-ideassion-green font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold">Capabilities</h2>
          </div>
          <div className="mt-8 md:mt-0 text-right">
            <p className="text-gray-400 max-w-md">
              Comprehensive digital product services from ideation to scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={index}
                className="bg-ideassion-navy p-12 hover:bg-white/5 transition-colors duration-300 group border-b md:border-b-0 border-white/10"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text} mb-8 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`w-1.5 h-1.5 ${colors.bullet} rounded-full mr-3`}></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="p-12 flex flex-col justify-between relative overflow-hidden group lg:border-l border-white/10 lg:border-t-0" style={customStyles.brandGradient}>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-display text-ideassion-navy">Have a vision?</h3>
              <p className="text-ideassion-navy/80 mb-8 font-medium leading-relaxed">
                Let's discuss how we can bring your ideas to life with our expertise.
              </p>
            </div>
            <a href="#contact" className="relative z-10 inline-flex items-center justify-center w-full py-4 bg-ideassion-navy text-white font-bold hover:bg-white hover:text-ideassion-navy transition-all border border-ideassion-navy">
              Book Strategy Call
            </a>
            
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const projects = [
    {
      title: 'TradeFlow AI',
      description: 'A high-frequency trading dashboard featuring real-time predictive analytics and sentiment analysis visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      tags: ['React', 'Python', 'D3.js'],
      category: 'Fintech',
      alignment: 'left',
    },
    {
      title: 'MediSync Platform',
      description: 'AI-Native patient management system automating clinical notes processing and improving diagnostic workflows.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
      tags: ['Next.js', 'NLP', 'AWS'],
      category: 'Healthtech',
      alignment: 'right',
    },
    {
      title: 'Luxe Retail',
      description: 'Generative shopping assistant implementation that increased conversion rates by 24% through personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop',
      tags: ['Shopify Plus', 'OpenAI API', 'React'],
      category: 'Ecommerce',
      alignment: 'left',
    },
  ];

  return (
    <section className="py-32 bg-ideassion-cream" id="work">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-ideassion-blue font-bold tracking-widest uppercase text-sm mb-4 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-ideassion-navy">
              Selected<br />Work
            </h2>
          </div>
          <div className="mb-2">
            <a href="#" className="bg-transparent text-ideassion-navy px-10 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:bg-ideassion-navy hover:text-white hover:shadow-[4px_4px_0px_0px_#002F34] hover:-translate-x-0.5 hover:-translate-y-0.5 group">
              View All Projects 
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-8 ${project.alignment === 'right' ? 'lg:order-2' : ''} relative`}>
                  <div className="w-full aspect-[16/10] bg-ideassion-navy border border-ideassion-navy shadow-[6px_6px_0px_0px_#002F34] overflow-hidden relative cursor-pointer">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-ideassion-navy/20 group-hover:opacity-0 transition-opacity"></div>
                    <div className={`absolute top-6 ${project.alignment === 'left' ? 'right-6' : 'left-6'} bg-white px-4 py-2 font-bold text-xs uppercase tracking-widest text-ideassion-navy z-10 border border-ideassion-navy`}>
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-4 ${project.alignment === 'right' ? 'lg:order-1 order-2 lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`flex flex-col h-full justify-center ${project.alignment === 'right' ? 'text-left lg:text-right lg:items-end' : ''}`}>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-ideassion-navy mb-6">{project.title}</h3>
                    <p className="text-ideassion-navy/70 text-lg mb-8 leading-relaxed">{project.description}</p>
                    <div className={`flex flex-wrap ${project.alignment === 'right' ? 'lg:justify-end' : ''} gap-2 mb-10`}>
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 border border-ideassion-navy/20 rounded-full text-xs font-bold text-ideassion-navy">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#" className={`inline-flex items-center font-bold text-ideassion-navy hover:text-ideassion-blue transition-colors ${project.alignment === 'left' ? 'group-hover:translate-x-2' : 'group-hover:-translate-x-2'} duration-300`}>
                      {project.alignment === 'right' && (
                        <svg className="mr-2 w-5 h-5 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      )}
                      View Case Study 
                      {project.alignment === 'left' && (
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const clients = ['VERTEX', 'NOVASPHERE', 'BLUECHIP', 'SYNTHWAVE', 'ALPHATECH'];

  return (
    <section className="py-24 border-t border-ideassion-navy/10 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center mb-16">
        <span className="text-ideassion-navy/50 font-bold uppercase tracking-widest text-sm">Trusted by Industry Leaders</span>
      </div>
      
      <div className="flex justify-between max-w-[1200px] mx-auto px-6 flex-wrap gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {clients.map((client, index) => (
          <div key={index} className="text-2xl font-display font-bold text-ideassion-navy">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-32 bg-ideassion-navy border-t border-white/10 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <div className="mb-10 text-ideassion-green">
          <svg className="w-12 h-12 mx-auto fill-current opacity-50" viewBox="0 0 24 24">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        <blockquote className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-12">
          "Ideassion didn't just build our platform; they reimagined our entire business model. The result was a product years ahead of the market."
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-600 mb-4 overflow-hidden border-2 border-ideassion-blue">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Alex V." />
          </div>
          <cite className="text-white font-bold not-italic text-lg">Alex V.</cite>
          <span className="text-ideassion-cyan text-sm uppercase tracking-widest mt-1">CTO, Vertex Logistics</span>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ideassion-blue/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl font-display font-bold text-ideassion-navy mb-8 tracking-tighter">
          READY TO SCALE?
        </h2>
        <p className="text-xl md:text-2xl text-ideassion-navy/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          We take on a limited number of partners to ensure focus. Let's see if we're a match for your next big move.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#" className="bg-ideassion-navy text-white px-12 py-5 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:bg-ideassion-green hover:text-ideassion-navy hover:shadow-[4px_4px_0px_0px_#002F34] hover:-translate-x-0.5 hover:-translate-y-0.5 text-xl shadow-xl shadow-ideassion-navy/20">
            Schedule Consultation
          </a>
          <a href="mailto:hello@ideassion.com" className="bg-transparent text-ideassion-navy px-12 py-5 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:bg-ideassion-navy hover:text-white hover:shadow-[4px_4px_0px_0px_#002F34] hover:-translate-x-0.5 hover:-translate-y-0.5 text-xl">
            hello@ideassion.com
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#002529] text-white pt-24 pb-12 border-t border-white/5 relative">
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
            <h4 className="font-bold text-white mb-8 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#work" className="hover:text-ideassion-green transition-colors block py-1">Work</a></li>
              <li><a href="#services" className="hover:text-ideassion-green transition-colors block py-1">Services</a></li>
              <li><a href="#about" className="hover:text-ideassion-green transition-colors block py-1">About</a></li>
              <li><a href="#contact" className="hover:text-ideassion-green transition-colors block py-1">Contact</a></li>
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
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ClientsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      
      body {
        background-color: #F1F1DE;
        color: #002F34;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      
      html {
        scroll-behavior: smooth;
      }

      ::selection {
        background-color: #03FF83;
        color: #002F34;
      }

      .font-display {
        font-family: 'Space Grotesk', sans-serif;
      }

      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }

      .animate-marquee {
        animation: marquee 30s linear infinite;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <div className="antialiased overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;