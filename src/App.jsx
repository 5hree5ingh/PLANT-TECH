import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Download from './Download'
import Brochure from './Brochure'
import BrochureViewer from './BrochureViewer'
import './App.css'


function Home() {
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
      // Web3Forms API - Free forever!
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '094878ad-0b9c-4d73-91dd-9d8a7207a1c8',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission from Planttech Website'
        })
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error sending message:', error)
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
                <button className="btn btn-primary" onClick={() => window.open('/brochure', '_blank')}>Download Brochure</button>
                <button className="btn btn-secondary" onClick={() => window.open('https://wa.me/918130000846?text=Hello%20Planttech%20Engineering!%20I\'m%20interested%20in%20your%20process%20machinery%20and%20turnkey%20solutions.%20Could%20you%20provide%20me%20with%20more%20information%20and%20a%20quote%3F', '_blank')}>Get Quote</button>
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
                  <li><i className="icon-check"></i> Custom solutions tailored to your specific production needs</li>
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
                <li onClick={() => toggleProductItemDescription('reaction-vessel')} style={{ cursor: 'pointer' }}>
                  Reaction Vessel
                  {expandedProductItem === 'reaction-vessel' && <div className="product-item-description">Stainless steel vessels for chemical reactions with temperature and pressure control.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('anfd')} style={{ cursor: 'pointer' }}>
                  Agitated Nutsche Filter Dryer (ANFD)
                  {expandedProductItem === 'anfd' && <div className="product-item-description">Integrated filtration and drying system for pharmaceutical and chemical processes.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('heat-exchanger')} style={{ cursor: 'pointer' }}>
                  Shell & Tube Type Heat Exchanger
                  {expandedProductItem === 'heat-exchanger' && <div className="product-item-description">Efficient heat transfer equipment for industrial heating and cooling applications.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('blender')} style={{ cursor: 'pointer' }}>
                  Blender
                  {expandedProductItem === 'blender' && <div className="product-item-description">High-speed mixing equipment for uniform blending of powders and liquids.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('other-process')} style={{ cursor: 'pointer' }}>
                  Other Process Equipment
                  {expandedProductItem === 'other-process' && <div className="product-item-description">Customized process equipment designed for specific manufacturing requirements.</div>}
                </li>
              </ul>
            </div>

            <div className="product-category">
              <h3>Turnkey Projects</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('herbal-extraction')} style={{ cursor: 'pointer' }}>
                  Herbal Extraction
                  {expandedProductItem === 'herbal-extraction' && <div className="product-item-description">Complete plant setup for extracting active compounds from medicinal herbs.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('essential-oil')} style={{ cursor: 'pointer' }}>
                  Essential Oil Extraction
                  {expandedProductItem === 'essential-oil' && <div className="product-item-description">Steam distillation systems for producing high-quality essential oils from plants.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('mentha-oil')} style={{ cursor: 'pointer' }}>
                  Mentha Oil Distillation Plant
                  {expandedProductItem === 'mentha-oil' && <div className="product-item-description">Specialized distillation equipment for mentha oil production with high purity.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('menthol-crystal')} style={{ cursor: 'pointer' }}>
                  Menthol Crystal Plant
                  {expandedProductItem === 'menthol-crystal' && <div className="product-item-description">Crystallization and purification systems for menthol crystal manufacturing.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('peppermint-oil')} style={{ cursor: 'pointer' }}>
                  Peppermint Oil Distillation Plant
                  {expandedProductItem === 'peppermint-oil' && <div className="product-item-description">Complete distillation setup for peppermint oil extraction and processing.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('used-oil-recycling')} style={{ cursor: 'pointer' }}>
                  Used Oil Recycling Plant
                  {expandedProductItem === 'used-oil-recycling' && <div className="product-item-description">Environmental solution for recycling and purifying used industrial oils.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('solvent-recovery')} style={{ cursor: 'pointer' }}>
                  Solvent Recovery Plant
                  {expandedProductItem === 'solvent-recovery' && <div className="product-item-description">Cost-effective solvent recovery systems for chemical and pharmaceutical industries.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('dairy-plants')} style={{ cursor: 'pointer' }}>
                  Dairy Plants
                  {expandedProductItem === 'dairy-plants' && <div className="product-item-description">Complete dairy processing plants for milk, cheese, and dairy product manufacturing.</div>}
                </li>
              </ul>
            </div>

            <div className="product-category">
              <h3>Material Handling System (Conveyor)</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('screw-conveyor')} style={{ cursor: 'pointer' }}>
                  Screw Conveyor
                  {expandedProductItem === 'screw-conveyor' && <div className="product-item-description">Helical screw mechanism for efficient horizontal and inclined material transport.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('pneumatic-conveying')} style={{ cursor: 'pointer' }}>
                  Pneumatic Conveying System
                  {expandedProductItem === 'pneumatic-conveying' && <div className="product-item-description">Air-powered system for dust-free transportation of powders and granular materials.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('belt-conveyor')} style={{ cursor: 'pointer' }}>
                  Belt Conveyor & Bucket Elevator
                  {expandedProductItem === 'belt-conveyor' && <div className="product-item-description">Continuous belt system with vertical bucket elevators for bulk material handling.</div>}
                </li>
              </ul>
            </div>

            <div className="product-category">
              <h3>Solvent</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('dmso')} style={{ cursor: 'pointer' }}>
                  Di Methyl Sulfoxide (DMSO)
                  {expandedProductItem === 'dmso' && <div className="product-item-description">High-purity polar aprotic solvent for pharmaceutical and chemical applications.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('mix-solvent')} style={{ cursor: 'pointer' }}>
                  Mix Solvent
                  {expandedProductItem === 'mix-solvent' && <div className="product-item-description">Customized solvent blends for specific industrial and laboratory processes.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('sulfolane')} style={{ cursor: 'pointer' }}>
                  Sulfolane
                  {expandedProductItem === 'sulfolane' && <div className="product-item-description">Industrial solvent for gas processing and extraction applications.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('tbtc')} style={{ cursor: 'pointer' }}>
                  Tri Butyl Tin Chloride
                  {expandedProductItem === 'tbtc' && <div className="product-item-description">Specialized organotin compound for catalytic and chemical synthesis processes.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('toluene')} style={{ cursor: 'pointer' }}>
                  Toluene
                  {expandedProductItem === 'toluene' && <div className="product-item-description">Aromatic hydrocarbon solvent for paints, adhesives, and chemical manufacturing.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('acetonitrile')} style={{ cursor: 'pointer' }}>
                  Acetonitrile
                  {expandedProductItem === 'acetonitrile' && <div className="product-item-description">Polar aprotic solvent for HPLC, pharmaceutical synthesis, and analytical chemistry.</div>}
                </li>
              </ul>
            </div>

            <div className="product-category">
              <h3>Herbal Division</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('herbal-intro')} style={{ cursor: 'pointer' }}>
                  Introduction
                  {expandedProductItem === 'herbal-intro' && <div className="product-item-description">Overview of our specialized herbal processing capabilities and expertise.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('herbal-products')} style={{ cursor: 'pointer' }}>
                  Products
                  {expandedProductItem === 'herbal-products' && <div className="product-item-description">Complete range of herbal extracts, oils, and natural product formulations.</div>}
                </li>
              </ul>
            </div>

            <div className="product-category">
              <h3>Pollution Control</h3>
              <ul>
                <li onClick={() => toggleProductItemDescription('dust-extraction')} style={{ cursor: 'pointer' }}>
                  Dust Extraction System
                  {expandedProductItem === 'dust-extraction' && <div className="product-item-description">Industrial dust collection systems for clean air and worker safety.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('ash-handling')} style={{ cursor: 'pointer' }}>
                  Ash Handling System
                  {expandedProductItem === 'ash-handling' && <div className="product-item-description">Automated systems for collection, transport, and disposal of industrial ash.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('air-pollution')} style={{ cursor: 'pointer' }}>
                  Air Pollution Control
                  {expandedProductItem === 'air-pollution' && <div className="product-item-description">Comprehensive air quality management systems for environmental compliance.</div>}
                </li>
                <li onClick={() => toggleProductItemDescription('wet-scrubber')} style={{ cursor: 'pointer' }}>
                  Wet Scrubber
                  {expandedProductItem === 'wet-scrubber' && <div className="product-item-description">Gas cleaning equipment using liquid scrubbing for pollutant removal.</div>}
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
                <img src="/brochure-reaction-vessel.png" alt="Reaction Vessel" />
              </div>
              <h3>Reaction Vessel</h3>
              <p>Multi-chamber, jacketed, vacuum-compatible, tailored for chemical reactions</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-rotatory-extractor.png" alt="Rotary Extractor" />
              </div>
              <h3>Rotary Extractor</h3>
              <p>High-efficiency extraction system for herbal and pharmaceutical applications</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-heat-exchanger.png" alt="Condenser/Heat Exchanger" />
              </div>
              <h3>Condenser/Heat Exchanger</h3>
              <p>Shell & tube, coil type for efficient heat transfer and condensation</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-distillation-column.png" alt="Distillation Column" />
              </div>
              <h3>Distillation Column</h3>
              <p>Packed/tray columns for azeotropic & fractional distillation</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-ribbon-blender.png" alt="Ribbon Blender" />
              </div>
              <h3>Ribbon Blender</h3>
              <p>Efficient mixing equipment for uniform blending of powders</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-octagonal-blender.png" alt="Octagonal Blender" />
              </div>
              <h3>Octagonal Blender</h3>
              <p>Tumble blending system for gentle, homogeneous powder mixing</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-storage-tanks.png" alt="Storage Tanks" />
              </div>
              <h3>Storage Tanks</h3>
              <p>SS / food-grade with jacket options, CIP-friendly design</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-limpet-reactor.png" alt="Limpet Reactor" />
              </div>
              <h3>Limpet Reactor</h3>
              <p>Jacketed reactor with limpet coil for precise temperature control</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-evaporator.png" alt="Evaporator" />
              </div>
              <h3>Evaporator</h3>
              <p>Falling-film, forced-circulation systems for high concentration processes</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-pneumatic-conveying.png" alt="CIP System" />
              </div>
              <h3>CIP System</h3>
              <p>Clean-in-place automated cleaning systems for process equipment</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-agitator-filter.png" alt="Agitator Nutsche Filter" />
              </div>
              <h3>Agitator Nutsche Filter</h3>
              <p>Integrated filtration and drying system for pharmaceutical processes</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-powder-mixing.png" alt="Powder Liquid Mixing" />
              </div>
              <h3>Powder Liquid Mixing</h3>
              <p>High-speed mixing equipment for uniform powder-liquid blending</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-screw-conveyor.png" alt="Screw Conveyor" />
              </div>
              <h3>Screw Conveyor</h3>
              <p>Helical screw mechanism for efficient material transport</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-belt-conveyor.jpg" alt="Belt Conveyor" />
              </div>
              <h3>Belt Conveyor</h3>
              <p>Continuous belt system for bulk material handling</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-wet-scrubber.png" alt="Wet Scrubber" />
              </div>
              <h3>Wet Scrubber</h3>
              <p>Gas cleaning equipment using liquid scrubbing for pollutant removal</p>
            </div>
            <div className="equipment-card">
              <div className="equipment-image">
                <img src="/brochure-vacuum-dryer.png" alt="Vacuum Tray Dryer" />
              </div>
              <h3>Vacuum Tray Dryer</h3>
              <p>Low-temperature drying system for heat-sensitive materials</p>
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
            <div className="team-member" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/vipul-upadhyay-932b5594/', '_blank')}>
              <div className="member-avatar">
                <img src="/vipul.jpeg" alt="Mr. Vipul" />
              </div>
              <h3>Mr. Vipul Upadhyay</h3>
              <p className="member-role">M. Pharma, 16 years' experience</p>
              <p className="member-expertise">Herbal, pharmaceuticals, nutraceuticals & formulations</p>
            </div>
            <div className="team-member" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/ashish-singh-01371326/', '_blank')}>
              <div className="member-avatar">
                <img src="/ashish.jpeg" alt="Engg. Ashish" />
              </div>
              <h3>Er. Ashish Singh  </h3>
              <p className="member-role">Chemical Engineer, 14 years' experience</p>
              <p className="member-expertise">Process engineering & plant design</p>
              <a
                href="https://www.agricultureinformation.com/forums/threads/mr-ashish-singh-how-to-set-up-ashwagandha-extract-processing-unit-and-also-provides-consultancy-for-setting-up-any-type-of-herbal-extraction-unit.210046/"
                target="_blank"
                rel="noopener noreferrer"
                className="member-article"
                onClick={(e) => e.stopPropagation()}
              >
                Featured Article: Ashwagandha Extraction Plant Setup
              </a>
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
              <div className="project-image">
                <img src="/monard.png" alt="Monard Industries" />
              </div>
              <h3>Monard Industries</h3>
              <p>Turnkey herbal extraction & processing setup</p>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/himalayan.jpg" alt="Himalayan Nutraceuticals" />
              </div>
              <h3>Himalayan Nutraceuticals</h3>
              <p>Customized machinery for natural actives & formulations</p>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/JBLD.png" alt="JBLD" />
              </div>
              <h3>JBLD</h3>
              <p>End-to-end plant solutions for herbal & wellness products</p>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/bharat-rasayan.png" alt="Bharat Rasayan" />
              </div>
              <h3>Bharat Rasayan</h3>
              <p>Comprehensive herbal processing & extraction solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginBottom: '40px' }}>
              {/* Row 1 - Corporate Office and Manufacturing Unit 1 */}
              <div className="contact-item">
                <i className="icon-location"></i>
                <div>
                  <h4>Corporate Office</h4>
                  <p>Gali no.1, Uttam colony<br />
                    Near post office, Jhajjar road<br />
                    Bahadurgarh<br />
                    Haryana, India - 124507</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon-location"></i>
                <div>
                  <h4>Manufacturing Unit 1</h4>
                  <p>Khasara No. 587, Akbarpuruood<br />
                    Behind Shree Cement<br />
                    Laksar Road<br />
                    Lakshar, Haridwar<br />
                    Uttarakhand, India - 247663</p>
                </div>
              </div>

              {/* Row 2 - Manufacturing Unit 2 and Sales Inquiry */}
              <div className="contact-item">
                <i className="icon-location"></i>
                <div>
                  <h4>Manufacturing Unit 2</h4>
                  <p>Plot no 1-11, Mini Industrial Estate<br />
                    Pipli, Haridwar, Laksar Road<br />
                    Laksar, Haridwar<br />
                    Uttarakhand, India - 247663</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="icon-email"></i>
                <div>
                  <h4>Sales Inquiry</h4>
                  <p>info.planttech.co.in<br />
                    sales@planttech.co.in<br />
                    parveen@planttech.co.in <br />
                    +91-8130000846</p>
                </div>
              </div>

              {/* Row 3 - Purchase Inquiry (full width) */}
              <div className="contact-item" style={{ gridColumn: '1 / -1' }}>
                <i className="icon-email"></i>
                <div>
                  <h4>Purchase Inquiry</h4>
                  <p>planttechengineeringpvtltd@gmail.com<br />
                    info@planttech.co.in<br />
                    +91-8840804180</p>
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
          <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="footer-logo">
                <img src="/PLANT_TECH_LOGO.png" alt="Planttech Engineering Logo" className="logo" />
                <span>Planttech Engineering Pvt. Ltd.</span>
              </div>
              <p>&copy; 2024 Planttech Engineering Pvt. Ltd. All rights reserved.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px', color: '#32cd32', margin: '0' }}>
                Designed by <strong style={{ color: '#32cd32' }}>Shreyansh Singh</strong>
              </p>
              <p style={{ fontSize: '13px', color: '#32cd32', margin: '4px 0 0 0' }}>
                <a href="mailto:shreyanshmainmail@gmail.com" style={{ color: '#32cd32', textDecoration: 'none' }}>shreyanshmainmail@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
      <Route path="/brochure" element={<Brochure />} />
      <Route path="/brochure-pdf" element={<BrochureViewer />} />
    </Routes>
  )
}

export default App

