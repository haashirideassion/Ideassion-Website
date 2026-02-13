
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
    opacity: 0.03
  }
};

const Icon = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    'mail': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    'phone': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    'globe': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    'smartphone': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    'sparkles': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    'upload-cloud': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>,
    'arrow-right': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>,
    'chevron-left': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>,
    'chevron-right': <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
  };
  return icons[name] || null;
};

const Header = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#F1F1DE]/90 backdrop-blur-md border-b border-[#002F34]/10">
      <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 relative text-ideassion-navy">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-ideassion-navy font-display">IDEASSION<span className="text-xs align-top ml-0.5">TM</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-medium text-sm uppercase tracking-wide">
          <a href="#" className="nav-link hover:text-ideassion-blue transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ideassion-blue after:transition-all hover:after:w-full">Work</a>
          <a href="#" className="nav-link hover:text-ideassion-blue transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ideassion-blue after:transition-all hover:after:w-full">Services</a>
          <a href="#" className="nav-link hover:text-ideassion-blue transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ideassion-blue after:transition-all hover:after:w-full">About</a>
          <Link to="/" className="px-6 py-3 bg-ideassion-navy text-white hover:bg-ideassion-blue transition-colors font-semibold border border-ideassion-navy hover:shadow-[4px_4px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#002529] text-white py-12 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/20">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
          </svg>
          <span>© 2024 Ideassion AI. All rights reserved.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const CheckboxLabel = ({ id, icon, label, checked, onChange }) => {
  return (
    <div>
      <input type="checkbox" id={id} className="hidden" checked={checked} onChange={onChange} />
      <label htmlFor={id} className={`flex flex-col items-center justify-center p-6 border cursor-pointer transition-all gap-3 ${checked ? 'bg-ideassion-navy text-ideassion-green border-ideassion-navy' : 'border-ideassion-navy/10 hover:border-ideassion-navy'}`}>
        <Icon name={icon} className="w-6 h-6" />
        <span className="text-xs font-bold uppercase">{label}</span>
      </label>
    </div>
  );
};

const ContactPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [projectTypes, setProjectTypes] = useState({
    web: false,
    mobile: false,
    ai: false
  });
  const [budget, setBudget] = useState('$25k - $50k');
  const [timeline, setTimeline] = useState('Less than 3 months');
  const [projectDetails, setProjectDetails] = useState('');
  const [selectedDate, setSelectedDate] = useState(6);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleProjectTypeChange = (type) => {
    setProjectTypes(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleNextStep = () => {
    setActiveStep(2);
  };

  const calendarDays = Array.from({ length: 15 }, (_, i) => i + 1);
  const availableTimes = ['09:00 AM EST', '11:30 AM EST', '02:00 PM EST', '04:30 PM EST'];

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6 min-h-screen relative">
        <div className="absolute inset-0 pointer-events-none" style={customStyles.gridBg}></div>
        
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
          
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-ideassion-navy/20 rounded-full bg-white/40 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 bg-ideassion-blue rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ideassion-navy">Start a Project</span>
              </span>
              <h1 className="text-6xl md:text-7xl font-display font-bold text-ideassion-navy leading-[0.9] mb-8">
                LET'S BUILD<br />SOMETHING<br /><span className="text-ideassion-blue">ICONIC</span>.
              </h1>
              <p className="text-xl text-ideassion-navy/70 mb-12 max-w-md leading-relaxed">
                Fill out the project brief or skip the queue by booking a direct consultation with our strategy team.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ideassion-navy text-white flex items-center justify-center border border-ideassion-navy hover:shadow-[6px_6px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                    <Icon name="mail" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-ideassion-navy/40 mb-1">General Enquiries</span>
                    <a href="mailto:hello@ideassion.com" className="text-xl font-bold text-ideassion-navy hover:text-ideassion-blue transition-colors">hello@ideassion.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ideassion-green text-ideassion-navy flex items-center justify-center border border-ideassion-navy hover:shadow-[6px_6px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                    <Icon name="phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase text-ideassion-navy/40 mb-1">Direct Line</span>
                    <span className="text-xl font-bold text-ideassion-navy">+1 (555) 0123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-ideassion-navy hover:shadow-[6px_6px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all p-8 md:p-12 shadow-2xl shadow-ideassion-navy/5">
              
              <div className="flex gap-8 mb-12 border-b border-ideassion-navy/10 pb-4 text-sm font-bold uppercase tracking-widest text-ideassion-navy/30">
                <button 
                  onClick={() => setActiveStep(1)}
                  className={`pb-4 transition-all ${activeStep === 1 ? 'text-ideassion-navy border-b-2 border-ideassion-navy' : 'hover:text-ideassion-navy'}`}
                >
                  01. Project Brief
                </button>
                <button 
                  onClick={() => setActiveStep(2)}
                  className={`pb-4 transition-all ${activeStep === 2 ? 'text-ideassion-navy border-b-2 border-ideassion-navy' : 'hover:text-ideassion-navy'}`}
                >
                  02. Schedule Call
                </button>
              </div>

              {activeStep === 1 && (
                <form className="space-y-12">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-ideassion-navy mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-ideassion-navy text-white flex items-center justify-center text-[10px]">01</span>
                      What are we building?
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <CheckboxLabel
                        id="web"
                        icon="globe"
                        label="Web App"
                        checked={projectTypes.web}
                        onChange={() => handleProjectTypeChange('web')}
                      />
                      <CheckboxLabel
                        id="mobile"
                        icon="smartphone"
                        label="Mobile App"
                        checked={projectTypes.mobile}
                        onChange={() => handleProjectTypeChange('mobile')}
                      />
                      <CheckboxLabel
                        id="ai"
                        icon="sparkles"
                        label="AI Native"
                        checked={projectTypes.ai}
                        onChange={() => handleProjectTypeChange('ai')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold uppercase text-ideassion-navy/60 mb-3">Budget Range</label>
                      <select 
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-ideassion-cream/50 border border-ideassion-navy/10 p-4 focus:outline-none focus:border-ideassion-navy font-bold text-ideassion-navy appearance-none"
                      >
                        <option>$25k - $50k</option>
                        <option>$50k - $100k</option>
                        <option>$100k - $250k</option>
                        <option>$250k+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-ideassion-navy/60 mb-3">Target Timeline</label>
                      <select 
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-ideassion-cream/50 border border-ideassion-navy/10 p-4 focus:outline-none focus:border-ideassion-navy font-bold text-ideassion-navy appearance-none"
                      >
                        <option>Less than 3 months</option>
                        <option>3 - 6 months</option>
                        <option>6 - 12 months</option>
                        <option>Ongoing Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-ideassion-navy/60 mb-3">Project Details</label>
                    <textarea 
                      rows="4" 
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full bg-ideassion-cream/50 border border-ideassion-navy/10 p-4 focus:outline-none focus:border-ideassion-navy text-ideassion-navy resize-none" 
                      placeholder="Tell us about the problem you're solving..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-ideassion-navy/60 mb-3">Attachments</label>
                    <div className="border-2 border-dashed border-ideassion-navy/10 p-10 text-center hover:bg-ideassion-cream/20 transition-colors cursor-pointer">
                      <Icon name="upload-cloud" className="w-8 h-8 mx-auto text-ideassion-navy/20 mb-3" />
                      <p className="text-sm font-medium text-ideassion-navy/60">Drag and drop project briefs, assets or wireframes</p>
                      <p className="text-[10px] text-ideassion-navy/30 mt-2">MAX 25MB (PDF, DOCX, ZIP, PNG)</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-ideassion-navy/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-ideassion-green rounded-full"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Step 1 of 2</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={handleNextStep}
                        className="bg-ideassion-navy text-white px-10 py-4 font-semibold transition-all inline-flex items-center justify-center gap-2 border border-ideassion-navy hover:bg-ideassion-green hover:text-ideassion-navy hover:shadow-[4px_4px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px] group"
                      >
                        Next: Schedule Call
                        <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {activeStep === 2 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-ideassion-navy mb-8">Direct Calendar Booking</h3>
                  <div className="grid md:grid-cols-2 gap-8 bg-ideassion-navy p-8 text-white border border-ideassion-navy hover:shadow-[6px_6px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-bold font-display">October 2024</span>
                        <div className="flex gap-4">
                          <Icon name="chevron-left" className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100" />
                          <Icon name="chevron-right" className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100" />
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-white/40 mb-4">
                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold">
                        <div className="p-2 opacity-10">28</div>
                        <div className="p-2 opacity-10">29</div>
                        <div className="p-2 opacity-10">30</div>
                        {calendarDays.map(day => (
                          <div
                            key={day}
                            onClick={() => setSelectedDate(day)}
                            className={`p-2 cursor-pointer transition-colors ${
                              selectedDate === day 
                                ? 'bg-ideassion-green text-ideassion-navy' 
                                : 'hover:bg-ideassion-navy hover:text-ideassion-green'
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col border-l border-white/10 pl-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-ideassion-green mb-6">Available Times</span>
                      <div className="space-y-3">
                        {availableTimes.map((time, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full py-3 border transition-all font-bold text-sm ${
                              selectedTime === time
                                ? 'bg-white text-ideassion-navy border-white'
                                : 'border-white/20 hover:bg-white hover:text-ideassion-navy'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-white/40 mt-auto pt-8">
                        All calls are 30 minutes via Google Meet.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="text-ideassion-navy hover:text-ideassion-blue transition-colors font-semibold"
                    >
                      ← Back to Project Brief
                    </button>
                    <button
                      disabled={!selectedTime}
                      className={`bg-ideassion-navy text-white px-10 py-4 font-semibold transition-all inline-flex items-center justify-center gap-2 border border-ideassion-navy ${
                        selectedTime
                          ? 'hover:bg-ideassion-green hover:text-ideassion-navy hover:shadow-[4px_4px_0px_0px_#002F34] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;