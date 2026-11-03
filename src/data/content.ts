export const company = {
  brand: "Marathon Security",
  legalName: "Zetouch Security Services Pvt. Ltd.",
  phoneDisplay: "+91-9690683851",
  phoneTel: "+919690683851",
  email: "info@marathonsecurity.in",
  whatsapp: "919690683851",
  iso: "ISO 9001:2015 Certified Organization",
  headOffice: "Head Office — Jaipur, Rajasthan",
  corporateOffice: "Corporate Office — Ahmedabad, Gujarat",
  coverage:
    "Security coverage across key Rajasthan cities and industrial corridors, with reach into North and Western India.",
  motto: "Reliability, Quality, and Results",
  referenceSite: "https://marathonsecurity.in/",
  experienceYears: "10+",
  experienceLabel: "Years of verified security experience",
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Industries", href: "#industries" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export const trustItems = [
  "Verified field experience",
  "Recognised enterprise clients",
  "ISO 9001:2015 certified",
]

/** Client logos/names publicly listed on marathonsecurity.in */
const clientLogo = (file: string) =>
  `https://marathonsecurity.in/images/clients/${encodeURIComponent(file)}`

export const clients = [
  { name: "Adani Ports and Logistics", logo: clientLogo("adani.png") },
  { name: "Afcons", logo: clientLogo("afcons.png") },
  { name: "Cemindia Projects", logo: clientLogo("cemindia.png") },
  { name: "GLC", logo: clientLogo("GLC.png") },
  { name: "GPT Group", logo: clientLogo("GPT Group.png") },
  { name: "HG Infra", logo: clientLogo("HG infra.png") },
  { name: "KEC", logo: clientLogo("KEC.png") },
  { name: "L&T", logo: clientLogo("LandT.png") },
  { name: "Mahathi", logo: clientLogo("Mahathi.png") },
  { name: "MEIL", logo: clientLogo("Meil.png") },
  { name: "Mycon", logo: clientLogo("mycon.png") },
  { name: "NRP", logo: clientLogo("nrp.png") },
  { name: "Nuvoco", logo: clientLogo("Nuvoco.png") },
  { name: "PAN HR", logo: clientLogo("Pan HR.png") },
  { name: "Riyasat", logo: clientLogo("Riyasat.png") },
  { name: "SCC", logo: clientLogo("Scc.png") },
  { name: "Schneider Electric", logo: clientLogo("schneider.png") },
  { name: "Spectrum Printech", logo: clientLogo("Spectrum Printech.png") },
  { name: "ITD Cementation", logo: clientLogo("ITD Cementation.png") },
  { name: "JWIL", logo: clientLogo("jwil.png") },
  { name: "Thermax", logo: clientLogo("Thermax.png") },
  { name: "Vision Trade", logo: clientLogo("Vision Trade.png") },
  { name: "Zetwerk", logo: clientLogo("Zetwerk.png") },
]

export const aboutFeatures = [
  {
    title: "Professional Workforce",
    text: "Security personnel prepared through structured training in vigilance, discipline and site operations.",
  },
  {
    title: "Background Verification",
    text: "Personnel undergo background checks, address authentication, character verification and police verification before placement.",
  },
  {
    title: "Operational Supervision",
    text: "Field supervision and audits support consistent post discipline and service coordination.",
  },
  {
    title: "Customized Security Planning",
    text: "Deployment plans are shaped around site surveys, risk context and operational requirements.",
  },
]

/** Primary service pillars highlighted on the landing page */
export const primaryServices = [
  {
    title: "Industrial Security",
    text: "Specialized security management for factories, manufacturing plants, warehouses, mines and large industrial campuses across Rajasthan.",
    points: [
      "Gate & perimeter control",
      "Shift-based plant coverage",
      "Material movement oversight",
    ],
    href: "#contact",
  },
  {
    title: "Corporate Security",
    text: "Professional guarding and supervision for corporate offices, commercial centres, IT parks and business premises.",
    points: [
      "Access & visitor management",
      "Lobby and floor presence",
      "After-hours monitoring",
    ],
    href: "#contact",
  },
  {
    title: "Residential Security",
    text: "Round-the-clock security for gated communities, apartment complexes, townships and residential societies.",
    points: [
      "24×7 gate vigilance",
      "Visitor & vendor screening",
      "Patrol and emergency response",
    ],
    href: "#contact",
  },
]

export const services = [
  ...primaryServices.map(({ title, text, href }) => ({ title, text, href })),
  {
    title: "Security Guard Services",
    text: "Trained security guards for round-the-clock vigilance, access control and disciplined site presence.",
    href: "#contact",
  },
  {
    title: "Executive Protection",
    text: "Close protection and discreet security arrangements for executives, VIP dignitaries and high-profile individuals.",
    href: "#contact",
  },
  {
    title: "Security Audits",
    text: "Independent assessments focused on vulnerabilities, compliance benchmarks and risk-mitigation effectiveness.",
    href: "#contact",
  },
]

export const rajasthanCities = [
  { name: "Jaipur", note: "Head office hub" },
  { name: "Jodhpur", note: "Industrial & commercial" },
  { name: "Udaipur", note: "Hospitality & industry" },
  { name: "Kota", note: "Manufacturing corridor" },
  { name: "Bhiwadi", note: "Industrial belt" },
  { name: "Alwar", note: "Industrial & SEZ" },
  { name: "Ajmer", note: "Institutional & commercial" },
  { name: "Bhilwara", note: "Textile & industry" },
  { name: "Neemrana", note: "Industrial corridor" },
  { name: "Bharatpur", note: "Regional coverage" },
  { name: "Sikar", note: "Regional coverage" },
  { name: "Chittorgarh", note: "Cement & industry" },
]

export const industries = [
  {
    title: "Manufacturing & Factories",
    text: "Industrial plants and production sites across Rajasthan requiring disciplined perimeter and shift-based coverage.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Manufacturing plant floor with industrial equipment",
  },
  {
    title: "Infrastructure & Construction",
    text: "Project sites, highways and infrastructure environments that need coordinated security deployment.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    alt: "Active construction and infrastructure project site",
  },
  {
    title: "Mining & Minerals",
    text: "Mining operations and mineral processing sites needing perimeter control and workforce management.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    alt: "Heavy industrial and mining equipment site",
  },
  {
    title: "Corporate Offices & IT Parks",
    text: "Office campuses and commercial workplaces focused on access control and visitor management.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern corporate office building exterior",
  },
  {
    title: "Tourism & Hospitality",
    text: "Hotels, resorts and hospitality properties that require discreet, guest-friendly security presence.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Hospitality and resort property exterior",
  },
  {
    title: "Warehousing & Logistics",
    text: "Storage and logistics facilities where asset movement and gate control are critical.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Warehouse aisle with stacked inventory and logistics operations",
  },
  {
    title: "Healthcare & Institutions",
    text: "Hospitals, clinics and institutions that require orderly access, calm presence and reliable post coverage.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare facility corridor and reception environment",
  },
  {
    title: "Residential Communities",
    text: "Gated societies, townships and residential premises supported by round-the-clock monitoring.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    alt: "Residential community and apartment buildings",
  },
]

export const whyChoose = [
  {
    title: "Trained Personnel",
    text: "Personnel are prepared through structured training before deployment.",
  },
  {
    title: "Verification Process",
    text: "Background checks and police verification form part of the placement process.",
  },
  {
    title: "Deployment Support",
    text: "Site surveys help shape customized force deployment for standard contracts.",
  },
  {
    title: "Operational Supervision",
    text: "Supervisory checks and field coordination support consistent service delivery.",
  },
  {
    title: "Client-Focused Solutions",
    text: "Security arrangements are aligned to site conditions and operational priorities.",
  },
  {
    title: "Service Coordination",
    text: "Clear communication and coordination help maintain smooth site operations.",
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Requirement Assessment",
    text: "Understand site conditions, risks and the security coverage your operations require.",
  },
  {
    step: "02",
    title: "Security Planning",
    text: "Define a deployment approach based on assessment findings and operational needs.",
  },
  {
    step: "03",
    title: "Personnel Deployment",
    text: "Place verified personnel according to the agreed plan and site schedule.",
  },
  {
    step: "04",
    title: "Continuous Supervision",
    text: "Maintain supervision, coordination and feedback loops across active posts.",
  },
]

/** Testimonials published on marathonsecurity.in */
export const testimonials = [
  {
    quote:
      "Zetouch Security Services has consistently delivered reliable security services with professionalism and strong coordination. Their dedication to site safety, discipline, and operational excellence makes them a trusted security partner.",
    name: "Nripendra Dubey",
    role: "Cemindia Projects Limited",
  },
  {
    quote:
      "We appreciate Zetouch Security Services for their dependable security solutions, professional approach, and effective coordination. Their commitment to maintaining safety, discipline, and smooth operations is highly valued.",
    name: "Neeraj Tiwari",
    role: "JWIL Sustainable Water Management",
  },
  {
    quote:
      "Zetouch Security Services has consistently demonstrated professionalism, efficient security management, and dependable service. We value their commitment to maintaining safety, discipline, and smooth site operations.",
    name: "Lalit Kumar",
    role: "SCC Infrastructure Pvt. Ltd.",
  },
]

export const sampleCaseStudies = [
  {
    industry: "Infrastructure",
    requirement: "Multi-shift site coverage with gate control and material movement oversight.",
    solution: "Customized industrial security deployment with supervisory checks.",
    outcome: "Sample layout — replace with approved project outcomes after client review.",
    sample: true,
  },
  {
    industry: "Corporate Campus",
    requirement: "Visitor management, lobby presence and after-hours monitoring.",
    solution: "Corporate security staffing with coordinated supervision.",
    outcome: "Sample layout — awaiting Marathon Security approval for published cases.",
    sample: true,
  },
]

export const faqs = [
  {
    q: "How can we request security services?",
    a: "Share your requirement through the enquiry form, call +91-9690683851, WhatsApp the team, or email info@marathonsecurity.in. A discussion and site assessment can be arranged based on your needs.",
  },
  {
    q: "How are security personnel verified?",
    a: "According to the company’s public information, personnel undergo background checks, address authentication, character verification and local police verification before placement.",
  },
  {
    q: "Do you provide industrial, corporate and residential security?",
    a: "Yes. Marathon Security offers dedicated industrial, corporate and residential security services, along with guarding, executive protection and security audits.",
  },
  {
    q: "Which cities in Rajasthan do you cover?",
    a: "Primary coverage includes Jaipur, Jodhpur, Udaipur, Kota, Bhiwadi, Alwar, Ajmer, Bhilwara, Neemrana and other key industrial and commercial centres across Rajasthan.",
  },
  {
    q: "How is security deployment planned?",
    a: "For standard corporate, industrial or residential contracts, a site security survey informs a customized deployment plan. Emergency requirements may be organized on a faster timeline based on availability.",
  },
  {
    q: "How can businesses request a free quote?",
    a: "Use the enquiry form on this page, or contact the team directly by phone or WhatsApp with your site details and required services for a tailored discussion.",
  },
]

export const images = {
  hero:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80",
  about:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
  why:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
  logo: "https://marathonsecurity.in/images/logo.png",
}
