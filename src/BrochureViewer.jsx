import React, { useState } from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import BrochurePDF from './BrochurePDF'
import { useNavigate } from 'react-router-dom'

function BrochureViewer() {
    const navigate = useNavigate()
    const [isReady, setIsReady] = useState(false)

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#1a1a2e',
            overflow: 'hidden',
        }}>
            {/* Top Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #059669 100%)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
                flexShrink: 0,
                gap: '12px',
            }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: 'white',
                        padding: '8px 18px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                    ← Back to Site
                </button>

                {/* Title */}
                <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ color: 'white', fontWeight: '800', fontSize: '18px', letterSpacing: '0.5px' }}>
                        Planttech Engineering — Company Brochure
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', marginTop: '2px' }}>
                        4 Pages • A4 Format
                    </div>
                </div>

                {/* Download Button */}
                <PDFDownloadLink
                    document={<BrochurePDF />}
                    fileName="Planttech-Engineering-Brochure.pdf"
                    style={{ textDecoration: 'none' }}
                >
                    {({ loading }) => (
                        <button
                            style={{
                                background: loading ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
                                border: 'none',
                                color: loading ? 'rgba(255,255,255,0.5)' : '#1e3a8a',
                                padding: '10px 22px',
                                borderRadius: '8px',
                                cursor: loading ? 'wait' : 'pointer',
                                fontSize: '14px',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                boxShadow: loading ? 'none' : '0 4px 14px rgba(0,0,0,0.2)',
                                transition: 'all 0.2s',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {loading ? (
                                <>⏳ Preparing PDF...</>
                            ) : (
                                <>⬇ Download All Slides</>
                            )}
                        </button>
                    )}
                </PDFDownloadLink>
            </div>

            {/* PDF Viewer */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <PDFViewer
                    width="100%"
                    height="100%"
                    style={{ border: 'none', display: 'block' }}
                    showToolbar={true}
                >
                    <BrochurePDF />
                </PDFViewer>
            </div>
        </div>
    )
}

export default BrochureViewer
