import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const navigationMatrix = ['Home', 'About Us', 'Our Projects', 'Careers', 'Contact Us'];

  return (
    <div>
      
      {/* 1. MGS NAVIGATION BAR */}
      <nav className="mgs-navbar">
        <div className="mgs-nav-container">
          
          <div className="mgs-logo-wrapper">
            <div className="mgs-graphic-mark">
              <div className="mgs-mark-primary"></div>
              <div className="mgs-mark-accent"></div>
            </div>
            <div className="mgs-text-group">
              <span className="mgs-title-main">MGS</span>
              <span className="mgs-title-sub">CONSTRUCTION, INC.</span>
            </div>
          </div>

          <div className="mgs-nav-links">
            {navigationMatrix.map((item) => {
              const isActive = activeTab === item;
              return (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setActiveTab(item)}
                  className={`mgs-link-item ${isActive ? 'active-node' : ''}`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 2. AUTHENTIC MGS HERO VIEWPORT */}
      <section id="home" className="mgs-hero-viewport">
        <div className="mgs-hero-content-box">
          <span className="mgs-hero-badge">Engineering Excellence</span>
          <h1 className="mgs-hero-heading">
            Building Infrastructure That Shapes <span>Tomorrow's Landscapes</span>
          </h1>
          <div className="mgs-hero-button-group">
            <a href="#our-projects" className="mgs-btn-primary">View Projects</a>
            <a href="#contact-us" className="mgs-btn-outline">Contact Our Engineers</a>
          </div>
        </div>
        <div className="mgs-linear-ribbon"></div>
      </section>

      {/* 3. MGS WHO WE ARE SECTION */}
      <section id="about-us" className="mgs-layout-section">
        <div className="mgs-section-wrapper">
          <div className="mgs-about-split">
            <div>
              <div className="mgs-section-header-block">
                <span className="mgs-pre-title">Corporate Profile</span>
                <h2 className="mgs-main-title">Who We Are</h2>
                <div className="mgs-title-underline-strip"></div>
              </div>
              <p className="mgs-about-body-text">
                MGS Construction, Inc. operates as an elite full-service general contracting and engineering enterprise, recognized for managing comprehensive structural system assemblies and major commercial infrastructures across the region.
              </p>
              <p className="mgs-about-body-text">
                Backed by generations of building precision, stringent implementation standards, and advanced material logistics, we design and execute high-value builds engineered to withstand dynamic long-term load allocations and aggressive environmental weathering.
              </p>
            </div>
            <div>
              <div className="mgs-about-image-frame">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000" 
                  alt="MGS Heavy Infrastructure Inspection Site" 
                  className="mgs-about-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL-TIME CORPORATE PERFORMANCE METRICS */}
      <section className="mgs-metrics-bar">
        <div className="mgs-section-wrapper">
          <div className="mgs-metrics-grid">
            {[
              { total: '320+', caption: 'Completed Masterpieces' },
              { total: '55+', caption: 'Active Construction Sites' },
              { total: '240', caption: 'In-House Structural Engineers' },
              { total: '18M', caption: 'Safe Operation Hours' }
            ].map((metric, i) => (
              <div key={i} className={`mgs-metric-node ${i === 3 ? 'terminal-node' : ''}`}>
                <h3 className="mgs-metric-numeric">{metric.total}</h3>
                <p className="mgs-metric-caption">{metric.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MGS ENTERPRISE CAPABILITIES / EXPERTISE */}
      <section className="mgs-layout-section alt-bg">
        <div className="mgs-section-wrapper">
          <div className="mgs-section-header-block" style={{ textAlign: 'center' }}>
            <span className="mgs-pre-title">Core Competencies</span>
            <h2 className="mgs-main-title">Enterprise Capabilities</h2>
            <div className="mgs-title-underline-strip" style={{ margin: '15px auto 0 auto' }}></div>
          </div>
          
          <div className="mgs-portfolio-grid">
            {[
              { title: 'General Contracting & Building', desc: 'Comprehensive management across foundation structural execution to dynamic multi-tiered skyscraper utilities integration.' },
              { title: 'Structural Retrofitting', desc: 'Upgrading aged load-bearing column matrices to meet modern industrial seismic compliance frameworks.' },
              { title: 'Project Management & Planning', desc: 'Real-time supply chain mapping, precision budgeting timelines, safety audits, and material testing validation.' }
            ].map((capability, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '45px 35px', borderTop: '4px solid #4382DF', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#112E81', margin: '0 0 15px 0', textTransform: 'uppercase' }}>{capability.title}</h4>
                <p style={{ color: '#718096', lineHeight: '1.7', margin: 0, fontSize: '0.95rem', textAlign: 'justify' }}>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SAMPLE PORTFOLIO SHOWCASE */}
      <section id="our-projects" className="mgs-layout-section">
        <div className="mgs-section-wrapper">
          <div className="mgs-section-header-block">
            <span className="mgs-pre-title">Project Registry</span>
            <h2 className="mgs-main-title">Sample Projects</h2>
            <div className="mgs-title-underline-strip"></div>
          </div>

          <div className="mgs-portfolio-grid">
            {[
              { name: 'Vertex Commercial Center', tag: 'Metropolitan District', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000' },
              { name: 'Apex Residential Towers', tag: 'Skyline Area', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000' },
              { name: 'The Industrial Bio-Dome', tag: 'Logistics Node Alpha', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000' },
              { name: 'Grand Central Viaduct Bridge', tag: 'Transit Route Sector', src: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=1000' },
              { name: 'Metro Aquatic Complex', tag: 'Civic Center Hub', src: 'https://images.unsplash.com/photo-1574950578143-85f0d98946fa?q=80&w=1000' },
              { name: 'South Logistics Facility', tag: 'Port Terminal Yard', src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000' },
            ].map((project, i) => (
              <div key={i} className="mgs-portfolio-card">
                <img src={project.src} alt={project.name} className="mgs-portfolio-img-layer" />
                <div className="mgs-portfolio-shade-layer">
                  <span className="mgs-portfolio-tag">{project.tag}</span>
                  <h3 className="mgs-portfolio-name">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIGNIFIED INDUSTRIAL FOOTER */}
      <footer id="contact-us" className="mgs-footer-block">
        <div className="mgs-section-wrapper">
          <div className="mgs-footer-grid">
            
            <div>
              <div className="mgs-logo-wrapper">
                <div className="mgs-graphic-mark">
                  <div className="mgs-mark-primary"></div>
                  <div className="mgs-mark-accent"></div>
                </div>
                <div className="mgs-text-group">
                  <span className="mgs-title-main" style={{ color: '#FFFFFF' }}>MGS</span>
                  <span className="mgs-title-sub" style={{ color: '#AACCD6' }}>CONSTRUCTION, INC.</span>
                </div>
              </div>
              <p className="mgs-footer-paragraph">
                Delivering highly precise engineering outputs, complex site logisitics control, and documented architectural frameworks optimized for modern environmental demands.
              </p>
            </div>

            <div>
              <h4 className="mgs-footer-header-text">Navigation</h4>
              <ul className="mgs-footer-links-list">
                {navigationMatrix.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="mgs-footer-a">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mgs-footer-header-text">Contact Logistics</h4>
              <p className="mgs-footer-contact-row">📍 101 Corporate Spine Center Drive, Metro Manila, Philippines</p>
              <p className="mgs-footer-contact-row">📞 +63 (2) 8888-9999</p>
              <p className="mgs-footer-contact-row" style={{ margin: 0 }}>✉️ logistics@mgsconstruction.com.ph</p>
            </div>

          </div>

          <div className="mgs-footer-base">
            <span>© 2026 MGS Construction Inc. All Rights Reserved.</span>
            <div className="mgs-footer-legal">
              <span className="mgs-footer-span">Privacy Framework</span>
              <span className="mgs-footer-span">Terms of Operations</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}