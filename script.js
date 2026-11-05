// GFC MSU Student Success Pathway Builder interactions

// Student Journey Framework
// Each journey button supplies the detail panel text through data attributes.
const journeyNodes = document.querySelectorAll('.journey-node');
const journeyTitle = document.getElementById('journeyTitle');
const journeyNeed = document.getElementById('journeyNeed');
const journeyResponse = document.getElementById('journeyResponse');

journeyNodes.forEach((node) => {
  node.addEventListener('click', () => {
    journeyNodes.forEach((n) => {
      n.classList.remove('active');
      n.setAttribute('aria-selected', 'false');
    });

    node.classList.add('active');
    node.setAttribute('aria-selected', 'true');

    if (journeyTitle) journeyTitle.textContent = node.dataset.title;
    if (journeyNeed) journeyNeed.textContent = node.dataset.need;
    if (journeyResponse) journeyResponse.textContent = node.dataset.response;
  });
});

// Barrier and student voice flip cards
// Enter and Space offer the same interaction as clicking a card.
document.querySelectorAll('.flip-card').forEach((card) => {
  const toggleCard = () => card.classList.toggle('is-flipped');

  card.addEventListener('click', toggleCard);

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard();
    }
  });
});

// Course-to-Resume Builder controls and display state
const degreeSelect = document.getElementById('degreeSelect');
const courseSelect = document.getElementById('courseSelect');
const courseAreaLabel = document.getElementById('courseAreaLabel');
const courseTitle = document.getElementById('courseTitle');
const courseMeta = document.getElementById('courseMeta');
const courseDescription = document.getElementById('courseDescription');
const languageHeading = document.getElementById('languageHeading');
const languageOutput = document.getElementById('languageOutput');
const resumeBullets = document.getElementById('resumeBullets');
const reflectionPrompts = document.getElementById('reflectionPrompts');
const growthList = document.getElementById('growthList');
const skillTags = document.getElementById('skillTags');
const naceTags = document.getElementById('naceTags');
const outcomesToggle = document.getElementById('outcomesToggle');
const workforceToggle = document.getElementById('workforceToggle');

let currentLanguageMode = 'outcomes';

// Rebuild the course menu when the category changes and display its first course.
function populateCourses() {
  if (!degreeSelect || !courseSelect) return;

  const selectedDegree = resumeData[degreeSelect.value];
  courseSelect.innerHTML = '';

  Object.keys(selectedDegree.courses).forEach((courseKey) => {
    const option = document.createElement('option');
    option.value = courseKey;
    option.textContent = courseKey;
    option.title = selectedDegree.courses[courseKey].title;
    courseSelect.appendChild(option);
  });

  updateResumeOutput();
}

// Older entries may use academicLanguage in place of learningOutcomes.
function renderLanguageContent(course) {
  if (!languageOutput || !outcomesToggle || !workforceToggle) return;

  const contentArray =
    currentLanguageMode === 'outcomes'
      ? course.learningOutcomes || course.academicLanguage || []
      : course.workforceLanguage || [];

  outcomesToggle.classList.toggle('active', currentLanguageMode === 'outcomes');
  workforceToggle.classList.toggle('active', currentLanguageMode === 'workforce');

  if (languageHeading) {
    languageHeading.textContent =
      currentLanguageMode === 'outcomes'
        ? 'Learning Outcomes'
        : 'Workforce Language';
  }

  languageOutput.innerHTML = '';

  if (!contentArray.length) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-state';
    emptyMessage.textContent = 'Learning outcome information is pending for this course.';
    languageOutput.appendChild(emptyMessage);
    return;
  }

  const ul = document.createElement('ul');

  contentArray.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  languageOutput.appendChild(ul);
}

function renderList(container, items, emptyText = 'Information pending for this section.') {
  if (!container) return;

  container.innerHTML = '';

  const listItems = items || [];

  if (!listItems.length) {
    const li = document.createElement('li');
    li.className = 'empty-state';
    li.textContent = emptyText;
    container.appendChild(li);
    return;
  }

  listItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderTags(container, items) {
  if (!container) return;

  container.innerHTML = '';

  const tagItems = items || [];

  const sortedItems =
    container.id === 'naceTags'
      ? [...tagItems].sort(
          (a, b) =>
            OFFICIAL_NACE_COMPETENCIES.indexOf(a) -
            OFFICIAL_NACE_COMPETENCIES.indexOf(b)
        )
      : tagItems;

  sortedItems.forEach((item) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = item;
    container.appendChild(span);
  });
}

function getDefaultGrowth(course) {
  return [
    `Developed greater confidence connecting ${course.title} to personal, academic, and career goals.`,
    'Strengthened self-awareness by reflecting on how course experiences build transferable skills.',
    'Recognized how classroom learning can support identity development, persistence, and future momentum.'
  ];
}

// Refresh the selected course while preserving the current language view.
function updateResumeOutput() {
  if (!degreeSelect || !courseSelect) return;

  const selectedDegree = resumeData[degreeSelect.value];
  const course = selectedDegree.courses[courseSelect.value];

  if (!course) return;

  if (courseAreaLabel) courseAreaLabel.textContent = selectedDegree.label;
  if (courseTitle) courseTitle.textContent = course.title;
  if (courseMeta) {
    courseMeta.innerHTML = `
      <span class="meta-chip">${course.credits}</span>
      <span class="meta-chip">${course.term}</span>
      ${
        course.heritage
          ? '<span class="meta-chip heritage-chip">American Indian Heritage</span>'
          : ''
      }
    `;
  }

  if (courseDescription) {
    courseDescription.textContent =
      course.catalogDescription ||
      course.description ||
      'Official catalog description pending.';
  }

  renderLanguageContent(course);
  renderList(resumeBullets, course.bullets);
  renderList(reflectionPrompts, course.reflection);
  renderList(growthList, course.growth && course.growth.length ? course.growth : getDefaultGrowth(course));
}

// Language controls and initial course selection
if (outcomesToggle) {
  outcomesToggle.addEventListener('click', () => {
    currentLanguageMode = 'outcomes';
    updateResumeOutput();
  });
}

if (workforceToggle) {
  workforceToggle.addEventListener('click', () => {
    currentLanguageMode = 'workforce';
    updateResumeOutput();
  });
}

if (degreeSelect && courseSelect) {
  degreeSelect.addEventListener('change', populateCourses);
  courseSelect.addEventListener('change', updateResumeOutput);
  populateCourses();
}


// Warn in the developer console when a course uses a label outside the NACE list.
function auditNaceCompetencies() {
  const allowed = new Set(OFFICIAL_NACE_COMPETENCIES);

  Object.values(resumeData).forEach((category) => {
    Object.values(category.courses).forEach((course) => {
      (course.nace || []).forEach((competency) => {
        if (!allowed.has(competency)) {
          console.warn(
            `Non-standard NACE competency found in ${course.title}: ${competency}`
          );
        }
      });
    });
  });
}

auditNaceCompetencies();
