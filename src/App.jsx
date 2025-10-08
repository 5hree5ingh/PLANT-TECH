import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [expandedProductItem, setExpandedProductItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'equipment', 'gallery', 'team', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            // Update the URL hash to match the current section
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, null, `#${section}`)
            }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const toggleProductItemDescription = (productItemId) => {
    setExpandedProductItem(expandedProductItem === productItemId ? null : productItemId)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = 'service_planttech' // You'll need to create this in EmailJS
      const templateId = 'template_contact' // You'll need to create this in EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY' // You'll need to get this from EmailJS

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'info.planttech@gmail.com'
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
            <a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={() => scrollToSection('gallery')}>Gallery</a>
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
                <li onClick={() => toggleProductItemDescription('reaction-vessel')} style={{cursor: 'pointer'}}>
                  Reaction Vessel
                  {expandedProductItem === 'reaction-vessel' && <div className="product-item-description">Stainless steel vessels for chemical reactions with temperature and pressure control.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('anfd')} style={{cursor: 'pointer'}}>
                  Agitated Nutsche Filter Dryer (ANFD)
                  {expandedProductItem === 'anfd' && <div className="product-item-description">Integrated filtration and drying system for pharmaceutical and chemical processes.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('heat-exchanger')} style={{cursor: 'pointer'}}>
                  Shell & Tube Type Heat Exchanger
                  {expandedProductItem === 'heat-exchanger' && <div className="product-item-description">Efficient heat transfer equipment for industrial heating and cooling applications.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('blender')} style={{cursor: 'pointer'}}>
                  Blender
                  {expandedProductItem === 'blender' && <div className="product-item-description">High-speed mixing equipment for uniform blending of powders and liquids.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('other-process')} style={{cursor: 'pointer'}}>
                  Other Process Equipment
                  {expandedProductItem === 'other-process' && <div className="product-item-description">Customized process equipment designed for specific manufacturing requirements.</div>}
                </li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Turnkey Projects</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('herbal-extraction')} style={{cursor: 'pointer'}}>
                  Herbal Extraction
                  {expandedProductItem === 'herbal-extraction' && <div className="product-item-description">Complete plant setup for extracting active compounds from medicinal herbs.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('essential-oil')} style={{cursor: 'pointer'}}>
                  Essential Oil Extraction
                  {expandedProductItem === 'essential-oil' && <div className="product-item-description">Steam distillation systems for producing high-quality essential oils from plants.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('mentha-oil')} style={{cursor: 'pointer'}}>
                  Mentha Oil Distillation Plant
                  {expandedProductItem === 'mentha-oil' && <div className="product-item-description">Specialized distillation equipment for mentha oil production with high purity.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('menthol-crystal')} style={{cursor: 'pointer'}}>
                  Menthol Crystal Plant
                  {expandedProductItem === 'menthol-crystal' && <div className="product-item-description">Crystallization and purification systems for menthol crystal manufacturing.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('peppermint-oil')} style={{cursor: 'pointer'}}>
                  Peppermint Oil Distillation Plant
                  {expandedProductItem === 'peppermint-oil' && <div className="product-item-description">Complete distillation setup for peppermint oil extraction and processing.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('used-oil-recycling')} style={{cursor: 'pointer'}}>
                  Used Oil Recycling Plant
                  {expandedProductItem === 'used-oil-recycling' && <div className="product-item-description">Environmental solution for recycling and purifying used industrial oils.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('solvent-recovery')} style={{cursor: 'pointer'}}>
                  Solvent Recovery Plant
                  {expandedProductItem === 'solvent-recovery' && <div className="product-item-description">Cost-effective solvent recovery systems for chemical and pharmaceutical industries.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('dairy-plants')} style={{cursor: 'pointer'}}>
                  Dairy Plants
                  {expandedProductItem === 'dairy-plants' && <div className="product-item-description">Complete dairy processing plants for milk, cheese, and dairy product manufacturing.</div>}
                </li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Material Handling System (Conveyor)</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('screw-conveyor')} style={{cursor: 'pointer'}}>
                  Screw Conveyor
                  {expandedProductItem === 'screw-conveyor' && <div className="product-item-description">Helical screw mechanism for efficient horizontal and inclined material transport.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('pneumatic-conveying')} style={{cursor: 'pointer'}}>
                  Pneumatic Conveying System
                  {expandedProductItem === 'pneumatic-conveying' && <div className="product-item-description">Air-powered system for dust-free transportation of powders and granular materials.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('belt-conveyor')} style={{cursor: 'pointer'}}>
                  Belt Conveyor & Bucket Elevator
                  {expandedProductItem === 'belt-conveyor' && <div className="product-item-description">Continuous belt system with vertical bucket elevators for bulk material handling.</div>}
                </li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Solvent</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('dmso')} style={{cursor: 'pointer'}}>
                  Di Methyl Sulfoxide (DMSO)
                  {expandedProductItem === 'dmso' && <div className="product-item-description">High-purity polar aprotic solvent for pharmaceutical and chemical applications.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('mix-solvent')} style={{cursor: 'pointer'}}>
                  Mix Solvent
                  {expandedProductItem === 'mix-solvent' && <div className="product-item-description">Customized solvent blends for specific industrial and laboratory processes.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('sulfolane')} style={{cursor: 'pointer'}}>
                  Sulfolane
                  {expandedProductItem === 'sulfolane' && <div className="product-item-description">Industrial solvent for gas processing and extraction applications.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('tbtc')} style={{cursor: 'pointer'}}>
                  Tri Butyl Tin Chloride
                  {expandedProductItem === 'tbtc' && <div className="product-item-description">Specialized organotin compound for catalytic and chemical synthesis processes.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('toluene')} style={{cursor: 'pointer'}}>
                  Toluene
                  {expandedProductItem === 'toluene' && <div className="product-item-description">Aromatic hydrocarbon solvent for paints, adhesives, and chemical manufacturing.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('acetonitrile')} style={{cursor: 'pointer'}}>
                  Acetonitrile
                  {expandedProductItem === 'acetonitrile' && <div className="product-item-description">Polar aprotic solvent for HPLC, pharmaceutical synthesis, and analytical chemistry.</div>}
                </li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Pollution Control</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('dust-extraction')} style={{cursor: 'pointer'}}>
                  Dust Extraction System
                  {expandedProductItem === 'dust-extraction' && <div className="product-item-description">Industrial dust collection systems for clean air and worker safety.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('ash-handling')} style={{cursor: 'pointer'}}>
                  Ash Handling System
                  {expandedProductItem === 'ash-handling' && <div className="product-item-description">Automated systems for collection, transport, and disposal of industrial ash.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('air-pollution')} style={{cursor: 'pointer'}}>
                  Air Pollution Control
                  {expandedProductItem === 'air-pollution' && <div className="product-item-description">Comprehensive air quality management systems for environmental compliance.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('wet-scrubber')} style={{cursor: 'pointer'}}>
                  Wet Scrubber
                  {expandedProductItem === 'wet-scrubber' && <div className="product-item-description">Gas cleaning equipment using liquid scrubbing for pollutant removal.</div>}
                </li>
              </ul>
            </div>
            
            <div className="product-category">
              <h3>Herbal Division</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('herbal-intro')} style={{cursor: 'pointer'}}>
                  Introduction
                  {expandedProductItem === 'herbal-intro' && <div className="product-item-description">Overview of our specialized herbal processing capabilities and expertise.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('herbal-products')} style={{cursor: 'pointer'}}>
                  Products
                  {expandedProductItem === 'herbal-products' && <div className="product-item-description">Complete range of herbal extracts, oils, and natural product formulations.</div>}
                </li>
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

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Factory Gallery</h2>
          <p className="section-subtitle">Explore our state-of-the-art manufacturing facility and equipment</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="/equipment-reactor.jpg" alt="Herbal Extraction Reactors" />
                <div className="gallery-overlay">
                  <h3>Herbal Extraction Reactors</h3>
                  <p>Multi-chamber, jacketed, vacuum-compatible reactors</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="/equipment-distillation.jpg" alt="Distillation Equipment" />
                <div className="gallery-overlay">
                  <h3>Distillation Equipment</h3>
                  <p>High-efficiency distillation & condensation systems</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="/equipment-storage.jpg" alt="Storage Tanks" />
                <div className="gallery-overlay">
                  <h3>Storage Tanks</h3>
                  <p>SS / food-grade storage with jacket options</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="/heat-exchanger.jpg" alt="Heat Exchangers" />
                <div className="gallery-overlay">
                  <h3>Heat Exchangers</h3>
                  <p>Plate, shell-tube, and spiral heat exchangers</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="/hero-plant.jpg" alt="Manufacturing Plant" />
                <div className="gallery-overlay">
                  <h3>Manufacturing Plant</h3>
                  <p>Our state-of-the-art production facility</p>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src="/equipment-reactor.jpg" alt="Process Equipment" />
                <div className="gallery-overlay">
                  <h3>Process Equipment</h3>
                  <p>Advanced processing machinery for various industries</p>
                </div>
              </div>
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
                  <p>Khasra NO. 587, Akbarpuruood, Behind Shree Cement<br />
                  Haridwar - Laksar Road, Lakshar<br />
                  Haridwar, Uttarakhand, India-247663</p>
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
                  <p>+91-8130000846<br />+91-8840804180</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Your Phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    Thank you for your message! We will get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message error">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
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
