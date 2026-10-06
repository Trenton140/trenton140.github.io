// All of the site's text and links. Edit here; the components only handle layout.

export const name = 'Trenton Tong';

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/trenton140' },
  { label: 'Email', href: 'mailto:contact@trentontong.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trentontong' },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
];

export const greeting = "Hi, I'm Trenton";

export const taglines = [
  "I'm a Data Scientist Associate at TD.",
  "I'm passionate about fitness and travel.",
  'I thrive on tech challenges and new experiences!',
];

export const about = [
  "Welcome to my personal website! I'm Trenton Tong, a Data Scientist Associate at TD Bank, currently on the CPB CCPL AI2 team. I graduated from Carleton University in December 2025 with a Bachelor of Computer Science (Honours), focusing on Cybersecurity with a minor in Business.",
  "I have a diverse skill set that includes Python, PySpark, SQL, Databricks, Power BI, Java, C, C++, JavaScript, and HTML/CSS, built up through my roles at TD, my projects, and my coursework.",
  "I'm passionate about solving complex problems and thrive on innovation and adaptability. Explore my website to learn more about my projects, experience, and interests.",
  "Feel free to connect if you'd like to chat about data science, tech, business, or potential collaborations. Thanks for visiting!",
];

export const experience = [
  {
    title: 'AI2 Data Scientist Associate',
    org: 'TD Bank',
    dates: 'January 2026 – Present',
    logo: 'td',
    sections: [
      {
        heading: 'CPB CCPL AI2',
        dates: 'October 2026 – Present',
      },
      {
        heading: 'Wealth AI2',
        dates: 'January 2026 – September 2026',
        points: [
          'Built the end-to-end ETL pipeline and methodology for Private Banking household segmentation.',
          'Presented the segmentation framework to senior business stakeholders and secured their approval.',
          'Helped secure Model Validation approval for a client-attrition propensity model by validating its outputs and writing key sections of its Model Development Report.',
          'Ran a Test & Learn on an attrition-focused email campaign, defining standardized KPIs for funding, withdrawals, trading activity, and transfers.',
          'Completed model governance work, including documentation, compliance assessment, and stability testing, and handed off the pipeline to the AI/ML team.',
        ],
      },
    ],
  },
  {
    title: 'Wealth AI2 Analytics & Data Science Intern',
    org: 'TD Bank (Wealth AI2)',
    dates: 'May 2025 – December 2025',
    logo: 'td',
    points: [
      'Rebuilt an XGBoost propensity model on Databricks (PySpark, Spark SQL) to flag clients at risk of moving assets to competing platforms for targeted retention campaigns.',
      'Designed the feature-selection process, engineered new features, and built object-oriented preprocessing classes for categorical encoding and missing-value handling.',
      'Tuned hyperparameters within memory limits by searching on a class-balanced sample before full training; the model generalized well to test and out-of-time data.',
      'Wrote the Model Development Report and presented results to AI2 senior leadership.',
    ],
  },
  {
    title: 'Finance Intern',
    org: 'TD Bank (Corporate Finance)',
    dates: 'May 2024 – April 2025',
    logo: 'td',
    sections: [
      {
        heading: 'Reconciliation Automation',
        dates: 'September 2024 – April 2025',
        points: ['Built automated Alteryx workflows for reconciliation tasks.'],
      },
      {
        heading: 'FRP Value Stream',
        dates: 'May 2024 – August 2024',
      },
    ],
  },
  {
    title: 'Technology Solutions Intern',
    org: 'TD Bank (Corporate Finance)',
    dates: 'May 2023 – April 2024',
    logo: 'td',
    description:
      'Led the development of the Centralized Diamond Attestation Program, managed SharePoint List backends, and utilized Power BI for data analysis and reporting.',
  },
  {
    title: 'Bilingual Client Care Representative, Special Contracts',
    org: 'TELUS Health',
    dates: 'September 2021 – September 2024',
    logo: 'telus',
    description:
      'Assisted clients with counseling appointments, redirected clients in distress to standby resources, and handled priority calls from dedicated lines.',
  },
];

export const projects = [
  {
    title: 'Aircraft Inspection Tracker Simulator',
    org: 'Software Engineering course',
    dates: 'April 2022',
    description:
      'Programmed a parts control system for an airline using C++ in Linux, following the observer design pattern, and utilizing multiple inheritance, polymorphism, operator overloading and templates.',
  },
  {
    title: 'Community Fridge',
    org: 'Full Stack Web Development Course',
    dates: 'January 2022 – April 2022',
    description:
      'Developed a website for managing goods in communal refrigerators, incorporating a MongoDB database, and used JavaScript, HTML, AJAX, CSS, Node.js, Express, and MongoDB for front-end and back-end development.',
  },
];

export const footerNote = 'This website is currently under development.';
