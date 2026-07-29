import React, { useState, useEffect } from 'react';
import './App.css';

// Custom component para sa umaandar na numero kapag nag-load ang page
function AnimatedCounter({ endValue, duration = 2000 }) {
  const numericEnd = parseInt(endValue.toString().replace(/,/g, ''), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * numericEnd);
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numericEnd);
      }
    };
    window.requestAnimationFrame(step);
  }, [numericEnd, duration]);

  if (endValue.toString().includes('+')) {
    return <span>{count.toLocaleString()}+</span>;
  }
  return <span>{count.toLocaleString()}</span>;
}

export default function App() {
  // Naka-default sa 'Home' para ito ang unang makikita
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'About Us', 'Our Projects', 'Careers', 'Contact Us'];

  return (
    <div>
      
      {/* --- NAVIGATION BAR (Laging Makikita sa Itaas) --- */}
      <nav className="mgs-navbar">
        <div className="mgs-nav-container">
          <div className="mgs-logo-wrapper" onClick={() => setActiveTab('Home')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative', width: '35px', height: '35px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderTop: '16px solid transparent', borderBottom: '16px solid transparent', borderLeft: '22px solid #4382DF' }}></div>
                <div style={{ position: 'absolute', top: '4px', left: '10px', width: 0, height: 0, borderTop: '16px solid transparent', borderBottom: '16px solid transparent', borderLeft: '22px solid #4647AE' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#112E81', letterSpacing: '-0.5px' }}>TOC</span>
                <span style={{ fontSize: '0.6rem', fontWeight: '800', color: '#4647AE', letterSpacing: '1px' }}>CONSTRUCTION, INC.</span>
              </div>
            </div>
          </div>

          <div className="mgs-nav-links">
            {navLinks.map((link) => (
              <button 
                key={link} 
                onClick={() => setActiveTab(link)}
                className={`mgs-link-btn ${activeTab === link ? 'active-node' : ''}`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- KONTROLADO NG NAV BAR KUNG ANONG CONTENT ANG LALABAS --- */}
      <div className="mgs-main-wrapper">
        
        {/* =========================================================
            1. HOME PAGE CONTENT (Dito lang nakalagay ang lahat ng code mo)
           ========================================================= */}
        {activeTab === 'Home' && (
          <main className="mgs-home-page animate-fade-in">
            
            {/* SECTION A: Hero Showcase Viewport */}
            <section className="mgs-hero-viewport">
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '8px', background: 'linear-gradient(90deg, #112E81, #4647AE, #4382DF, #AACCD6)' }}></div>
            </section>

            {/* SECTION B: Who We Are & Dynamic Counters */}
            <section className="mgs-stats-section">
              <div className="mgs-who-we-are">
                <h2>Who We Are</h2>
                <p>
                  We are a top-level, fast-growing Philippine construction company with a broad range of expertise, capabilities, and massive resources owing to nearly five decades of experience in various aspects of the construction industry.
                </p>
                <p>
                  Growth and diversity have always been the company's backbone, spurring us continuously forward. Maintaining our status as a leading-edge construction company necessitates constant expansion in capability, assets, partnerships, clientele, developments, and geographic reach—as well as into whatever new technologies develop in the industry. It is a challenge we are up to.
                </p>
                <button onClick={() => alert('Diretso sa buong detalye sa susunod!')} className="mgs-btn-action">Learn More →</button>
              </div>

              <div className="mgs-numbers-side">
                <h3 className="mgs-numbers-title">Our Numbers<br />and Counting...</h3>
                
                <div className="mgs-stat-row">
                  <h4 className="mgs-stat-number">
                    <AnimatedCounter endValue="20" />
                  </h4>
                  <p className="mgs-stat-label">Concrete Batching Plants</p>
                </div>
                <div className="mgs-stat-row">
                  <h4 className="mgs-stat-number">
                    <AnimatedCounter endValue="1500" />
                  </h4>
                  <p className="mgs-stat-label">Light and Heavy Equipment Machineries</p>
                </div>
                <div className="mgs-stat-row">
                  <h4 className="mgs-stat-number">
                    <AnimatedCounter endValue="40" />
                  </h4>
                  <p className="mgs-stat-label">Provinces and Expanding</p>
                </div>
                <div className="mgs-stat-row">
                  <h4 className="mgs-stat-number">
                    <AnimatedCounter endValue="1500" />
                  </h4>
                  <p className="mgs-stat-label">Close to Kilometers of Roads Built</p>
                </div>
                <div className="mgs-stat-row">
                  <h4 className="mgs-stat-number">
                    <AnimatedCounter endValue="2000" />
                  </h4>
                  <p className="mgs-stat-label">About Total Hectarage Developed</p>
                </div>
              </div>
            </section>

            {/* SECTION C: Expertise Overview */}
            <section className="mgs-expertise-section">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000" 
                  alt="TOC Heavy Duty Tower Crane" 
                  className="mgs-crane-image"
                />
              </div>
              <div>
                <span className="mgs-exp-title-pre">Expertise</span>
                <h2 className="mgs-exp-title-main">This is Construction Beyond Cutting Edge</h2>
                <p className="mgs-exp-p">
                  We are a company, and a family born and bred, into the construction industry. Our key strength is the ability to handle any and all stages and aspects of a construction project.
                </p>
                <p className="mgs-exp-p">
                  We have nearly five decades of growth and expansion in construction, harnessing top experts and developing talents in the various fields of the industry.
                </p>
                <button onClick={() => alert('Diretso sa buong detalye sa susunod!')} className="mgs-btn-action">Learn More →</button>
              </div>
            </section>

            {/* SECTION D: 6 Sample Projects Previews */}
            <section className="mgs-gallery-section">
              {[
                { title: 'Land Development', detail: 'Camella Legazpi', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000' },
                { title: 'Housing', detail: 'Camella', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000' },
                { title: 'Residential Building', detail: 'The Currency', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000' },
                { title: 'Commercial and Institutional Building', detail: 'NoMo Lifestyle Mall', img: 'https://images.unsplash.com/photo-1574950578143-85f0d98946fa?q=80&w=1000' },
                { title: 'Fit out', detail: 'Roma', img: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=1000' },
                { title: 'Utilities', detail: 'PrimeWater', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000' }
              ].map((item, index) => (
                <div key={index} className="mgs-gallery-card">
                  <img src={item.img} alt={item.title} className="mgs-gallery-img" />
                  <div className="mgs-gallery-overlay">
                    <span>{item.detail}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </section>

            {/* Floating Back-to-Top sa Home */}
            <button 
              className="mgs-scroll-top-btn" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Scroll to Top"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
              </svg>
            </button>
          </main>
        )}

        {/* =========================================================
            2. PLACEHOLDERS / BLANKO PARA SA IBANG TABS
           ========================================================= */}
        {activeTab !== 'Home' && (
          <main className="mgs-blank-page animate-fade-in">
            <div className="mgs-placeholder-box">
              <h2>{activeTab}</h2>
              <p>Pansamantalang walang laman. Ang code na kasalukuyang naka-setup ay para lamang sa Home Page.</p>
            </div>
          </main>
        )}

      </div>

      {/* --- FOOTER (Laging Makikita sa Pinakababa ng Application) --- */}
      <footer className="mgs-footer">
        <div className="mgs-footer-grid">
          <div className="mgs-footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <div style={{ position: 'relative', width: '30px', height: '30px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #4382DF' }}></div>
                <div style={{ position: 'absolute', top: '2px', left: '5px', width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #4647AE' }}></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.5px' }}>TOC</span>
                <span style={{ fontSize: '0.55rem', fontWeight: '800', color: '#AACCD6', letterSpacing: '1px' }}>CONSTRUCTION, INC.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mgs-footer-title">Address</h4>
            <p className="mgs-footer-text">
              2F Starmall Annex, Pamplona III,<br />
              Alabang-Zapote Road<br />
              corner Doña Manuela Avenue,<br />
              Las Piñas City, 1740 Metro Manila<br />
              <a href="mailto:info@toc.com.ph">info@toc.com.ph</a><br />
              T: (63 2) 8814 4600<br />
              TF: (63 2) 8871 0743
            </p>
          </div>

          <div className="mgs-footer-right-block">
            <div>
              <h4 className="mgs-footer-title" style={{ marginBottom: '12px' }}>Follow Us</h4>
              <div className="mgs-social-icons">
                <a href="#facebook" className="mgs-social-icon" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </a>
                <a href="#instagram" className="mgs-social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a href="#twitter" className="mgs-social-icon" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="mgs-social-icon" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <a href="#privacy" className="mgs-privacy-link">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="mgs-footer-bottom">
          <span>© 2021-2026 TOC Construction, Inc. All Rights Reserved.</span>
        </div>
      </footer>

    </div>
  );
}