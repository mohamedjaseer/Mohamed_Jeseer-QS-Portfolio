import {
  Linkedin,
  Mail,
  Phone,
  Ruler,
  FileSpreadsheet,
  ClipboardCheck,
  Coins,
  HardHat,
  PenTool,
} from "lucide-react";

export const siteData = {
  name: "Mohamed Jeseer",
  location: "Sri Lanka (Open to relocation to UAE)",
  email: "jaseermohamed86@gmail.com",
  phone: "+94 75 450 6100",

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "Expertise", href: "#expertise", id: "expertise" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Certifications", href: "#certifications", id: "certifications" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],

  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/in/mohamedjeseer", Icon: Linkedin },
    { label: "Email", href: "mailto:jaseermohamed86@gmail.com", Icon: Mail },
    { label: "Phone", href: "tel:+94754506100", Icon: Phone },
  ],

  hero: {
    availability: "Available for opportunities",
    headlinePrefix: "Hi, I'm ",
    headlineName: "Mohamed Jeseer",
    headlineSuffix: " a ",
    typingWords: ["Junior Quantity Surveyor", "QS – Civil / MEP", "Cost Control Professional"],
    subtitle:
      "Quantity Surveying graduate with practical MEP site exposure and commercial project-based experience in civil and MEP work. Skilled in Quantity take-off, BOQ preparation, interim payment review, variation assessment and cost estimation using AutoCAD, Revit, PlanSwift and NRM2/POMI standards. Seeking a Junior QS role in the UAE.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "View Experience",
  },

  expertise: {
    eyebrow: "What I Do",
    title: "My Expertise",
    subtitle:
      "Specialized in quantity surveying, cost estimation and commercial management for civil and MEP projects.",
    cards: [
      {
        icon: Ruler,
        title: "Quantity Take-Off & BOQ Preparation",
        description:
          "Performing drawing-based quantity take-off for structural, architectural and MEP works using NRM2, POMI and CESMM3 standards, producing detailed take-off sheets and Bills of Quantities.",
      },
      {
        icon: Coins,
        title: "Cost Estimation & Cost Control",
        description:
          "Supporting quantity-based cost estimation, rate analysis, pricing schedules and tender documentation. Reviewing project costs, committed expenditure and identifying cost implications.",
      },
      {
        icon: ClipboardCheck,
        title: "Payment & Variation Management",
        description:
          "Reviewing Interim Payment Applications (IPA) and Interim Payment Certificates (IPC), assessing contractor variations and maintaining accurate change records and adjustment registers.",
      },
      {
        icon: FileSpreadsheet,
        title: "Contract Administration Support",
        description:
          "Assisting with supplier/subcontractor quotation reviews, commercial comparisons, procurement knowledge and supporting contract administration with FIDIC familiarity.",
      },
    ],
  },

  skills: {
    eyebrow: "Technical Skills",
    title: "Skills & Tools",
    subtitle: "Software, standards and tools I use in quantity surveying",
    items: [
      { name: "AutoCAD", logo: { type: "text", value: "AC" } },
      { name: "Revit", logo: { type: "text", value: "RV" } },
      { name: "PlanSwift", logo: { type: "text", value: "PS" } },
      { name: "Microsoft Excel", logo: { type: "text", value: "XL" } },
      { name: "Microsoft Office", logo: { type: "text", value: "MS" } },
      { name: "NRM2", logo: { type: "icon", Icon: Ruler } },
      { name: "POMI", logo: { type: "icon", Icon: PenTool } },
      { name: "CESMM3", logo: { type: "icon", Icon: HardHat } },
      { name: "FIDIC", logo: { type: "icon", Icon: ClipboardCheck } },
    ],
  },

  projects: {
    eyebrow: "Key Responsibilities",
    title: "Core Competencies",
    subtitle:
      "Key responsibilities and capabilities I bring to quantity surveying and commercial management roles.",
    filters: ["All"],
    items: [
      {
        id: "p1",
        title: "Drawing Interpretation & Measurement",
        description:
          "Interpret architectural, structural, and MEP drawings to measure quantities and identify scope requirements. Prepare quantity take-off sheets, material take-offs, and BOQs using NRM2 and POMI.",
        tags: ["All"],
        githubUrl: "",
        demoUrl: "",
      },
      {
        id: "p2",
        title: "Cost Estimation & Procurement",
        description:
          "Support quantity-based cost estimation, rate analysis, pricing schedules, and tender documentation. Assist with reviewing supplier and subcontractor quotations and preparing commercial comparison records.",
        tags: ["All"],
        githubUrl: "",
        demoUrl: "",
      },
      {
        id: "p3",
        title: "Payment, Variation & Site Measurement",
        description:
          "Support progress measurement and review IPA/IPC. Compare quantities against drawings and BOQ items to support variation assessments. Assist with site measurement, material tracking and quantity verification.",
        tags: ["All"],
        githubUrl: "",
        demoUrl: "",
      },
    ],
  },

  experience: {
    eyebrow: "Background",
    title: "My Experience",
    subtitle: "A journey through my professional career and educational background.",
    tabs: [
      {
        key: "experience",
        label: "Experience",
        items: [
          {
            title: "Trainee – MEP Installation",
            org: "CH Engineering, Colombo",
            period: "Jul 2025 – Jan 2026",
            location: "Colombo, Sri Lanka",
            description:
              "Supported installation of MEP systems and tracked materials on site, gaining practical insight into how measured quantities relate to work done on site.",
            highlights: [
              "Read MEP construction drawings for layout and routing; gained exposure to MEP take-off and BOQ preparation",
              "Built practical understanding of quantity take-off, material take-off, and BOQ preparation through direct MEP site experience",
              "Tracked materials on site and supported installation of MEP systems",
            ],
          },
          {
            title: "QS Support – Industrial Project",
            org: "CEER Automotive Supplier Park, Saudi Arabia",
            period: "Project-Based",
            location: "Saudi Arabia",
            description:
              "Supported commercial QS activities across a multi-building industrial project covering five factory buildings.",
            highlights: [
              "Supported review and analysis of the Master BOQ across five factory buildings, checking structural, architectural and MEP items against drawings",
              "Reviewed Interim Payment Applications (IPA) and Interim Payment Certificates (IPC), building working knowledge of progress valuation and payment certification",
              "Assessed contractor variations by comparing submitted quantities with drawings, BOQ items and consultant recommendations",
              "Worked with contractor adjustment registers and value engineering proposals",
              "Performed drawing-based take-off for structural, architectural and MEP works using NRM2 principles",
            ],
          },
          {
            title: "MEP Quantity Take-Off Practice",
            org: "Residential Villa Project",
            period: "Practice-Based",
            location: "Sri Lanka",
            description:
              "Prepared electrical and mechanical BOQ sections to POMI from AutoCAD and PDF drawings.",
            highlights: [
              "Prepared electrical and mechanical BOQ sections to POMI from AutoCAD and PDF drawings",
              "Applied basic cost estimation and cost control checks",
              "Applied NRM and POMI measurement rules consistently across the take-off",
            ],
          },
          {
            title: "Civil Quantity Take-Off Practice",
            org: "Residential Villa Project",
            period: "Practice-Based",
            location: "Sri Lanka",
            description:
              "Measured concrete, reinforcement and finishes and produced detailed take-off sheets and a BOQ for tender-stage cost estimation.",
            highlights: [
              "Measured concrete, reinforcement and finishes to produce detailed take-off sheets",
              "Produced a BOQ for tender-stage cost estimation",
              "Applied NRM, CESMM3 and POMI measurement rules consistently across the take-off",
            ],
          },
        ],
      },
      {
        key: "education",
        label: "Education",
        items: [
          {
            title: "Higher National Diploma (HND) in Quantity Surveying",
            org: "Ceylon Open Campus",
            period: "Completed",
            location: "Sri Lanka",
            description:
              "Comprehensive quantity surveying programme covering measurement, cost estimation, contract administration, and construction technology.",
            highlights: [
              "Studied NRM2, POMI, CESMM3 measurement standards",
              "Gained foundations in contract administration and FIDIC conditions",
            ],
          },
          {
            title: "Diploma in Information Technology (Level 03)",
            org: "Esoft Metro College",
            period: "Completed",
            location: "Sri Lanka",
            description:
              "Developed IT skills applicable to quantity surveying practice, including proficiency in Microsoft Office and data management.",
          },
        ],
      },
    ],
  },

  certifications: {
    eyebrow: "Certifications & Memberships",
    title: "Certifications",
    subtitle: "Professional certifications and verifications.",
    items: [
      {
        title: "NOCN Certificate Verification",
        org: "NOCN",
        certNumber: "No. 4879075",
      },
    ],
  },

  events: {
    eyebrow: "Professional Skills",
    title: "Professional Skills & Competencies",
    subtitle: "Core professional skills that support my quantity surveying practice.",
    items: [
      {
        id: "e1",
        title: "Analytical & Logical Thinking",
        category: "Professional Skill",
        location: "",
        date: "",
        imageUrl: "",
        description:
          "Strong analytical and logical thinking abilities applied to quantity measurement, cost analysis and commercial assessments.",
        caption: "Analytical & Logical Thinking",
      },
      {
        id: "e2",
        title: "Communication Skills",
        category: "Professional Skill",
        location: "",
        date: "",
        imageUrl: "",
        description:
          "Fluent in English and Tamil. Effective communication with site teams, project teams and stakeholders.",
        caption: "Communication Skills — English & Tamil",
      },
      {
        id: "e3",
        title: "Teamwork & Coordination",
        category: "Professional Skill",
        location: "",
        date: "",
        imageUrl: "",
        description:
          "Coordinating quantity-related information with site and project teams and supporting quantity comparisons for potential cost-saving opportunities.",
        caption: "Teamwork & Coordination",
      },
      {
        id: "e4",
        title: "Time Management & Adaptability",
        category: "Professional Skill",
        location: "",
        date: "",
        imageUrl: "",
        description:
          "Strong time management abilities with adaptability and quick learning in new environments and project types.",
        caption: "Time Management & Adaptability",
      },
      {
        id: "e5",
        title: "Problem-Solving Ability",
        category: "Professional Skill",
        location: "",
        date: "",
        imageUrl: "",
        description:
          "Identifying discrepancies in quantities, resolving measurement issues, and supporting cost-saving opportunities through careful analysis.",
        caption: "Problem-Solving Ability",
      },
    ],
  },
};
