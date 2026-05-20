# GFC MSU Student Success Pathway Builder

## Overview
This prototype is an interactive HTML resource for the Curriculum to Career / SAVE workshop work. It organizes Day 1 and Day 2 notes into a professional, mobile-responsive planning tool focused on student success, career readiness, shared language, and institutional alignment.

## Files
- `index.html` — page structure and content
- `styles.css` — visual design, layout, accessibility, and responsive behavior
- `script.js` — interactive pathway, flip cards, NACE competency details, and Course-to-Resume Builder logic
- `README.md` — project notes

## Current Features
- Mobile-responsive navigation
- Student lifecycle framework
- Barrier/support flip cards
- Student and employer voice section
- Reflection and skill articulation section
- Coursework-to-career translation examples
- Course-to-Resume Builder pilot
- NACE 8 competency interaction
- Action plan phases
- Print / Save as PDF button

## Course-to-Resume Builder
Current pilot subject areas:
- Accounting (ACTG)
- Activities: General (ACT)

To add more courses, update the `resumeData` object in `script.js`. Each subject area should follow this structure:

```js
subjectKey: {
  label: 'Subject Name',
  courses: {
    'COURSE 101': {
      title: 'COURSE 101 Full Course Title',
      credits: '3 credits',
      term: 'Fall, Spring',
      description: 'Catalog-informed course description.',
      skills: ['Skill one', 'Skill two'],
      bullets: [
        'Student-facing resume bullet.',
        'Student-facing resume bullet.'
      ]
    }
  }
}
```

Then add the subject area to the degree dropdown in `index.html`.

## Accessibility Notes
- Uses system fonts for readability
- Includes skip link
- Uses responsive layout for phones and desktops
- Navigation wraps on small screens
- Flip cards show both front and back content on phones
- Touch targets are at least 44px where practical
- Interactive output areas use `aria-live` where appropriate

## Presentation Use
The site can be opened locally in a browser, uploaded to a static hosting service, shared through SharePoint, or embedded/linked from Canvas where supported.
