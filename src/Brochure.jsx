import React from 'react'

function Brochure() {


    return (
        <div style={{
            minHeight: '100vh',
            background: '#f5f5f5',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* A4 Container - 210mm x 297mm = 793.7px x 1122.5px at 96 DPI */}
            <div style={{
                width: '210mm',
                minHeight: '297mm',
                background: 'white',
                boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Header Section with Gradient */}
                <div style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                    padding: '40px 30px',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative'
                }}>
                    {/* Company Logo */}
                    <div style={{
                        marginBottom: '20px'
                    }}>
                        <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
                            height: '80px',
                            width: 'auto',
                            filter: 'brightness(0) invert(1)'
                        }} />
                    </div>

                    {/* Company Name */}
                    <h1 style={{
                        fontSize: '42px',
                        fontWeight: '800',
                        margin: '0 0 15px 0',
                        letterSpacing: '-0.5px',
                        lineHeight: '1.2'
                    }}>
                        Planttech Engineering Pvt. Ltd.
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        margin: '0 0 8px 0',
                        lineHeight: '1.4'
                    }}>
                        Engineering Excellence for Herbal, Nutraceutical, Pharma & Chemical Industries
                    </p>

                    {/* Tagline */}
                    <p style={{
                        fontSize: '14px',
                        margin: '0 0 25px 0',
                        opacity: '0.95',
                        lineHeight: '1.4'
                    }}>
                        State-of-the-art process machinery from the foothills of the Himalayas
                    </p>

                    {/* Certification Badge */}
                    <div style={{
                        display: 'inline-block',
                        padding: '12px 28px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '2px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                    }}>
                        ISO 9001:2015, MSME Certified Company
                    </div>
                </div>

                {/* Hero Image Section */}
                <div style={{
                    height: '400px',
                    background: 'linear-gradient(rgba(30, 58, 138, 0.1), rgba(5, 150, 105, 0.1)), url("/hero-plant.jpg") center center / cover no-repeat',
                    position: 'relative'
                }}>
                    {/* Overlay gradient for better text visibility if needed */}
                </div>

                {/* Sectors We Serve Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                    padding: '35px 30px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '800',
                        margin: '0 0 8px 0',
                        letterSpacing: '1px'
                    }}>
                        SECTORS WE SERVE
                    </h2>

                    {/* Decorative underline */}
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'white',
                        margin: '0 auto 25px auto'
                    }}></div>

                    {/* Sectors List */}
                    <div style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        lineHeight: '2'
                    }}>
                        <p style={{ margin: '0 0 8px 0' }}>
                            PHARMACEUTICALS • AGRO CHEMICAL • FOOD AND BEVERAGE • CHEMICALS
                        </p>
                        <p style={{ margin: '0 0 8px 0' }}>
                            PAINTING INDUSTRIES • DAIRY • REFINERY • POWER • CEMENT
                        </p>
                        <p style={{ margin: '0' }}>
                            SUGAR MILL • STEEL • OIL AND GAS • PAPER AND PULP
                        </p>
                    </div>
                </div>

                {/* PAGE 2: Equipment Showcase */}
                <div style={{
                    width: '210mm',
                    minHeight: '297mm',
                    background: 'white',
                    boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
                    marginTop: '20px',
                    padding: '40px 30px'
                }}>
                    {/* Header */}
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: '800',
                        textAlign: 'center',
                        marginBottom: '10px',
                        color: '#1e3a8a',
                        letterSpacing: '-0.5px'
                    }}>
                        Our Specialized Equipment
                    </h2>

                    {/* Decorative underline */}
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                        margin: '0 auto 35px auto'
                    }}></div>

                    {/* Equipment Grid - 4 columns x 4 rows */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '15px',
                        marginBottom: '40px'
                    }}>
                        {[
                            { name: 'Reaction Vessel', img: '/brochure-reaction-vessel.png' },
                            { name: 'Pressure Vessel', img: '/brochure-pressure-vessel.png' },
                            { name: 'Heat Exchanger', img: '/brochure-heat-exchanger.png' },
                            { name: 'Distillation Column', img: '/brochure-distillation-column.png' },
                            { name: 'Ribbon Blender', img: '/brochure-ribbon-blender.png' },
                            { name: 'Octagonal Blender', img: '/brochure-octagonal-blender.png' },
                            { name: 'Storage Tanks', img: '/brochure-storage-tanks.png' },
                            { name: 'Limpet Reactor', img: '/brochure-limpet-reactor.png' },
                            { name: 'Mass Mixer', img: '/brochure-mass-mixer.png' },
                            { name: 'Pneumatic Conveying', img: '/brochure-pneumatic-conveying.png' },
                            { name: 'Agitator Nutsche Filter', img: '/brochure-agitator-filter.png' },
                            { name: 'Powder Liquid Mixing', img: '/brochure-powder-mixing.png' },
                            { name: 'Screw Conveyor', img: '/brochure-screw-conveyor.png' },
                            { name: 'Belt Conveyor', img: '/brochure-belt-conveyor.png' },
                            { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
                            { name: 'Vacuum Tray Dryer', img: '/brochure-vacuum-dryer.png' }
                        ].map((equipment, index) => (
                            <div key={index} style={{
                                background: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                border: '1px solid #e5e7eb'
                            }}>
                                {/* Equipment Image */}
                                <div style={{
                                    height: '100px',
                                    background: `#f9fafb url('${equipment.img}') center center / contain no-repeat`,
                                    borderBottom: '1px solid #e5e7eb'
                                }}></div>

                                {/* Equipment Name with Gradient */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                    padding: '10px',
                                    textAlign: 'center'
                                }}>
                                    <h4 style={{
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        color: 'white',
                                        margin: 0,
                                        lineHeight: '1.3'
                                    }}>
                                        {equipment.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Product List Section */}
                    <div style={{
                        background: '#f0f9ff',
                        borderRadius: '12px',
                        padding: '30px',
                        border: '2px solid #bfdbfe'
                    }}>
                        <h3 style={{
                            fontSize: '28px',
                            fontWeight: '800',
                            textAlign: 'center',
                            marginBottom: '8px',
                            color: '#0c7490',
                            letterSpacing: '0.5px'
                        }}>
                            PRODUCT LIST
                        </h3>

                        {/* Decorative underline */}
                        <div style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            margin: '0 auto 25px auto'
                        }}></div>

                        {/* 3-Column List */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px 30px',
                            fontSize: '13px',
                            color: '#374151'
                        }}>
                            <div style={{ lineHeight: '2' }}>
                                <div>✓ Process Equipment</div>
                                <div>✓ Reaction Vessel</div>
                                <div>✓ Pressure Vessel</div>
                                <div>✓ Heat Exchanger</div>
                                <div>✓ Distillation Column</div>
                                <div>✓ Ribbon Blender</div>
                            </div>
                            <div style={{ lineHeight: '2' }}>
                                <div>✓ Octagonal Blender</div>
                                <div>✓ Condenser</div>
                                <div>✓ Storage Tanks</div>
                                <div>✓ Limpet Reactor</div>
                                <div>✓ Mass Mixer</div>
                                <div>✓ Agitator Nutsche Filter</div>
                            </div>
                            <div style={{ lineHeight: '2' }}>
                                <div>✓ Powder, Liquid Mixing</div>
                                <div>✓ Screw Conveyor</div>
                                <div>✓ Belt Conveyor</div>
                                <div>✓ Wet Scrubber</div>
                                <div>✓ Vacuum Tray Dryer</div>
                                <div>✓ And many more...</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 3: About Us - REDESIGNED */}
                <div style={{
                    width: '210mm',
                    minHeight: '297mm',
                    background: 'white',
                    boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
                    marginTop: '20px',
                    overflow: 'hidden'
                }}>
                    {/* Hero Section with Gradient Background */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #0c7490 50%, #059669 100%)',
                        padding: '45px 40px',
                        color: 'white',
                        position: 'relative'
                    }}>
                        <h2 style={{
                            fontSize: '42px',
                            fontWeight: '900',
                            margin: '0 0 15px 0',
                            letterSpacing: '-1px',
                            textAlign: 'center'
                        }}>
                            About Planttech Engineering
                        </h2>

                        <div style={{
                            width: '100px',
                            height: '4px',
                            background: 'white',
                            margin: '0 auto 25px auto'
                        }}></div>

                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            textAlign: 'center',
                            margin: '0 0 30px 0',
                            opacity: '0.95',
                            maxWidth: '85%',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            Planttech Engineering Pvt. Ltd. is a trusted manufacturer of state-of-the-art process machinery serving the herbal, nutraceutical, pharmaceutical, and chemical industries. Based in Haridwar, Uttarakhand, at the foothills of the Himalayas, we deliver innovative, reliable, and customer-focused engineering solutions for plant setups worldwide.
                        </p>

                        {/* Company Stats */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '25px',
                            marginTop: '30px'
                        }}>
                            {[
                                { number: 'ISO 9001:2015', label: 'Certified' },
                                { number: 'MSME', label: 'Registered' },
                                { number: 'Haridwar', label: 'Based In' }
                            ].map((stat, index) => (
                                <div key={index} style={{
                                    textAlign: 'center',
                                    padding: '20px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    borderRadius: '12px',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <div style={{
                                        fontSize: '20px',
                                        fontWeight: '800',
                                        marginBottom: '5px'
                                    }}>
                                        {stat.number}
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        opacity: '0.9',
                                        fontWeight: '500'
                                    }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div style={{
                        padding: '40px'
                    }}>
                        {/* Why Choose Us Section */}
                        <h3 style={{
                            fontSize: '32px',
                            fontWeight: '800',
                            textAlign: 'center',
                            marginBottom: '12px',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Why Choose Us
                        </h3>

                        <p style={{
                            textAlign: 'center',
                            fontSize: '14px',
                            color: '#6b7280',
                            marginBottom: '35px'
                        }}>
                            Comprehensive solutions for your industrial needs
                        </p>

                        {/* Features Grid - 3 columns */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '18px',
                            marginBottom: '35px'
                        }}>
                            {[
                                { title: 'Industry Experts', desc: 'Product & machinery specialists' },
                                { title: 'Zero Charges', desc: 'No consultancy fees' },
                                { title: 'End-to-End', desc: 'Complete support & delivery' },
                                { title: 'Installation', desc: 'Onsite commissioning team' },
                                { title: 'Sales Guarantee', desc: 'For herbal extracts' },
                                { title: 'Lab Setup', desc: 'Chemical & microbial labs' },
                                { title: 'Raw Materials', desc: 'Sourcing & selection guidance' },
                                { title: 'Custom Solutions', desc: 'Tailored to your needs' },
                                { title: 'Worldwide', desc: 'Global plant setups' }
                            ].map((feature, index) => (
                                <div key={index} style={{
                                    textAlign: 'center',
                                    padding: '20px 15px',
                                    background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                    borderRadius: '12px',
                                    border: '2px solid #e0f2fe',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '0 auto 12px auto',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 12px rgba(30, 58, 138, 0.25)'
                                    }}>
                                        ✓
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        fontWeight: '700',
                                        color: '#1e3a8a',
                                        marginBottom: '4px'
                                    }}>
                                        {feature.title}
                                    </div>
                                    <div style={{
                                        fontSize: '11px',
                                        color: '#6b7280',
                                        lineHeight: '1.4'
                                    }}>
                                        {feature.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA Section */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            padding: '25px',
                            borderRadius: '16px',
                            textAlign: 'center',
                            color: 'white',
                            boxShadow: '0 8px 24px rgba(30, 58, 138, 0.3)'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                fontWeight: '800',
                                marginBottom: '8px'
                            }}>
                                Engineering Excellence Since Inception
                            </div>
                            <div style={{
                                fontSize: '14px',
                                opacity: '0.95'
                            }}>
                                State-of-the-art process machinery from the foothills of the Himalayas
                            </div>
                        </div>
                    </div>
                </div>

                {/* PAGE 4: Turnkey Projects + Contact Footer */}
                <div style={{
                    width: '210mm',
                    minHeight: '297mm',
                    background: 'white',
                    boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Turnkey Projects Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                        padding: '20px 30px',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            fontSize: '34px',
                            fontWeight: '900',
                            color: 'white',
                            margin: 0,
                            letterSpacing: '0.5px'
                        }}>
                            Turnkey Projects
                        </h2>
                    </div>

                    {/* Turnkey Projects Content */}
                    <div style={{
                        flex: 1,
                        padding: '25px 30px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Top Section: List + 2x2 images */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.4fr',
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            {/* Project List */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                paddingRight: '10px'
                            }}>
                                {[
                                    'MicroBrewery',
                                    'Essential Oil Extraction Plant',
                                    'Solvent Recovery Plant',
                                    'Dairy Plant',
                                    'Wet Scrubber',
                                    'Dust Extraction System',
                                    'Ash Handling System',
                                    'Used Oil Recycling Plant'
                                ].map((project, idx) => (
                                    <div key={idx} style={{
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        color: '#1f2937',
                                        padding: '6px 0',
                                        borderBottom: idx < 7 ? '1px solid #e5e7eb' : 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#0891b2',
                                            flexShrink: 0
                                        }}></span>
                                        {project}
                                    </div>
                                ))}
                            </div>

                            {/* Top 2x2 Project Images */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '10px'
                            }}>
                                {[
                                    { name: 'Micro Brewery', img: '/brochure-reaction-vessel.png' },
                                    { name: 'Essential Oil Extraction Plant', img: '/brochure-distillation-column.png' },
                                    { name: 'Solvent Recovery Plant', img: '/brochure-heat-exchanger.png' },
                                    { name: 'Dairy Plant', img: '/brochure-storage-tanks.png' }
                                ].map((project, idx) => (
                                    <div key={idx} style={{
                                        borderRadius: '6px',
                                        overflow: 'hidden',
                                        border: '1px solid #e5e7eb',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                                    }}>
                                        <div style={{
                                            height: '100px',
                                            background: `#f8fafc url('${project.img}') center center / cover no-repeat`
                                        }}></div>
                                        <div style={{
                                            padding: '6px',
                                            textAlign: 'center',
                                            fontSize: '10px',
                                            fontWeight: '600',
                                            color: '#374151',
                                            background: '#f8fafc'
                                        }}>
                                            {project.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row: 4 project images */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '10px',
                            marginBottom: '25px'
                        }}>
                            {[
                                { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
                                { name: 'Dust Extraction System', img: '/brochure-pneumatic-conveying.png' },
                                { name: 'Ash Handling System', img: '/brochure-belt-conveyor.png' },
                                { name: 'Used Oil Recycling Plant', img: '/brochure-mass-mixer.png' }
                            ].map((project, idx) => (
                                <div key={idx} style={{
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    border: '1px solid #e5e7eb',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                                }}>
                                    <div style={{
                                        height: '100px',
                                        background: `#f8fafc url('${project.img}') center center / cover no-repeat`
                                    }}></div>
                                    <div style={{
                                        padding: '6px',
                                        textAlign: 'center',
                                        fontSize: '10px',
                                        fontWeight: '600',
                                        color: '#374151',
                                        background: '#f8fafc'
                                    }}>
                                        {project.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Horizontal Divider */}
                        <div style={{
                            width: '100%',
                            height: '3px',
                            background: 'linear-gradient(90deg, #0891b2, #059669)',
                            marginBottom: '25px'
                        }}></div>

                        {/* Contact Footer Section */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '20px'
                        }}>
                            {/* Logo + Company Name */}
                            <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
                                height: '60px',
                                width: 'auto',
                                marginBottom: '10px'
                            }} />
                            <h2 style={{
                                fontSize: '26px',
                                fontWeight: '900',
                                color: '#0e7490',
                                margin: '0 0 6px 0',
                                letterSpacing: '0.5px'
                            }}>
                                PLANTTECH ENGINEERING PVT. LTD.
                            </h2>
                            <div style={{
                                fontSize: '12px',
                                fontWeight: '600',
                                color: '#6b7280',
                                padding: '4px 16px',
                                background: '#f0f9ff',
                                borderRadius: '12px',
                                border: '1px solid #bfdbfe'
                            }}>
                                ISO 9001:2015, MSME Certified Company
                            </div>
                        </div>

                        {/* Address + Contact Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                            marginBottom: '15px'
                        }}>
                            {/* Corporate Office */}
                            <div>
                                <h4 style={{
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    color: '#0e7490',
                                    margin: '0 0 6px 0',
                                    borderBottom: '2px solid #0891b2',
                                    paddingBottom: '4px',
                                    display: 'inline-block'
                                }}>
                                    Corporate Office:
                                </h4>
                                <p style={{
                                    fontSize: '12px',
                                    lineHeight: '1.6',
                                    color: '#374151',
                                    margin: 0,
                                    fontWeight: '500'
                                }}>
                                    Khasara No. 587, Akbarpuruood<br />
                                    Behind Shree Cement, Lakshar Road<br />
                                    Lakshar, Haridwar<br />
                                    Uttarakhand, India - 247663
                                </p>
                            </div>

                            {/* Manufacturing Unit */}
                            <div>
                                <h4 style={{
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    color: '#0e7490',
                                    margin: '0 0 6px 0',
                                    borderBottom: '2px solid #0891b2',
                                    paddingBottom: '4px',
                                    display: 'inline-block'
                                }}>
                                    Manufacturing Unit:
                                </h4>
                                <p style={{
                                    fontSize: '12px',
                                    lineHeight: '1.6',
                                    color: '#374151',
                                    margin: 0,
                                    fontWeight: '500'
                                }}>
                                    Plot no 1-11, Mini Industrial Estate<br />
                                    Pipli, Haridwar, Laksar Road<br />
                                    Laksar, Haridwar<br />
                                    Uttarakhand, India - 247663
                                </p>
                            </div>
                        </div>

                        {/* Email + Call Row */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                            marginBottom: '15px'
                        }}>
                            <div>
                                <h4 style={{
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    color: '#0e7490',
                                    margin: '0 0 4px 0',
                                    borderBottom: '2px solid #0891b2',
                                    paddingBottom: '4px',
                                    display: 'inline-block'
                                }}>
                                    Email Us:
                                </h4>
                                <p style={{
                                    fontSize: '11px',
                                    lineHeight: '1.8',
                                    color: '#374151',
                                    margin: 0,
                                    fontWeight: '500'
                                }}>
                                    info@planttech.co.in, sales@planttech.co.in<br />
                                    planttechengineeringpvtltd@gmail.com
                                </p>
                            </div>
                            <div>
                                <h4 style={{
                                    fontSize: '14px',
                                    fontWeight: '800',
                                    color: '#0e7490',
                                    margin: '0 0 4px 0',
                                    borderBottom: '2px solid #0891b2',
                                    paddingBottom: '4px',
                                    display: 'inline-block'
                                }}>
                                    Call Us:
                                </h4>
                                <p style={{
                                    fontSize: '12px',
                                    lineHeight: '1.8',
                                    color: '#374151',
                                    margin: 0,
                                    fontWeight: '600'
                                }}>
                                    +91-8130000846 (Sales)<br />
                                    +91-8840804180 (Purchase)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Website Footer Bar */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                        padding: '12px',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <div style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            letterSpacing: '0.5px'
                        }}>
                            www.planttech.co.in
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Brochure
