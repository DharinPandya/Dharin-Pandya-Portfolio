/**
 * Dharin Pandya - Personal Portfolio JavaScript
 * Student & Aspiring Software Engineer Profile
 * Clean, Non-3D, High-Performance Interactions: Theme, Typing, Filters, Modal, Photo, Resume & Single Certificate
 */

// --- Global State & Element Cache ---
const state = {
  theme: 'dark',
  customCvFile: null,
  attachedCertFile: null,
  statsAnimated: false,
  skillsAnimated: false,
};

// Default high-fidelity vector monogram for Dharin Pandya (Electric Blue Theme)
const DEFAULT_AVATAR_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050b18" />
      <stop offset="50%" stop-color="#0c2144" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="glowRing" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="600" height="700" fill="url(#bgGrad)" />
  <circle cx="300" cy="310" r="190" fill="none" stroke="url(#accentGrad)" stroke-width="3" opacity="0.4" stroke-dasharray="10 8" />
  <circle cx="300" cy="310" r="160" fill="none" stroke="url(#glowRing)" stroke-width="2" opacity="0.6" />
  <circle cx="300" cy="310" r="135" fill="#0b172e" />
  <path d="M 210,480 C 210,380 390,380 390,480 Z" fill="url(#accentGrad)" opacity="0.25" />
  <circle cx="300" cy="270" r="68" fill="url(#accentGrad)" opacity="0.3" />
  <text x="300" y="335" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="110" font-weight="900" fill="url(#accentGrad)" text-anchor="middle" letter-spacing="-2">DP</text>
  <text x="300" y="550" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" font-weight="700" fill="#f8fafc" text-anchor="middle" letter-spacing="4">DHARIN PANDYA</text>
  <text x="300" y="585" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="500" fill="#94a3b8" text-anchor="middle" letter-spacing="1.5">COMPUTER SCIENCE · STUDENT</text>
</svg>
`);

// --- Project Portfolio & Single Certificate Data Directory ---
const PROJECTS_DATA = [
  {
    id: 'student-mgmt-python',
    title: 'Student Management System (Python & MySQL)',
    category: 'python',
    categoryName: 'Python & Database',
    shortDesc: 'Relational database management application built with Python and MySQL featuring 3NF schemas, foreign key joins, and parameterized CRUD operations.',
    tags: ['Python', 'SQL', 'MySQL', 'Database Design', 'CRUD', 'Relational Schemas'],
    overview: 'A robust database management system engineered to model, query, and maintain student academic records using MySQL relational tables and Python database connectors. Features 3NF normalization, data integrity enforcement, and automated transcript calculations.',
    problem: 'Eliminating duplicate record entry, handling cascading foreign key relationships, and writing clean parameterized SQL to prevent injection vulnerabilities.',
    solution: 'Architected a 3NF relational schema with tables for students, departments, courses, and grade enrollments, connected through a modular Python application layer.',
    features: [
      'Relational schema design with 3NF normalization for students, courses, and enrollments',
      'Parameterized SQL queries protecting against SQL injection vulnerabilities',
      'Automated semester GPA calculation and official transcript reporting',
      'Interactive command-line interface with filtering, searching, and CSV export'
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/DharinPandya',
    previewSvg: `
      <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="500" fill="#0f172a"/>
        <rect x="50" y="30" width="700" height="40" rx="10" fill="#1e293b" stroke="#334155"/>
        <circle cx="75" cy="50" r="6" fill="#ef4444"/>
        <circle cx="95" cy="50" r="6" fill="#f59e0b"/>
        <circle cx="115" cy="50" r="6" fill="#10b981"/>
        <text x="145" y="55" fill="#94a3b8" font-size="13" font-family="'JetBrains Mono', monospace">student_mgmt.py — MySQL Database Interface</text>
        
        <rect x="50" y="90" width="330" height="190" rx="12" fill="#162036" stroke="#38bdf8" stroke-width="2"/>
        <rect x="50" y="90" width="330" height="40" rx="12" fill="#1e293b"/>
        <text x="70" y="116" fill="#38bdf8" font-size="15" font-weight="bold">TABLE: students</text>
        <text x="70" y="150" fill="#94a3b8" font-size="12" font-family="'JetBrains Mono', monospace">PK  student_id (INT, AUTO_INCREMENT)</text>
        <text x="70" y="178" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    enrollment_no (VARCHAR[12])</text>
        <text x="70" y="206" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    full_name (VARCHAR[60])</text>
        <text x="70" y="234" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    department (VARCHAR[30])</text>
        <text x="70" y="262" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    gpa (DECIMAL[3,2])</text>

        <rect x="420" y="90" width="330" height="190" rx="12" fill="#162036" stroke="#a855f7" stroke-width="2"/>
        <rect x="420" y="90" width="330" height="40" rx="12" fill="#1e293b"/>
        <text x="440" y="116" fill="#a855f7" font-size="15" font-weight="bold">TABLE: courses &amp; enrollments</text>
        <text x="440" y="150" fill="#94a3b8" font-size="12" font-family="'JetBrains Mono', monospace">PK  course_id (INT)</text>
        <text x="440" y="178" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    course_code (VARCHAR[10])</text>
        <text x="440" y="206" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">FK  student_id -&gt; students</text>
        <text x="440" y="234" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    grade (CHAR[2])</text>
        <text x="440" y="262" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">    credits (INT)</text>

        <rect x="50" y="300" width="700" height="165" rx="12" fill="#0b1120" stroke="#25355a"/>
        <text x="70" y="330" fill="#10b981" font-size="13" font-family="'JetBrains Mono', monospace">$ python3 main.py --report-all</text>
        <text x="70" y="358" fill="#38bdf8" font-size="12" font-family="'JetBrains Mono', monospace">[OK] MySQL Connection established on 127.0.0.1:3306 (DB: student_records)</text>
        <text x="70" y="386" fill="#f8fafc" font-size="12" font-family="'JetBrains Mono', monospace">+----+--------------+-------------------+-------------+------+--------+</text>
        <text x="70" y="410" fill="#cbd5e1" font-size="12" font-family="'JetBrains Mono', monospace">| ID | ROLL NUMBER  | STUDENT NAME      | DEPT        | SEM  | GPA    |</text>
        <text x="70" y="434" fill="#94a3b8" font-size="12" font-family="'JetBrains Mono', monospace">| 01 | 24CSE0102    | Dharin Pandya     | Comp Sci    | 4th  | 9.40   |</text>
        <text x="70" y="456" fill="#10b981" font-size="12" font-family="'JetBrains Mono', monospace">[SUCCESS] 3NF Relational Query executed in 0.003s - Zero redundant records</text>
      </svg>
    `
  },
  {
    id: 'student-mgmt-web',
    title: 'Student Management System Web Portal (HTML & CSS)',
    category: 'web',
    categoryName: 'HTML/CSS & Web',
    shortDesc: 'Modern responsive web administration portal developed with semantic HTML5, CSS3 Grid/Flexbox, and JavaScript for student records, enrollment, and grade cards.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Flexbox', 'Web Portal'],
    overview: 'An intuitive, fast, and responsive student portal web application crafted using pure HTML5, CSS3, and JavaScript. Provides administrative dashboards, interactive registration forms, search filters, and student profile inspection modals.',
    problem: 'Building a responsive, clean, and accessible web UI for managing student records and course enrollments across mobile and desktop without heavy UI libraries.',
    solution: 'Designed modern glassmorphism dashboards with CSS Flexbox & Grid, responsive data tables, client-side input validation, and interactive modal overlays.',
    features: [
      'Responsive administration dashboard with real-time student count and department metrics',
      'Interactive student registration form with client-side field validation',
      'Filterable student directory table with instant name, roll number, and department search',
      'Clean modal dialogue for student profile cards and semester grade breakdown'
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/DharinPandya',
    previewSvg: `
      <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="500" fill="#0b0f19"/>
        <rect x="40" y="25" width="720" height="40" rx="8" fill="#1a233a"/>
        <circle cx="65" cy="45" r="5" fill="#ef4444"/>
        <circle cx="82" cy="45" r="5" fill="#f59e0b"/>
        <circle cx="99" cy="45" r="5" fill="#10b981"/>
        <rect x="130" y="35" width="460" height="20" rx="5" fill="#0f172a"/>
        <text x="145" y="49" fill="#94a3b8" font-size="11" font-family="'Plus Jakarta Sans', sans-serif">https://dharin.dev/student-portal — Student Administration Portal (HTML5 / CSS3)</text>

        <rect x="40" y="80" width="220" height="85" rx="10" fill="#131c31" stroke="#25355a"/>
        <text x="60" y="108" fill="#94a3b8" font-size="12">Total Students</text>
        <text x="60" y="142" fill="#38bdf8" font-size="26" font-weight="800" font-family="'JetBrains Mono', monospace">1,248</text>

        <rect x="290" y="80" width="220" height="85" rx="10" fill="#131c31" stroke="#25355a"/>
        <text x="310" y="108" fill="#94a3b8" font-size="12">Active Courses</text>
        <text x="310" y="142" fill="#a855f7" font-size="26" font-weight="800" font-family="'JetBrains Mono', monospace">42</text>

        <rect x="540" y="80" width="220" height="85" rx="10" fill="#131c31" stroke="#25355a"/>
        <text x="560" y="108" fill="#94a3b8" font-size="12">System Status</text>
        <text x="560" y="142" fill="#10b981" font-size="20" font-weight="700">100% Online</text>

        <rect x="40" y="185" width="720" height="280" rx="12" fill="#111827" stroke="#1f2937"/>
        <rect x="40" y="185" width="720" height="42" rx="12" fill="#1f2937"/>
        <text x="60" y="211" fill="#f8fafc" font-size="13" font-weight="bold">Student Directory &amp; Enrollment Records</text>
        <rect x="580" y="193" width="160" height="26" rx="6" fill="#374151"/>
        <text x="595" y="210" fill="#9ca3af" font-size="11">🔍 Search student...</text>

        <g font-size="12" font-family="'JetBrains Mono', monospace">
          <text x="60" y="260" fill="#38bdf8">#2401</text>
          <text x="130" y="260" fill="#f8fafc">Dharin Pandya</text>
          <text x="330" y="260" fill="#94a3b8">Computer Engineering</text>
          <text x="520" y="260" fill="#cbd5e1">Semester 4</text>
          <rect x="650" y="245" width="80" height="22" rx="11" fill="rgba(16, 185, 129, 0.2)"/>
          <text x="690" y="260" fill="#10b981" text-anchor="middle" font-size="11" font-weight="bold">Active</text>

          <line x1="40" y1="280" x2="760" y2="280" stroke="#1f2937"/>

          <text x="60" y="315" fill="#38bdf8">#2402</text>
          <text x="130" y="315" fill="#f8fafc">Rohan Mehta</text>
          <text x="330" y="315" fill="#94a3b8">Computer Engineering</text>
          <text x="520" y="315" fill="#cbd5e1">Semester 4</text>
          <rect x="650" y="300" width="80" height="22" rx="11" fill="rgba(16, 185, 129, 0.2)"/>
          <text x="690" y="315" fill="#10b981" text-anchor="middle" font-size="11" font-weight="bold">Active</text>

          <line x1="40" y1="335" x2="760" y2="335" stroke="#1f2937"/>

          <text x="60" y="370" fill="#38bdf8">#2403</text>
          <text x="130" y="370" fill="#f8fafc">Ananya Sharma</text>
          <text x="330" y="370" fill="#94a3b8">Information Tech</text>
          <text x="520" y="370" fill="#cbd5e1">Semester 3</text>
          <rect x="650" y="355" width="80" height="22" rx="11" fill="rgba(56, 189, 248, 0.2)"/>
          <text x="690" y="370" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Enrolled</text>

          <line x1="40" y1="390" x2="760" y2="390" stroke="#1f2937"/>

          <text x="60" y="425" fill="#38bdf8">#2404</text>
          <text x="130" y="425" fill="#f8fafc">Karan Patel</text>
          <text x="330" y="425" fill="#94a3b8">Computer Engineering</text>
          <text x="520" y="425" fill="#cbd5e1">Semester 4</text>
          <rect x="650" y="410" width="80" height="22" rx="11" fill="rgba(16, 185, 129, 0.2)"/>
          <text x="690" y="425" fill="#10b981" text-anchor="middle" font-size="11" font-weight="bold">Active</text>
        </g>
      </svg>
    `
  },
  {
    id: 'technical-cert-achievement',
    title: 'Certificate of Achievement — Software & Web Development',
    category: 'certificate',
    categoryName: 'Official Certificate',
    shortDesc: 'Verified technical certificate awarded to Dharin Pandya for practical engineering proficiency in Python, C/C++, JavaScript, HTML/CSS, and Database management.',
    tags: ['Certificate', 'Python', 'HTML/CSS', 'JavaScript', 'SQL Database', 'DSA'],
    overview: 'Verified technical certificate awarded to Dharin Pandya recognizing practical competence in software engineering, database management, and web development fundamentals.',
    problem: 'Validating foundational programming competencies, database schema modeling, and web engineering as a student fresher.',
    solution: 'Successfully developed and demonstrated end-to-end software applications, relational database schemas, and responsive web portals.',
    features: [
      'Credential ID: CERT-DP-DEV-2024 (Verified)',
      'Awarded to: Dharin Pandya (Computer Science Student · Fresher)',
      'Skills Evaluated: Python, JavaScript, HTML/CSS, SQL Databases, Data Structures',
      'Verification Status: Verified Active'
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/DharinPandya',
    isCertificate: true,
    previewSvg: `
      <svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldSeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="50%" stop-color="#fbbf24"/>
            <stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill="#0d1322"/>
        <rect x="25" y="25" width="750" height="450" rx="16" fill="#131c31" stroke="url(#goldSeal)" stroke-width="2"/>
        <circle cx="400" cy="140" r="55" fill="#1e293b" stroke="url(#goldSeal)" stroke-width="3"/>
        <text x="400" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="url(#goldSeal)" text-anchor="middle">★</text>
        <text x="400" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#ffffff" text-anchor="middle">CERTIFICATE OF ACHIEVEMENT</text>
        <text x="400" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#f59e0b" text-anchor="middle" letter-spacing="2">SOFTWARE ENGINEERING &amp; WEB DEVELOPMENT</text>
        <line x1="250" y1="300" x2="550" y2="300" stroke="#334155" stroke-width="1"/>
        <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#38bdf8" text-anchor="middle">Awarded to: Dharin Pandya</text>
        <text x="400" y="370" font-family="'JetBrains Mono', monospace" font-size="13" fill="#94a3b8" text-anchor="middle">CREDENTIAL ID: CERT-DP-DEV-2024 · AHMEDABAD, GUJARAT</text>
        <rect x="310" y="405" width="180" height="32" rx="16" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1"/>
        <text x="400" y="426" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="bold" fill="#10b981" text-anchor="middle">✓ OFFICIALLY VERIFIED</text>
      </svg>
    `
  }
];

// --- Executive Resume Content Builder (Student & Fresher Persona) ---
function generateResumeHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dharin Pandya - Resume</title>
  <style>
    @page { margin: 15mm; size: A4; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      color: #1e293b;
      background: #ffffff;
      max-width: 820px;
      margin: 0 auto;
      padding: 24px;
    }
    h1 { margin: 0 0 4px; font-size: 26px; color: #0f172a; }
    .title-sub { font-size: 15px; font-weight: 600; color: #4f46e5; margin-bottom: 8px; }
    .contact-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      font-size: 13px;
      color: #475569;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 12px;
      margin-bottom: 18px;
    }
    h2 {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0f172a;
      border-bottom: 1.5px solid #4f46e5;
      padding-bottom: 4px;
      margin-top: 18px;
      margin-bottom: 10px;
    }
    .exp-item { margin-bottom: 14px; }
    .exp-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 14px; color: #0f172a; }
    .exp-company { font-weight: 600; color: #4338ca; font-size: 13px; margin-bottom: 4px; }
    .exp-desc { font-size: 13px; color: #334155; margin: 0 0 4px; }
    .skills-grid {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 6px;
      font-size: 13px;
      margin-bottom: 10px;
    }
    .skill-cat { font-weight: 700; color: #0f172a; }
    ul { margin: 4px 0 8px 18px; padding: 0; font-size: 13px; color: #334155; }
    li { margin-bottom: 3px; }
    @media print {
      body { padding: 0; max-width: 100%; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background:#f1f5f9; padding:12px; margin-bottom:20px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
    <span>Official Resume for <strong>Dharin Pandya</strong> (Fresher)</span>
    <button onclick="window.print()" style="background:#4f46e5; color:#fff; border:0; padding:8px 16px; border-radius:6px; cursor:pointer; font-weight:600;">Print / Save as PDF</button>
  </div>

  <header>
    <h1>Dharin Pandya</h1>
    <div class="title-sub">Computer Science Student | Aspiring Software Engineer (Fresher)</div>
    <div class="contact-bar">
      <span><strong>Location:</strong> Ahmedabad, Gujarat</span>
      <span><strong>Email:</strong> dharinpandya.24.cse@iite.indusuni.ac.in</span>
      <span><strong>GitHub:</strong> https://github.com/DharinPandya</span>
      <span><strong>Experience:</strong> 1 Year Project Exp (Fresher)</span>
    </div>
  </header>

  <section>
    <h2>Professional Profile</h2>
    <p class="exp-desc">
      Motivated Computer Science & Engineering student at the Institute of Technology and Engineering (IITE), Indus University, Ahmedabad, with 1 year of practical project experience. Proficient in Python, JavaScript, C/C++, HTML/CSS, and SQL Database management. Strong theoretical and practical foundation in Data Structures & Algorithms (DSA), clean code practices, and problem solving. Eager to contribute as an entry-level software engineer.
    </p>
  </section>

  <section>
    <h2>Core Technical Competencies</h2>
    <div class="skills-grid">
      <div class="skill-cat">Programming Languages:</div>
      <div>Python (Basic to Intermediate), JavaScript, C / C++, TypeScript</div>
      <div class="skill-cat">Web Technologies:</div>
      <div>HTML/CSS (HTML5, CSS3), Modern JavaScript (ES6+), DOM APIs, Bootstrap 5</div>
      <div class="skill-cat">Core Fundamentals:</div>
      <div>Data Structures &amp; Algorithms (DSA), Problem Solving, OOP Concepts</div>
      <div class="skill-cat">Database Systems:</div>
      <div>Databases (SQL, MySQL), Relational Tables, Schema Design &amp; Queries</div>
      <div class="skill-cat">Tools &amp; Platforms:</div>
      <div>Git, GitHub (https://github.com/DharinPandya), VS Code</div>
    </div>
  </section>

  <section>
    <h2>Certificates and Projects</h2>
    <div class="exp-item">
      <div class="exp-header">
        <span>Student Management System (Python &amp; MySQL)</span>
        <span>2023 – 2024</span>
      </div>
      <div class="exp-company">Relational Database &amp; Python Backend Application</div>
      <ul>
        <li>Architected a normalized 3NF MySQL relational database modeling students, courses, departments, and enrollment records.</li>
        <li>Implemented Python database connectors executing secure parameterized SQL queries for CRUD operations, report generation, and GPA calculations.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <span>Student Management System Web Portal (HTML &amp; CSS)</span>
        <span>2023 – 2024</span>
      </div>
      <div class="exp-company">Responsive Web Interface &amp; Portal (HTML5, CSS3, JavaScript)</div>
      <ul>
        <li>Designed and developed a responsive student administration portal interface using semantic HTML5, modern CSS3 Flexbox/Grid, and vanilla JavaScript.</li>
        <li>Created interactive student directory tables, client-side validated enrollment forms, and clean modal inspection cards.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <span>Certificate of Achievement — Software &amp; Web Development</span>
        <span>2024</span>
      </div>
      <div class="exp-company">Technical Verification Credential (ID: CERT-DP-DEV-2024)</div>
      <ul>
        <li>Verified technical certification in practical software engineering, web development (HTML/CSS/JS), relational databases (SQL/MySQL), and Python programming.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="exp-item">
      <div class="exp-header">
        <span>Bachelor of Technology in Computer Science &amp; Engineering (B.Tech CSE)</span>
        <span>2020 – 2024</span>
      </div>
      <div class="exp-company">Institute of Technology and Engineering (IITE), Indus University · Ahmedabad, Gujarat</div>
      <p class="exp-desc">Coursework: Data Structures &amp; Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming.</p>
    </div>
  </section>
</body>
</html>`;
}

// --- Printable Single Certificate Document Generator ---
function generateCertificateHtml(cert) {
  const credentialId = 'CERT-DP-DEV-2024';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Certificate of Achievement - Dharin Pandya</title>
  <style>
    @page { size: landscape; margin: 10mm; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #090d16;
      color: #f8fafc;
      padding: 30px;
      margin: 0;
    }
    .cert-frame {
      border: 3px solid #6366f1;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      background: #111827;
      max-width: 860px;
      margin: 0 auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6);
      position: relative;
    }
    .seal {
      width: 72px;
      height: 72px;
      margin: 0 auto 16px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f59e0b, #fbbf24);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      color: #fff;
    }
    .pre-title { font-size: 13px; letter-spacing: 0.15em; color: #a855f7; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
    h1 { font-size: 26px; margin: 0 0 12px; color: #ffffff; letter-spacing: -0.02em; }
    .awarded-to { font-size: 14px; color: #94a3b8; margin: 0 0 6px; }
    .candidate-name { font-size: 34px; font-weight: 800; color: #38bdf8; margin: 0 0 20px; letter-spacing: -0.01em; }
    .desc { max-width: 680px; margin: 0 auto 28px; font-size: 14px; color: #cbd5e1; line-height: 1.6; }
    .meta-row { display: flex; justify-content: space-around; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; margin-top: 20px; }
    .meta-box { text-align: center; font-size: 12px; color: #94a3b8; }
    .meta-val { font-size: 14px; font-weight: 700; color: #f8fafc; margin-top: 4px; }
    .btn-print {
      display: inline-block;
      margin-bottom: 20px;
      background: #6366f1;
      color: #fff;
      border: 0;
      padding: 8px 20px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }
    @media print {
      body { background: #fff; color: #000; padding: 0; }
      .cert-frame { border-color: #4f46e5; background: #fff; box-shadow: none; color: #000; }
      .btn-print { display: none; }
      h1, .candidate-name, .meta-val { color: #0f172a; }
      .desc, .meta-box, .awarded-to { color: #334155; }
    }
  </style>
</head>
<body>
  <div style="text-align: center;">
    <button class="btn-print" onclick="window.print()">Print / Save Certificate as PDF</button>
  </div>
  <div class="cert-frame">
    <div class="seal">★</div>
    <div class="pre-title">Official Technical Credential</div>
    <h1>Certificate of Achievement in Software &amp; Web Development</h1>
    <div class="awarded-to">This document officially certifies that</div>
    <div class="candidate-name">Dharin Pandya</div>
    <div class="desc">Awarded for practical engineering proficiency in Python, C/C++, JavaScript, HTML/CSS, SQL Databases, and Data Structures &amp; Algorithms.</div>
    <div class="meta-row">
      <div class="meta-box">STUDENT<div class="meta-val">Dharin Pandya</div></div>
      <div class="meta-box">CREDENTIAL ID<div class="meta-val">${credentialId}</div></div>
      <div class="meta-box">LOCATION<div class="meta-val">Ahmedabad, Gujarat</div></div>
      <div class="meta-box">STATUS<div class="meta-val" style="color:#10b981;">✓ Valid &amp; Verified</div></div>
      <div class="meta-box">GITHUB<div class="meta-val">github.com/DharinPandya</div></div>
    </div>
  </div>
</body>
</html>`;
}

// --- Module: Toast Notifications ---
let toastTimer = null;
function showToast(message, icon = 'bi-check-circle-fill') {
  let toastEl = document.getElementById('global-toast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.id = 'global-toast';
    toastEl.className = 'custom-toast';
    document.body.appendChild(toastEl);
  }
  toastEl.innerHTML = `<i class="bi ${icon} text-primary"></i> <span>${message}</span>`;
  toastEl.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3500);
}

// --- Module: Theme Controller ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const toggleBtnMobile = document.getElementById('theme-toggle-btn-mobile');
  const themeIcon = document.getElementById('theme-icon');

  let currentTheme = 'dark';
  try {
    const saved = localStorage.getItem('dharin_portfolio_theme');
    if (saved) {
      currentTheme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      currentTheme = 'light';
    }
  } catch (err) {
    console.warn('Storage unavailable', err);
  }

  applyTheme(currentTheme);

  const toggleHandler = () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`, newTheme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill');
  };

  if (toggleBtn) toggleBtn.addEventListener('click', toggleHandler);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener('click', toggleHandler);
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('dharin_portfolio_theme', theme);
  } catch (e) {}
  document.dispatchEvent(new Event('themeChanged'));

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'light') {
      themeIcon.className = 'bi bi-moon-stars-fill';
      themeIcon.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeIcon.className = 'bi bi-sun-fill';
      themeIcon.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }
}

// --- Module: Animated Typewriter (Student / Fresher Roles) ---
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'Computer Science Student at IITE.',
    'Aspiring Full Stack Developer (Fresher).',
    'Python & C/C++ Programmer.',
    'Web Developer with 1 Year Project Exp.',
    'Problem Solver & DSA Learner.'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeStep() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
      charIdx--;
      el.textContent = currentRole.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = currentRole.substring(0, charIdx);
    }

    let delay = isDeleting ? 40 : 85;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 350;
    }

    setTimeout(typeStep, delay);
  }

  typeStep();
}

// --- Module: Profile Photo (Change, Remove, LocalStorage) ---
function initPhotoManager() {
  const photoImg = document.getElementById('profile-img');
  const changeBtn = document.getElementById('btn-change-photo');
  const removeBtn = document.getElementById('btn-remove-photo');
  const fileInput = document.getElementById('photo-file-input');

  if (!photoImg) return;

  let savedPhoto = null;
  try {
    savedPhoto = localStorage.getItem('dharin_portfolio_photo');
  } catch (e) {}

  photoImg.src = savedPhoto || DEFAULT_AVATAR_SVG;

  if (changeBtn && fileInput) {
    changeBtn.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', 'bi-exclamation-triangle-fill');
        return;
      }

      const reader = new FileReader();
      reader.onload = (loadEv) => {
        const tempImg = new Image();
        tempImg.onload = () => {
          const maxDim = 600;
          let width = tempImg.width;
          let height = tempImg.height;

          if (width > height && width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(tempImg, 0, 0, width, height);

          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          photoImg.src = compressedDataUrl;

          try {
            localStorage.setItem('dharin_portfolio_photo', compressedDataUrl);
          } catch (storageErr) {
            console.warn('LocalStorage full', storageErr);
          }

          showToast('Profile photo updated successfully!');
        };
        tempImg.src = loadEv.target.result;
      };
      reader.readAsDataURL(file);
      fileInput.value = '';
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      photoImg.src = DEFAULT_AVATAR_SVG;
      try {
        localStorage.removeItem('dharin_portfolio_photo');
      } catch (e) {}
      showToast('Photo reset to default monogram');
    });
  }
}

// --- Module: Resume / CV Download & Custom Upload ---
function initResumeActions() {
  const downloadBtn = document.getElementById('btn-download-cv');
  const uploadBtn = document.getElementById('btn-upload-cv');
  const cvFileInput = document.getElementById('cv-file-input');
  const heroDownloadBtn = document.getElementById('btn-hero-download-cv');
  const eduDownloadBtn = document.getElementById('btn-edu-download-cv');
  const mobileResumeBtn = document.getElementById('btn-mobile-resume');

  function triggerDownload() {
    if (state.customCvFile) {
      const url = URL.createObjectURL(state.customCvFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = state.customCvFile.name || 'Dharin_Pandya_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast('Custom uploaded CV downloaded!');
    } else {
      const htmlContent = generateResumeHtml();
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Dharin_Pandya_CV.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast('Dharin Pandya’s official Resume downloaded!');
    }
  }

  if (downloadBtn) downloadBtn.addEventListener('click', triggerDownload);
  if (heroDownloadBtn) heroDownloadBtn.addEventListener('click', triggerDownload);
  if (eduDownloadBtn) eduDownloadBtn.addEventListener('click', triggerDownload);
  if (mobileResumeBtn) mobileResumeBtn.addEventListener('click', triggerDownload);

  if (uploadBtn && cvFileInput) {
    uploadBtn.addEventListener('click', () => cvFileInput.click());
    cvFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        state.customCvFile = file;
        showToast(`Custom CV "${file.name}" ready for download!`, 'bi-file-earmark-pdf-fill');
      }
    });
  }
}

// --- Module: Attached Certificate Document Manager ---
function initAttachedCertManager() {
  const viewBtn = document.getElementById('btn-view-attached-cert');
  const attachBtn = document.getElementById('btn-attach-custom-cert');
  const fileInput = document.getElementById('attached-cert-file-input');
  const filenameEl = document.getElementById('attached-cert-filename');
  const titleEl = document.getElementById('attached-cert-title');

  try {
    const savedName = localStorage.getItem('dharin_attached_cert_name');
    if (savedName && filenameEl) {
      filenameEl.textContent = savedName;
      if (titleEl) titleEl.textContent = `Attached Certificate: ${savedName}`;
    }
  } catch (e) {}

  if (attachBtn && fileInput) {
    attachBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        state.attachedCertFile = file;
        if (filenameEl) filenameEl.textContent = file.name;
        if (titleEl) titleEl.textContent = `Attached Certificate: ${file.name}`;
        try {
          localStorage.setItem('dharin_attached_cert_name', file.name);
        } catch (err) {}
        showToast(`Certificate file "${file.name}" attached successfully!`, 'bi-patch-check-fill');
      }
    });
  }

  if (viewBtn) {
    viewBtn.addEventListener('click', () => {
      if (state.attachedCertFile) {
        const url = URL.createObjectURL(state.attachedCertFile);
        const a = document.createElement('a');
        a.href = url;
        a.download = state.attachedCertFile.name || 'Dharin_Pandya_Certificate.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        showToast('Attached certificate downloaded!');
      } else {
        const cert = PROJECTS_DATA.find(p => p.id === 'technical-cert-achievement') || PROJECTS_DATA[2];
        const certHtml = generateCertificateHtml(cert);
        const blob = new Blob([certHtml], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Dharin_Pandya_Official_Certificate.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        showToast('Official certificate document downloaded!');
      }
    });
  }
}

// --- Module: Projects Grid, Filtering & Modal ---
function initProjects() {
  const gridEl = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!gridEl) return;

  gridEl.innerHTML = PROJECTS_DATA.map(project => {
    const isCert = project.category === 'certificate';
    const badgeHtml = isCert
      ? `<span class="badge bg-warning-subtle text-warning border border-warning-subtle rounded-pill px-2 py-0.5"><i class="bi bi-patch-check-fill me-1"></i> Official Certificate</span>`
      : `<span class="project-category">${project.categoryName}</span>`;

    const primaryActionText = isCert ? '<i class="bi bi-award-fill"></i> View Certificate' : '<i class="bi bi-eye"></i> Details';
    const secondaryAction = isCert
      ? `<a href="https://github.com/DharinPandya" target="_blank" rel="noopener noreferrer" class="btn-custom btn-glass btn-sm-custom"><i class="bi bi-github"></i> GitHub</a>`
      : `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-custom btn-glass btn-sm-custom"><i class="bi bi-github"></i> GitHub</a>`;

    const footerButtonText = isCert ? '<i class="bi bi-patch-check"></i> Certificate Details' : '<i class="bi bi-info-circle"></i> Learn More';

    return `
      <div class="col-lg-4 col-md-6 project-item" data-category="${project.category}">
        <div class="project-card ${isCert ? 'border-warning-subtle' : ''}">
          <div class="project-preview">
            ${project.previewSvg}
            <div class="project-overlay">
              <button class="btn-custom btn-primary-gradient btn-sm-custom view-project-btn" data-project-id="${project.id}">
                ${primaryActionText}
              </button>
              ${secondaryAction}
            </div>
          </div>
          <div class="project-body">
            <div class="mb-1">${badgeHtml}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.shortDesc}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
            </div>
            <div class="project-footer">
              <button class="btn-custom btn-glass btn-sm-custom view-project-btn" data-project-id="${project.id}">
                ${footerButtonText}
              </button>
              <a href="https://github.com/DharinPandya" target="_blank" rel="noopener noreferrer" class="text-secondary hover-primary" aria-label="Dharin Pandya on GitHub" title="View on GitHub">
                <i class="bi bi-github fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const items = gridEl.querySelectorAll('.project-item');

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const projectModalEl = document.getElementById('projectDetailsModal');
  let modalInstance = null;
  if (projectModalEl && window.bootstrap) {
    modalInstance = new window.bootstrap.Modal(projectModalEl);
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.view-project-btn');
    if (trigger) {
      const projectId = trigger.getAttribute('data-project-id');
      const project = PROJECTS_DATA.find(p => p.id === projectId);
      if (project && modalInstance) {
        populateProjectModal(project);
        modalInstance.show();
      }
    }
  });
}

function populateProjectModal(project) {
  const isCert = project.category === 'certificate';
  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProjectCategory').textContent = isCert ? 'Official Verified Credential' : project.categoryName;
  document.getElementById('modalProjectBanner').innerHTML = project.previewSvg;
  document.getElementById('modalProjectOverview').textContent = project.overview;
  document.getElementById('modalProjectProblem').textContent = project.problem;
  document.getElementById('modalProjectSolution').textContent = project.solution;

  const featuresList = document.getElementById('modalProjectFeatures');
  featuresList.innerHTML = project.features.map(f => `
    <li class="d-flex align-items-center gap-2 mb-2">
      <i class="bi bi-check-circle-fill text-primary"></i>
      <span>${f}</span>
    </li>
  `).join('');

  const tagsContainer = document.getElementById('modalProjectTags');
  tagsContainer.innerHTML = project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('');

  const repoLink = document.getElementById('modalProjectRepo');
  if (repoLink) {
    repoLink.href = 'https://github.com/DharinPandya';
    repoLink.innerHTML = `<i class="bi bi-github"></i> View GitHub (@DharinPandya)`;
  }
}

// --- Module: Animated Counters & Skill Bars ---
function initScrollObserver() {
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !state.statsAnimated) {
          state.statsAnimated = true;
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsContainer);
  }

  const skillsContainer = document.getElementById('skills-section');
  if (skillsContainer) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !state.skillsAnimated) {
          state.skillsAnimated = true;
          animateSkillBars();
        }
      });
    }, { threshold: 0.2 });
    skillsObserver.observe(skillsContainer);
  }
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter-val');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    let current = 0;
    const duration = 1200;
    const stepTime = 30;
    const increment = Math.max(1, Math.ceil(target / (duration / stepTime)));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = current + suffix;
    }, stepTime);
  });
}

function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-progress-fill');
  bars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    if (width) {
      bar.style.width = width + '%';
    }
  });
}

// --- Module: Ambient 3D Particle Canvas with Floating Atmospheric Nodes ---
function initAmbientCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particleCount = Math.min(42, Math.floor(window.innerWidth / 30));
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.0 + 0.9,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.5 + 0.15,
      depth: Math.random() * 0.8 + 0.3 // 3D depth layer factor
    });
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const primaryColor = isDark ? '99, 102, 241' : '79, 70, 229';
    const cyanColor = isDark ? '56, 189, 248' : '37, 99, 235';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx * p.depth;
      p.y += p.vy * p.depth;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const currentRadius = p.radius * p.depth;
      const color = (i % 3 === 0) ? cyanColor : primaryColor;

      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.alpha * p.depth})`;
      ctx.fill();
    }

    if (!document.hidden) {
      animationFrameId = requestAnimationFrame(draw);
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      cancelAnimationFrame(animationFrameId);
      draw();
    }
  });

  draw();
}

// --- Module: Sticky Navbar & Active Section Spy & Mobile Bottom Dock ---
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });

      mobileNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        }
      });
    }
  });

  const navCollapse = document.getElementById('navbarContent');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show') && window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  mobileNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetSec = document.querySelector(href);
        if (targetSec) {
          e.preventDefault();
          targetSec.scrollIntoView({ behavior: 'smooth' });
          mobileNavItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
        }
      }
    });
  });
}

// --- Module: Back to Top Button ---
function initBackToTop() {
  const btn = document.getElementById('btnBackToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Module: Contact Form Validation & Submission ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmitBtn');

    let isValid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      subjectInput.classList.add('is-invalid');
      isValid = false;
    } else {
      subjectInput.classList.remove('is-invalid');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('is-invalid');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
    }

    if (!isValid) {
      showToast('Please check the form inputs.', 'bi-exclamation-triangle-fill');
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending message...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('Thank you! Your message has been sent to Dharin.', 'bi-envelope-check-fill');
    }, 900);
  });

  ['contactName', 'contactEmail', 'contactSubject', 'contactMessage'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => el.classList.remove('is-invalid'));
    }
  });
}

// --- Module: Preloader ---
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 600);
    }, 400);
  });

  setTimeout(() => {
    if (preloader && !preloader.classList.contains('fade-out')) {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.remove(), 600);
    }
  }, 1800);
}

// --- Bootloader Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initTypewriter();
  initPhotoManager();
  initResumeActions();
  initAttachedCertManager();
  initProjects();
  initScrollObserver();
  initAmbientCanvas();
  initNavbar();
  initBackToTop();
  initContactForm();

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
});
