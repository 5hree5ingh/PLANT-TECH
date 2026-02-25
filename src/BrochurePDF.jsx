import React from 'react'
import {
    Document, Page, View, Text, Image, StyleSheet,
    Svg, Defs, LinearGradient, Stop, Rect,
} from '@react-pdf/renderer'

// Resolve public asset to absolute URL
const asset = (path) =>
    typeof window !== 'undefined' ? window.location.origin + path : path

// ─── Reusable Gradient Background ────────────────────────────────────────────
// Renders an SVG gradient behind children using absolute positioning
function GradBg({ width, height, color1 = '#1e3a8a', color2 = '#059669', children, style }) {
    return (
        <View style={[{ position: 'relative' }, style]}>
            {/* SVG gradient layer — absolute, behind content */}
            <Svg
                width={width || '100%'}
                height={height || '100%'}
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                viewBox={`0 0 ${typeof width === 'number' ? width : 595} ${typeof height === 'number' ? height : 200}`}
            >
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0%" stopColor={color1} />
                        <Stop offset="100%" stopColor={color2} />
                    </LinearGradient>
                </Defs>
                <Rect
                    x="0" y="0"
                    width={typeof width === 'number' ? width : 595}
                    height={typeof height === 'number' ? height : 200}
                    fill="url(#grad)"
                />
            </Svg>
            {/* Content on top */}
            <View style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </View>
        </View>
    )
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: '#ffffff' },

    // PAGE 1
    p1Header: { padding: '42 35', alignItems: 'center' },
    p1Logo: { height: 60, marginBottom: 16 },
    p1Title: { fontSize: 30, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 10, letterSpacing: -0.5 },
    p1Subtitle: { fontSize: 12, color: '#ffffff', textAlign: 'center', marginBottom: 14, lineHeight: 1.5, opacity: 0.95 },
    p1Badge: { paddingVertical: 9, paddingHorizontal: 22, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.4)', borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)' },
    p1BadgeText: { fontSize: 11, fontWeight: 'bold', color: '#ffffff', letterSpacing: 0.5 },
    p1SectorFooter: { padding: '30 35', alignItems: 'center' },
    p1SectorTitle: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 6, letterSpacing: 1 },
    p1Underline: { width: 70, height: 3, backgroundColor: '#ffffff', marginBottom: 18, alignSelf: 'center' },
    p1SectorText: { fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', letterSpacing: 0.5, lineHeight: 2, marginBottom: 4 },
    p1WebBox: { backgroundColor: 'rgba(255,255,255,0.15)', paddingVertical: 8, paddingHorizontal: 18, borderRadius: 6, marginTop: 14 },
    p1WebText: { fontSize: 11, fontWeight: 'bold', color: '#ffffff', letterSpacing: 0.5 },

    // PAGE 2
    p2Body: { padding: '28 26', flex: 1 },
    p2Title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#1e3a8a', marginBottom: 6, letterSpacing: -0.5 },
    p2Underline: { width: 70, height: 3, backgroundColor: '#1e3a8a', alignSelf: 'center', marginBottom: 20 },
    equipRow: { flexDirection: 'row', gap: 9, marginBottom: 9 },
    equipCard: { flex: 1, borderRadius: 6, overflow: 'hidden', borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#ffffff' },
    equipImg: { height: 68, backgroundColor: '#f9fafb', objectFit: 'contain' },
    equipLabel: { paddingVertical: 6, paddingHorizontal: 4, alignItems: 'center' },
    equipLabelText: { fontSize: 7.5, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', lineHeight: 1.3 },
    productBox: { backgroundColor: '#f0f9ff', borderRadius: 10, padding: '18 18', borderWidth: 1.5, borderColor: '#bfdbfe', marginTop: 6 },
    productTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#0c7490', marginBottom: 5, letterSpacing: 0.5 },
    productUnderline: { width: 50, height: 2, backgroundColor: '#1e3a8a', alignSelf: 'center', marginBottom: 12 },
    productGrid: { flexDirection: 'row', gap: 14 },
    productCol: { flex: 1 },
    productItem: { fontSize: 9.5, color: '#374151', lineHeight: 2 },

    // PAGE 3
    p3Header: { padding: '28 35', alignItems: 'center' },
    p3Title: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 10, letterSpacing: -1 },
    p3Underline: { width: 80, height: 3, backgroundColor: '#ffffff', marginBottom: 14, alignSelf: 'center' },
    p3Desc: { fontSize: 11, color: '#ffffff', textAlign: 'center', lineHeight: 1.75, opacity: 0.95, marginBottom: 16 },
    p3StatsRow: { flexDirection: 'row', gap: 18, marginTop: 8 },
    p3StatBox: { flex: 1, alignItems: 'center', paddingVertical: 14, paddingHorizontal: 10, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 10 },
    p3StatNum: { fontSize: 13, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
    p3StatLabel: { fontSize: 10, color: '#ffffff', opacity: 0.9 },
    p3Body: { padding: '22 32', flex: 1 },
    p3WhyTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1e3a8a', marginBottom: 6 },
    p3WhySub: { fontSize: 10.5, color: '#6b7280', textAlign: 'center', marginBottom: 16 },
    p3FeatGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 18 },
    p3FeatCard: { width: '30%', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 8, backgroundColor: '#f0f9ff', borderRadius: 10, borderWidth: 1.5, borderColor: '#e0f2fe' },
    p3FeatIcon: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 7 },
    p3FeatIconText: { fontSize: 13, color: '#ffffff', fontWeight: 'bold' },
    p3FeatTitle: { fontSize: 8.5, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 3, textAlign: 'center' },
    p3FeatDesc: { fontSize: 7.5, color: '#6b7280', textAlign: 'center', lineHeight: 1.4 },
    p3CTA: { padding: '16 18', borderRadius: 12, alignItems: 'center' },
    p3CTAText: { fontSize: 15, fontWeight: 'bold', color: '#ffffff' },

    // PAGE 4
    p4Header: { padding: '18 26', alignItems: 'center' },
    p4HeaderTitle: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', letterSpacing: 1, marginBottom: 4 },
    p4HeaderLine: { width: 55, height: 2, backgroundColor: '#ffffff', marginBottom: 5, alignSelf: 'center' },
    p4HeaderSub: { fontSize: 10, color: '#ffffff', opacity: 0.9 },
    p4Body: { padding: '12 20', flex: 1 },
    p4TopRow: { flexDirection: 'row', gap: 14, marginBottom: 10, flex: 1 },
    p4CapList: { flex: 1, backgroundColor: '#f0f9ff', padding: '12 12', borderRadius: 8, borderWidth: 1, borderColor: '#bfdbfe' },
    p4CapTitle: { fontSize: 9.5, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 8, letterSpacing: 0.5 },
    p4CapItem: { flexDirection: 'row', alignItems: 'center', gap: 7, paddingVertical: 5, borderBottomWidth: 0.5, borderBottomColor: 'rgba(30,58,138,0.1)' },
    p4CapItemLast: { flexDirection: 'row', alignItems: 'center', gap: 7, paddingVertical: 5 },
    p4CapDot: { width: 15, height: 15, borderRadius: 7.5, alignItems: 'center', justifyContent: 'center' },
    p4CapDotText: { fontSize: 7.5, color: '#ffffff', fontWeight: 'bold' },
    p4CapText: { fontSize: 8.5, fontWeight: 'bold', color: '#1f2937', flex: 1 },
    p4ImgGrid2x2: { flex: 1.5, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    p4ImgCard: { width: '48%', borderRadius: 6, overflow: 'hidden', borderWidth: 1, borderColor: '#e5e7eb' },
    p4ImgCardImg: { height: 76, objectFit: 'cover', backgroundColor: '#f8fafc' },
    p4ImgCardLabel: { paddingVertical: 4, paddingHorizontal: 5, alignItems: 'center' },
    p4ImgCardLabelText: { fontSize: 6.5, fontWeight: 'bold', color: '#ffffff', letterSpacing: 0.3, textAlign: 'center' },
    p4BottomRow: { flexDirection: 'row', gap: 8, marginTop: 8 },
    p4SmallCard: { flex: 1, borderRadius: 6, overflow: 'hidden', borderWidth: 1, borderColor: '#e5e7eb' },
    p4SmallImg: { height: 68, objectFit: 'contain', backgroundColor: '#f8fafc' },
    p4SmallLabel: { paddingVertical: 4, paddingHorizontal: 4, alignItems: 'center' },
    p4SmallLabelText: { fontSize: 6.5, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
    p4ContactFooter: { padding: '14 20 0 20' },
    p4ContactCenter: { alignItems: 'center', marginBottom: 10 },
    p4ContactLogoImg: { height: 34, marginBottom: 6 },
    p4ContactCompany: { fontSize: 14, fontWeight: 'bold', color: '#ffffff', letterSpacing: 0.5, marginBottom: 4, textAlign: 'center' },
    p4ContactBadge: { paddingVertical: 3, paddingHorizontal: 10, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 14, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.3)', alignSelf: 'center' },
    p4ContactBadgeText: { fontSize: 7.5, fontWeight: 'bold', color: '#ffffff', letterSpacing: 0.5 },
    p4AddrRow: { flexDirection: 'row', gap: 10, marginBottom: 10, marginTop: 10 },
    p4AddrCard: { flex: 1, backgroundColor: 'rgba(255,255,255,0.12)', padding: '9 10', borderRadius: 8, borderWidth: 0.5, borderColor: 'rgba(255,255,255,0.2)' },
    p4AddrTitle: { fontSize: 8.5, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
    p4AddrText: { fontSize: 7.5, color: '#ffffff', lineHeight: 1.5, opacity: 0.9 },
    p4ContactRow: { flexDirection: 'row', gap: 10, marginBottom: 10 },
    p4WebStrip: { marginHorizontal: -20, paddingVertical: 8, backgroundColor: 'rgba(0,0,0,0.2)', alignItems: 'center' },
    p4WebText: { fontSize: 11, fontWeight: 'bold', color: '#ffffff', letterSpacing: 1 },
})

// ─── Data (exact from Brochure.jsx) ──────────────────────────────────────────
const equipment = [
    { name: 'Reaction Vessel', img: '/brochure-reaction-vessel.png' },
    { name: 'Rotary Extractor', img: '/brochure-rotatory-extractor.png' },
    { name: 'Condenser/Heat Exchanger', img: '/brochure-heat-exchanger.png' },
    { name: 'Distillation Column', img: '/brochure-distillation-column.png' },
    { name: 'Ribbon Blender', img: '/brochure-ribbon-blender.png' },
    { name: 'Octagonal Blender', img: '/brochure-octagonal-blender.png' },
    { name: 'Storage Tanks', img: '/brochure-storage-tanks.png' },
    { name: 'Limpet Reactor', img: '/brochure-limpet-reactor.png' },
    { name: 'Evaporator', img: '/brochure-evaporator.png' },
    { name: 'CIP System', img: '/brochure-pneumatic-conveying.png' },
    { name: 'Agitator Nutsche Filter', img: '/brochure-agitator-filter.png' },
    { name: 'Powder Liquid Mixing', img: '/brochure-powder-mixing.png' },
    { name: 'Screw Conveyor', img: '/brochure-screw-conveyor.png' },
    { name: 'Belt Conveyor', img: '/brochure-belt-conveyor.jpg' },
    { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
    { name: 'Vacuum Tray Dryer', img: '/brochure-vacuum-dryer.png' },
]

const productCols = [
    ['✓ Rotary Extractor', '✓ Reaction Vessel', '✓ Pressure Vessel', '✓ Condenser', '✓ Distillation Column', '✓ Ribbon Blender', '✓ Agitated Thin Film Evaporator'],
    ['✓ Octagonal Blender', '✓ Condenser', '✓ Storage Tanks', '✓ Limpet Reactor', '✓ Mass Mixer', '✓ Agitator Nutsche Filter', '✓ Falling Film Evaporator'],
    ['✓ Powder, Liquid Mixing', '✓ Screw Conveyor', '✓ Belt Conveyor', '✓ Wet Scrubber', '✓ Vacuum Tray Dryer', '✓ Rising Film Evaporator', '✓ And many more...'],
]

const features = [
    { title: 'Industry Experts', desc: 'Product & machinery specialists' },
    { title: 'Zero Charges', desc: 'No consultancy fees' },
    { title: 'End-to-End', desc: 'Complete support & delivery' },
    { title: 'Installation', desc: 'Onsite commissioning team' },
    { title: 'Sales Guarantee', desc: 'For herbal extracts' },
    { title: 'Lab Setup', desc: 'Chemical & microbial labs' },
    { title: 'Raw Materials', desc: 'Sourcing & selection guidance' },
    { title: 'Custom Solutions', desc: 'Tailored to your needs' },
    { title: 'Worldwide', desc: 'Global plant setups' },
]

const capabilities = [
    'Herbal Extraction Plant',
    'Essential Oil Extraction Plant',
    'Solvent Recovery Plant',
    'Dairy Plant',
    'Wet Scrubber',
    'Dust Extraction System',
    'Ash Handling System',
    'Used Oil Recycling Plant',
]

const topProjects = [
    { name: 'Herbal Extraction Plant', img: '/herbal_extraction_plant.png' },
    { name: 'Essential Oil Extraction Plant', img: '/oil_extraction_plant.png' },
    { name: 'Solvent Recovery Plant', img: '/solvent_recovery_plant.png' },
    { name: 'Dairy Plant', img: '/Dairy_plant.png' },
]

const bottomProjects = [
    { name: 'Wet Scrubber', img: '/brochure-wet-scrubber.png' },
    { name: 'Dust Extraction System', img: '/Dust_extraction.png' },
    { name: 'Ash Handling System', img: '/Ash_handler.png' },
    { name: 'Used Oil Recycling Plant', img: '/oil.png' },
]

const chunk = (arr, n) => {
    const rows = []
    for (let i = 0; i < arr.length; i += n) rows.push(arr.slice(i, i + n))
    return rows
}

// ─── Gradient SVG helper ──────────────────────────────────────────────────────
// Renders a full-width gradient rect as background for a View
// w/h are in PDF points (A4 = 595 x 842 pt)
function GradRect({ w, h, c1 = '#1e3a8a', c2 = '#059669', id = 'g' }) {
    return (
        <Svg width={w} height={h} style={{ position: 'absolute', top: 0, left: 0 }}>
            <Defs>
                <LinearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                    <Stop offset="0%" stopColor={c1} />
                    <Stop offset="100%" stopColor={c2} />
                </LinearGradient>
            </Defs>
            <Rect x="0" y="0" width={w} height={h} fill={`url(#${id})`} />
        </Svg>
    )
}

// Wrapper: renders gradient behind children
function GradView({ w, h, c1, c2, id, style, children }) {
    return (
        <View style={[{ position: 'relative', width: w }, style]}>
            <GradRect w={w} h={h} c1={c1} c2={c2} id={id} />
            <View style={{ position: 'relative' }}>{children}</View>
        </View>
    )
}

// A4 width in points = 595
const PW = 595

function BrochurePDF() {
    return (
        <Document title="Planttech Engineering Brochure" author="Planttech Engineering Pvt. Ltd.">

            {/* ══ PAGE 1: Cover ══════════════════════════════════════════════ */}
            <Page size="A4" style={S.page}>

                {/* Header — gradient #1e3a8a → #059669, ~220pt tall */}
                <GradView w={PW} h={220} id="p1h" style={S.p1Header}>
                    <View style={{ alignItems: 'center', padding: '42 35' }}>
                        <Image src={asset('/PLANT_TECH_LOGO.png')} style={S.p1Logo} />
                        <Text style={S.p1Title}>Planttech Engineering Pvt. Ltd.</Text>
                        <Text style={S.p1Subtitle}>
                            Engineering Excellence for Herbal, Nutraceutical, Pharma &amp; Chemical Industries
                        </Text>
                        <View style={S.p1Badge}>
                            <Text style={S.p1BadgeText}>ISO 9001:2015, MSME Certified Company</Text>
                        </View>
                    </View>
                </GradView>

                {/* Hero Image */}
                <View style={{ flex: 1 }}>
                    <Image src={asset('/hero-plant.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </View>

                {/* Sectors Footer — gradient #1e3a8a → #059669, ~180pt tall */}
                <GradView w={PW} h={180} id="p1f" style={S.p1SectorFooter}>
                    <View style={{ alignItems: 'center', padding: '28 35' }}>
                        <Text style={S.p1SectorTitle}>SECTORS WE SERVE</Text>
                        <View style={S.p1Underline} />
                        <Text style={S.p1SectorText}>HERBAL EXTRACTION • PHARMACEUTICALS • AGRO CHEMICAL • CHEMICALS</Text>
                        <Text style={S.p1SectorText}>PAINTING INDUSTRIES • DAIRY • REFINERY • POWER • CEMENT</Text>
                        <Text style={S.p1SectorText}>SUGAR MILL • STEEL • OIL AND GAS • FOOD AND BEVERAGE</Text>
                        <View style={S.p1WebBox}>
                            <Text style={S.p1WebText}>🌐 www.planttech.co.in</Text>
                        </View>
                    </View>
                </GradView>
            </Page>

            {/* ══ PAGE 2: Equipment Showcase ═════════════════════════════════ */}
            <Page size="A4" style={S.page}>
                <View style={S.p2Body}>
                    <Text style={S.p2Title}>Our Specialized Equipment</Text>
                    <View style={S.p2Underline} />

                    {/* Equipment Grid — 4 columns × 4 rows */}
                    {chunk(equipment, 4).map((row, ri) => (
                        <View key={ri} style={S.equipRow}>
                            {row.map((eq, ci) => (
                                <View key={ci} style={S.equipCard}>
                                    <Image src={asset(eq.img)} style={S.equipImg} />
                                    {/* Label with gradient */}
                                    <GradView w={(PW - 52 - 27) / 4} h={26} id={`eq${ri}${ci}`}>
                                        <View style={S.equipLabel}>
                                            <Text style={S.equipLabelText}>{eq.name}</Text>
                                        </View>
                                    </GradView>
                                </View>
                            ))}
                        </View>
                    ))}

                    {/* Product List — bg: #f0f9ff, border: #bfdbfe, title: #0c7490 */}
                    <View style={S.productBox}>
                        <Text style={S.productTitle}>PRODUCT LIST</Text>
                        <View style={S.productUnderline} />
                        <View style={S.productGrid}>
                            {productCols.map((col, ci) => (
                                <View key={ci} style={S.productCol}>
                                    {col.map((item, ii) => (
                                        <Text key={ii} style={S.productItem}>{item}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>

            {/* ══ PAGE 3: About Us ═══════════════════════════════════════════ */}
            <Page size="A4" style={S.page}>
                {/* Header — gradient #1e3a8a → #0c7490 → #059669 (3-stop) */}
                <GradView w={PW} h={260} id="p3h" c1="#1e3a8a" c2="#059669" style={S.p3Header}>
                    <View style={{ alignItems: 'center', padding: '28 35' }}>
                        <Text style={S.p3Title}>About Planttech Engineering</Text>
                        <View style={S.p3Underline} />
                        <Text style={S.p3Desc}>
                            Planttech Engineering Pvt. Ltd. is a trusted manufacturer of state-of-the-art process machinery serving the herbal, nutraceutical, pharmaceutical, and chemical industries. Based in Haridwar, Uttarakhand, at the foothills of the Himalayas, we deliver innovative, reliable, and customer-focused engineering solutions for plant setups worldwide.
                        </Text>
                        <View style={S.p3StatsRow}>
                            {[
                                { number: 'ISO 9001:2015', label: 'Certified' },
                                { number: 'MSME', label: 'Registered' },
                                { number: 'Haridwar', label: 'Based In' },
                            ].map((stat, i) => (
                                <View key={i} style={S.p3StatBox}>
                                    <Text style={S.p3StatNum}>{stat.number}</Text>
                                    <Text style={S.p3StatLabel}>{stat.label}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </GradView>

                {/* Body */}
                <View style={S.p3Body}>
                    <Text style={S.p3WhyTitle}>Why Choose Us</Text>
                    <Text style={S.p3WhySub}>Comprehensive solutions for your industrial needs</Text>

                    {/* Feature Cards — bg: #f0f9ff, border: #e0f2fe */}
                    <View style={S.p3FeatGrid}>
                        {features.map((f, i) => (
                            <View key={i} style={S.p3FeatCard}>
                                {/* Icon circle with gradient */}
                                <GradView w={32} h={32} id={`fi${i}`} style={{ borderRadius: 16, marginBottom: 7 }}>
                                    <View style={S.p3FeatIcon}>
                                        <Text style={S.p3FeatIconText}>✓</Text>
                                    </View>
                                </GradView>
                                <Text style={S.p3FeatTitle}>{f.title}</Text>
                                <Text style={S.p3FeatDesc}>{f.desc}</Text>
                            </View>
                        ))}
                    </View>

                    {/* CTA — gradient #1e3a8a → #059669 */}
                    <GradView w={PW - 64} h={52} id="p3cta" style={{ borderRadius: 12 }}>
                        <View style={S.p3CTA}>
                            <Text style={S.p3CTAText}>Engineering Excellence Since Inception</Text>
                        </View>
                    </GradView>
                </View>
            </Page>

            {/* ══ PAGE 4: Turnkey Projects + Contact ════════════════════════ */}
            <Page size="A4" style={S.page}>
                {/* Header — gradient #1e3a8a → #059669 */}
                <GradView w={PW} h={72} id="p4h" style={S.p4Header}>
                    <View style={{ alignItems: 'center', padding: '18 26' }}>
                        <Text style={S.p4HeaderTitle}>TURNKEY PROJECTS</Text>
                        <View style={S.p4HeaderLine} />
                        <Text style={S.p4HeaderSub}>Complete End-to-End Solutions for Industrial Plants</Text>
                    </View>
                </GradView>

                {/* Body */}
                <View style={S.p4Body}>
                    <View style={S.p4TopRow}>
                        {/* Capabilities list — bg: #f0f9ff, border: #bfdbfe */}
                        <View style={S.p4CapList}>
                            <Text style={S.p4CapTitle}>OUR CAPABILITIES</Text>
                            {capabilities.map((cap, i) => (
                                <View key={i} style={i < capabilities.length - 1 ? S.p4CapItem : S.p4CapItemLast}>
                                    {/* Dot with gradient */}
                                    <GradView w={15} h={15} id={`cd${i}`} style={{ borderRadius: 7.5 }}>
                                        <View style={S.p4CapDot}>
                                            <Text style={S.p4CapDotText}>✓</Text>
                                        </View>
                                    </GradView>
                                    <Text style={S.p4CapText}>{cap}</Text>
                                </View>
                            ))}
                        </View>

                        {/* 2×2 project images */}
                        <View style={S.p4ImgGrid2x2}>
                            {topProjects.map((p, i) => (
                                <View key={i} style={S.p4ImgCard}>
                                    <Image src={asset(p.img)} style={S.p4ImgCardImg} />
                                    <GradView w={(PW - 40 - 14) * 1.5 / 2.5 / 2 - 4} h={22} id={`tp${i}`}>
                                        <View style={S.p4ImgCardLabel}>
                                            <Text style={S.p4ImgCardLabelText}>{p.name}</Text>
                                        </View>
                                    </GradView>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Bottom 4 small images */}
                    <View style={S.p4BottomRow}>
                        {bottomProjects.map((p, i) => (
                            <View key={i} style={S.p4SmallCard}>
                                <Image src={asset(p.img)} style={S.p4SmallImg} />
                                <GradView w={(PW - 40 - 24) / 4} h={22} id={`bp${i}`}>
                                    <View style={S.p4SmallLabel}>
                                        <Text style={S.p4SmallLabelText}>{p.name}</Text>
                                    </View>
                                </GradView>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Contact Footer — gradient #1e3a8a → #059669 */}
                <GradView w={PW} h={220} id="p4cf" style={S.p4ContactFooter}>
                    <View style={{ padding: '14 20 0 20' }}>
                        {/* Logo + Company */}
                        <View style={S.p4ContactCenter}>
                            <Image src={asset('/PLANT_TECH_LOGO.png')} style={S.p4ContactLogoImg} />
                            <Text style={S.p4ContactCompany}>PLANTTECH ENGINEERING PVT. LTD.</Text>
                            <View style={S.p4ContactBadge}>
                                <Text style={S.p4ContactBadgeText}>ISO 9001:2015  •  MSME Certified Company</Text>
                            </View>
                        </View>

                        {/* Address Cards — rgba(255,255,255,0.12) */}
                        <View style={S.p4AddrRow}>
                            <View style={S.p4AddrCard}>
                                <Text style={S.p4AddrTitle}>🏢 Corporate Office</Text>
                                <Text style={S.p4AddrText}>
                                    Khasara No. 587, Akbarpuruood{'\n'}
                                    Behind Shree Cement{'\n'}
                                    Laksar Road{'\n'}
                                    Lakshar, Haridwar, Uttarakhand - 247663
                                </Text>
                            </View>
                            <View style={S.p4AddrCard}>
                                <Text style={S.p4AddrTitle}>🏭 Manufacturing Unit</Text>
                                <Text style={S.p4AddrText}>
                                    Plot no 1-11, Mini Industrial Estate{'\n'}
                                    Pipli, Haridwar, Laksar Road{'\n'}
                                    Laksar, Haridwar, Uttarakhand - 247663
                                </Text>
                            </View>
                        </View>

                        {/* Email + Phone */}
                        <View style={S.p4ContactRow}>
                            <View style={S.p4AddrCard}>
                                <Text style={S.p4AddrTitle}>✉ Email Us</Text>
                                <Text style={S.p4AddrText}>
                                    info@planttech.co.in | sales@planttech.co.in{'\n'}
                                    planttechengineeringpvtltd@gmail.com
                                </Text>
                            </View>
                            <View style={S.p4AddrCard}>
                                <Text style={S.p4AddrTitle}>📞 Sales Enquiry</Text>
                                <Text style={S.p4AddrText}>
                                    +91-8130000846{'\n'}
                                    +91-8840804180{'\n'}
                                    +91-7503322415
                                </Text>
                            </View>
                        </View>

                        {/* Website Strip — rgba(0,0,0,0.2) */}
                        <View style={S.p4WebStrip}>
                            <Text style={S.p4WebText}>🌐  www.planttech.co.in</Text>
                        </View>
                    </View>
                </GradView>
            </Page>

        </Document>
    )
}

export default BrochurePDF
