import React from 'react'
import { useNavigate } from 'react-router-dom'

function Brochure() {
    const navigate = useNavigate()

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
                            { name: 'Reaction Vessel', img: '/equipment-reactor.jpg' },
                            { name: 'Pressure Vessel', img: '/equipment-distillation.jpg' },
                            { name: 'Heat Exchanger', img: '/heat-exchanger.jpg' },
                            { name: 'Distillation Column', img: '/equipment-distillation.jpg' },
                            { name: 'Ribbon Blender', img: '/equipment-reactor.jpg' },
                            { name: 'Octagonal Blender', img: '/equipment-distillation.jpg' },
                            { name: 'Storage Tanks', img: '/equipment-storage.jpg' },
                            { name: 'Limpet Reactor', img: '/heat-exchanger.jpg' },
                            { name: 'Mass Mixer', img: '/equipment-reactor.jpg' },
                            { name: 'Pneumatic Conveying', img: '/equipment-distillation.jpg' },
                            { name: 'Agitator Nutsche Filter', img: '/equipment-storage.jpg' },
                            { name: 'Powder Liquid Mixing', img: '/heat-exchanger.jpg' },
                            { name: 'Screw Conveyor', img: '/equipment-reactor.jpg' },
                            { name: 'Belt Conveyor', img: '/equipment-distillation.jpg' },
                            { name: 'Wet Scrubber', img: '/equipment-storage.jpg' },
                            { name: 'Vacuum Tray Dryer', img: '/heat-exchanger.jpg' }
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

                {/* PAGE 4: Contact Us - Modern Design */}
                <div style={{
                    width: '210mm',
                    minHeight: '297mm',
                    background: 'white',
                    boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Company Logo and Name Section */}
                    <div style={{
                        textAlign: 'center',
                        padding: '50px 40px 30px 40px',
                        background: 'linear-gradient(135deg, #f9fafb 0%, #f0f9ff 100%)'
                    }}>
                        <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
                            height: '70px',
                            width: 'auto',
                            marginBottom: '20px'
                        }} />
                        <h1 style={{
                            fontSize: '36px',
                            fontWeight: '900',
                            margin: '0 0 8px 0',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-0.5px'
                        }}>
                            PLANTTECH ENGINEERING PVT. LTD.
                        </h1>
                        <p style={{
                            fontSize: '13px',
                            color: '#6b7280',
                            margin: '0 0 15px 0',
                            fontWeight: '600'
                        }}>
                            ISO 9001:2015, MSME Certified Company
                        </p>
                    </div>

                    {/* Main Content - Contact Information */}
                    <div style={{
                        flex: 1,
                        padding: '40px',
                        background: '#ffffff'
                    }}>
                        {/* Two Column Layout for Offices */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '30px',
                            marginBottom: '40px'
                        }}>
                            {/* Corporate Office */}
                            <div style={{
                                background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                padding: '30px',
                                borderRadius: '16px',
                                border: '2px solid #bfdbfe'
                            }}>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: '#1e3a8a',
                                    margin: '0 0 15px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <span style={{
                                        fontSize: '24px'
                                    }}>📍</span>
                                    Corporate Office:
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: '1.8',
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
                            <div style={{
                                background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                padding: '30px',
                                borderRadius: '16px',
                                border: '2px solid #bfdbfe'
                            }}>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    color: '#1e3a8a',
                                    margin: '0 0 15px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <span style={{
                                        fontSize: '24px'
                                    }}>🏭</span>
                                    Manufacturing Unit:
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: '1.8',
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

                        {/* Email and Call Sections */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '30px',
                            marginBottom: '30px'
                        }}>
                            {/* Email Us */}
                            <div style={{
                                background: 'white',
                                padding: '25px',
                                borderRadius: '12px',
                                border: '2px solid #e5e7eb',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    color: '#1e3a8a',
                                    margin: '0 0 12px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <span style={{
                                        fontSize: '20px'
                                    }}>📧</span>
                                    Email Us:
                                </h3>
                                <div style={{
                                    fontSize: '13px',
                                    lineHeight: '2',
                                    color: '#374151',
                                    fontWeight: '500'
                                }}>
                                    <div>info.planttech.co.in</div>
                                    <div>sales@planttech.co.in</div>
                                    <div>parveen@planttech.co.in</div>
                                    <div>planttechengineeringpvtltd@gmail.com</div>
                                </div>
                            </div>

                            {/* Call Us */}
                            <div style={{
                                background: 'white',
                                padding: '25px',
                                borderRadius: '12px',
                                border: '2px solid #e5e7eb',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '800',
                                    color: '#1e3a8a',
                                    margin: '0 0 12px 0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <span style={{
                                        fontSize: '20px'
                                    }}>📞</span>
                                    Call Us:
                                </h3>
                                <div style={{
                                    fontSize: '13px',
                                    lineHeight: '2',
                                    color: '#374151',
                                    fontWeight: '500'
                                }}>
                                    <div>+91-8130000846 (Sales)</div>
                                    <div>+91-8840804180 (Purchase)</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA Box */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            padding: '30px',
                            borderRadius: '16px',
                            textAlign: 'center',
                            color: 'white',
                            boxShadow: '0 8px 24px rgba(30, 58, 138, 0.3)'
                        }}>
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: '800',
                                margin: '0 0 10px 0'
                            }}>
                                Ready to Transform Your Manufacturing?
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                margin: '0 0 15px 0',
                                opacity: '0.95'
                            }}>
                                Get in touch with our experts for customized solutions
                            </p>
                            <div style={{
                                fontSize: '13px',
                                fontWeight: '600',
                                opacity: '0.9'
                            }}>
                                We provide end-to-end support from consultation to final commissioning
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                        padding: '20px',
                        textAlign: 'center',
                        color: 'white'
                    }}>
                        <div style={{
                            fontSize: '16px',
                            fontWeight: '700',
                            letterSpacing: '0.5px'
                        }}>
                            www.planttech.co.in
                        </div>
                    </div>
                </div>

                {/* Navigation Button (optional - can be shown/hidden) */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 10
                }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            padding: '10px 20px',
                            background: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#1e3a8a',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)'
                            e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)'
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)'
                            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                        }}
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Brochure
