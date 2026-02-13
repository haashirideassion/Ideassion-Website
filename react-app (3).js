import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
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
    border: '1px solid #002F34',
    position: 'relative'
  },
  btnPrimaryHover: {
    backgroundColor: '#03FF83',
    color: '#002F34',
    boxShadow: '4px 4px 0px 0px #002F34',
    transform: 'translate(-2px, -2px)'
  },
  gridBg: {
    backgroundImage: 'linear-gradient(#002F34 1px, transparent 1px), linear-gradient(90deg, #002F34 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    opacity: '0.03'
  },
  rangeThumb: {
    width: '20px',
    height: '20px',
    background: '#002F34',
    cursor: 'pointer',
    border: '2px solid #03FF83',
    borderRadius: '50%'
  }
};

const Icon = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    'arrow-left': <path d="M19 12H5M12 19l-7-7 7-7" />,
    'cpu': <path d="M4 4h16v16H4zM9 4v16M15 4v16M4 9h16M4 15h16" />,
    'layout': <path d="M3 3h18v18H3zM3 9h18M9 21V9" />,
    'smartphone': <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 18h.01" />,
    'palette': <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />,
    'upload-cloud': <path d="M16 16l-4-4-4 4M12 12v9M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />,
    'chevron-left': <path d="M15 18l-6-6 6-6" />,
    'chevron-right': <path d="M9 18l6-6-6-6" />,
    'arrow-right': <path d="M5 12h14M12 5l7 7-7 7" />,
    'send': <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  };

  return (
    <svg 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
};

const Logo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinkStyle = (isHovered) => ({
    position: 'relative',
    paddingBottom: '4px',
    borderBottom: isHovered ? '2px solid #007EC5' : '2px solid transparent',
    transition: 'border-color 0.3s ease'
  });

  return (
    <nav className="fixed w-full z-50 bg-[#F1F1DE]/90 backdrop-blur-md border-b border-[#002F34]/10 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative text-ideassion-navy">
            <Logo />
          </div>
          <span className="text-xl font-bold tracking-tight text-ideassion-navy font-display">
            IDEASSION<span className="text-xs align-top ml-0.5">TM</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
          <a 
            href="#" 
            style={navLinkStyle(hoveredLink === 'work')}
            onMouseEnter={() => setHoveredLink('work')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Work
          </a>
          <a 
            href="#" 
            style={navLinkStyle(hoveredLink === 'services')}
            onMouseEnter={() => setHoveredLink('services')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Services
          </a>
          <a 
            href="#" 
            style={navLinkStyle(hoveredLink === 'about')}
            onMouseEnter={() => setHoveredLink('about')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            About
          </a>
          <Link to="/" className="text-ideassion-navy font-bold flex items-center gap-2">
            <Icon name="arrow-left" className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

const ProjectIntakePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [budgetValue, setBudgetValue] = useState(50);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [timeline, setTimeline] = useState('standard');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  const totalSteps = 4;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #002F34;
        cursor: pointer;
        border: 2px solid #03FF83;
        border-radius: 50%;
      }
      input[type="range"]::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: #002F34;
        cursor: pointer;
        border: 2px solid #03FF83;
        border-radius: 50%;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleTypeToggle = (value) => {
    setSelectedTypes(prev => 
      prev.includes(value) 
        ? prev.filter(t => t !== value)
        : [...prev, value]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Project submitted successfully!');
  };

  const getCardStyle = (isHovered) => ({
    ...customStyles.sharpBorder,
    ...(isHovered ? customStyles.sharpBorderHover : {})
  });

  const getButtonStyle = (isHovered) => ({
    ...customStyles.btnPrimary,
    ...(isHovered ? customStyles.btnPrimaryHover : {})
  });

  const projectTypes = [
    { value: 'ai-product', label: 'AI-Native Product', icon: 'cpu' },
    { value: 'web-app', label: 'Web Application', icon: 'layout' },
    { value: 'mobile', label: 'Mobile Experience', icon: 'smartphone' },
    { value: 'branding', label: 'Digital Branding', icon: 'palette' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: '< 1 Month' },
    { value: 'standard', label: '2-3 Months' },
    { value: 'long', label: '4-6 Months' },
    { value: 'undecided', label: 'Undecided' }
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'];

  return (
    <main className="pt-40 pb-24 px-6 relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none" style={customStyles.gridBg}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16">
          <span className="text-ideassion-blue font-bold tracking-widest uppercase text-xs mb-4 block">
            Project Intake
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-ideassion-navy tracking-tighter">
            LET'S START <br />BUILDING.
          </h1>
        </header>

        <div 
          className="bg-white border border-ideassion-navy/10 p-8 md:p-12 relative"
          style={getCardStyle(hoveredCard)}
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
            <div 
              className="h-full bg-ideassion-green transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-bold text-ideassion-navy mb-2">
                    What are we building?
                  </h2>
                  <p className="text-ideassion-navy/60">Select all that apply to your vision.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectTypes.map(type => (
                    <label key={type.value} className="group cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="hidden peer" 
                        checked={selectedTypes.includes(type.value)}
                        onChange={() => handleTypeToggle(type.value)}
                      />
                      <div className={`p-6 border border-ideassion-navy/10 transition-all flex items-center justify-between ${
                        selectedTypes.includes(type.value) 
                          ? 'bg-ideassion-navy text-white' 
                          : ''
                      }`}>
                        <span className="font-bold uppercase tracking-wider text-sm">
                          {type.label}
                        </span>
                        <Icon name={type.icon} className="w-5 h-5" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div>
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-ideassion-navy mb-6">
                    Investment & Timeline
                  </h2>
                  <label className="block text-sm font-bold uppercase tracking-widest text-ideassion-navy/50 mb-6">
                    Approximate Budget (USD)
                  </label>
                  <input 
                    type="range" 
                    min="10" 
                    max="250" 
                    step="10" 
                    className="w-full h-2 bg-ideassion-navy/10 appearance-none cursor-pointer rounded-full"
                    value={budgetValue}
                    onChange={(e) => setBudgetValue(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between mt-4 font-display font-bold text-xl text-ideassion-navy">
                    <span>$10k</span>
                    <span className="text-ideassion-blue">
                      {budgetValue >= 250 ? '$250k+' : `$${budgetValue}k`}
                    </span>
                    <span>$250k+</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <label className="block text-sm font-bold uppercase tracking-widest text-ideassion-navy/50">
                    Preferred Launch Window
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {timelineOptions.map(option => (
                      <label key={option.value} className="cursor-pointer">
                        <input 
                          type="radio" 
                          name="timeline" 
                          value={option.value}
                          className="hidden peer"
                          checked={timeline === option.value}
                          onChange={(e) => setTimeline(e.target.value)}
                        />
                        <div className={`p-4 border text-center text-xs font-bold ${
                          timeline === option.value
                            ? 'border-ideassion-blue bg-ideassion-blue/5'
                            : 'border-ideassion-navy/10'
                        }`}>
                          {option.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-bold text-ideassion-navy mb-2">
                    Tell us the story
                  </h2>
                  <p className="text-ideassion-navy/60">
                    Share your goals, challenges, and any reference materials.
                  </p>
                </div>
                <div className="space-y-6">
                  <textarea 
                    placeholder="Describe your project brief here..." 
                    className="w-full min-h-[200px] p-6 border border-ideassion-navy/10 focus:border-ideassion-blue focus:ring-0 outline-none text-lg resize-none"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                  
                  <div className="border-2 border-dashed border-ideassion-navy/10 p-10 text-center group hover:border-ideassion-blue transition-colors cursor-pointer relative">
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      multiple 
                    />
                    <Icon name="upload-cloud" className="w-10 h-10 mx-auto mb-4 text-ideassion-navy/20 group-hover:text-ideassion-blue" />
                    <p className="font-bold text-ideassion-navy/60">
                      Drop reference materials or <span className="text-ideassion-blue">browse</span>
                    </p>
                    <p className="text-xs text-ideassion-navy/40 mt-2">
                      PDF, Figma, JPG, PNG (Max 50MB)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-bold text-ideassion-navy mb-2">
                    Let's talk details
                  </h2>
                  <p className="text-ideassion-navy/60">
                    Pick a time for a 15-minute alignment call with our strategy team.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-5 border border-ideassion-navy/10">
                  <div className="md:col-span-3 border-r border-ideassion-navy/10 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-bold">November 2024</span>
                      <div className="flex gap-2">
                        <button type="button" className="p-1 hover:bg-gray-100">
                          <Icon name="chevron-left" className="w-4 h-4" />
                        </button>
                        <button type="button" className="p-1 hover:bg-gray-100">
                          <Icon name="chevron-right" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-ideassion-navy/40 mb-2 uppercase">
                      <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[28, 29, 30, 31].map(day => (
                        <div key={day} className="aspect-square flex items-center justify-center text-xs text-gray-300">
                          {day}
                        </div>
                      ))}
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(day => (
                        <div 
                          key={day}
                          className={`aspect-square flex items-center justify-center text-xs font-bold cursor-pointer ${
                            selectedDate === day 
                              ? 'bg-ideassion-navy text-white' 
                              : 'hover:bg-ideassion-green'
                          }`}
                          onClick={() => setSelectedDate(day)}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 bg-gray-50/50">
                    <span className="block text-xs font-bold uppercase tracking-widest text-ideassion-navy/40 mb-4">
                      Available slots
                    </span>
                    <div className="space-y-2">
                      {timeSlots.map(time => (
                        <button 
                          key={time}
                          type="button" 
                          className={`w-full py-3 border text-sm font-bold ${
                            selectedTime === time
                              ? 'border-ideassion-blue bg-ideassion-blue/5 text-ideassion-blue'
                              : 'border-ideassion-navy/10 bg-white hover:border-ideassion-blue'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-12 border-t border-ideassion-navy/10">
              <button 
                type="button"
                onClick={handlePrev}
                className={`text-sm font-bold uppercase tracking-widest flex items-center gap-2 ${
                  currentStep === 1 
                    ? 'invisible' 
                    : 'text-ideassion-navy/40 hover:text-ideassion-navy'
                }`}
              >
                <Icon name="arrow-left" className="w-4 h-4" /> Back
              </button>
              {currentStep < totalSteps ? (
                <button 
                  type="button"
                  onClick={handleNext}
                  style={getButtonStyle(hoveredButton)}
                  onMouseEnter={() => setHoveredButton(true)}
                  onMouseLeave={() => setHoveredButton(false)}
                  className="min-w-[200px]"
                >
                  Next Step <Icon name="arrow-right" className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button 
                  type="submit"
                  style={getButtonStyle(hoveredButton)}
                  onMouseEnter={() => setHoveredButton(true)}
                  onMouseLeave={() => setHoveredButton(false)}
                  className="min-w-[200px]"
                >
                  Submit Project <Icon name="send" className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
        
        <footer className="mt-12 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-ideassion-navy/30">
          <div className="flex gap-6">
            <span>Secure Intake</span>
            <span>Fast Response</span>
          </div>
          <div>Step <span>{currentStep}</span> of 4</div>
        </footer>
      </div>
    </main>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      
      * {
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        padding: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
        background-color: #F1F1DE;
        color: #002F34;
      }
      
      .font-display {
        font-family: 'Space Grotesk', sans-serif;
      }
      
      .text-ideassion-navy { color: #002F34; }
      .text-ideassion-cream { color: #F1F1DE; }
      .text-ideassion-blue { color: #007EC5; }
      .text-ideassion-cyan { color: #00DAFF; }
      .text-ideassion-green { color: #03FF83; }
      
      .bg-ideassion-navy { background-color: #002F34; }
      .bg-ideassion-cream { background-color: #F1F1DE; }
      .bg-ideassion-blue { background-color: #007EC5; }
      .bg-ideassion-cyan { background-color: #00DAFF; }
      .bg-ideassion-green { background-color: #03FF83; }
      
      .border-ideassion-navy { border-color: #002F34; }
      .border-ideassion-blue { border-color: #007EC5; }
      
      .selection\\:bg-ideassion-green::selection {
        background-color: #03FF83;
      }
      
      .selection\\:text-ideassion-navy::selection {
        color: #002F34;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <div className="antialiased overflow-x-hidden selection:bg-ideassion-green selection:text-ideassion-navy">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectIntakePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;