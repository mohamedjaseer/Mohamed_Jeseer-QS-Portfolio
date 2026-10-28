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
  Instagram,
  Github,
} from "lucide-react";

export const siteData = {
  name: "M.S Mohamed Jeseer",
  shortName: "Mohamed Jeseer",
  initials: "MJ",
  title: "Junior Quantity Surveyor | Civil & MEP",
  location: "Sri Lanka — Open to relocation to the GCC",
  email: "jaseermohamed86@gmail.com",
  phone: "+94 75 450 6100",
  linkedin: "http://www.linkedin.com/in/mohamedjeseer",

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Me", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education & Experience", href: "#experience", id: "experience" },
    { label: "CV & Contact", href: "#contact", id: "contact" },
  ],

  socialLinks: [
    { label: "LinkedIn", href: "http://www.linkedin.com/in/mohamedjeseer", Icon: Linkedin },
    { label: "Email", href: "mailto:jaseermohamed86@gmail.com", Icon: Mail },
    { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
    { label: "GitHub", href: "https://github.com/", Icon: Github },
  ],

  hero: {
    availability: "Available for opportunities in the GCC",
    headlinePrefix: "Hi, I'm ",
    headlineName: "Mohamed Jeseer",
    headlineSuffix: " a ",
    typingWords: [
      "Junior Quantity Surveyor",
      "QS — Civil & MEP",
      "Cost Control Professional",
      "Commercial Management Enthusiast",
    ],
    subtitle:
      "Welcome to my professional Quantity Surveying portfolio. Holding an HND in Quantity Surveying and currently reading for a BSc (Hons) in Quantity Surveying, I focus on drawing-based quantity take-off, BOQ analysis, interim payment, variation, and construction cost documentation. I aim to develop further in commercial management, contract administration, and cost control within the GCC construction industry.",
    ctaPrimary: "Explore My Projects",
    ctaPrimaryHref: "#projects",
    ctaSecondary: "Download My CV",
    ctaSecondaryHref: "#contact",
  },

  about: {
    eyebrow: "About Me",
    title: "Who I Am",
    subtitle:
      "A results-oriented Quantity Surveying graduate with a clear focus on GCC construction careers.",
    paragraphs: [
      "I am a Quantity Surveying graduate with practical MEP installation exposure and project-based commercial experience involving civil and MEP work on a multi-building industrial project. My academic foundation includes an HND in Quantity Surveying from Ceylon Open Campus, and I am currently reading for a BSc (Hons) in Quantity Surveying at De Montfort University.",
      "My professional competencies centre on quantity take-off and drawing interpretation, Master BOQ review and analysis, Interim Payment Applications (IPA) and Interim Payment Certificates (IPC), contractor variation assessment, contractor adjustment registers and value engineering proposals, and Excel-based quantity records and commercial documentation.",
      "I have developed working familiarity with NRM2, POMI, and CESMM3 measurement principles, as well as FIDIC conditions of contract. My objective is to build stronger capabilities in contract administration, commercial management, and cost control within the GCC construction industry.",
    ],
    highlights: [
      "Quantity Take-Off & Drawing Interpretation",
      "Master BOQ Review & Analysis",
      "IPA & IPC Review",
      "Contractor Variation Assessment",
      "Adjustment Registers & Value Engineering",
      "Excel-Based Commercial Documentation",
      "NRM2, POMI & CESMM3 Standards",
      "FIDIC Conditions of Contract",
    ],
  },

  expertise: {
    eyebrow: "What I Offer",
    title: "Skills & Expertise",
    subtitle:
      "Specialized in quantity surveying, cost estimation, and commercial management for civil and MEP projects.",
    categories: [
      {
        title: "Quantity Surveying",
        icon: Ruler,
        skills: [
          "Quantity Take-Off & Measurement",
          "Bill of Quantities (BOQ) Preparation",
          "Master BOQ Analysis",
          "Drawing-Based Quantity Verification",
          "Civil & Structural Measurement",
          "MEP Quantity Take-Off",
          "Material Take-Off",
          "Construction Cost Estimation",
          "Tender Documentation",
          "Supplier & Subcontractor Quotation Comparison",
          "Interim Payment Application",
          "Interim Payment Certificate",
          "Variation Assessment",
          "Contractor Adjustment",
          "Basic Value Engineering Comparison",
          "Cost Control & Commercial Documentation",
        ],
      },
      {
        title: "Construction Measurement Standards",
        icon: ClipboardCheck,
        skills: [
          "NRM2 — New Rules of Measurement",
          "POMI — Principles of Measurement International",
          "CESMM3 — Civil Engineering Standard Method of Measurement",
          "FIDIC Conditions of Contract",
        ],
        note: "Described as standards and contract knowledge developed through academic study and project-based application.",
      },
      {
        title: "Quantity Surveying Work Areas",
        icon: HardHat,
        skills: [
          "Site Works",
          "Concrete Substructure",
          "Concrete Superstructure",
          "Formwork & Reinforcement Measurement",
          "Masonry & Finishes",
          "Thermal & Moisture Protection",
          "Mechanical & Electrical Quantity Measurement",
        ],
      },
      {
        title: "Technical Skills",
        icon: FileSpreadsheet,
        skills: [
          "Microsoft Excel",
          "PDF Drawing Measurement",
          "BOQ Preparation",
          "Construction Drawing Reading",
          "Quantity Takeoff & Cost Analysis",
        ],
      },
    ],
    software: [
      {
        name: "AutoCAD",
        description: "Technical drawing interpretation and drawing-based quantity measurement.",
        imageKey: "autocad",
        abbr: "AC",
      },
      {
        name: "Autodesk Revit",
        description: "BIM model viewing and model-based quantity take-off support.",
        imageKey: "revit",
        abbr: "RV",
      },
      {
        name: "PlanSwift",
        description: "Digital quantity take-off from construction drawings.",
        imageKey: "planswift",
        abbr: "PS",
      },
      {
        name: "CostX",
        description: "Electronic measurement, workbook-based estimating, and 2D/3D BIM takeoff.",
        imageKey: "costx",
        abbr: "CX",
      },
      {
        name: "Bluebeam",
        description: "PDF markup, digital drawing measurement, and quantity verification.",
        imageKey: "bluebeam",
        abbr: "BB",
      },
      {
        name: "Microsoft Excel",
        description: "BOQ preparation, measurement sheets, quantity calculations, and cost analysis.",
        imageKey: "excel",
        abbr: "XL",
      },
      {
        name: "Microsoft Word",
        description: "Commercial correspondence, quantity surveying reports, and documentation.",
        imageKey: "word",
        abbr: "WD",
      },
      {
        name: "Microsoft PowerPoint",
        description: "Tender presentations, commercial briefings, and progress reviews.",
        imageKey: "powerpoint",
        abbr: "PP",
      },
      {
        name: "Microsoft Office",
        description: "General commercial documentation, correspondence, and reporting.",
        imageKey: "office",
        abbr: "MS",
      },
      {
        name: "PDF Drawing Measurement",
        description: "Scaling, linear/area measurements, and takeoff from digital PDF drawings.",
        imageKey: "pdf",
        abbr: "PDF",
      },
    ],
  },

  projects: {
    eyebrow: "Portfolio",
    title: "My Projects",
    subtitle:
      "Interactive project gallery showcasing real QS experience and practice projects.",
    filters: [
      "All Projects",
      "Industrial Project",
      "Civil Construction Takeoff",
      "MEP Construction Takeoff",
      "BOQ and Cost Analysis",
    ],
    items: [
      {
        id: "p1",
        title: "CEER Automotive Supplier Park — Saudi Arabia",
        category: "Industrial Project",
        filterTags: [
          "All Projects",
          "Industrial Project",
          "Civil Construction Takeoff",
          "MEP Construction Takeoff",
          "BOQ and Cost Analysis",
        ],
        label: "Project-Based QS Experience",
        description:
          "Project-based Quantity Surveying support involving Master BOQ analysis and quantity verification across five factory buildings, covering structural, architectural, and MEP work packages.",
        activities: [
          "Master BOQ review and analysis",
          "Checking BOQ items against construction drawings",
          "Drawing-based quantity take-off",
          "Review of Interim Payment Applications and Interim Payment Certificates",
          "Assessment of contractor variations against submitted quantities, BOQ items, drawings, and consultant recommendations",
          "Review of contractor adjustment registers and value engineering proposals",
        ],
        tags: [
          "Civil QS",
          "MEP QS",
          "BOQ Analysis",
          "Quantity Verification",
          "Variations",
        ],
        detail: {
          overview:
            "A large-scale multi-building industrial project in Saudi Arabia consisting of five factory buildings for the CEER Automotive Supplier Park. This project involved comprehensive Quantity Surveying support across structural, architectural, and MEP work packages.",
          scope:
            "Five factory buildings — structural, architectural, and MEP work packages including civil substructure and superstructure, architectural finishes, mechanical installations, and electrical systems.",
          contribution:
            "Supported commercial QS activities including Master BOQ analysis, quantity verification across all five factory buildings, interim payment review, contractor variation assessment, adjustment registers, and value engineering comparisons.",
          methodology:
            "Drawing-based quantity take-off and verification against Master BOQ. Cross-referencing submitted quantities with construction drawings and consultant recommendations.",
          standards: "NRM2, POMI measurement principles",
          software: "AutoCAD, Microsoft Excel, PDF Drawing Measurement",
          sampleTable: [
            {
              item: "Concrete to Foundations",
              unit: "m³",
              description: "Illustrative example — actual quantities not disclosed",
            },
            {
              item: "Reinforcement to Slabs",
              unit: "kg",
              description: "Illustrative example — actual quantities not disclosed",
            },
            {
              item: "MEP First Fix — Electrical",
              unit: "m",
              description: "Illustrative example — actual quantities not disclosed",
            },
            {
              item: "Architectural Finishes",
              unit: "m²",
              description: "Illustrative example — actual quantities not disclosed",
            },
          ],
        },
      },
      {
        id: "p2",
        title: "Residential Villa — Civil Quantity Take-Off",
        category: "Civil Construction Takeoff",
        filterTags: [
          "All Projects",
          "Civil Construction Takeoff",
          "BOQ and Cost Analysis",
        ],
        label: "Practice Project",
        description:
          "A residential villa quantity take-off exercise covering concrete, reinforcement, and finishes, with detailed measurement sheets and a BOQ prepared for tender-stage cost estimation.",
        activities: [
          "Drawing interpretation",
          "Concrete quantity measurement",
          "Reinforcement measurement",
          "Finishes measurement",
          "Detailed quantity take-off sheets",
          "BOQ preparation",
          "Application of relevant NRM, CESMM3, and POMI measurement principles where applicable",
        ],
        tags: [
          "Civil QS",
          "BOQ Preparation",
          "Quantity Take-Off",
          "Cost Estimation",
        ],
        detail: {
          overview:
            "A practice-based residential villa project focusing on civil quantity take-off, covering concrete, reinforcement, and finishes with detailed measurement sheets.",
          scope:
            "Residential villa — concrete substructure and superstructure, reinforcement, and finishes for tender-stage cost estimation.",
          contribution:
            "Prepared detailed quantity take-off sheets and a Bill of Quantities for tender-stage cost estimation, applying NRM, CESMM3, and POMI measurement principles.",
          methodology:
            "Drawing-based measurement using standard measurement rules. Detailed quantity take-off sheets with BOQ preparation.",
          standards: "NRM2, CESMM3, POMI",
          software: "AutoCAD, Microsoft Excel",
          sampleTable: [
            {
              item: "Concrete to Ground Beams",
              unit: "m³",
              description: "Illustrative example — practice project",
            },
            {
              item: "High-Yield Reinforcement",
              unit: "kg",
              description: "Illustrative example — practice project",
            },
            {
              item: "Internal Wall Finishes",
              unit: "m²",
              description: "Illustrative example — practice project",
            },
          ],
        },
      },
      {
        id: "p3",
        title: "Residential Villa — MEP Quantity Take-Off",
        category: "MEP Construction Takeoff",
        filterTags: [
          "All Projects",
          "MEP Construction Takeoff",
          "BOQ and Cost Analysis",
        ],
        label: "Practice Project",
        description:
          "An MEP quantity take-off exercise using AutoCAD and PDF drawings to prepare electrical and mechanical BOQ sections.",
        activities: [
          "Electrical quantity take-off",
          "Mechanical quantity take-off",
          "Drawing-based measurement",
          "POMI measurement principles",
          "Basic cost estimation and cost control checks",
        ],
        tags: [
          "MEP QS",
          "Electrical QTO",
          "Mechanical QTO",
          "POMI",
          "Cost Estimation",
        ],
        detail: {
          overview:
            "A practice-based MEP quantity take-off exercise for a residential villa, using AutoCAD and PDF drawings to prepare electrical and mechanical BOQ sections.",
          scope:
            "Residential villa — electrical and mechanical installations, including conduit runs, cable trays, piping, and equipment.",
          contribution:
            "Prepared electrical and mechanical BOQ sections to POMI from AutoCAD and PDF drawings. Applied basic cost estimation and cost control checks.",
          methodology:
            "Drawing-based measurement using POMI measurement principles. Electrical and mechanical take-off from AutoCAD and PDF drawings.",
          standards: "POMI, NRM2",
          software: "AutoCAD, Microsoft Excel, PDF Drawing Measurement",
          sampleTable: [
            {
              item: "PVC Conduit (20mm)",
              unit: "m",
              description: "Illustrative example — practice project",
            },
            {
              item: "XLPE Cable (2.5mm²)",
              unit: "m",
              description: "Illustrative example — practice project",
            },
            {
              item: "UPVC Pipe (50mm)",
              unit: "m",
              description: "Illustrative example — practice project",
            },
          ],
        },
      },
    ],
  },

  experience: {
    eyebrow: "Background",
    title: "Education & Experience",
    subtitle:
      "A journey through my professional career, project experience, and educational background.",
    tabs: [
      {
        key: "experience",
        label: "Experience",
        items: [
          {
            title: "Internship — MEP Installation",
            org: "CH Engineering, Colombo, Sri Lanka",
            period: "2025 – 2026",
            location: "Colombo, Sri Lanka",
            description:
              "Supported MEP installation activities and site material tracking. Developed practical understanding of how measured quantities relate to actual work executed on site.",
            highlights: [
              "Supported MEP installation activities and site material tracking",
              "Developed practical understanding of how measured quantities relate to actual work executed on site",
              "Read MEP construction drawings for layout and routing",
              "Gained exposure to MEP quantity take-off and BOQ preparation",
              "Developed practical knowledge of material take-off and construction site coordination",
            ],
          },
        ],
      },
      {
        key: "project-experience",
        label: "Project Experience",
        items: [
          {
            title: "Project-Based Quantity Surveying Experience",
            org: "CEER Automotive Supplier Park, Saudi Arabia",
            period: "Project-Based",
            location: "Saudi Arabia",
            description:
              "Project-based QS support across a multi-building industrial project covering five factory buildings. Presented separately as this is project-based experience rather than direct employment.",
            highlights: [
              "Master BOQ analysis and quantity verification across five factory buildings",
              "Reviewed Interim Payment Applications (IPA) and Interim Payment Certificates (IPC)",
              "Assessed contractor variations against submitted quantities, BOQ items, drawings, and consultant recommendations",
              "Reviewed contractor adjustment registers and value engineering proposals",
              "Performed drawing-based take-off for structural, architectural, and MEP works",
            ],
          },
        ],
      },
      {
        key: "education",
        label: "Education",
        items: [
          {
            title: "BSc (Hons) Quantity Surveying and Construction",
            org: "De Montfort University",
            period: "Currently Reading",
            location: "",
            description:
              "Currently reading for a BSc (Hons) in Quantity Surveying and Construction to further develop knowledge in contract administration, commercial management, and cost control.",
            highlights: [],
          },
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
            title: "Diploma in Information Technology — Level 03",
            org: "Esoft Metro College",
            period: "Completed",
            location: "Sri Lanka",
            description:
              "Developed IT skills applicable to quantity surveying practice, including proficiency in Microsoft Office and data management.",
            highlights: [],
          },
        ],
      },
    ],
  },

  certifications: {
    eyebrow: "Verification",
    title: "Certificate Verification",
    subtitle: "Professional certificate verification.",
    items: [
      {
        title: "NOCN Certificate Verification",
        org: "NOCN",
        certNumber: "Reference No. 4879075",
      },
    ],
  },

  strengths: {
    eyebrow: "Professional Strengths",
    title: "Core Competencies",
    subtitle: "Key professional attributes supporting my QS practice.",
    items: [
      {
        title: "Analytical & Logical Thinking",
        description:
          "Strong analytical and logical thinking abilities applied to quantity measurement, cost analysis, and commercial assessments.",
        icon: "brain",
      },
      {
        title: "Time Management",
        description:
          "Effective time management enabling delivery of measurement tasks and documentation within project deadlines.",
        icon: "clock",
      },
      {
        title: "Communication",
        description:
          "Fluent in English and Tamil. Effective communication with site teams, project teams, and stakeholders.",
        icon: "messages",
      },
      {
        title: "Teamwork & Coordination",
        description:
          "Coordinating quantity-related information with site and project teams and supporting commercial coordination.",
        icon: "users",
      },
      {
        title: "Problem-Solving",
        description:
          "Identifying discrepancies in quantities, resolving measurement issues, and supporting cost-saving opportunities through careful analysis.",
        icon: "lightbulb",
      },
      {
        title: "Adaptability & Quick Learning",
        description:
          "Adaptable to new environments, project types, and software tools with a commitment to continuous professional development.",
        icon: "rocket",
      },
      {
        title: "English & Tamil Languages",
        description:
          "Bilingual language skills enabling effective communication across multicultural project environments.",
        icon: "languages",
      },
    ],
  },

  contact: {
    eyebrow: "Get In Touch",
    title: "CV & Contact",
    subtitle:
      "Interested in hiring or have a project opportunity? Download my CV or reach out directly.",
    careerObjective:
      "Seeking a Junior Quantity Surveyor position within the GCC construction industry to contribute to quantity surveying, commercial management, contract administration, and cost control, while continuing to develop my professional expertise on large-scale construction projects.",
  },
};
