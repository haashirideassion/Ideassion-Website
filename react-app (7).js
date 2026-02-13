import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
  body: {
    backgroundColor: '#F1F1DE',
    color: '#002F34'
  },
  gridBg: {
    backgroundImage: 'linear-gradient(#002F34 1px, transparent 1px), linear-gradient(90deg, #002F34 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    backgroundPosition: 'center center',
    opacity: 0.03
  }
};

const Header = () => (
  <nav className="fixed w-full z-50 bg-[#F1F1DE]/90 backdrop-blur-md border-b border-[#002F34]/10">
    <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 relative text-ideassion-navy">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-ideassion-navy font-display">
          IDEASSION<span className="text-xs align-top ml-0.5">TM</span>
        </span>
      </Link>
      
      <Link to="/" className="text-sm font-bold uppercase tracking-widest text-ideassion-navy hover:text-ideassion-blue flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        Back to Home
      </Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-[#002529] text-white pt-24 pb-12 border-t border-white/5 relative">
    <div className="max-w-[1600px] mx-auto px-6">
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

const OptionCard = ({ icon, title, description, selected, onClick }) => (
  <button 
    onClick={onClick}
    className={`option-card p-6 text-left hover:bg-ideassion-navy/5 ${selected ? 'selected' : ''}`}
    style={{
      border: '1px solid rgba(0, 47, 52, 0.1)',
      transition: 'all 0.2s ease',
      backgroundColor: selected ? '#002F34' : 'transparent',
      color: selected ? 'white' : 'inherit'
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 mb-4 ${selected ? 'text-ideassion-green' : ''}`}>
      {icon}
    </svg>
    <span className="block font-bold text-lg">{title}</span>
    <span className="text-sm opacity-60">{description}</span>
  </button>
);

const CalendarDay = ({ day, disabled, selected, onClick }) => (
  <div 
    onClick={!disabled ? onClick : undefined}
    className={`calendar-day ${disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}`}
    style={{
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(0, 47, 52, 0.05)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s',
      backgroundColor: selected ? '#002F34' : 'transparent',
      color: selected ? 'white' : 'inherit',
      opacity: disabled ? 0.2 : 1
    }}
  >
    {day}
  </div>
);

const ProjectBuilderPage = () => {
  const [selectedProject, setSelectedProject] = useState('AI Integration');
  const [budgetValue, setBudgetValue] = useState(35000);
  const [timeline, setTimeline] = useState('1-3 Months');
  const [selectedDay, setSelectedDay] = useState(10);
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [projectBrief, setProjectBrief] = useState('');

  const projectTypes = [
    { id: 'product', icon: <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>, title: 'Product Strategy', description: 'Roadmaps, MVP definition' },
    { id: 'ai', icon: <><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></>, title: 'AI Integration', description: 'LLMs, Agents, Automation' },
    { id: 'webapp', icon: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></>, title: 'Web/Mobile App', description: 'Full stack development' },
    { id: 'design', icon: <><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></>, title: 'UX/UI Design', description: 'Interface & Experience' },
    { id: 'maintenance', icon: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></>, title: 'Maintenance', description: 'Ongoing scale & support' },
    { id: 'custom', icon: <><path d="M12 5v14"/><path d="M5 12h14"/><circle cx="12" cy="12" r="10"/></>, title: 'Custom Mix', description: 'A bit of everything' }
  ];

  const timelineOptions = ['< 1 Month', '1-3 Months', '3-6 Months', '6+ Months'];
  const availableTimes = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const formatBudget = (value) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  const getBudgetRange = (value) => {
    if (value < 20000) return `$${formatBudget(10000)} — $${formatBudget(20000)}`;
    if (value < 40000) return `$${formatBudget(20000)} — $${formatBudget(40000)}`;
    if (value < 75000) return `$${formatBudget(40000)} — $${formatBudget(75000)}`;
    if (value < 125000) return `$${formatBudget(75000)} — $${formatBudget(125000)}`;
    return `$${formatBudget(125000)}+`;
  };

  return (
    <main className="min-h-screen pt-40 pb-20 px-4 relative overflow-hidden bg-ideassion-cream">
      <div className="absolute inset-0 pointer-events-none" style={customStyles.gridBg}></div>
      
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-ideassion-blue font-bold tracking-widest uppercase text-xs mb-4 block">Project Builder</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-ideassion-navy tracking-tight mb-6">
            Let's Build Something <span className="italic">Legendary</span>.
          </h1>
          <p className="text-xl text-ideassion-navy/60 max-w-xl">
            Fill out the brief below and we'll get back to you with a strategy proposal within 24 hours.
          </p>
        </div>

        <div className="wizard-card p-8 md:p-12 mb-12" style={{ background: 'white', border: '1px solid #002F34', boxShadow: '12px 12px 0px 0px #002F34' }}>
          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar border-b border-ideassion-navy/5">
            <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-ideassion-navy/10">
              <span className="w-8 h-8 rounded-full border-2 border-ideassion-navy flex items-center justify-center font-bold text-sm">1</span>
              <span className="font-bold text-sm uppercase tracking-wider">Project</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-ideassion-navy/10 opacity-30">
              <span className="w-8 h-8 rounded-full border-2 border-ideassion-navy flex items-center justify-center font-bold text-sm">2</span>
              <span className="font-bold text-sm uppercase tracking-wider">Budget & Time</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-ideassion-navy/10 opacity-30">
              <span className="w-8 h-8 rounded-full border-2 border-ideassion-navy flex items-center justify-center font-bold text-sm">3</span>
              <span className="font-bold text-sm uppercase tracking-wider">Details</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 opacity-30">
              <span className="w-8 h-8 rounded-full border-2 border-ideassion-navy flex items-center justify-center font-bold text-sm">4</span>
              <span className="font-bold text-sm uppercase tracking-wider">Booking</span>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">What are we building?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((project) => (
                  <OptionCard
                    key={project.id}
                    icon={project.icon}
                    title={project.title}
                    description={project.description}
                    selected={selectedProject === project.title}
                    onClick={() => setSelectedProject(project.title)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-display font-bold">Investment Range</h2>
                <span className="text-2xl font-display font-bold text-ideassion-blue">{getBudgetRange(budgetValue)}</span>
              </div>
              <div className="relative pt-4 px-2">
                <input 
                  type="range" 
                  min="10000" 
                  max="250000" 
                  step="5000" 
                  value={budgetValue}
                  onChange={(e) => setBudgetValue(parseInt(e.target.value))}
                  className="w-full"
                  style={{
                    WebkitAppearance: 'none',
                    background: 'transparent'
                  }}
                />
                <div className="flex justify-between mt-4 text-xs font-bold uppercase tracking-widest text-ideassion-navy/40">
                  <span>$10k</span>
                  <span>$50k</span>
                  <span>$100k</span>
                  <span>$150k</span>
                  <span>$200k+</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Expected Launch</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timelineOptions.map((option) => (
                  <label key={option} className="relative cursor-pointer">
                    <input 
                      type="radio" 
                      name="timeline" 
                      className="peer absolute opacity-0"
                      checked={timeline === option}
                      onChange={() => setTimeline(option)}
                    />
                    <div className="p-4 border border-ideassion-navy/10 text-center peer-checked:bg-ideassion-navy peer-checked:text-white cursor-pointer transition-all">
                      <span className="block text-sm font-bold uppercase">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Project Brief</h2>
              <div className="space-y-4">
                <textarea 
                  rows="5" 
                  className="w-full bg-ideassion-cream/30 border border-ideassion-navy/20 p-6 focus:outline-none focus:border-ideassion-blue resize-none font-sans" 
                  placeholder="Describe your vision, current challenges, and desired outcomes..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                />
                
                <div className="border-2 border-dashed border-ideassion-navy/10 p-8 text-center hover:border-ideassion-blue transition-colors cursor-pointer group">
                  <input type="file" className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-4 text-ideassion-navy/40 group-hover:text-ideassion-blue transition-colors">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                      <path d="M12 12v9"/>
                      <path d="m16 16-4-4-4 4"/>
                    </svg>
                    <p className="font-bold text-ideassion-navy mb-1">Upload briefs or reference decks</p>
                    <p className="text-xs text-ideassion-navy/40 uppercase tracking-widest">PDF, FIGMA, PPTX (MAX 25MB)</p>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Pick a Consultation Slot</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-ideassion-navy text-white p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold">October 2024</h3>
                    <div className="flex gap-4">
                      <button className="hover:text-ideassion-green">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m15 18-6-6 6-6"/>
                        </svg>
                      </button>
                      <button className="hover:text-ideassion-green">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-px mb-2 text-center text-[10px] font-bold uppercase text-white/40">
                    <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    <CalendarDay day="1" disabled />
                    <CalendarDay day="2" disabled />
                    <CalendarDay day="3" onClick={() => setSelectedDay(3)} selected={selectedDay === 3} />
                    <CalendarDay day="4" onClick={() => setSelectedDay(4)} selected={selectedDay === 4} />
                    <CalendarDay day="5" onClick={() => setSelectedDay(5)} selected={selectedDay === 5} />
                    <CalendarDay day="6" onClick={() => setSelectedDay(6)} selected={selectedDay === 6} />
                    <CalendarDay day="7" onClick={() => setSelectedDay(7)} selected={selectedDay === 7} />
                    <CalendarDay day="8" onClick={() => setSelectedDay(8)} selected={selectedDay === 8} />
                    <CalendarDay day="9" onClick={() => setSelectedDay(9)} selected={selectedDay === 9} />
                    <CalendarDay day="10" onClick={() => setSelectedDay(10)} selected={selectedDay === 10} />
                    <CalendarDay day="11" onClick={() => setSelectedDay(11)} selected={selectedDay === 11} />
                    <CalendarDay day="12" onClick={() => setSelectedDay(12)} selected={selectedDay === 12} />
                    <CalendarDay day="13" onClick={() => setSelectedDay(13)} selected={selectedDay === 13} />
                    <CalendarDay day="14" onClick={() => setSelectedDay(14)} selected={selectedDay === 14} />
                    <CalendarDay day="15" onClick={() => setSelectedDay(15)} selected={selectedDay === 15} />
                    <CalendarDay day="16" onClick={() => setSelectedDay(16)} selected={selectedDay === 16} />
                    <CalendarDay day="17" onClick={() => setSelectedDay(17)} selected={selectedDay === 17} />
                    <CalendarDay day="18" onClick={() => setSelectedDay(18)} selected={selectedDay === 18} />
                    <CalendarDay day="19" onClick={() => setSelectedDay(19)} selected={selectedDay === 19} />
                    <CalendarDay day="20" onClick={() => setSelectedDay(20)} selected={selectedDay === 20} />
                    <CalendarDay day="21" onClick={() => setSelectedDay(21)} selected={selectedDay === 21} />
                    <CalendarDay day="22" onClick={() => setSelectedDay(22)} selected={selectedDay === 22} />
                    <CalendarDay day="23" onClick={() => setSelectedDay(23)} selected={selectedDay === 23} />
                    <CalendarDay day="24" onClick={() => setSelectedDay(24)} selected={selectedDay === 24} />
                    <CalendarDay day="25" onClick={() => setSelectedDay(25)} selected={selectedDay === 25} />
                    <CalendarDay day="26" onClick={() => setSelectedDay(26)} selected={selectedDay === 26} />
                    <CalendarDay day="27" onClick={() => setSelectedDay(27)} selected={selectedDay === 27} />
                    <CalendarDay day="28" onClick={() => setSelectedDay(28)} selected={selectedDay === 28} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-ideassion-navy mb-4">Available Times (GMT+0)</h3>
                  {availableTimes.map((time) => (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full py-3 font-bold text-sm ${
                        selectedTime === time 
                          ? 'bg-ideassion-navy text-white' 
                          : 'border border-ideassion-navy/20 hover:border-ideassion-navy'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-ideassion-navy/5 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-ideassion-navy/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest">Secured & Encrypted Briefing</span>
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <button className="btn-outline px-8 w-1/2 sm:w-auto" style={{
                backgroundColor: 'transparent',
                color: '#002F34',
                padding: '1rem 2rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid #002F34'
              }}>Previous</button>
              <button className="btn-primary px-12 w-1/2 sm:w-auto" style={{
                backgroundColor: '#002F34',
                color: '#FFFFFF',
                padding: '1rem 2.5rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: '1px solid #002F34'
              }}>
                Next Step
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-ideassion-green/20 rounded flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ideassion-navy">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Rapid Review</h4>
              <p className="text-sm text-ideassion-navy/60">Our engineering lead reviews every brief personally within 24 hours.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-ideassion-blue/20 rounded flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ideassion-navy">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">No-Obligation</h4>
              <p className="text-sm text-ideassion-navy/60">The initial consultation is free. We only work with brands we can truly scale.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-ideassion-cyan/20 rounded flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ideassion-navy">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">NDA Ready</h4>
              <p className="text-sm text-ideassion-navy/60">We respect your IP. Click here to request a signed NDA before sending documents.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
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
      
      .sharp-border:hover:not(:disabled) {
        box-shadow: 6px 6px 0px 0px #002F34;
        transform: translate(-2px, -2px);
      }
      
      .btn-primary:hover:not(:disabled) {
        background-color: #03FF83 !important;
        color: #002F34 !important;
        box-shadow: 4px 4px 0px 0px #002F34;
        transform: translate(-2px, -2px);
      }
      
      .btn-outline:hover:not(:disabled) {
        background-color: #002F34 !important;
        color: #FFFFFF !important;
        box-shadow: 4px 4px 0px 0px #002F34;
        transform: translate(-2px, -2px);
      }
      
      .option-card:hover {
        border-color: #002F34 !important;
        background-color: rgba(241, 241, 222, 0.3) !important;
      }
      
      .option-card.selected {
        background-color: #002F34 !important;
        color: white !important;
        border-color: #002F34 !important;
      }
      
      .calendar-day:hover:not(.disabled) {
        background-color: #03FF83 !important;
        color: #002F34 !important;
      }
      
      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: rgba(0, 47, 52, 0.1);
        border-radius: 0px;
      }
      
      input[type="range"]::-webkit-slider-thumb {
        height: 24px;
        width: 24px;
        background: #002F34;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -10px;
        border: 1px solid #03FF83;
      }
      
      input[type="range"]::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: rgba(0, 47, 52, 0.1);
      }
      
      input[type="range"]::-moz-range-thumb {
        height: 24px;
        width: 24px;
        background: #002F34;
        cursor: pointer;
        border: 1px solid #03FF83;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router basename="/">
      <div className="antialiased overflow-x-hidden" style={customStyles.body}>
        <Header />
        <Routes>
          <Route path="/" element={<ProjectBuilderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;