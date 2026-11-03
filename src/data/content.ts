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
  /** Verbatim coverage statement aligned with marathonsecurity.in FAQ */
  coverage:
    "Head Office in Jaipur (Rajasthan) and Corporate Office in Ahmedabad (Gujarat), servicing sites across North and Western India including industrial hubs, construction infrastructure projects, and metro centres.",
  motto: "Reliability, Quality, and Results",
  referenceSite: "https://marathonsecurity.in/",
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

/** Hero trust chips — only claims supported by public company materials */
export const trustItems = [
  "ISO 9001:2015 certified organization",
  "Head Office — Jaipur, Rajasthan",
  "Clients listed on the official website",
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
    text: "Specialized security management for factories, manufacturing plants, warehouses and large industrial campuses.",
    points: [
      "Gate & perimeter control",
      "Shift-based plant coverage",
      "Material movement oversight",
    ],
    href: "#contact",
  },
  {
    title: "Corporate Security",
    text: "Professional guarding and supervision for corporate offices, commercial centres and business premises.",
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

/**
 * Confirmed locations only — from public FAQ on marathonsecurity.in.
 * Do not expand into unverified city lists.
 */
export const confirmedLocations = [
  {
    name: "Jaipur, Rajasthan",
    note: "Head Office",
    detail: "Listed as the company Head Office on the official website.",
  },
  {
    name: "Ahmedabad, Gujarat",
    note: "Corporate Office",
    detail: "Listed as the Corporate Office on the official website.",
  },
  {
    name: "North & Western India",
    note: "Service footprint",
    detail:
      "Public materials describe servicing industrial hubs, construction infrastructure projects and metro centres across North and Western India.",
  },
]

/** Industry cards requested for this concept page */
export const industries = [
  {
    title: "Factories",
    text: "Manufacturing plants and production facilities requiring disciplined perimeter control and shift-based coverage.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Factory production floor with industrial equipment",
  },
  {
    title: "Warehouses",
    text: "Storage and logistics facilities where gate control, asset movement and inventory protection are critical.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Warehouse aisle with stacked inventory",
  },
  {
    title: "Hospitals",
    text: "Healthcare premises that need orderly access, calm presence and reliable post coverage.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Hospital corridor and healthcare facility environment",
  },
  {
    title: "Corporate Offices",
    text: "Office campuses and commercial workplaces focused on access control and visitor management.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Corporate office building exterior",
  },
  {
    title: "Residential Societies",
    text: "Gated communities, townships and apartment premises supported by round-the-clock monitoring.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    alt: "Residential society and apartment buildings",
  },
  {
    title: "Construction Sites",
    text: "Project sites and infrastructure environments that need coordinated security deployment.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    alt: "Active construction site with scaffolding and equipment",
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

/** Conversion process: Requirement → Site Assessment → Quotation → Deployment */
export const processSteps = [
  {
    step: "01",
    title: "Requirement",
    text: "Share your site type, location and security needs through the enquiry form, phone or WhatsApp.",
  },
  {
    step: "02",
    title: "Site Assessment",
    text: "A site security survey helps understand risks, access points and operational coverage requirements.",
  },
  {
    step: "03",
    title: "Quotation",
    text: "Receive a tailored proposal based on the assessment, required posts and deployment plan.",
  },
  {
    step: "04",
    title: "Deployment",
    text: "Verified personnel are placed according to the agreed plan, with ongoing supervision support.",
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
    a: "Yes. Industrial, corporate and residential security are part of the published service offering, along with guarding, executive protection and security audits.",
  },
  {
    q: "Which locations do you serve?",
    a: "Zetouch Security lists a Head Office in Jaipur (Rajasthan) and a Corporate Office in Ahmedabad (Gujarat), servicing sites across North and Western India including industrial hubs, construction infrastructure projects and metro centres.",
  },
  {
    q: "How is security deployment planned?",
    a: "For standard corporate or industrial contracts, a site security survey informs a customized deployment plan. Emergency requirements may be organized on a faster timeline based on availability.",
  },
  {
    q: "How can businesses request a free quote?",
    a: "Use the enquiry form on this page, or contact the team directly by phone or WhatsApp with your site details and required services for a tailored discussion.",
  },
]

export const formServices = [
  "Industrial Security",
  "Corporate Security",
  "Residential Security",
  "Security Guard Services",
  "Executive Protection",
  "Security Audits",
  "Other / Multiple",
]

export const images = {
  /** Professional security personnel imagery for hero */
  hero:
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=80",
  /** Fallback / alternate: official site hero asset */
  heroOfficial: "https://marathonsecurity.in/images/hero1.jpg",
  about:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
  why:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
  logo: "https://marathonsecurity.in/images/logo.png",
}
