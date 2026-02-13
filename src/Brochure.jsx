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

                {/* PAGE 3: About Us */}
                <div style={{
                    width: '210mm',
                    minHeight: '297mm',
                    background: 'white',
                    boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
                    marginTop: '20px',
                    padding: '50px 40px'
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
                        About Planttech Engineering
                    </h2>

                    {/* Decorative underline */}
                    <div style={{
                        width: '80px',
                        height: '4px',
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                        margin: '0 auto 40px auto'
                    }}></div>

                    {/* Company Description */}
                    <div style={{
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #d1fae5 100%)',
                        padding: '35px',
                        borderRadius: '16px',
                        marginBottom: '40px',
                        border: '2px solid #bfdbfe'
                    }}>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.8',
                            color: '#374151',
                            textAlign: 'center',
                            margin: 0,
                            fontWeight: '500'
                        }}>
                            Planttech Engineering Pvt. Ltd. is a trusted manufacturer of state-of-the-art process machinery serving the herbal, nutraceutical, pharmaceutical, and chemical industries. Based in Haridwar, Uttarakhand, at the foothills of the Himalayas, we deliver innovative, reliable, and customer-focused engineering solutions for plant setups worldwide.
                        </p>
                    </div>

                    {/* Why Choose Us Section */}
                    <h3 style={{
                        fontSize: '28px',
                        fontWeight: '800',
                        textAlign: 'center',
                        marginBottom: '35px',
                        color: '#0c7490'
                    }}>
                        Why Choose Us?
                    </h3>

                    {/* Features Grid - 2x4 */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '22px'
                    }}>
                        {[
                            { color: '#1e3a8a', title: 'Industry experts in product & machinery' },
                            { color: '#059669', title: 'Zero consultancy charges' },
                            { color: '#0c7490', title: 'End-to-end support until final product delivery' },
                            { color: '#1e3a8a', title: 'Onsite installation & commissioning team' },
                            { color: '#059669', title: 'Final product sales guarantee for Herbal extracts' },
                            { color: '#0c7490', title: 'Consultancy for chemical, analytical & microbial lab setup' },
                            { color: '#1e3a8a', title: 'Guidance in sourcing & selecting best quality raw materials' },
                            { color: '#059669', title: 'Custom solutions tailored to your specific production needs' }
                        ].map((feature, index) => (
                            <div key={index} style={{
                                background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                padding: '22px',
                                borderRadius: '10px',
                                border: '2px solid #bfdbfe',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '18px'
                            }}>
                                {/* Icon Circle with Gradient */}
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    color: 'white',
                                    fontSize: '22px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 3px 8px rgba(30, 58, 138, 0.25)'
                                }}>
                                    ✓
                                </div>

                                {/* Text */}
                                <div style={{
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    color: '#1f2937',
                                    fontWeight: '600'
                                }}>
                                    {feature.title}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Badge */}
                    <div style={{
                        marginTop: '50px',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            color: 'white',
                            padding: '20px 40px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: '700',
                            boxShadow: '0 6px 20px rgba(30, 58, 138, 0.3)'
                        }}>
                            🏆 ISO 9001:2015, MSME Certified Company
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brochure
