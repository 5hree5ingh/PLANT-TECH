import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Download() {
    const navigate = useNavigate()
    const [downloadStarted, setDownloadStarted] = useState(false)

    useEffect(() => {
        // Small delay to ensure page renders before download
        const timer = setTimeout(() => {
            // Trigger the PDF download automatically when component mounts
            const link = document.createElement('a')
            link.href = '/planttech-brochure.pdf'
            link.download = 'Planttech-Engineering-Brochure.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            setDownloadStarted(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    const handleManualDownload = () => {
        const link = document.createElement('a')
        link.href = '/planttech-brochure.pdf'
        link.download = 'Planttech-Engineering-Brochure.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div style={{
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #10b981 100%)',
            padding: 'clamp(15px, 5vw, 20px)',
            textAlign: 'center',
            margin: 0,
            boxSizing: 'border-box'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.98)',
                padding: 'clamp(30px, 8vw, 50px) clamp(20px, 6vw, 40px)',
                borderRadius: 'clamp(16px, 4vw, 24px)',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.25)',
                maxWidth: '600px',
                width: '100%',
                animation: 'fadeInUp 0.6s ease-out'
            }}>
                {/* Success Icon */}
                <div style={{
                    width: 'clamp(60px, 15vw, 80px)',
                    height: 'clamp(60px, 15vw, 80px)',
                    margin: '0 auto clamp(16px, 4vw, 24px)',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(28px, 8vw, 40px)',
                    boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
                }}>
                    ✓
                </div>

                <h1 style={{
                    color: '#1f2937',
                    fontSize: 'clamp(24px, 6vw, 32px)',
                    fontWeight: '700',
                    marginBottom: 'clamp(12px, 3vw, 16px)',
                    lineHeight: '1.2'
                }}>
                    Thank You for Your Interest!
                </h1>

                <p style={{
                    color: '#6b7280',
                    fontSize: 'clamp(15px, 3.5vw, 18px)',
                    marginBottom: 'clamp(18px, 4vw, 24px)',
                    lineHeight: '1.6'
                }}>
                    Your <strong>Planttech Engineering brochure</strong> has been downloaded successfully.
                </p>

                <div style={{
                    background: '#f3f4f6',
                    padding: 'clamp(15px, 4vw, 20px)',
                    borderRadius: 'clamp(8px, 2vw, 12px)',
                    marginBottom: 'clamp(20px, 5vw, 30px)',
                    border: '1px solid #e5e7eb'
                }}>
                    <p style={{
                        color: '#374151',
                        fontSize: 'clamp(13px, 3vw, 15px)',
                        margin: '0',
                        lineHeight: '1.6',
                        wordBreak: 'break-word'
                    }}>
                        📥 <strong>Check your downloads folder</strong> for the PDF
                        <br />
                        📧 Questions? Contact us at <strong>info@planttech.co.in</strong>
                        <br />
                        📞 Call us: <strong>+91-8130000846</strong>
                    </p>
                </div>

                {!downloadStarted && (
                    <p style={{
                        color: '#9ca3af',
                        fontSize: 'clamp(12px, 3vw, 14px)',
                        marginBottom: 'clamp(16px, 4vw, 20px)',
                        fontStyle: 'italic'
                    }}>
                        Download will start automatically...
                    </p>
                )}

                <div style={{
                    display: 'flex',
                    gap: 'clamp(10px, 2.5vw, 12px)',
                    flexDirection: 'column'
                }}>
                    <button
                        onClick={handleManualDownload}
                        className="btn btn-primary"
                        style={{
                            padding: 'clamp(12px, 3vw, 14px) clamp(24px, 6vw, 32px)',
                            fontSize: 'clamp(14px, 3.5vw, 16px)',
                            fontWeight: '600',
                            borderRadius: 'clamp(8px, 2vw, 10px)',
                            width: '100%',
                            cursor: 'pointer'
                        }}
                    >
                        Download Again
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="btn btn-secondary"
                        style={{
                            padding: 'clamp(12px, 3vw, 14px) clamp(24px, 6vw, 32px)',
                            fontSize: 'clamp(14px, 3.5vw, 16px)',
                            fontWeight: '600',
                            borderRadius: 'clamp(8px, 2vw, 10px)',
                            width: '100%',
                            cursor: 'pointer'
                        }}
                    >
                        Explore Our Services
                    </button>
                </div>

                <p style={{
                    color: '#9ca3af',
                    fontSize: 'clamp(11px, 2.5vw, 13px)',
                    marginTop: 'clamp(18px, 4vw, 24px)',
                    marginBottom: '0',
                    lineHeight: '1.4'
                }}>
                    We look forward to partnering with you for your engineering needs!
                </p>
            </div>
        </div>
    )
}

export default Download
