import React from 'react'

function BrochurePage4() {
    return (
        <div style={{ minHeight: '100vh', width: '100%', background: '#3a3a3a', display: 'flex', flexDirection: 'column' }}>

            {/* ── PAGE AREA ── */}
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '28px 20px 60px', overflowX: 'hidden'
            }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Page 4 — Turnkey Projects & Contact</div>
                <div style={{ transformOrigin: 'top center' }}>
                    <div style={{
                        width: '210mm',
                        height: '297mm',
                        background: 'white',
                        boxShadow: '0 10px 50px rgba(0,0,0,0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Turnkey Projects Header */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            padding: '22px 30px',
                            textAlign: 'center',
                            color: 'white',
                            flexShrink: 0
                        }}>
                            <h2 style={{
                                fontSize: '32px',
                                fontWeight: '800',
                                margin: '0 0 6px 0',
                                letterSpacing: '1px'
                            }}>
                                TURNKEY PROJECTS
                            </h2>
                            <div style={{
                                width: '70px',
                                height: '3px',
                                background: 'white',
                                margin: '0 auto 8px auto'
                            }}></div>
                            <p style={{
                                fontSize: '13px',
                                margin: 0,
                                opacity: 0.9,
                                fontWeight: '500'
                            }}>
                                Complete End-to-End Solutions for Industrial Plants
                            </p>
                        </div>

                        {/* Turnkey Projects Content */}
                        <div style={{
                            padding: '16px 28px 16px 28px',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}>
                            {/* Top Section: List + 2x2 images */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1.5fr',
                                gap: '18px',
                                marginBottom: '14px',
                                flex: 1,
                                minHeight: 0
                            }}>
                                {/* Project List - Card Style */}
                                <div style={{
                                    background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                                    padding: '18px 18px',
                                    borderRadius: '10px',
                                    border: '1px solid #bfdbfe',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <h3 style={{
                                        fontSize: '13px',
                                        fontWeight: '800',
                                        color: '#1e3a8a',
                                        margin: '0 0 10px 0',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        Our Capabilities
                                    </h3>
                                    {[
                                        'Herbal Extraction Plant',
                                        'Essential Oil Extraction Plant',
                                        'Solvent Recovery Plant',
                                        'Dairy Plant',
                                        'Wet Scrubber',
                                        'Dust Extraction System',
                                        'Ash Handling System',
                                        'Used Oil Recycling Plant'
                                    ].map((project, idx) => (
                                        <div key={idx} style={{
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            color: '#1f2937',
                                            padding: '8px 0',
                                            borderBottom: idx < 7 ? '1px solid rgba(30,58,138,0.1)' : 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}>
                                            <span style={{
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '10px',
                                                fontWeight: '900',
                                                flexShrink: 0
                                            }}>✓</span>
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
                                        { name: 'Herbal Extraction Plant', img: '/herbal_extraction_plant.png' },
                                        { name: 'Essential Oil Extraction Plant', img: '/oil_extraction_plant.png' },
                                        { name: 'Solvent Recovery Plant', img: '/solvent_recovery_plant.png' },
                                        { name: 'Dairy Plant', img: '/Dairy_plant.png' }
                                    ].map((project, idx) => (
                                        <div key={idx} style={{
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                                            border: '1px solid #e5e7eb',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <div style={{
                                                flex: 1,
                                                minHeight: '80px',
                                                background: `linear-gradient(180deg, rgba(30,58,138,0.03) 0%, rgba(5,150,105,0.03) 100%), #f8fafc url('${project.img}') center center / cover no-repeat`
                                            }}></div>
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                                padding: '6px 8px',
                                                textAlign: 'center',
                                                flexShrink: 0
                                            }}>
                                                <h4 style={{
                                                    fontSize: '9px',
                                                    fontWeight: '700',
                                                    color: 'white',
                                                    margin: 0,
                                                    letterSpacing: '0.3px'
                                                }}>
                                                    {project.name}
                                                </h4>
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
                                marginTop: '14px'
                            }}>
                                {[
                                    { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
                                    { name: 'Dust Extraction System', img: '/Dust_extraction.png' },
                                    { name: 'Ash Handling System', img: '/Ash_handler.png' },
                                    { name: 'Used Oil Recycling Plant', img: '/oil.png' }
                                ].map((project, idx) => (
                                    <div key={idx} style={{
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 3px 12px rgba(0,0,0,0.1)',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        <div style={{
                                            height: '100px',
                                            background: `linear-gradient(180deg, rgba(30,58,138,0.03) 0%, rgba(5,150,105,0.03) 100%), #f8fafc url('${project.img}') center center / contain no-repeat`
                                        }}></div>
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                                            padding: '6px 8px',
                                            textAlign: 'center'
                                        }}>
                                            <h4 style={{
                                                fontSize: '9px',
                                                fontWeight: '700',
                                                color: 'white',
                                                margin: 0,
                                                letterSpacing: '0.3px'
                                            }}>
                                                {project.name}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Footer - Premium Gradient Section */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                            padding: '22px 28px 0 28px',
                            color: 'white',
                            position: 'relative',
                            flexShrink: 0
                        }}>
                            {/* Logo + Company Name */}
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '16px',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
                                    height: '45px',
                                    width: 'auto',
                                    marginBottom: '8px',
                                    filter: 'brightness(0) invert(1)',
                                    opacity: 0.95
                                }} />
                                <h2 style={{
                                    fontSize: '20px',
                                    fontWeight: '800',
                                    margin: '0 0 6px 0',
                                    letterSpacing: '0.5px'
                                }}>
                                    PLANTTECH ENGINEERING PVT. LTD.
                                </h2>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '4px 14px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '20px',
                                    fontSize: '10px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    ISO 9001:2015  •  MSME Certified Company
                                </div>
                            </div>

                            {/* Address Cards - 2 column */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '12px',
                                marginBottom: '12px',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '12px 14px',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}>
                                    <h4 style={{
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        margin: '0 0 5px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        <span style={{
                                            width: '20px', height: '20px', borderRadius: '5px',
                                            background: 'rgba(255,255,255,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '10px'
                                        }}>🏢</span>
                                        Corporate Office
                                    </h4>
                                    <p style={{ fontSize: '10px', lineHeight: '1.5', margin: 0, opacity: 0.9, fontWeight: '500' }}>
                                        Khasara No. 587, Akbarpuruood<br />
                                        Behind Shree Cement<br />
                                        Laksar Road<br />
                                        Lakshar, Haridwar<br />
                                        Uttarakhand, India - 247663
                                    </p>
                                </div>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '12px 14px',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}>
                                    <h4 style={{
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        margin: '0 0 5px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        <span style={{
                                            width: '20px', height: '20px', borderRadius: '5px',
                                            background: 'rgba(255,255,255,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '10px'
                                        }}>🏭</span>
                                        Manufacturing Unit
                                    </h4>
                                    <p style={{ fontSize: '10px', lineHeight: '1.5', margin: 0, opacity: 0.9, fontWeight: '500' }}>
                                        Plot no 1-11, Mini Industrial Estate<br />
                                        Pipli, Haridwar, Laksar Road<br />
                                        Laksar, Haridwar, Uttarakhand - 247663
                                    </p>
                                </div>
                            </div>

                            {/* Email + Phone Row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '12px',
                                marginBottom: '14px',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '10px 14px',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}>
                                    <h4 style={{
                                        fontSize: '11px', fontWeight: '800', margin: '0 0 4px 0',
                                        display: 'flex', alignItems: 'center', gap: '6px'
                                    }}>
                                        <span style={{
                                            width: '20px', height: '20px', borderRadius: '5px',
                                            background: 'rgba(255,255,255,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'
                                        }}>✉</span>
                                        Email Us
                                    </h4>
                                    <p style={{ fontSize: '10px', lineHeight: '1.6', margin: 0, opacity: 0.9, fontWeight: '500' }}>
                                        info@planttech.co.in | sales@planttech.co.in<br />
                                        planttechengineeringpvtltd@gmail.com
                                    </p>
                                </div>
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '10px 14px',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                }}>
                                    <h4 style={{
                                        fontSize: '11px', fontWeight: '800', margin: '0 0 4px 0',
                                        display: 'flex', alignItems: 'center', gap: '6px'
                                    }}>
                                        <span style={{
                                            width: '20px', height: '20px', borderRadius: '5px',
                                            background: 'rgba(255,255,255,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'
                                        }}>📞</span>
                                        Sales Enquiry
                                    </h4>
                                    <p style={{ fontSize: '11px', lineHeight: '1.6', margin: 0, opacity: 0.9, fontWeight: '600' }}>
                                        +91-8130000846 <br />
                                        +91-8840804180 <br />
                                        +91-7503322415
                                    </p>
                                </div>
                            </div>

                            {/* Website Footer Strip */}
                            <div style={{
                                margin: '0 -28px',
                                padding: '10px',
                                background: 'rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
                                    🌐  www.planttech.co.in
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrochurePage4
