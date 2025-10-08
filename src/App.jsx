import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'equipment', 'team', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/PLANT_TECH_LOGO.png" alt="Planttech Engineering Logo" className="logo" />
            <span className="logo-text">Planttech Engineering</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a>
            <a href="#products" className={`nav-link ${activeSection === 'products' ? 'active' : ''}`} onClick={() => scrollToSection('products')}>Products</a>
            <a href="#equipment" className={`nav-link ${activeSection === 'equipment' ? 'active' : ''}`} onClick={() => scrollToSection('equipment')}>Equipment</a>
            <a href="#team" className={`nav-link ${activeSection === 'team' ? 'active' : ''}`} onClick={() => scrollToSection('team')}>Team</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">Engineering Excellence for Herbal, Nutraceutical, Pharma & Chemical Plants</h1>
              <p className="hero-subtitle">State-of-the-art process machinery serving industries worldwide from the foothills of the Himalayas</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection('about')}>Learn More</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Get Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Planttech Engineering</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Planttech Engineering Pvt. Ltd. is a trusted manufacturer of state-of-the-art process machinery serving the herbal, nutraceutical, pharmaceutical, and chemical industries. Based in Haridwar, Uttarakhand, at the foothills of the Himalayas, we deliver innovative, reliable, and customer-focused engineering solutions for plant setups worldwide.</p>
              
              <div className="why-choose-us">
                <h3>Why Choose Us?</h3>
                <ul className="features-list">
                  <li><i className="icon-check"></i> Industry experts in product & machinery</li>
                  <li><i className="icon-check"></i> Zero consultancy charges</li>
                  <li><i className="icon-check"></i> End-to-end support until final product delivery</li>
                  <li><i className="icon-check"></i> Onsite installation & commissioning team</li>
                  <li><i className="icon-check"></i> Final product sales guarantee for Herbal extracts (if required)</li>
                  <li><i className="icon-check"></i> Consultancy for chemical, analytical & microbial lab setup</li>
                  <li><i className="icon-check"></i> Guidance in sourcing & selecting best quality raw materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-category">
              <h3>Process Equipment</h3>
              <ul>
                <li>Reaction Vessel</li>
                <li>Agitated Nutsche Filter Dryer (ANFD)</li>
                <li>Shell & Tube Type Heat Exchanger</li>
                <li>Blender</li>
                <li>Other Process Equipment</li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Turnkey Projects</h3>
              <ul>
                <li>Herbal Extraction</li>
                <li>Essential Oil Extraction</li>
                <li>Mentha Oil Distillation Plant</li>
                <li>Menthol Crystal Plant</li>
                <li>Peppermint Oil Distillation Plant</li>
                <li>Used Oil Recycling Plant</li>
                <li>Solvent Recovery Plant</li>
                <li>Dairy Plants</li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Material Handling System (Conveyor)</h3>
              <ul>
                <li>Screw Conveyor</li>
                <li>Pneumatic Conveying System</li>
                <li>Belt Conveyor & Bucket Elevator</li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Solvent</h3>
              <ul>
                <li>Di Methyl Sulfoxide (DMSO)</li>
                <li>Mix Solvent</li>
                <li>Sulfolane</li>
                <li>Tri Butyl Tin Chloride</li>
                <li>Toluene</li>
                <li>Acetonitrile</li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Pollution Control</h3>
              <ul>
                <li>Dust Extraction System</li>
                <li>Ash Handling System</li>
                <li>Air Pollution Control</li>
                <li>Wet Scrubber</li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Herbal Division</h3>
              <ul>
                <li>Introduction</li>
                <li>Products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="equipment">
        <div className="container">
          <h2 className="section-title">Our Specialized Equipment & Systems</h2>
          <div className="equipment-grid">
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-reactor.jpg" alt="Herbal Extraction Reactors" />
              </div>
              <h3>Herbal Extraction Reactors</h3>
              <p>Multi-chamber, jacketed, vacuum-compatible, tailored for aroma/herbal oils</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-distillation.jpg" alt="Solvent Recovery Systems" />
              </div>
              <h3>Solvent Recovery Systems</h3>
              <p>High-efficiency distillation & condensation modules for solvent purity</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-distillation.jpg" alt="Distillation Columns" />
              </div>
              <h3>Distillation Columns</h3>
              <p>Packed/tray columns for azeotropic & fractional distillation</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-distillation.jpg" alt="Condensers" />
              </div>
              <h3>Condensers</h3>
              <p>Shell & tube, coil type, glass-lined for efficient heat transfer</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-storage.jpg" alt="Storage Tanks" />
              </div>
              <h3>Storage Tanks</h3>
              <p>SS / food-grade with jacket options, CIP-friendly design</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-distillation.jpg" alt="Heat Exchangers" />
              </div>
              <h3>Heat Exchangers</h3>
              <p>Plate, shell-tube, and spiral for heating/cooling fluids</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/equipment-distillation.jpg" alt="Industrial Evaporators" />
              </div>
              <h3>Industrial Evaporators</h3>
              <p>Falling-film, forced-circulation, thin-film for high concentration processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <h2 className="section-title">Our Core Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <i className="icon-person"></i>
              </div>
              <h3>Mr. Parveen</h3>
              <p className="member-role">MBA, 17 years' experience</p>
              <p className="member-expertise">Project management & business operations and Fabrication</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <i className="icon-person"></i>
              </div>
              <h3>Mr. Vipul</h3>
              <p className="member-role">M. Pharma, 16 years' experience</p>
              <p className="member-expertise">Herbal, pharmaceuticals, nutraceuticals & formulations</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <i className="icon-person"></i>
              </div>
              <h3>Engg. Ashish</h3>
              <p className="member-role">B.Tech, 14 years' experience</p>
              <p className="member-expertise">Process engineering & plant design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Current Working Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">
                <i className="icon-industry"></i>
              </div>
              <h3>Monard Industries</h3>
              <p>Turnkey herbal extraction & processing setup</p>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <i className="icon-nutraceutical"></i>
              </div>
              <h3>Himalayan Nutraceuticals</h3>
              <p>Customized machinery for natural actives & formulations</p>
            </div>
            <div className="project-card">
              <div className="project-icon">
                <i className="icon-wellness"></i>
              </div>
              <h3>Suwasthi India</h3>
              <p>End-to-end plant solutions for herbal & wellness products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="icon-location"></i>
                <div>
                  <h4>Address</h4>
                  <p>Haridwar, Uttarakhand, India</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon-email"></i>
                <div>
                  <h4>Email</h4>
                  <p>info.planttech@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon-phone"></i>
      <div>
                  <h4>Phone</h4>
                  <p>+91-75033-22415</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/PLANT_TECH_LOGO.png" alt="Planttech Engineering Logo" className="logo" />
              <span>Planttech Engineering Pvt. Ltd.</span>
            </div>
            <p>&copy; 2024 Planttech Engineering Pvt. Ltd. All rights reserved.</p>
          </div>
      </div>
      </footer>
      </div>
  )
}

export default App
