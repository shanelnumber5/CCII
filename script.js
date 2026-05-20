// GFC MSU Student Success Pathway Builder interactions

// Student Journey Framework
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

// Flip Cards
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

// Resume Builder Data
const resumeData = {
  communication: {
    label: 'Communication',
    courses: {
      'WRIT 101': {
        title: 'WRIT 101 College Writing I',
        credits: '3 credits',
        term: 'Fall, Spring',
        description: 'Develops college-level writing, rhetorical awareness, critical thinking, research, organization, revision, and evidence-based communication skills.',
        academicLanguage: [
          'Developed academic writing through expository, argumentative, and research-based assignments.',
          'Practiced rhetorical analysis, organization, revision, and evidence integration.',
          'Strengthened critical reading, drafting, editing, and source evaluation skills.',
          'Applied structured writing processes to communicate ideas clearly and effectively.'
        ],
        workforceLanguage: [
          'Communicated complex ideas clearly through structured professional writing.',
          'Synthesized research and evidence into organized written communication.',
          'Strengthened editing, revision, and information evaluation skills relevant to workplace communication.',
          'Prepared written materials tailored to audience, purpose, and communication goals.'
        ],
        bullets: [
          'Developed professional written communication skills for academic and workplace audiences.',
          'Synthesized research and evidence into organized written arguments and reports.',
          'Applied revision, editing, and feedback processes to improve written communication.',
          'Strengthened critical thinking and information evaluation skills through structured writing assignments.'
        ],
        skills: ['Written Communication', 'Critical Thinking', 'Research', 'Information Literacy', 'Editing & Revision', 'Audience Awareness'],
        nace: ['Communication', 'Critical Thinking', 'Professionalism'],
        reflection: [
          'What type of writing from this course could demonstrate your ability to communicate professionally?',
          'How did revision or feedback improve your final work?',
          'What evidence from this course could support a resume, interview, or transfer application?'
        ]
      },

      'COMX 111': {
        title: 'COMX 111 Introduction to Public Speaking',
        credits: '3 credits',
        term: 'Fall, Spring, Summer',
        description: 'Introduces public speaking preparation, organization, delivery, audience awareness, and speech presentation strategies in multiple speaking formats.',
        academicLanguage: [
          'Prepared and delivered speeches in multiple presentation formats.',
          'Developed organization, audience awareness, and oral communication strategies.',
          'Practiced verbal communication through structured speaking assignments.',
          'Used preparation and delivery techniques to improve speaking confidence.'
        ],
        workforceLanguage: [
          'Presented information clearly and confidently to different audiences.',
          'Organized ideas into professional presentations with clear structure and purpose.',
          'Strengthened workplace communication, verbal presentation, and confidence under pressure.',
          'Adapted messages based on audience needs and communication goals.'
        ],
        bullets: [
          'Delivered organized presentations tailored to audience needs and communication goals.',
          'Strengthened public speaking, preparation, and professional presentation skills.',
          'Applied strategies to manage speaking anxiety and communicate with confidence.',
          'Presented information in multiple formats using clear structure and delivery.'
        ],
        skills: ['Public Speaking', 'Professional Communication', 'Presentation Skills', 'Audience Awareness', 'Confidence Building', 'Organization', 'Adaptability'],
        nace: ['Communication', 'Career & Self-Development', 'Professionalism'],
        reflection: [
          'What presentation best shows your growth as a speaker?',
          'How did you adapt your message for audience, purpose, or format?',
          'Where might you use public speaking in a workplace, interview, or leadership setting?'
        ]
      },

      'COMX 115': {
        title: 'COMX 115 Introduction to Interpersonal Communication',
        credits: '3 credits',
        term: 'Fall, Spring, Summer',
        description: 'Explores interpersonal communication theory and practice including listening, perception, identity, conflict management, relationship development, and communication across diverse contexts.',
        academicLanguage: [
          'Examined interpersonal communication theories related to relationships, identity, and human interaction.',
          'Practiced active listening, conflict management, and communication analysis skills.',
          'Analyzed communication patterns and relational dynamics in personal and professional settings.',
          'Applied communication strategies to collaborative and interpersonal scenarios.'
        ],
        workforceLanguage: [
          'Strengthened interpersonal communication and collaboration skills in group and professional environments.',
          'Practiced conflict resolution, active listening, and relationship-building strategies.',
          'Improved communication adaptability across diverse audiences and situations.',
          'Developed professional interaction skills useful for teamwork, leadership, and customer communication.'
        ],
        bullets: [
          'Applied interpersonal communication strategies in collaborative and professional contexts.',
          'Strengthened active listening, conflict resolution, and relationship-building skills.',
          'Analyzed communication dynamics and adapted communication approaches for different audiences.',
          'Developed teamwork and professional interaction skills through discussion and communication exercises.'
        ],
        skills: ['Interpersonal Communication', 'Active Listening', 'Conflict Resolution', 'Collaboration', 'Relationship Building', 'Adaptability', 'Professional Communication'],
        nace: ['Communication', 'Teamwork', 'Career & Self-Development', 'Professionalism'],
        reflection: [
          'How did this course change the way you communicate with others?',
          'What examples from this course demonstrate collaboration or conflict resolution skills?',
          'Where could interpersonal communication skills help you in future workplace or leadership situations?'
        ]
      }
    }
  },

  mathematics: {
    label: 'Mathematics',
    courses: {
      'M 105': {
        title: 'M 105 Contemporary Mathematics',
        credits: '3 credits',
        term: 'Fall, Spring',
        description: 'Introduces mathematical reasoning, quantitative literacy, problem solving, and real-world mathematical applications.',
        academicLanguage: [
          'Applied mathematical reasoning to analyze real-world problems and scenarios.',
          'Practiced quantitative literacy and interpretation of numerical information.',
          'Developed problem-solving strategies using mathematical models and logic.',
          'Strengthened analytical thinking through data interpretation and quantitative analysis.'
        ],
        workforceLanguage: [
          'Used quantitative reasoning and problem-solving skills to evaluate information and make informed decisions.',
          'Interpreted numerical data and communicated findings clearly.',
          'Applied logical thinking and analytical skills to practical and workplace-oriented situations.',
          'Strengthened data interpretation and decision-making skills relevant to professional environments.'
        ],
        bullets: [
          'Applied quantitative reasoning and analytical thinking to solve real-world problems.',
          'Interpreted numerical information and evaluated data-driven scenarios.',
          'Strengthened logical reasoning and mathematical problem-solving skills.',
          'Used mathematical models and evidence to support informed decision-making.'
        ],
        skills: ['Quantitative Reasoning', 'Problem Solving', 'Analytical Thinking', 'Data Interpretation', 'Decision Making', 'Critical Thinking'],
        nace: ['Critical Thinking', 'Communication', 'Professionalism'],
        reflection: [
          'What real-world problems did this course help you analyze differently?',
          'How did mathematical reasoning support decision-making or problem solving?',
          'Where could quantitative literacy be useful in your future career or workplace?'
        ]
      },

      'STAT 216': {
        title: 'STAT 216 Introduction to Statistics',
        credits: '3 credits',
        term: 'Fall, Spring',
        description: 'Introduces statistical reasoning, data analysis, probability, interpretation of quantitative information, and evidence-based decision making.',
        academicLanguage: [
          'Applied statistical methods to analyze and interpret quantitative data.',
          'Practiced probability, data visualization, and evidence-based reasoning.',
          'Interpreted statistical findings and evaluated the reliability of data sources.',
          'Used statistical analysis to support informed conclusions and decision-making.'
        ],
        workforceLanguage: [
          'Analyzed quantitative data to identify trends and support decision-making.',
          'Interpreted statistical information and communicated findings clearly.',
          'Applied evidence-based reasoning to workplace and real-world scenarios.',
          'Strengthened analytical and data literacy skills relevant to professional environments.'
        ],
        bullets: [
          'Analyzed and interpreted quantitative data using statistical reasoning.',
          'Applied evidence-based approaches to evaluate trends and support conclusions.',
          'Strengthened data literacy and analytical problem-solving skills.',
          'Communicated statistical findings through interpretation and data visualization.'
        ],
        skills: ['Statistical Analysis', 'Data Literacy', 'Quantitative Reasoning', 'Evidence-Based Decision Making', 'Problem Solving', 'Analytical Thinking'],
        nace: ['Critical Thinking', 'Communication', 'Technology'],
        reflection: [
          'How did statistics help you interpret or evaluate information differently?',
          'What assignments demonstrated your ability to work with data?',
          'Where could data literacy and evidence-based reasoning support future workplace success?'
        ]
      }
    }
  },

  humanitiesFineArts: {
    label: 'Humanities / Fine Arts',
    courses: {
      'BGEN 220': {
        title: 'BGEN 220 Business Ethics and Social Responsibility',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores ethical decision-making, social responsibility, and the role of business in society.',
        academicLanguage: ['Examined ethical issues in business and organizational decision-making.', 'Analyzed social responsibility from individual, organizational, and community perspectives.', 'Evaluated real-world situations using ethical reasoning and evidence.'],
        workforceLanguage: ['Applied ethical reasoning to workplace and organizational scenarios.', 'Evaluated decisions through social responsibility, accountability, and stakeholder impact.', 'Strengthened professional judgment and responsible decision-making.'],
        bullets: ['Applied ethical reasoning to business and workplace scenarios.', 'Analyzed organizational decisions through social responsibility and stakeholder impact.', 'Strengthened professional judgment, accountability, and decision-making skills.'],
        skills: ['Ethical Reasoning', 'Professional Judgment', 'Social Responsibility', 'Critical Thinking', 'Decision Making'],
        nace: ['Critical Thinking', 'Professionalism', 'Leadership'],
        reflection: ['How did this course shape your understanding of ethical decision-making?', 'Where might social responsibility matter in your future career?', 'What example from this course could support an interview response?']
      },

      'LIT 110': {
        title: 'LIT 110 Introduction to Literature',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces literary analysis, interpretation, and communication through reading and discussion of literature.',
        academicLanguage: ['Analyzed literary texts using interpretation and evidence.', 'Practiced close reading, discussion, and written analysis.', 'Explored how stories reflect human experience and culture.'],
        workforceLanguage: ['Interpreted complex information and communicated evidence-based insights.', 'Strengthened analytical thinking, written communication, and perspective-taking.', 'Developed the ability to identify themes, context, and meaning in complex material.'],
        bullets: ['Analyzed complex texts and communicated evidence-based interpretations.', 'Strengthened written communication, critical thinking, and cultural awareness.', 'Developed perspective-taking skills through interpretation of human experiences.'],
        skills: ['Textual Analysis', 'Written Communication', 'Critical Thinking', 'Interpretation', 'Cultural Awareness'],
        nace: ['Communication', 'Critical Thinking', 'Equity & Inclusion'],
        reflection: ['What text or assignment best shows your analytical thinking?', 'How did literature help you understand different perspectives?', 'How could interpretation skills apply in a workplace?']
      },

      'LIT 163': {
        title: 'LIT 163 Fantasy and Science Fiction',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores fantasy and science fiction literature through analysis of imagination, society, culture, and human possibility.',
        academicLanguage: ['Analyzed speculative literature through theme, genre, and cultural context.', 'Explored how fantasy and science fiction reflect social questions and human concerns.', 'Practiced interpretation, discussion, and written analysis.'],
        workforceLanguage: ['Strengthened creative thinking, systems thinking, and interpretation of complex ideas.', 'Analyzed imagined scenarios to explore real-world social, ethical, and technological questions.', 'Developed communication and critical thinking through genre analysis.'],
        bullets: ['Analyzed speculative texts to evaluate social, ethical, and cultural questions.', 'Strengthened creative thinking, interpretation, and written communication skills.', 'Connected imaginative scenarios to real-world problem solving and human concerns.'],
        skills: ['Creative Thinking', 'Critical Thinking', 'Cultural Analysis', 'Written Communication', 'Interpretation'],
        nace: ['Critical Thinking', 'Communication', 'Creativity'],
        reflection: ['How did speculative fiction help you think differently about society or technology?', 'What assignment showed your creative or analytical thinking?', 'How could imaginative thinking help solve workplace problems?']
      },

      'LIT 270': {
        title: 'LIT 270 Film and Literature',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines relationships between film and literature through analysis, adaptation, narrative, and interpretation.',
        academicLanguage: ['Compared literary and film texts through analysis of narrative, theme, and adaptation.', 'Practiced visual and textual interpretation.', 'Communicated ideas through discussion and written analysis.'],
        workforceLanguage: ['Analyzed information across multiple media formats and communicated insights clearly.', 'Strengthened visual literacy, interpretation, and comparative analysis.', 'Evaluated how messages change based on format, audience, and purpose.'],
        bullets: ['Compared written and visual texts using evidence-based analysis.', 'Strengthened media literacy, interpretation, and communication skills.', 'Evaluated how format and audience shape meaning and message design.'],
        skills: ['Media Literacy', 'Visual Analysis', 'Critical Thinking', 'Communication', 'Comparative Analysis'],
        nace: ['Communication', 'Critical Thinking', 'Technology'],
        reflection: ['How did this course strengthen your media literacy?', 'What comparison helped you understand audience or message design?', 'How could analyzing media apply to professional communication?']
      },

      'LIT 285': {
        title: 'LIT 285 Mythologies',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores mythology, cultural narratives, symbolism, and human meaning across traditions.',
        academicLanguage: ['Analyzed myths through cultural, historical, and symbolic frameworks.', 'Explored how stories shape identity, values, and worldview.', 'Practiced interpretation and evidence-based discussion.'],
        workforceLanguage: ['Strengthened cultural awareness, interpretation, and communication across different perspectives.', 'Analyzed how narratives influence values, identity, and decision-making.', 'Developed perspective-taking and cross-cultural understanding.'],
        bullets: ['Analyzed cultural narratives to understand values, identity, and worldview.', 'Strengthened cross-cultural awareness, interpretation, and communication skills.', 'Applied evidence-based analysis to symbolic and historical material.'],
        skills: ['Cultural Awareness', 'Interpretation', 'Critical Thinking', 'Communication', 'Perspective Taking'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: ['How did mythology help you understand different cultures or values?', 'What story or symbol helped you think differently?', 'How might cultural awareness help you in the workplace?']
      },

      'LSH 201': {
        title: 'LSH 201 Introduction to the Humanities',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces humanities disciplines through culture, history, art, ideas, and human experience.',
        academicLanguage: ['Explored human culture, history, ideas, and creative expression.', 'Practiced interdisciplinary analysis across humanities fields.', 'Connected cultural artifacts to historical and social contexts.'],
        workforceLanguage: ['Strengthened cultural awareness, interdisciplinary thinking, and communication skills.', 'Analyzed human experiences and ideas across historical and social contexts.', 'Developed perspective-taking useful for diverse professional settings.'],
        bullets: ['Applied interdisciplinary thinking to analyze culture, history, and human experience.', 'Strengthened cultural awareness, communication, and critical thinking skills.', 'Connected ideas across disciplines to better understand social and professional contexts.'],
        skills: ['Interdisciplinary Thinking', 'Cultural Awareness', 'Critical Thinking', 'Communication', 'Contextual Analysis'],
        nace: ['Critical Thinking', 'Communication', 'Equity & Inclusion'],
        reflection: ['What humanities topic helped you better understand people or culture?', 'How did this course connect ideas across disciplines?', 'How could interdisciplinary thinking support your future goals?']
      },

      'NASX 240': {
        title: 'NASX 240 Native American Literature',
        credits: '3 credits',
        term: 'Varies',
        heritage: true,
        description: 'Examines Native American literature, storytelling, culture, identity, and historical context.',
        academicLanguage: ['Analyzed Native American literary works through cultural and historical context.', 'Explored storytelling, identity, sovereignty, and lived experience.', 'Practiced respectful interpretation and evidence-based communication.'],
        workforceLanguage: ['Strengthened cultural awareness, respectful communication, and perspective-taking.', 'Developed understanding of Native American histories, identities, and contemporary experiences.', 'Applied critical thinking to diverse voices and cultural contexts.'],
        bullets: ['Analyzed Native American literature through cultural, historical, and social contexts.', 'Strengthened respectful communication, cultural awareness, and perspective-taking skills.', 'Applied critical thinking to diverse voices, identities, and lived experiences.'],
        skills: ['Cultural Awareness', 'Respectful Communication', 'Critical Thinking', 'Interpretation', 'Equity Awareness'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: ['How did this course deepen your understanding of Native American voices or experiences?', 'What text helped you think differently about culture or history?', 'How could respectful cultural communication matter in your future work?']
      },

      'PHL 101': {
        title: 'PHL 101 Introduction to Philosophy',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces philosophical questions, reasoning, argument, knowledge, reality, and values.',
        academicLanguage: ['Examined philosophical arguments and major questions about knowledge, reality, and values.', 'Practiced logical reasoning, questioning, and evidence-based argumentation.', 'Analyzed complex ideas through discussion and writing.'],
        workforceLanguage: ['Strengthened logical reasoning, problem solving, and careful evaluation of ideas.', 'Developed the ability to question assumptions and communicate reasoned arguments.', 'Applied critical thinking to complex and abstract problems.'],
        bullets: ['Analyzed complex ideas using logical reasoning and evidence-based argumentation.', 'Strengthened critical thinking, questioning, and written communication skills.', 'Evaluated assumptions and developed reasoned responses to complex problems.'],
        skills: ['Logical Reasoning', 'Critical Thinking', 'Argumentation', 'Problem Solving', 'Communication'],
        nace: ['Critical Thinking', 'Communication', 'Professionalism'],
        reflection: ['What philosophical question helped you think more deeply?', 'How did this course strengthen your reasoning skills?', 'How could questioning assumptions help in a workplace?']
      },

      'PHL 110': {
        title: 'PHL 110 Introduction to Ethics',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces ethical theories, moral reasoning, and application of ethics to real-world situations.',
        academicLanguage: ['Examined ethical theories and moral reasoning frameworks.', 'Applied ethical analysis to real-world situations and dilemmas.', 'Practiced argumentation, reflection, and evidence-based discussion.'],
        workforceLanguage: ['Applied ethical reasoning to complex decisions and workplace scenarios.', 'Strengthened professional judgment, accountability, and decision-making skills.', 'Evaluated situations from multiple perspectives before reaching conclusions.'],
        bullets: ['Applied ethical reasoning to real-world and professional decision-making scenarios.', 'Strengthened judgment, accountability, and critical thinking skills.', 'Evaluated complex situations using evidence, values, and multiple perspectives.'],
        skills: ['Ethical Reasoning', 'Decision Making', 'Professional Judgment', 'Critical Thinking', 'Perspective Taking'],
        nace: ['Professionalism', 'Critical Thinking', 'Leadership'],
        reflection: ['What ethical issue helped you think differently about decision-making?', 'How could ethical reasoning apply in your future career?', 'What example from this course could support an interview answer?']
      },

      'WGSS 242': {
        title: 'WGSS 242 Gender and Equality',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores gender, equality, identity, power, and social structures through interdisciplinary analysis.',
        academicLanguage: ['Analyzed gender and equality through social, historical, and cultural frameworks.', 'Examined systems of power, identity, and representation.', 'Practiced critical discussion and evidence-based analysis.'],
        workforceLanguage: ['Strengthened equity-minded thinking, cultural awareness, and inclusive communication.', 'Analyzed how systems and identities shape experiences and opportunities.', 'Developed skills for respectful collaboration in diverse environments.'],
        bullets: ['Analyzed gender, equality, and social systems through evidence-based discussion.', 'Strengthened inclusive communication, cultural awareness, and critical thinking skills.', 'Developed perspective-taking skills relevant to diverse professional environments.'],
        skills: ['Equity Awareness', 'Inclusive Communication', 'Cultural Awareness', 'Critical Thinking', 'Collaboration'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: ['How did this course shape your understanding of equity or identity?', 'What concept could help you work more effectively with others?', 'How might inclusive communication matter in your future workplace?']
      },

      'ARTH 160': {
        title: 'ARTH 160 Global Visual Culture',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines visual culture, art, images, and meaning across global contexts.',
        academicLanguage: ['Analyzed visual culture through historical, social, and global contexts.', 'Practiced visual interpretation and evidence-based discussion.', 'Explored how images communicate meaning across cultures.'],
        workforceLanguage: ['Strengthened visual literacy, cultural awareness, and communication skills.', 'Interpreted visual information and connected it to audience, context, and message.', 'Developed global perspective useful for communication and design-related work.'],
        bullets: ['Analyzed visual materials across global and cultural contexts.', 'Strengthened visual literacy, communication, and cultural awareness skills.', 'Interpreted images and messages with attention to audience, meaning, and context.'],
        skills: ['Visual Literacy', 'Cultural Awareness', 'Communication', 'Interpretation', 'Global Perspective'],
        nace: ['Communication', 'Equity & Inclusion', 'Critical Thinking'],
        reflection: ['How did this course change the way you interpret images?', 'What visual example helped you understand culture or communication?', 'How could visual literacy support workplace communication?']
      },

      'ARTZ 101': {
        title: 'ARTZ 101 Art Fundamentals',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces foundational art concepts, creative process, visual organization, and design principles.',
        academicLanguage: ['Practiced foundational art and design principles.', 'Developed creative problem-solving through visual projects.', 'Applied critique, revision, and design thinking to creative work.'],
        workforceLanguage: ['Strengthened creativity, visual problem-solving, and iterative design skills.', 'Used feedback and revision to improve project outcomes.', 'Developed attention to detail and creative decision-making.'],
        bullets: ['Applied design principles and creative problem-solving to visual projects.', 'Strengthened creativity, attention to detail, and visual communication skills.', 'Used critique and revision to improve project quality and decision-making.'],
        skills: ['Creativity', 'Design Thinking', 'Visual Communication', 'Problem Solving', 'Revision'],
        nace: ['Creativity', 'Communication', 'Critical Thinking'],
        reflection: ['What project best shows your creative problem-solving?', 'How did feedback improve your work?', 'How could design thinking apply outside of art?']
      },

      'MUSI 207': {
        title: 'MUSI 207 World Music',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores music across world cultures through listening, cultural context, and global perspectives.',
        academicLanguage: ['Examined musical traditions across global cultures.', 'Analyzed music through cultural, historical, and social context.', 'Practiced listening, interpretation, and cultural comparison.'],
        workforceLanguage: ['Strengthened global awareness, listening, and cultural interpretation skills.', 'Developed respect for diverse traditions and ways of communicating meaning.', 'Applied cultural awareness to understanding people, communities, and contexts.'],
        bullets: ['Analyzed world music traditions through cultural and historical contexts.', 'Strengthened global awareness, listening, and cultural interpretation skills.', 'Developed perspective-taking skills relevant to diverse professional environments.'],
        skills: ['Global Awareness', 'Listening', 'Cultural Interpretation', 'Communication', 'Perspective Taking'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: ['How did this course expand your understanding of global cultures?', 'What musical tradition helped you think differently?', 'How could cultural awareness help in your future work?']
      }
    }
  },

  naturalScience: {
    label: 'Natural Science',

    courses: {

      'BIOB 101': {
        title: 'BIOB 101 Discover Biology w/ Lab',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces biological concepts through scientific inquiry, observation, experimentation, and laboratory investigation.',
        academicLanguage: [
          'Explored biological systems through observation, experimentation, and scientific analysis.',
          'Practiced laboratory techniques, data collection, and interpretation.',
          'Applied scientific reasoning to biological questions and real-world systems.'
        ],
        workforceLanguage: [
          'Collected, analyzed, and interpreted scientific data using evidence-based methods.',
          'Applied problem-solving and observational skills in laboratory settings.',
          'Strengthened analytical thinking, documentation, and scientific communication skills.'
        ],
        bullets: [
          'Collected and analyzed biological data through laboratory investigation.',
          'Applied scientific reasoning and evidence-based problem solving.',
          'Strengthened laboratory, analytical thinking, and documentation skills.'
        ],
        skills: [
          'Scientific Inquiry',
          'Data Analysis',
          'Laboratory Skills',
          'Observation',
          'Problem Solving',
          'Critical Thinking'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Communication'
        ],
        reflection: [
          'What laboratory activity best demonstrated your scientific reasoning skills?',
          'How did experimentation help you analyze evidence?',
          'Where might data collection or analysis matter in future work?'
        ]
      },

      'BIOB 160': {
        title: 'BIOB 160 Principles of Living Systems w/ Lab',
        credits: '4 credits',
        term: 'Varies',
        description: 'Explores living systems, cellular biology, genetics, evolution, and scientific investigation through lecture and lab.',
        academicLanguage: [
          'Examined biological systems through cellular, genetic, and evolutionary frameworks.',
          'Applied laboratory investigation and evidence-based scientific reasoning.',
          'Practiced interpretation of biological data and experimental results.'
        ],
        workforceLanguage: [
          'Applied analytical reasoning and laboratory investigation skills to biological systems.',
          'Interpreted scientific data and evaluated evidence-based conclusions.',
          'Strengthened collaboration, observation, and scientific communication skills.'
        ],
        bullets: [
          'Analyzed biological systems using laboratory investigation and scientific reasoning.',
          'Interpreted scientific evidence and communicated evidence-based conclusions.',
          'Strengthened analytical thinking, laboratory, and collaboration skills.'
        ],
        skills: [
          'Scientific Reasoning',
          'Laboratory Investigation',
          'Data Interpretation',
          'Observation',
          'Critical Thinking',
          'Collaboration'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Teamwork'
        ],
        reflection: [
          'What investigation best demonstrated your analytical thinking?',
          'How did this course strengthen evidence-based reasoning?',
          'How could scientific literacy support workplace problem solving?'
        ]
      },

      'BIOH 104': {
        title: 'BIOH 104 Basic Human Biology w/ Lab',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces human biology through anatomy, physiology, health, and laboratory investigation.',
        academicLanguage: [
          'Explored human biological systems through lecture and laboratory activities.',
          'Applied observation, experimentation, and evidence-based analysis.',
          'Practiced interpretation of biological structures and functions.'
        ],
        workforceLanguage: [
          'Strengthened analytical reasoning and observation skills through scientific investigation.',
          'Applied evidence-based thinking to human biological systems and health-related topics.',
          'Developed laboratory and data interpretation skills.'
        ],
        bullets: [
          'Applied scientific investigation and observation skills to human biological systems.',
          'Strengthened analytical reasoning and laboratory skills through experimentation.',
          'Interpreted biological information using evidence-based analysis.'
        ],
        skills: [
          'Scientific Inquiry',
          'Observation',
          'Laboratory Skills',
          'Data Interpretation',
          'Analytical Thinking'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Professionalism'
        ],
        reflection: [
          'What lab activity best demonstrated your analytical skills?',
          'How did this course change your understanding of human biology?',
          'Where could scientific literacy support future workplace success?'
        ]
      },

      'BIOH 108': {
        title: 'BIOH 108 Basic Anatomy',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces anatomical terminology, structures, systems, and organization of the human body.',
        academicLanguage: [
          'Studied human anatomical structures and systems.',
          'Applied scientific terminology and interpretation skills.',
          'Connected structure and function across biological systems.'
        ],
        workforceLanguage: [
          'Developed attention to detail and technical vocabulary skills.',
          'Applied analytical reasoning to complex biological systems.',
          'Strengthened precision, observation, and scientific communication.'
        ],
        bullets: [
          'Applied scientific terminology and analytical reasoning to anatomical systems.',
          'Strengthened attention to detail and interpretation skills.',
          'Connected structure and function through evidence-based analysis.'
        ],
        skills: [
          'Attention to Detail',
          'Scientific Communication',
          'Observation',
          'Analytical Thinking',
          'Technical Vocabulary'
        ],
        nace: [
          'Critical Thinking',
          'Communication',
          'Professionalism'
        ],
        reflection: [
          'What anatomical concept required the most analytical thinking?',
          'How did precision and detail matter in this course?',
          'How could technical communication skills support workplace success?'
        ]
      },

      'CHMY 101': {
        title: 'CHMY 101 Discover Chemistry',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces chemical principles, scientific reasoning, and applications of chemistry to real-world systems.',
        academicLanguage: [
          'Explored chemical principles through scientific reasoning and analysis.',
          'Applied problem-solving and quantitative reasoning to chemistry concepts.',
          'Connected chemistry to real-world systems and applications.'
        ],
        workforceLanguage: [
          'Applied analytical reasoning and quantitative problem-solving skills.',
          'Strengthened evidence-based thinking and interpretation of scientific information.',
          'Connected scientific concepts to practical and workplace-oriented scenarios.'
        ],
        bullets: [
          'Applied quantitative reasoning and scientific problem solving to chemistry concepts.',
          'Strengthened analytical thinking and interpretation of scientific evidence.',
          'Connected chemistry principles to practical real-world applications.'
        ],
        skills: [
          'Quantitative Reasoning',
          'Problem Solving',
          'Scientific Literacy',
          'Analytical Thinking',
          'Critical Thinking'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Communication'
        ],
        reflection: [
          'How did chemistry help you analyze problems differently?',
          'What concept connected science to real-world applications?',
          'Where could quantitative reasoning support workplace success?'
        ]
      },

      'CHMY 121': {
        title: 'CHMY 121 Intro to General Chemistry w/ Lab',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces general chemistry concepts, laboratory investigation, quantitative analysis, and scientific problem solving.',
        academicLanguage: [
          'Applied chemical principles through laboratory investigation and quantitative analysis.',
          'Practiced scientific reasoning, experimentation, and evidence-based interpretation.',
          'Solved chemistry problems using analytical and mathematical approaches.'
        ],
        workforceLanguage: [
          'Applied analytical reasoning and quantitative problem solving in laboratory settings.',
          'Collected and interpreted scientific data using evidence-based methods.',
          'Strengthened documentation, experimentation, and technical communication skills.'
        ],
        bullets: [
          'Collected and analyzed scientific data through chemistry laboratory investigation.',
          'Applied quantitative reasoning and evidence-based problem-solving skills.',
          'Strengthened laboratory, analytical thinking, and technical communication abilities.'
        ],
        skills: [
          'Laboratory Investigation',
          'Quantitative Analysis',
          'Data Interpretation',
          'Problem Solving',
          'Technical Communication'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Communication'
        ],
        reflection: [
          'What lab best demonstrated your analytical or quantitative skills?',
          'How did experimentation support evidence-based reasoning?',
          'Where might scientific investigation skills matter professionally?'
        ]
      },

      'GEO 101': {
        title: 'GEO 101 Introduction to Physical Geology w/ Lab',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces Earth systems, geological processes, observation, field investigation, and scientific interpretation.',
        academicLanguage: [
          'Examined Earth systems through geological observation and scientific analysis.',
          'Applied field and laboratory investigation techniques.',
          'Interpreted geological evidence and environmental processes.'
        ],
        workforceLanguage: [
          'Applied observational and analytical skills to environmental systems and geological evidence.',
          'Strengthened field investigation, documentation, and interpretation skills.',
          'Developed evidence-based reasoning and systems thinking.'
        ],
        bullets: [
          'Analyzed geological systems using field and laboratory investigation techniques.',
          'Strengthened observation, documentation, and evidence-based reasoning skills.',
          'Applied systems thinking to environmental and Earth science processes.'
        ],
        skills: [
          'Observation',
          'Field Investigation',
          'Systems Thinking',
          'Data Interpretation',
          'Scientific Reasoning'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Professionalism'
        ],
        reflection: [
          'How did geological investigation strengthen your observational skills?',
          'What environmental system helped you think differently?',
          'How could systems thinking support workplace problem solving?'
        ]
      },

      'NUTR 221': {
        title: 'NUTR 221 Basic Human Nutrition',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces human nutrition, dietary analysis, health, wellness, and evidence-based nutritional decision-making.',
        academicLanguage: [
          'Explored nutrition science through evidence-based analysis.',
          'Examined relationships between diet, wellness, and human health.',
          'Applied scientific reasoning to nutritional choices and health outcomes.'
        ],
        workforceLanguage: [
          'Applied evidence-based reasoning to health and wellness information.',
          'Strengthened analytical thinking and interpretation of nutritional data.',
          'Connected scientific information to practical decision-making.'
        ],
        bullets: [
          'Applied evidence-based analysis to nutrition and wellness topics.',
          'Strengthened critical thinking and interpretation of scientific health information.',
          'Connected nutrition science to informed decision-making and wellness practices.'
        ],
        skills: [
          'Evidence-Based Reasoning',
          'Health Literacy',
          'Critical Thinking',
          'Data Interpretation',
          'Decision Making'
        ],
        nace: [
          'Critical Thinking',
          'Professionalism',
          'Communication'
        ],
        reflection: [
          'How did this course change your understanding of wellness or nutrition?',
          'What assignment best demonstrated evidence-based reasoning?',
          'How could health literacy support future professional success?'
        ]
      },

      'PHSX 105': {
        title: 'PHSX 105 Fundamentals of Physical Science w/ Lab',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces physical science concepts through laboratory investigation, experimentation, and scientific reasoning.',
        academicLanguage: [
          'Explored physical science concepts through experimentation and laboratory analysis.',
          'Applied scientific reasoning and evidence-based interpretation.',
          'Practiced quantitative and analytical problem-solving skills.'
        ],
        workforceLanguage: [
          'Applied analytical and quantitative reasoning skills in scientific investigations.',
          'Strengthened laboratory, experimentation, and problem-solving abilities.',
          'Interpreted evidence and communicated scientific findings clearly.'
        ],
        bullets: [
          'Applied scientific reasoning and quantitative problem solving to physical science concepts.',
          'Strengthened laboratory investigation and evidence-based analysis skills.',
          'Communicated scientific findings through observation and interpretation.'
        ],
        skills: [
          'Scientific Inquiry',
          'Quantitative Reasoning',
          'Problem Solving',
          'Laboratory Skills',
          'Data Analysis'
        ],
        nace: [
          'Critical Thinking',
          'Technology',
          'Communication'
        ],
        reflection: [
          'What investigation best demonstrated your analytical skills?',
          'How did experimentation support your understanding of science?',
          'Where could scientific reasoning support future workplace success?'
        ]
      }
    }
  },

  socialSciencesHistory: {
    label: 'Social Sciences / History',

    courses: {
      'ANTY 101': {
        title: 'ANTY 101 Anthropology and the Human Experience',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces anthropology through human culture, behavior, adaptation, identity, and social systems.',
        academicLanguage: [
          'Examined human cultures, behavior, and social systems through anthropological perspectives.',
          'Analyzed how culture shapes identity, relationships, and lived experience.',
          'Practiced comparison, observation, and evidence-based interpretation.'
        ],
        workforceLanguage: [
          'Strengthened cultural awareness, observation, and perspective-taking skills.',
          'Analyzed human behavior and social systems in diverse contexts.',
          'Developed skills for communicating and collaborating across cultural differences.'
        ],
        bullets: [
          'Analyzed human behavior and cultural systems using evidence-based reasoning.',
          'Strengthened cultural awareness, observation, and perspective-taking skills.',
          'Developed communication skills for working across diverse social contexts.'
        ],
        skills: ['Cultural Awareness', 'Observation', 'Perspective Taking', 'Social Analysis', 'Communication'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: [
          'How did this course change your understanding of culture or human behavior?',
          'What example helped you understand people from a different perspective?',
          'How could cultural awareness support your future workplace success?'
        ]
      },

      'BGEN 105': {
        title: 'BGEN 105 Introduction to Business',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces business concepts, organizational functions, economic systems, and workplace practices.',
        academicLanguage: [
          'Explored core business functions and organizational systems.',
          'Examined how businesses operate within economic and social environments.',
          'Practiced business vocabulary, analysis, and decision-making concepts.'
        ],
        workforceLanguage: [
          'Developed foundational business literacy and understanding of workplace operations.',
          'Connected organizational functions to decision-making and professional practice.',
          'Strengthened communication and analytical skills for business environments.'
        ],
        bullets: [
          'Developed foundational understanding of business operations and organizational systems.',
          'Applied business concepts to workplace and economic scenarios.',
          'Strengthened professional communication and business decision-making skills.'
        ],
        skills: ['Business Literacy', 'Organizational Awareness', 'Decision Making', 'Professional Communication', 'Critical Thinking'],
        nace: ['Professionalism', 'Critical Thinking', 'Communication'],
        reflection: [
          'What business concept helped you better understand workplace operations?',
          'How could business literacy support your future career?',
          'What assignment could help explain your professional readiness?'
        ]
      },

      'CJUS 121': {
        title: 'CJUS 121 Introduction to Criminal Justice',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces criminal justice systems, law enforcement, courts, corrections, ethics, and public safety.',
        academicLanguage: [
          'Examined criminal justice systems, institutions, and processes.',
          'Analyzed law enforcement, court, and correctional systems.',
          'Explored ethics, public safety, and social responsibility.'
        ],
        workforceLanguage: [
          'Strengthened systems thinking, ethical reasoning, and public-service awareness.',
          'Analyzed complex institutional processes and their impact on communities.',
          'Developed professional judgment and communication skills related to justice systems.'
        ],
        bullets: [
          'Analyzed criminal justice systems and public safety processes.',
          'Strengthened ethical reasoning, systems thinking, and professional judgment.',
          'Evaluated institutional roles and community impacts within justice-related contexts.'
        ],
        skills: ['Systems Thinking', 'Ethical Reasoning', 'Public Service Awareness', 'Critical Thinking', 'Professional Judgment'],
        nace: ['Critical Thinking', 'Professionalism', 'Equity & Inclusion'],
        reflection: [
          'What part of the justice system helped you think differently about public service?',
          'How did this course strengthen your ethical reasoning?',
          'Where could systems thinking support future career decisions?'
        ]
      },

      'ECNS 201': {
        title: 'ECNS 201 Principles of Microeconomics',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces individual, business, and market decision-making, including supply, demand, incentives, costs, and resource allocation.',
        academicLanguage: [
          'Analyzed individual and business decision-making through microeconomic concepts.',
          'Examined supply, demand, incentives, costs, markets, and resource allocation.',
          'Applied economic reasoning to real-world choices and tradeoffs.'
        ],
        workforceLanguage: [
          'Strengthened decision-making skills by evaluating costs, incentives, and resource use.',
          'Applied market reasoning to workplace, business, and consumer scenarios.',
          'Developed analytical thinking for evaluating tradeoffs and practical choices.'
        ],
        bullets: [
          'Applied economic reasoning to evaluate decisions, tradeoffs, and resource allocation.',
          'Analyzed market behavior using supply, demand, costs, and incentives.',
          'Strengthened analytical thinking and evidence-based decision-making skills.'
        ],
        skills: ['Economic Reasoning', 'Decision Making', 'Resource Allocation', 'Analytical Thinking', 'Problem Solving'],
        nace: ['Critical Thinking', 'Professionalism', 'Communication'],
        reflection: [
          'How did microeconomics help you think about choices and tradeoffs?',
          'What concept could apply to workplace decision-making?',
          'Where could economic reasoning support your future goals?'
        ]
      },

      'ECNS 202': {
        title: 'ECNS 202 Principles of Macroeconomics',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces broad economic systems, national income, inflation, unemployment, fiscal policy, monetary policy, and global economic issues.',
        academicLanguage: [
          'Examined economic systems, national income, inflation, unemployment, and policy decisions.',
          'Analyzed how broad economic forces affect individuals, organizations, and communities.',
          'Applied economic reasoning to national and global issues.'
        ],
        workforceLanguage: [
          'Developed understanding of economic trends that affect organizations and communities.',
          'Strengthened analytical reasoning by interpreting large-scale economic information.',
          'Connected policy, labor markets, and economic change to real-world decision-making.'
        ],
        bullets: [
          'Analyzed economic trends and policy issues affecting organizations and communities.',
          'Strengthened ability to interpret broad economic information and labor market conditions.',
          'Applied economic reasoning to evaluate national and global issues.'
        ],
        skills: ['Economic Literacy', 'Trend Analysis', 'Policy Awareness', 'Critical Thinking', 'Data Interpretation'],
        nace: ['Critical Thinking', 'Communication', 'Professionalism'],
        reflection: [
          'What economic issue helped you understand the world differently?',
          'How could macroeconomic awareness support career or business decisions?',
          'Where might trend analysis matter in your future work?'
        ]
      },

      'PSCI 210': {
        title: 'PSCI 210 Introduction to American Government',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces American government, political institutions, civic participation, public policy, and democratic systems.',
        academicLanguage: [
          'Examined American political institutions, civic participation, and public policy.',
          'Analyzed democratic systems, rights, responsibilities, and governance structures.',
          'Practiced evidence-based discussion of civic and political issues.'
        ],
        workforceLanguage: [
          'Strengthened civic literacy, policy awareness, and systems thinking.',
          'Developed understanding of how institutions and public decisions affect communities.',
          'Practiced respectful communication about complex public issues.'
        ],
        bullets: [
          'Analyzed American government systems, civic participation, and public policy issues.',
          'Strengthened civic literacy, systems thinking, and evidence-based communication.',
          'Evaluated how institutions and policies affect individuals and communities.'
        ],
        skills: ['Civic Literacy', 'Policy Awareness', 'Systems Thinking', 'Communication', 'Critical Thinking'],
        nace: ['Critical Thinking', 'Communication', 'Equity & Inclusion'],
        reflection: [
          'How did this course change your understanding of civic responsibility?',
          'What public policy issue helped you think critically?',
          'How could civic literacy support your future professional or community role?'
        ]
      },

      'PSYX 100': {
        title: 'PSYX 100 Introduction to Psychology',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces human behavior, thought, emotion, development, learning, personality, and mental processes.',
        academicLanguage: [
          'Examined human behavior, cognition, emotion, learning, and development.',
          'Applied psychological concepts to understand individuals and groups.',
          'Practiced evidence-based analysis of human behavior.'
        ],
        workforceLanguage: [
          'Strengthened understanding of human behavior, motivation, and communication.',
          'Applied psychological concepts to teamwork, learning, and interpersonal situations.',
          'Developed empathy, observation, and evidence-based reasoning skills.'
        ],
        bullets: [
          'Applied psychological concepts to understand human behavior, motivation, and learning.',
          'Strengthened empathy, observation, and evidence-based reasoning skills.',
          'Connected human behavior concepts to teamwork and professional communication.'
        ],
        skills: ['Human Behavior', 'Empathy', 'Observation', 'Communication', 'Critical Thinking'],
        nace: ['Communication', 'Critical Thinking', 'Teamwork'],
        reflection: [
          'What psychology concept helped you better understand yourself or others?',
          'How could understanding behavior support teamwork or leadership?',
          'What assignment could demonstrate your people-centered thinking?'
        ]
      },

      'PSYX 230': {
        title: 'PSYX 230 Developmental Psychology',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores human development across the lifespan, including physical, cognitive, emotional, and social growth.',
        academicLanguage: [
          'Examined human development across life stages.',
          'Analyzed physical, cognitive, emotional, and social development.',
          'Applied developmental concepts to real-world human experiences.'
        ],
        workforceLanguage: [
          'Strengthened understanding of how people grow, learn, and change across the lifespan.',
          'Applied developmental knowledge to communication, support, and service contexts.',
          'Developed empathy and perspective-taking for working with people at different life stages.'
        ],
        bullets: [
          'Applied developmental psychology concepts to understand human growth across the lifespan.',
          'Strengthened empathy, perspective-taking, and people-centered communication skills.',
          'Analyzed cognitive, emotional, and social development in real-world contexts.'
        ],
        skills: ['Developmental Awareness', 'Empathy', 'Perspective Taking', 'Communication', 'Human Services Awareness'],
        nace: ['Communication', 'Equity & Inclusion', 'Critical Thinking'],
        reflection: [
          'What life stage or developmental concept helped you understand people differently?',
          'How could developmental awareness support your future career?',
          'Where might empathy and perspective-taking matter professionally?'
        ]
      },

      'PSYX 240': {
        title: 'PSYX 240 Fundamentals of Abnormal Psychology',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces psychological disorders, mental health concepts, symptoms, treatment approaches, and social understanding of abnormal behavior.',
        academicLanguage: [
          'Examined psychological disorders, symptoms, and treatment approaches.',
          'Analyzed mental health concepts through scientific and social perspectives.',
          'Practiced evidence-based understanding of abnormal behavior.'
        ],
        workforceLanguage: [
          'Strengthened mental health literacy, empathy, and evidence-based reasoning.',
          'Developed awareness of how psychological challenges affect individuals and communities.',
          'Practiced respectful, informed communication about mental health topics.'
        ],
        bullets: [
          'Developed mental health literacy through study of psychological disorders and treatment concepts.',
          'Strengthened empathy, evidence-based reasoning, and respectful communication skills.',
          'Analyzed how mental health challenges affect individuals and communities.'
        ],
        skills: ['Mental Health Literacy', 'Empathy', 'Evidence-Based Reasoning', 'Respectful Communication', 'Critical Thinking'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: [
          'How did this course shape your understanding of mental health?',
          'What concept helped you think more respectfully about human behavior?',
          'How could mental health literacy support workplace or community interactions?'
        ]
      },

      'SOCI 101': {
        title: 'SOCI 101 Introduction to Sociology',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces social structures, institutions, inequality, culture, groups, and the relationship between individuals and society.',
        academicLanguage: [
          'Examined social structures, institutions, culture, inequality, and group behavior.',
          'Analyzed how society shapes individual experiences and opportunities.',
          'Applied sociological perspectives to real-world social issues.'
        ],
        workforceLanguage: [
          'Strengthened systems thinking, cultural awareness, and understanding of social dynamics.',
          'Analyzed how institutions and group contexts affect people and communities.',
          'Developed perspective-taking useful for diverse professional environments.'
        ],
        bullets: [
          'Analyzed social systems, institutions, and group dynamics using sociological perspectives.',
          'Strengthened cultural awareness, systems thinking, and perspective-taking skills.',
          'Applied evidence-based reasoning to understand social issues and community contexts.'
        ],
        skills: ['Systems Thinking', 'Cultural Awareness', 'Social Analysis', 'Perspective Taking', 'Critical Thinking'],
        nace: ['Equity & Inclusion', 'Critical Thinking', 'Communication'],
        reflection: [
          'What social issue helped you think differently about systems or institutions?',
          'How could sociological thinking support your future workplace interactions?',
          'What assignment best showed your ability to analyze social patterns?'
        ]
      },

      'HSTA 101': {
        title: 'HSTA 101 American History I',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines early American history, including political, social, cultural, and economic developments.',
        academicLanguage: [
          'Analyzed early American history through political, social, cultural, and economic contexts.',
          'Interpreted historical evidence and primary sources.',
          'Practiced historical reasoning and evidence-based writing.'
        ],
        workforceLanguage: [
          'Strengthened source analysis, contextual thinking, and evidence-based communication.',
          'Developed understanding of historical systems and their long-term impacts.',
          'Practiced evaluating information before drawing conclusions.'
        ],
        bullets: [
          'Analyzed historical evidence and communicated evidence-based conclusions.',
          'Strengthened source evaluation, contextual thinking, and written communication skills.',
          'Examined how historical systems shaped social, political, and economic development.'
        ],
        skills: ['Source Analysis', 'Historical Reasoning', 'Written Communication', 'Contextual Thinking', 'Critical Thinking'],
        nace: ['Critical Thinking', 'Communication', 'Equity & Inclusion'],
        reflection: [
          'What historical source helped you think critically?',
          'How did historical context change your understanding of an issue?',
          'How could source evaluation help in future work?'
        ]
      },

      'HSTA 102': {
        title: 'HSTA 102 American History II',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines modern American history, including political, social, cultural, and economic change.',
        academicLanguage: [
          'Analyzed modern American history through political, social, cultural, and economic developments.',
          'Interpreted historical evidence and competing perspectives.',
          'Practiced historical reasoning, discussion, and writing.'
        ],
        workforceLanguage: [
          'Strengthened ability to evaluate evidence, context, and multiple perspectives.',
          'Developed understanding of social change, institutions, and civic issues.',
          'Practiced communicating informed conclusions about complex topics.'
        ],
        bullets: [
          'Evaluated historical evidence and multiple perspectives on modern American issues.',
          'Strengthened contextual analysis, written communication, and critical thinking skills.',
          'Analyzed social, political, and economic change using evidence-based reasoning.'
        ],
        skills: ['Historical Analysis', 'Source Evaluation', 'Critical Thinking', 'Communication', 'Civic Awareness'],
        nace: ['Critical Thinking', 'Communication', 'Equity & Inclusion'],
        reflection: [
          'What modern historical issue helped you better understand current systems?',
          'How did this course help you evaluate multiple perspectives?',
          'Where could historical thinking support workplace or civic decisions?'
        ]
      },

      'HSTA 255': {
        title: 'HSTA 255 Montana History',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines Montana history, including Indigenous histories, settlement, politics, environment, communities, and regional identity.',
        academicLanguage: [
          'Analyzed Montana history through cultural, political, social, and environmental contexts.',
          'Examined Indigenous histories, regional development, and community change.',
          'Practiced historical interpretation and evidence-based discussion.'
        ],
        workforceLanguage: [
          'Strengthened place-based awareness, cultural understanding, and historical reasoning.',
          'Developed understanding of regional communities, identities, and institutional contexts.',
          'Applied evidence-based thinking to local and state issues.'
        ],
        bullets: [
          'Analyzed Montana history through cultural, social, political, and environmental contexts.',
          'Strengthened regional awareness, source evaluation, and evidence-based communication skills.',
          'Developed understanding of Indigenous histories, communities, and regional systems.'
        ],
        skills: ['Regional Awareness', 'Cultural Understanding', 'Historical Reasoning', 'Source Evaluation', 'Communication'],
        nace: ['Equity & Inclusion', 'Critical Thinking', 'Communication'],
        reflection: [
          'How did this course deepen your understanding of Montana communities?',
          'What topic helped you understand place or regional identity differently?',
          'How could local historical knowledge support community-based work?'
        ]
      },

      'HSTR 159': {
        title: 'HSTR 159 World History to 1500 CE',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines world history before 1500 CE through civilizations, cultures, exchange, conflict, and global development.',
        academicLanguage: [
          'Analyzed early world history through cultural, political, economic, and social contexts.',
          'Examined global connections, civilizations, and historical change.',
          'Practiced source interpretation and comparative analysis.'
        ],
        workforceLanguage: [
          'Strengthened global awareness, comparative thinking, and cultural understanding.',
          'Developed ability to analyze systems and change across time and place.',
          'Practiced evaluating evidence from diverse historical contexts.'
        ],
        bullets: [
          'Analyzed global historical systems and cultural developments before 1500 CE.',
          'Strengthened comparative thinking, source evaluation, and cultural awareness.',
          'Applied historical reasoning to understand change across societies and regions.'
        ],
        skills: ['Global Awareness', 'Comparative Analysis', 'Source Evaluation', 'Cultural Awareness', 'Critical Thinking'],
        nace: ['Equity & Inclusion', 'Critical Thinking', 'Communication'],
        reflection: [
          'What early world history topic helped you think globally?',
          'How did comparing cultures strengthen your understanding?',
          'Where could global awareness support future work?'
        ]
      },

      'HSTR 160': {
        title: 'HSTR 160 Modern World History',
        credits: '3 credits',
        term: 'Varies',
        description: 'Examines modern world history through global change, conflict, culture, economics, and political systems.',
        academicLanguage: [
          'Analyzed modern world history through global political, economic, and cultural change.',
          'Examined conflict, exchange, institutions, and international relationships.',
          'Practiced source evaluation and evidence-based historical analysis.'
        ],
        workforceLanguage: [
          'Strengthened global awareness, systems thinking, and contextual analysis.',
          'Developed understanding of how global events and institutions shape current conditions.',
          'Practiced evaluating sources and communicating evidence-based conclusions.'
        ],
        bullets: [
          'Analyzed modern global events, systems, and cultural change using historical evidence.',
          'Strengthened global awareness, source evaluation, and contextual thinking skills.',
          'Communicated evidence-based conclusions about complex international issues.'
        ],
        skills: ['Global Awareness', 'Systems Thinking', 'Source Evaluation', 'Critical Thinking', 'Communication'],
        nace: ['Critical Thinking', 'Communication', 'Equity & Inclusion'],
        reflection: [
          'What modern global issue helped you understand current events differently?',
          'How did this course strengthen systems thinking?',
          'How could global awareness matter in your future career?'
        ]
      },

      'NASX 105': {
        title: 'NASX 105 Introduction to Native American Studies',
        credits: '3 credits',
        term: 'Varies',
        heritage: true,
        description: 'Introduces Native American studies through Indigenous histories, cultures, sovereignty, identity, and contemporary issues.',
        academicLanguage: [
          'Examined Native American histories, cultures, sovereignty, identity, and contemporary issues.',
          'Analyzed Indigenous perspectives and historical contexts.',
          'Practiced respectful discussion and evidence-based interpretation.'
        ],
        workforceLanguage: [
          'Strengthened cultural awareness, respectful communication, and understanding of Indigenous communities.',
          'Developed perspective-taking and historical awareness relevant to community-based work.',
          'Applied evidence-based reasoning to contemporary social and cultural issues.'
        ],
        bullets: [
          'Analyzed Native American histories, cultures, sovereignty, and contemporary issues.',
          'Strengthened cultural awareness, respectful communication, and perspective-taking skills.',
          'Applied evidence-based reasoning to Indigenous histories and community contexts.'
        ],
        skills: ['Cultural Awareness', 'Respectful Communication', 'Historical Awareness', 'Perspective Taking', 'Critical Thinking'],
        nace: ['Equity & Inclusion', 'Communication', 'Critical Thinking'],
        reflection: [
          'How did this course deepen your understanding of Native American communities?',
          'What concept helped you think differently about sovereignty or identity?',
          'How could respectful cultural communication support your future work?'
        ]
      }
    }
  },


  culturalDiversity: {
    label: 'Cultural Diversity',

    courses: {

      'CAS 140': {
        title: 'CAS 140 Addictions and Diversity',
        credits: '3 credits',
        term: 'Varies',
        description: 'Explores addiction, recovery, diversity, social systems, and the impact of culture on health and human experience.',
        academicLanguage: [
          'Examined addiction and recovery through cultural, social, and psychological perspectives.',
          'Analyzed how diversity, identity, and systems affect health and behavior.',
          'Practiced evidence-based discussion and interpretation.'
        ],
        workforceLanguage: [
          'Strengthened empathy, cultural awareness, and people-centered communication skills.',
          'Developed understanding of how social systems and diversity affect individuals and communities.',
          'Applied evidence-based reasoning to health and human service topics.'
        ],
        bullets: [
          'Analyzed addiction and recovery through social, cultural, and behavioral perspectives.',
          'Strengthened empathy, cultural awareness, and respectful communication skills.',
          'Applied evidence-based reasoning to human services and community issues.'
        ],
        skills: [
          'Empathy',
          'Cultural Awareness',
          'People-Centered Communication',
          'Critical Thinking',
          'Social Analysis'
        ],
        nace: [
          'Equity & Inclusion',
          'Communication',
          'Critical Thinking'
        ],
        reflection: [
          'How did this course change your understanding of addiction or recovery?',
          'What concept helped you think differently about diversity or systems?',
          'How could empathy and communication support future workplace interactions?'
        ]
      },

      'NASX 204': {
        title: 'NASX 204 Introduction to Native American Beliefs and Philosophy',
        credits: '3 credits',
        term: 'Varies',
        heritage: true,
        description: 'Explores Native American beliefs, philosophies, worldviews, traditions, and cultural perspectives.',
        academicLanguage: [
          'Examined Native American philosophies, beliefs, and cultural traditions.',
          'Analyzed Indigenous perspectives and systems of meaning.',
          'Practiced respectful interpretation and evidence-based discussion.'
        ],
        workforceLanguage: [
          'Strengthened cultural understanding, respectful communication, and perspective-taking.',
          'Developed awareness of Indigenous worldviews and diverse systems of knowledge.',
          'Applied cultural responsiveness to communication and collaboration.'
        ],
        bullets: [
          'Analyzed Native American beliefs and philosophies through cultural and historical contexts.',
          'Strengthened respectful communication and cross-cultural understanding skills.',
          'Developed perspective-taking abilities relevant to diverse professional environments.'
        ],
        skills: [
          'Cultural Responsiveness',
          'Perspective Taking',
          'Respectful Communication',
          'Critical Thinking',
          'Cultural Awareness'
        ],
        nace: [
          'Equity & Inclusion',
          'Communication',
          'Critical Thinking'
        ],
        reflection: [
          'How did this course deepen your understanding of Indigenous perspectives?',
          'What belief or worldview challenged your assumptions?',
          'How could cultural responsiveness support your future work?'
        ]
      },

      'NASX 232': {
        title: 'NASX 232 Montana Indians: Cultures, Histories, Current Issues',
        credits: '3 credits',
        term: 'Varies',
        heritage: true,
        description: 'Examines Montana tribal nations through culture, history, sovereignty, identity, and contemporary issues.',
        academicLanguage: [
          'Explored Montana tribal nations through historical, political, and cultural perspectives.',
          'Analyzed sovereignty, identity, and contemporary Indigenous issues.',
          'Practiced evidence-based interpretation and respectful discussion.'
        ],
        workforceLanguage: [
          'Strengthened understanding of Indigenous communities, sovereignty, and cultural identity.',
          'Developed respectful communication and culturally responsive thinking.',
          'Applied evidence-based reasoning to community and policy issues.'
        ],
        bullets: [
          'Analyzed Montana tribal nations through cultural, historical, and political contexts.',
          'Strengthened respectful communication and culturally responsive thinking skills.',
          'Applied evidence-based reasoning to Indigenous and community issues.'
        ],
        skills: [
          'Cultural Awareness',
          'Respectful Communication',
          'Community Awareness',
          'Critical Thinking',
          'Perspective Taking'
        ],
        nace: [
          'Equity & Inclusion',
          'Communication',
          'Critical Thinking'
        ],
        reflection: [
          'How did this course expand your understanding of Montana tribal nations?',
          'What topic helped you think differently about sovereignty or identity?',
          'How could cultural awareness support future professional interactions?'
        ]
      },

      'SIGN 101': {
        title: 'SIGN 101 Introduction to American Sign Language',
        credits: '3 credits',
        term: 'Varies',
        description: 'Introduces American Sign Language, Deaf culture, visual communication, and foundational signing skills.',
        academicLanguage: [
          'Developed foundational American Sign Language communication skills.',
          'Explored Deaf culture, identity, and visual communication practices.',
          'Practiced expressive and receptive communication strategies.'
        ],
        workforceLanguage: [
          'Strengthened inclusive communication and adaptability across communication styles.',
          'Developed awareness of accessibility and diverse communication needs.',
          'Applied visual communication and active listening skills.'
        ],
        bullets: [
          'Developed foundational American Sign Language and visual communication skills.',
          'Strengthened inclusive communication and cultural awareness abilities.',
          'Applied adaptability and active listening in diverse communication settings.'
        ],
        skills: [
          'Inclusive Communication',
          'Adaptability',
          'Active Listening',
          'Visual Communication',
          'Cultural Awareness'
        ],
        nace: [
          'Communication',
          'Equity & Inclusion',
          'Teamwork'
        ],
        reflection: [
          'How did learning ASL change your understanding of communication?',
          'What communication skill from this course could help professionally?',
          'How could accessibility awareness support future workplace success?'
        ]
      },

      'SPNS 101': {
        title: 'SPNS 101 Elementary Spanish I',
        credits: '4 credits',
        term: 'Varies',
        description: 'Introduces foundational Spanish language skills, communication, grammar, vocabulary, and cultural understanding.',
        academicLanguage: [
          'Developed foundational Spanish communication skills through speaking, listening, reading, and writing.',
          'Explored cultural practices and perspectives in Spanish-speaking communities.',
          'Practiced language comprehension and interpersonal communication.'
        ],
        workforceLanguage: [
          'Strengthened multilingual communication and cultural responsiveness skills.',
          'Developed adaptability and communication strategies across language differences.',
          'Applied listening and interpersonal communication in diverse settings.'
        ],
        bullets: [
          'Developed foundational Spanish language and cross-cultural communication skills.',
          'Strengthened listening, adaptability, and interpersonal communication abilities.',
          'Applied multilingual communication strategies in diverse contexts.'
        ],
        skills: [
          'Multilingual Communication',
          'Adaptability',
          'Cross-Cultural Communication',
          'Listening',
          'Interpersonal Communication'
        ],
        nace: [
          'Communication',
          'Equity & Inclusion',
          'Career & Self-Development'
        ],
        reflection: [
          'How did learning another language affect your communication skills?',
          'What cultural insight helped expand your perspective?',
          'How could multilingual communication support your future career?'
        ]
      },

      'SPNS 102': {
        title: 'SPNS 102 Elementary Spanish II',
        credits: '4 credits',
        term: 'Varies',
        description: 'Continues development of Spanish language communication, comprehension, grammar, and cultural understanding.',
        academicLanguage: [
          'Expanded Spanish language communication through conversation, reading, listening, and writing.',
          'Strengthened comprehension and interpersonal language skills.',
          'Explored cultural contexts in Spanish-speaking communities.'
        ],
        workforceLanguage: [
          'Strengthened multilingual communication and cultural responsiveness skills.',
          'Applied adaptability and listening skills in diverse communication situations.',
          'Developed confidence communicating across language and cultural differences.'
        ],
        bullets: [
          'Expanded Spanish language communication and comprehension skills.',
          'Strengthened adaptability, listening, and cross-cultural communication abilities.',
          'Applied multilingual communication strategies in collaborative contexts.'
        ],
        skills: [
          'Cross-Cultural Communication',
          'Adaptability',
          'Listening',
          'Interpersonal Communication',
          'Multilingual Communication'
        ],
        nace: [
          'Communication',
          'Equity & Inclusion',
          'Career & Self-Development'
        ],
        reflection: [
          'How did continued language study strengthen your communication skills?',
          'What communication challenge helped you grow most?',
          'How could multilingual communication help professionally?'
        ]
      }
    }
  }

  ,

    computerSkills: {
      label: 'Computer Skills / Usage',

      courses: {

        'CAPP 131': {
          title: 'CAPP 131 Basic MS Office',
          credits: '3 credits',
          term: 'Varies',

          description:
            'Introduces Microsoft Office applications including word processing, spreadsheets, presentations, and digital productivity tools.',

          academicLanguage: [
            'Developed foundational skills using Microsoft Office applications.',
            'Practiced document creation, spreadsheet organization, presentation development, and digital file management.',
            'Applied productivity software to communication, organization, and information tasks.'
          ],

          workforceLanguage: [
            'Strengthened digital literacy and workplace technology skills using Microsoft Office tools.',
            'Created organized documents, spreadsheets, and presentations for professional communication.',
            'Applied productivity software to support organization, collaboration, and information management.'
          ],

          bullets: [
            'Developed proficiency using Microsoft Office applications for workplace communication and organization.',
            'Created professional documents, spreadsheets, and presentations using digital productivity tools.',
            'Strengthened digital literacy, file management, and information organization skills.'
          ],

          skills: [
            'Digital Literacy',
            'Microsoft Office',
            'Document Creation',
            'Spreadsheet Management',
            'Presentation Design',
            'Information Organization'
          ],

          nace: [
            'Technology',
            'Communication',
            'Professionalism'
          ],

          reflection: [
            'What digital tool or project best demonstrated your technology skills?',
            'How did this course improve your confidence using workplace software?',
            'Where could digital literacy support your future career goals?'
          ]
        },

        'CSCI 119': {
          title: 'CSCI 119 Fundamentals of Artificial Intelligence',
          credits: '3 credits',
          term: 'Varies',

          description:
            'Introduces foundational concepts in artificial intelligence, including machine learning, ethical considerations, problem solving, and emerging AI applications.',

          academicLanguage: [
            'Explored foundational concepts related to artificial intelligence and machine learning.',
            'Examined ethical considerations, problem-solving approaches, and emerging AI technologies.',
            'Analyzed how AI systems influence communication, decision-making, and society.'
          ],

          workforceLanguage: [
            'Developed foundational AI literacy and understanding of emerging technologies.',
            'Strengthened critical thinking about ethical technology use and data-driven systems.',
            'Applied problem-solving and analytical skills to evaluate AI tools and real-world applications.'
          ],

          bullets: [
            'Developed foundational understanding of artificial intelligence concepts and applications.',
            'Analyzed ethical and societal impacts of emerging AI technologies.',
            'Strengthened analytical thinking and problem-solving skills related to technology systems.'
          ],

          skills: [
            'AI Literacy',
            'Critical Thinking',
            'Technology Awareness',
            'Ethical Reasoning',
            'Problem Solving',
            'Analytical Thinking'
          ],

          nace: [
            'Technology',
            'Critical Thinking',
            'Career & Self-Development'
          ],

          reflection: [
            'How did this course change your understanding of artificial intelligence?',
            'What ethical or technological issue stood out most to you?',
            'How could AI literacy support your future career or professional development?'
          ]
        }

      }
    }

    ,

  concentrationAHSS: {
    label: 'Concentration: Arts, Humanities, and Social Sciences',

    courses: {
      'AHSS Concentration': {
        title: 'Arts, Humanities, and Social Sciences Concentration',
        credits: '9 credits',
        term: 'Varies',
        description:
          'Students complete 9 credits of coursework numbered 100 or above from approved arts, humanities, and social sciences disciplines. Courses numbered 194 do not apply to the concentration area.',

        academicLanguage: [
          'Selected coursework across arts, humanities, communication, social sciences, history, language, business, and related fields.',
          'Built an interdisciplinary academic foundation through courses emphasizing culture, society, communication, creativity, human behavior, and systems.',
          'Practiced analysis, interpretation, communication, and reflection across multiple disciplines.'
        ],

        workforceLanguage: [
          'Developed a broad transferable skill set across communication, cultural awareness, critical thinking, and human-centered problem solving.',
          'Connected learning from multiple disciplines to workplace communication, collaboration, ethical reasoning, and community understanding.',
          'Strengthened adaptability by applying different ways of thinking to complex human, social, and organizational issues.'
        ],

        bullets: [
          'Completed interdisciplinary coursework in arts, humanities, and social sciences to strengthen communication, analysis, and cultural awareness.',
          'Applied critical thinking across multiple disciplines to understand people, systems, communities, and organizations.',
          'Developed transferable skills in written communication, interpretation, ethical reasoning, and human-centered problem solving.',
          'Built a flexible academic foundation supporting transfer, career exploration, and civic engagement.'
        ],

        skills: [
          'Interdisciplinary Thinking',
          'Communication',
          'Critical Thinking',
          'Cultural Awareness',
          'Human-Centered Problem Solving',
          'Adaptability',
          'Ethical Reasoning',
          'Community Awareness'
        ],

        nace: [
          'Communication',
          'Critical Thinking',
          'Equity & Inclusion',
          'Career & Self-Development',
          'Professionalism'
        ],

        reflection: [
          'Which courses in this concentration best connect to your future goals?',
          'What patterns do you notice across the disciplines you selected?',
          'How did this concentration help you better understand people, communities, communication, or systems?',
          'Which assignments could become evidence of communication, analysis, or cultural awareness on a resume?'
        ]
      }
    }
  }
};

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
const skillTags = document.getElementById('skillTags');
const naceTags = document.getElementById('naceTags');
const academicToggle = document.getElementById('academicToggle');
const workforceToggle = document.getElementById('workforceToggle');

let currentLanguageMode = 'academic';

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

function renderLanguageContent(course) {
  if (!languageOutput || !academicToggle || !workforceToggle) return;

  const contentArray = currentLanguageMode === 'academic'
    ? course.academicLanguage
    : course.workforceLanguage;

  academicToggle.classList.toggle('active', currentLanguageMode === 'academic');
  workforceToggle.classList.toggle('active', currentLanguageMode === 'workforce');

  if (languageHeading) {
    languageHeading.textContent = currentLanguageMode === 'academic'
      ? 'Academic Language'
      : 'Workforce Language';
  }

  const ul = document.createElement('ul');

  contentArray.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  languageOutput.innerHTML = '';
  languageOutput.appendChild(ul);
}

function renderList(container, items) {
  if (!container) return;

  container.innerHTML = '';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderTags(container, items) {
  if (!container) return;

  container.innerHTML = '';

  items.forEach((item) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = item;
    container.appendChild(span);
  });
}

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
  courseDescription.textContent = course.description;
}
  if (courseDescription) courseDescription.textContent = course.description;

  renderLanguageContent(course);
  renderList(resumeBullets, course.bullets);
  renderList(reflectionPrompts, course.reflection);
  renderTags(skillTags, course.skills);
  renderTags(naceTags, course.nace);
}

if (academicToggle) {
  academicToggle.addEventListener('click', () => {
    currentLanguageMode = 'academic';
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

const moLogo = document.querySelector('.mo-logo');
const heroEgg = document.getElementById('heroEasterEgg');
const closeHeroEgg = document.getElementById('closeHeroEgg');

if (moLogo && heroEgg) {
  moLogo.addEventListener('click', () => {
    heroEgg.classList.remove('hidden');
    heroEgg.setAttribute('aria-hidden', 'false');
  });
}

if (closeHeroEgg) {
  closeHeroEgg.addEventListener('click', () => {
    heroEgg.classList.add('hidden');
    heroEgg.setAttribute('aria-hidden', 'true');
  });
}