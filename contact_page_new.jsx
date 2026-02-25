{/* PAGE 4: Contact Us - Professional Corporate Design */ }
<div style={{
    width: '210mm',
    minHeight: '297mm',
    background: '#ffffff',
    boxShadow: '0 10px 50px rgba(0,0,0,0.2)',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'
}}>
    {/* Professional Header */}
    <div style={{
        background: 'linear-gradient(135deg, #0891b2 0%, #059669 100%)',
        padding: '40px 50px',
        textAlign: 'center',
        color: 'white'
    }}>
        <img src="/PLANT_TECH_LOGO.png" alt="Planttech Logo" style={{
            height: '65px',
            width: 'auto',
            marginBottom: '20px',
            filter: 'brightness(0) invert(1)'
        }} />

        <h1 style={{
            fontSize: '32px',
            fontWeight: '800',
            margin: '0 0 12px 0',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
        }}>
            PLANTTECH ENGINEERING PVT. LTD.
        </h1>

        <div style={{
            fontSize: '13px',
            fontWeight: '600',
            opacity: 0.95,
            letterSpacing: '0.5px'
        }}>
            ISO 9001:2015 CERTIFIED  |  MSME REGISTERED
        </div>
    </div>

    {/* Main Content */}
    <div style={{
        flex: 1,
        padding: '45px 50px',
        background: '#f8fafc'
    }}>
        {/* Section Title */}
        <div style={{
            textAlign: 'center',
            marginBottom: '35px'
        }}>
            <h2 style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#0f172a',
                margin: '0 0 8px 0',
                letterSpacing: '-0.5px'
            }}>
                Get In Touch
            </h2>
            <div style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #0891b2 0%, #059669 100%)',
                margin: '0 auto',
                borderRadius: '3px'
            }}></div>
        </div>

        {/* Office Addresses */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginBottom: '35px'
        }}>
            {/* Corporate Office */}
            <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '18px'
                }}>
                    <div style={{
                        width: '42px',
                        height: '42px',
                        background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <div style={{
                            width: '18px',
                            height: '18px',
                            border: '3px solid white',
                            borderRadius: '50%',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '6px',
                                height: '6px',
                                background: 'white',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}></div>
                        </div>
                    </div>
                    <h3 style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#0f172a',
                        margin: 0
                    }}>
                        Corporate Office
                    </h3>
                </div>

                <p style={{
                    fontSize: '13px',
                    lineHeight: '1.9',
                    color: '#475569',
                    margin: 0,
                    fontWeight: '500'
                }}>
                    Khasara No. 587, Akbarpuruood<br />
                    Behind Shree Cement<br />
                    Laksar Road<br />
                    Lakshar, Haridwar<br />
                    Uttarakhand, India - 247663
                </p>
            </div>

            {/* Manufacturing Unit */}
            <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '18px'
                }}>
                    <div style={{
                        width: '42px',
                        height: '42px',
                        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2px',
                            width: '16px',
                            height: '16px'
                        }}>
                            <div style={{ background: 'white', borderRadius: '1px' }}></div>
                            <div style={{ background: 'white', borderRadius: '1px' }}></div>
                            <div style={{ background: 'white', borderRadius: '1px' }}></div>
                            <div style={{ background: 'white', borderRadius: '1px' }}></div>
                        </div>
                    </div>
                    <h3 style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#0f172a',
                        margin: 0
                    }}>
                        Manufacturing Unit
                    </h3>
                </div>

                <p style={{
                    fontSize: '13px',
                    lineHeight: '1.9',
                    color: '#475569',
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

        {/* Contact Information */}
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            marginBottom: '35px'
        }}>
            {/* Email */}
            <div style={{
                background: 'white',
                padding: '28px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                }}>
                    <div style={{
                        width: '38px',
                        height: '38px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <div style={{
                            width: '18px',
                            height: '13px',
                            border: '2px solid white',
                            borderRadius: '2px',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: 0,
                                height: 0,
                                borderLeft: '9px solid transparent',
                                borderRight: '9px solid transparent',
                                borderTop: '7px solid white',
                                position: 'absolute',
                                top: '-1px',
                                left: '0'
                            }}></div>
                        </div>
                    </div>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#0f172a',
                        margin: 0
                    }}>
                        Email Us
                    </h3>
                </div>

                <div style={{
                    fontSize: '12px',
                    lineHeight: '2',
                    color: '#0891b2',
                    fontWeight: '600'
                }}>
                    <div>info@planttech.co.in</div>
                    <div>sales@planttech.co.in</div>
                    <div>parveen@planttech.co.in</div>
                    <div>planttechengineeringpvtltd@gmail.com</div>
                </div>
            </div>

            {/* Phone */}
            <div style={{
                background: 'white',
                padding: '28px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                }}>
                    <div style={{
                        width: '38px',
                        height: '38px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <div style={{
                            width: '14px',
                            height: '14px',
                            border: '2.5px solid white',
                            borderRadius: '3px',
                            borderBottomLeftRadius: '8px',
                            transform: 'rotate(-25deg)'
                        }}></div>
                    </div>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#0f172a',
                        margin: 0
                    }}>
                        Call Us
                    </h3>
                </div>

                <div style={{
                    fontSize: '13px',
                    lineHeight: '2.2',
                    color: '#059669',
                    fontWeight: '700'
                }}>
                    <div>+91-8130000846 <span style={{ color: '#64748b', fontWeight: '500' }}>(Sales)</span></div>
                    <div>+91-8840804180 <span style={{ color: '#64748b', fontWeight: '500' }}>(Purchase)</span></div>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div style={{
            background: 'linear-gradient(135deg, #0891b2 0%, #059669 100%)',
            padding: '32px',
            borderRadius: '12px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 4px 20px rgba(8,145,178,0.25)'
        }}>
            <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                margin: '0 0 10px 0',
                letterSpacing: '-0.3px'
            }}>
                Transform Your Manufacturing Excellence
            </h3>
            <p style={{
                fontSize: '14px',
                margin: '0 0 16px 0',
                opacity: 0.95,
                fontWeight: '500'
            }}>
                Connect with our engineering experts for customized industrial solutions
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                fontSize: '12px',
                fontWeight: '600',
                opacity: 0.9
            }}>
                <span>End-to-end Support</span>
                <span>•</span>
                <span>Expert Consultation</span>
                <span>•</span>
                <span>Complete Commissioning</span>
            </div>
        </div>
    </div>

    {/* Footer */}
    <div style={{
        background: '#1e293b',
        padding: '20px',
        textAlign: 'center',
        color: 'white'
    }}>
        <div style={{
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px'
        }}>
            www.planttech.co.in
        </div>
    </div>
</div>
