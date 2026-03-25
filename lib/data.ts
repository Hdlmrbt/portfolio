import type {
  ContactInfo,
  Education,
  Experience,
  NavItem,
  SkillCategory,
  SocialLink,
  Stat,
} from '@/types';

// ─── Personal Info ─────────────────────────────────────────────────────────

export const personalInfo = {
  name:       'Houda Lamrabet',
  title:      'Élève Ingénieure — Data & Intelligence Artificielle',
  shortTitle: 'Data & AI Engineer',
  tagline:    'Building intelligent systems, one model at a time.',
  bio: `I'm a Data & AI Engineering student at EMSI Rabat, building at the intersection of machine learning, computer vision, and full-stack development. Starting with a foundation in network systems, I developed a deep appreciation for how infrastructure and data interconnect — a perspective that shapes how I approach AI end-to-end.

From training CNN-based facial recognition systems with transfer learning, to architecting real-time environmental monitoring platforms, I bring both engineering rigor and creative curiosity to every challenge. Currently deepening my expertise in deep learning, big data pipelines, and intelligent web applications.`,
  avatarUrl:  'https://avatars.githubusercontent.com/u/188856699?v=4',
  roles: [
    'Data & AI Engineer',
    'Machine Learning Developer',
    'Full-Stack Builder',
    'Computer Vision Explorer',
    'Big Data Enthusiast',
  ],
};

export const contact: ContactInfo = {
  email:    'houdalamrabet104@gmail.com',
  phone:    '+212 7 62 34 66 09',
  location: 'Karia Salé, Maroc',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub',   href: 'https://github.com/Hdlmrbt',                            icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/houda-lamrabet-84495a262/', icon: 'linkedin' },
  { label: 'Email',    href: 'mailto:houdalamrabet104@gmail.com',                     icon: 'mail' },
];

// ─── Navigation ────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Dashboard',  href: '#dashboard' },
  { label: 'Contact',    href: '#contact' },
];

// ─── Hero Stats ────────────────────────────────────────────────────────────

export const heroStats: Stat[] = [
  { value: '3+',   label: 'Internships' },
  { value: '4+',   label: 'Projects' },
  { value: '10+',  label: 'Technologies' },
  { value: 'C1',   label: 'English Level' },
];

// ─── About Section ─────────────────────────────────────────────────────────

export const aboutNarrative = {
  intro: `Where data meets design — I'm Houda, a Data & AI engineering student based in Salé, Morocco, passionate about building intelligent systems that bridge the gap between complex data and real-world impact.`,
  body: `My engineering journey began in network systems (DUT at EST Salé), where I developed a systems-level mindset that now informs every model I architect and every application I deploy. This rare dual perspective — infrastructure meets intelligence — is what sets my approach apart.

At EMSI Rabat, I'm specializing in machine learning, deep learning, and big data, while actively applying these in real professional contexts: from designing IoT sensor dashboards at Harmony Technology, to modernizing archive systems with NLP at SNRT, to network monitoring at Redal.

I believe the best engineers don't just write code — they understand systems, think in data, and build with purpose.`,
  values: [
    { label: 'Systems Thinking', desc: 'Infrastructure to application, end-to-end.' },
    { label: 'Data-Driven',      desc: 'Every decision backed by evidence.' },
    { label: 'Continuous Growth', desc: 'Always learning the next frontier.' },
  ],
};

export const aboutStats: Stat[] = [
  { value: '3',   label: 'Professional Internships' },
  { value: '4+',  label: 'Academic Projects' },
  { value: '3',   label: 'Languages Spoken' },
  { value: '2+',  label: 'Years of Engineering' },
];

// ─── Skills ────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data & AI',
    color: 'pink',
    skills: [
      { name: 'Python',        level: 90, years: 2 },
      { name: 'Machine Learning', level: 82 },
      { name: 'Deep Learning', level: 75 },
      { name: 'Computer Vision', level: 72 },
      { name: 'TensorFlow / Keras', level: 70 },
      { name: 'Scikit-learn',  level: 80 },
      { name: 'PyTorch',       level: 60 },
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'Power BI',      level: 68 },
      { name: 'Big Data / Hadoop', level: 60 },
    ],
  },
  {
    title: 'Web Development',
    color: 'beige',
    skills: [
      { name: 'Django',        level: 78, years: 2 },
      { name: 'React',         level: 65 },
      { name: 'Flask',         level: 72 },
      { name: 'Node.js',       level: 58 },
      { name: 'Laravel',       level: 60 },
      { name: 'HTML / CSS / JS', level: 82 },
      { name: 'MySQL / Oracle', level: 75 },
      { name: 'REST APIs',     level: 76 },
    ],
  },
  {
    title: 'Networks & Security',
    color: 'rose',
    skills: [
      { name: 'LAN Administration', level: 80 },
      { name: 'GNS3',          level: 75 },
      { name: 'Zabbix / Nagios', level: 70 },
      { name: 'VPN / DMZ',     level: 65 },
      { name: 'RADIUS / OpenLDAP', level: 60 },
      { name: 'Packet Tracer', level: 72 },
    ],
  },
  {
    title: 'Languages & Tools',
    color: 'mauve',
    skills: [
      { name: 'Python',        level: 90 },
      { name: 'C / C++',       level: 65 },
      { name: 'Linux (Ubuntu/RedHat)', level: 78 },
      { name: 'Git / GitHub',  level: 74 },
      { name: 'UML / Merise',  level: 70 },
      { name: 'OpenCV',        level: 72 },
    ],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id:          'harmony-2025',
    role:        'Web Development Intern',
    company:     'Harmony Technology',
    type:        'Stage',
    period:      'June 2025',
    startDate:   '2025-06-01',
    location:    'Morocco',
    current:     true,
    description: [
      'Designed an integrated data visualization system for distilled water reservoirs in a desalination station.',
      'Built a real-time monitoring interface communicating directly with IoT sensors.',
      'Developed RESTful APIs to stream live sensor data to the dashboard.',
    ],
    tags: ['IoT', 'Real-time', 'REST API', 'Data Visualization', 'Web'],
  },
  {
    id:          'snrt-2024',
    role:        'Archive System Modernization Intern',
    company:     'SNRT',
    type:        'Stage',
    period:      'Apr – Jun 2024',
    startDate:   '2024-04-01',
    endDate:     '2024-06-30',
    location:    'Rabat, Morocco',
    description: [
      'Replaced a legacy Excel-based archive system with a full web application and real-time dashboard.',
      'Integrated audio file handling with automatic speech-to-text conversion.',
      'Implemented metadata management and content indexing for the media archive.',
    ],
    tags: ['Django', 'NLP', 'Audio Processing', 'Dashboard', 'MySQL'],
  },
  {
    id:          'redal-2023',
    role:        'Network Supervision Intern',
    company:     'Redal',
    type:        'Stage',
    period:      'Jun – Jul 2023',
    startDate:   '2023-06-01',
    endDate:     '2023-07-31',
    location:    'Rabat, Morocco',
    description: [
      'Designed and simulated network architectures using GNS3.',
      'Deployed Zabbix monitoring server on Linux (Debian) for real-time infrastructure supervision.',
      'Documented network topology and wrote alert escalation procedures.',
    ],
    tags: ['GNS3', 'Zabbix', 'Linux', 'Network Architecture', 'Monitoring'],
  },
];

// ─── Education ─────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    id:          'emsi',
    degree:      '4th Year — Génie Data & Intelligence Artificielle',
    institution: 'École Marocaine des Sciences de l\'Ingénieur (EMSI)',
    period:      '2024 – Present',
    location:    'Rabat, Morocco',
    description: 'Specialization in Machine Learning, Deep Learning, Big Data, and AI systems engineering.',
  },
  {
    id:          'est',
    degree:      'DUT — Système Informatique et Réseau (SIR)',
    institution: 'École Supérieure de Technologie',
    period:      '2022 – 2024',
    location:    'Salé, Morocco',
    description: 'Network administration, system architecture, and applied computer science.',
  },
  {
    id:          'bac',
    degree:      'Baccalauréat — Sciences Physiques',
    institution: 'Lycée Kadi',
    period:      '2021 – 2022',
    location:    'Salé, Morocco',
  },
];

// ─── Languages ─────────────────────────────────────────────────────────────

export const languages = [
  { name: 'Arabic',  level: 'C2', label: 'Native' },
  { name: 'English', level: 'C1', label: 'Advanced' },
  { name: 'French',  level: 'B2', label: 'Upper-Intermediate' },
];
