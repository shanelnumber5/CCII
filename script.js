// GFC MSU Student Success Pathway Builder interactions
const stepButtons = document.querySelectorAll('.step');
const stepDetail = document.getElementById('stepDetail');
stepButtons.forEach((button) => {
  button.addEventListener('click', () => {
    stepButtons.forEach((b) => b.setAttribute('aria-selected', 'false'));
    button.setAttribute('aria-selected', 'true');
    if (stepDetail) stepDetail.textContent = button.dataset.detail;
  });
});

const flips = document.querySelectorAll('.flip');
flips.forEach((card) => {
  const toggle = () => card.classList.toggle('is-flipped');
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
});

const badgeButtons = document.querySelectorAll('.badge');
const badgeDetail = document.getElementById('badgeDetail');
badgeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    badgeButtons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    if (badgeDetail) badgeDetail.textContent = button.dataset.badge;
  });
});

const resumeData = {
  accounting: {
    label: 'Accounting (ACTG)',
    courses: {
      'ACTG 101': {
        title: 'ACTG 101 Accounting Procedures I',
        credits: '3 credits',
        term: 'Fall, Spring',
        description: 'Covers the complete accounting cycle, including analyzing and journalizing transactions, posting to ledgers, preparing worksheets, creating basic financial statements, closing activities, and payroll for service and merchandising businesses.',
        skills: ['Financial recordkeeping', 'Attention to detail', 'Payroll basics', 'Documentation', 'Business reporting'],
        bullets: [
          'Analyzed and journalized business transactions using standard accounting procedures.',
          'Prepared worksheets, ledgers, and basic financial statements to support accurate financial reporting.',
          'Applied payroll and end-of-period closing processes for service and merchandising business scenarios.',
          'Organized financial information with attention to detail, accuracy, and documentation standards.'
        ]
      },
      'ACTG 102': {
        title: 'ACTG 102 Accounting Procedures II',
        credits: '3 credits',
        term: 'Spring, Summer',
        description: 'Continues Accounting Procedures I with topics including notes, receivables, inventories, plant assets and depreciation, partnerships, corporations, bonds, cash flows, and financial statement analysis.',
        skills: ['Financial analysis', 'Asset accounting', 'Cash flow interpretation', 'Business data evaluation'],
        bullets: [
          'Applied accounting procedures for receivables, inventories, plant assets, depreciation, partnerships, and corporations.',
          'Analyzed financial statements and cash flow information to support business decision-making.',
          'Recorded and interpreted transactions involving capital stock, dividends, bonds, and business assets.',
          'Used detailed financial data to evaluate organizational performance and reporting needs.'
        ]
      },
      'ACTG 180': {
        title: 'ACTG 180 Payroll Accounting',
        credits: '3 credits',
        term: 'Spring',
        description: 'Develops knowledge of payroll records required for federal and state compliance, including wage laws, salary computation, deductions, payroll transactions, ledgers, tax returns, and reports.',
        skills: ['Payroll compliance', 'Confidentiality', 'Tax reporting', 'Deadline management', 'Policy interpretation'],
        bullets: [
          'Calculated payroll, deductions, and employer reporting requirements using federal and state payroll guidelines.',
          'Prepared payroll records, tax forms, ledger postings, and related business reports with accuracy and confidentiality.',
          'Applied wage and hour regulations to payroll scenarios involving gross pay, taxes, and deductions.',
          'Maintained organized payroll documentation to support compliance and timely reporting.'
        ]
      },
      'ACTG 201': {
        title: 'ACTG 201 Principles of Financial Accounting',
        credits: '3 credits',
        term: 'Fall',
        description: 'Introduces financial accounting principles, including GAAP, transaction analysis, financial statements, internal controls, receivables, inventories, assets, liabilities, corporations, and time value of money.',
        skills: ['GAAP concepts', 'Internal controls', 'Financial statements', 'Transaction analysis'],
        bullets: [
          'Applied generally accepted accounting principles to analyze transactions and financial statements.',
          'Evaluated receivables, inventories, assets, liabilities, corporations, and internal controls in business contexts.',
          'Interpreted financial information to support accurate reporting and informed decision-making.',
          'Used accounting concepts and time value of money principles to assess financial scenarios.'
        ]
      },
      'ACTG 202': {
        title: 'ACTG 202 Principles of Managerial Accounting',
        credits: '3 credits',
        term: 'Spring',
        description: 'Introduces managerial accounting principles used for planning and controlling operations, including cost accounting, overhead allocation, cost-volume-profit analysis, budgeting, standard costs, variance analysis, and incremental analysis.',
        skills: ['Budgeting', 'Cost analysis', 'Operational planning', 'Variance analysis', 'Decision support'],
        bullets: [
          'Analyzed cost behavior, budgeting data, and variance information to support operational planning.',
          'Applied managerial accounting tools to evaluate business performance and resource allocation.',
          'Used cost-volume-profit analysis, overhead allocation, and incremental analysis to inform management decisions.',
          'Prepared and interpreted budgeting information to support planning and control processes.'
        ]
      },
      'ACTG 205': {
        title: 'ACTG 205 Computerized Accounting',
        credits: '3 credits',
        term: 'Spring',
        description: 'Students complete a variety of accounting projects using accounting software.',
        skills: ['Accounting software', 'Digital recordkeeping', 'Data entry accuracy', 'Business technology'],
        bullets: [
          'Completed accounting projects using computerized accounting software.',
          'Entered, organized, and reviewed financial data in a digital accounting environment.',
          'Used accounting technology to support recordkeeping, reporting, and business workflow tasks.',
          'Demonstrated software-based accounting skills applicable to office and business settings.'
        ]
      },
      'ACTG 211': {
        title: 'ACTG 211 Income Tax Fundamentals',
        credits: '3 credits',
        term: 'Fall, Spring based on demand',
        description: 'Introduces basic income taxation principles and procedures for individuals and sole proprietorships.',
        skills: ['Tax preparation', 'Compliance', 'Client documentation', 'Confidentiality'],
        bullets: [
          'Applied basic income tax principles to individual and sole proprietorship tax scenarios.',
          'Prepared and reviewed tax-related information using established procedures and documentation standards.',
          'Interpreted tax concepts to support accurate reporting and client-focused communication.',
          'Organized financial and tax information with attention to compliance, accuracy, and confidentiality.'
        ]
      },
      'ACTG 215': {
        title: 'ACTG 215 Foundations of Government and Not for Profit Accounting',
        credits: '3 credits',
        term: 'Spring',
        description: 'Introduces financial reporting and accounting for governmental and nonprofit organizations, including fund accounting, fund financial statements, annual reports, and reporting requirements for nonprofit entities.',
        skills: ['Fund accounting', 'Nonprofit reporting', 'Public accountability', 'Compliance'],
        bullets: [
          'Applied fund accounting concepts to governmental and nonprofit financial reporting scenarios.',
          'Analyzed reporting requirements for nonprofit organizations, including private charities, colleges, and hospitals.',
          'Prepared and interpreted fund financial statement information using specialized accounting principles.',
          'Connected public-sector and nonprofit accounting practices to compliance, transparency, and organizational accountability.'
        ]
      },
      'ACTG 298': {
        title: 'ACTG 298 Internship',
        credits: '1-6 credits',
        term: 'Fall, Spring, Summer based on demand',
        description: 'Combines approved work experience related to the Accounting degree program with academic coursework to develop technical and professional workplace skills.',
        skills: ['Workplace experience', 'Professional practice', 'Applied accounting', 'Career readiness'],
        bullets: [
          'Applied accounting coursework in an approved workplace setting related to the Accounting degree program.',
          'Developed technical and professional skills through supervised accounting-related work experience.',
          'Connected academic learning to workplace expectations, documentation, communication, and professional practice.',
          'Reflected on workplace experience to strengthen career readiness and accounting skill development.'
        ]
      }
    }
  },
  activities: {
    label: 'Activities: General (ACT)',
    courses: {
      'ACT 094': {
        title: 'ACT 094 Tech Essentials',
        credits: '6 CEUs',
        term: 'Based on sufficient demand',
        description: 'Non-credit professional and continuing education coursework designed as condensed learning for working students and professionals. The course qualifies for Continuing Education Units and appears on the student’s continuing education transcript.',
        skills: ['Digital literacy', 'Technology readiness', 'Professional development', 'Adaptability', 'Workplace preparation'],
        bullets: [
          'Completed condensed professional development coursework focused on essential technology skills.',
          'Built foundational digital literacy skills to support workplace, academic, and professional tasks.',
          'Strengthened ability to use technology tools in a structured continuing education setting.',
          'Demonstrated commitment to ongoing professional learning through CEU-eligible coursework.'
        ]
      }
    }
  }
};

const degreeSelect = document.getElementById('degreeSelect');
const courseSelect = document.getElementById('courseSelect');
const courseTitle = document.getElementById('courseTitle');
const courseMeta = document.getElementById('courseMeta');
const courseDescription = document.getElementById('courseDescription');
const resumeBullets = document.getElementById('resumeBullets');
const courseSkills = document.getElementById('courseSkills');

function populateCourses() {
  if (!degreeSelect || !courseSelect) return;
  const degree = resumeData[degreeSelect.value];
  if (!degree) return;
  courseSelect.innerHTML = '';
  Object.keys(degree.courses).forEach((courseKey) => {
    const option = document.createElement('option');
    option.value = courseKey;
    option.textContent = courseKey;
    option.title = degree.courses[courseKey].title;
    courseSelect.appendChild(option);
  });
  updateResumeOutput();
}

function updateResumeOutput() {
  if (!degreeSelect || !courseSelect) return;
  const degree = resumeData[degreeSelect.value];
  if (!degree || !degree.courses[courseSelect.value]) return;
  const course = degree.courses[courseSelect.value];
  if (courseTitle) courseTitle.textContent = course.title;
  if (courseMeta) courseMeta.innerHTML = `<span class="meta-chip">${course.credits}</span><span class="meta-chip">${course.term}</span>`;
  if (courseDescription) courseDescription.textContent = course.description;
  if (resumeBullets) {
    resumeBullets.innerHTML = '';
    course.bullets.forEach((bullet) => {
      const li = document.createElement('li');
      li.textContent = bullet;
      resumeBullets.appendChild(li);
    });
  }
  if (courseSkills) {
    courseSkills.innerHTML = '';
    (course.skills || []).forEach((skill) => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = skill;
      courseSkills.appendChild(span);
    });
  }
}

if (degreeSelect && courseSelect) {
  degreeSelect.addEventListener('change', populateCourses);
  courseSelect.addEventListener('change', updateResumeOutput);
  populateCourses();
}
