// Course categories reference course codes from the subject files.
const courseCategories = {
  "accounting": {"label": "Accounting (ACTG)", "courseCodes": ["ACTG 101", "ACTG 102", "ACTG 180", "ACTG 201", "ACTG 202", "ACTG 205", "ACTG 211", "ACTG 215", "ACTG 291", "ACTG 298"]},
  "activitiesGeneral": {"label": "Activities: General (ACT)", "courseCodes": ["ACT 094"]},
  "alliedHealthMedicalAssisting": {"label": "Allied Health: Medical Assisting (AHMA)", "courseCodes": ["AHMA 220"]},
  "alliedHealthMedicalSupport": {"label": "Allied Health: Medical Support (AHMS)", "courseCodes": ["AHMS 105", "AHMS 108", "AHMS 129", "AHMS 144", "AHMS 157", "AHMS 158", "AHMS 160", "AHMS 164", "AHMS 199", "AHMS 201", "AHMS 208", "AHMS 212", "AHMS 213", "AHMS 227", "AHMS 240", "AHMS 275", "AHMS 285", "AHMS 288"]},
  "alliedHealthPhysicalTherapy": {"label": "Allied Health: Physical Therapy (AHPT)", "courseCodes": ["AHPT 101", "AHPT 105", "AHPT 192", "AHPT 201", "AHPT 205", "AHPT 206", "AHPT 210", "AHPT 213", "AHPT 215", "AHPT 218", "AHPT 220", "AHPT 225", "AHPT 230"]},
  "alliedHealthRespiratoryCare": {"label": "Allied Health: Respiratory Care (AHRC)", "courseCodes": ["AHRC 140", "AHRC 150", "AHRC 152", "AHRC 155", "AHRC 160", "AHRC 170", "AHRC 171", "AHRC 180", "AHRC 240", "AHRC 241", "AHRC 245", "AHRC 246", "AHRC 250", "AHRC 251", "AHRC 254", "AHRC 262", "AHRC 264", "AHRC 281", "AHRC 291"]},
  "alliedHealthSurgicalTech": {"label": "Allied Health: Surgical Tech (AHST)", "courseCodes": ["AHST 101", "AHST 115", "AHST 154", "AHST 200", "AHST 201", "AHST 202", "AHST 215", "AHST 250", "AHST 251", "AHST 295"]},
  "businessGeneral": {"label": "Business General (BGEN)", "courseCodes": ["BGEN 105", "BGEN 110", "BGEN 220", "BGEN 235", "BGEN 291", "BGEN 298"]},
  "computerApplications": {"label": "Computer Applications (CAPP)", "courseCodes": ["CAPP 131", "CAPP 145", "CAPP 156", "CAPP 266"]},
  "communication": {
    "label": "Communication",
    "courseCodes": [
      "WRIT 101",
      "COMX 111",
      "COMX 115"
    ]
  },
  "mathematics": {
    "label": "Mathematics",
    "courseCodes": [
      "M 105",
      "STAT 216"
    ]
  },
  "humanitiesFineArts": {
    "label": "Humanities / Fine Arts",
    "courseCodes": [
      "BGEN 220",
      "LIT 110",
      "LIT 163",
      "LIT 270",
      "LIT 285",
      "LSH 201",
      "NASX 240",
      "PHL 101",
      "PHL 110",
      "WGSS 242",
      "ARTH 160",
      "ARTZ 101",
      "ARTZ 105",
      "ARTZ 106",
      "ARTZ 224",
      "MUSI 207"
    ]
  },
  "naturalScience": {
    "label": "Natural Science",
    "courseCodes": [
      "BIOB 101",
      "BIOB 160",
      "BIOB 170",
      "BIOM 250",
      "BIOH 104",
      "BIOH 108",
      "BIOH 112",
      "BIOH 113",
      "BIOH 201",
      "BIOH 211",
      "CHMY 101",
      "CHMY 121",
      "CHMY 123",
      "CHMY 141",
      "CHMY 143",
      "GEO 101",
      "NUTR 221",
      "PHSX 105"
    ]
  },
  "socialSciencesHistory": {
    "label": "Social Sciences / History",
    "courseCodes": [
      "ANTY 101",
      "BGEN 105",
      "CJUS 121",
      "CJUS 125",
      "ECNS 201",
      "ECNS 202",
      "PSCI 210",
      "PSYX 100",
      "PSYX 230",
      "PSYX 240",
      "SOCI 101",
      "HSTA 101",
      "HSTA 102",
      "HSTA 255",
      "HSTR 159",
      "HSTR 160",
      "NASX 105"
    ]
  },
  "culturalDiversity": {
    "label": "Cultural Diversity",
    "courseCodes": [
      "CAS 140",
      "NASX 204",
      "NASX 232",
      "SIGN 101",
      "SPNS 101",
      "SPNS 102"
    ]
  },
  "computerSkills": {
    "label": "Computer Skills / Usage",
    "courseCodes": [
      "CAPP 131",
      "CSCI 119"
    ]
  },
  "concentrationAHSS": {
    "label": "Concentration: Arts, Humanities, and Social Sciences",
    "courseCodes": [
      "AHSS Concentration"
    ]
  }
};
const coursesByCode = Object.assign(Object.create(null), ...Object.values(courseBatches));

// Show a subject in the picker once it has at least one course record.
const subjectSectionIndex = {
  "BIOM": "Biology: Micro",
  "BMGT": "Business: Management",
  "BMKT": "Business: Marketing",
  "COLS": "College Studies",
  "CSTN": "Construction Trades",
  "CRWR": "Creative Writing",
  "DENT": "Dental",
  "EDEC": "Early Childhood Education",
  "EDU": "Education",
  "ELCT": "Electrical Technology",
  "ETEC": "Electronics Technology",
  "ECP": "Emergency Care Provider",
  "HTH": "Health",
  "HIT": "Health Information Technology",
  "ITS": "Information Technology Systems",
  "MCH": "Machining and Manufacturing",
  "NRSG": "Nursing",
  "PHOT": "Photography",
  "RD": "Reading",
  "SW": "Social Work",
  "NRGY": "Sustainable Energy",
  "VET": "Veterinary Technology",
  "WLDG": "Welding"
};

for (const [prefix, name] of Object.entries(subjectSectionIndex)) {
  const courseCodes = Object.keys(courseBatches[prefix] ?? {});
  if (courseCodes.length === 0) continue;

  courseCategories[`subject_${prefix}`] = {
    label: `${name} (${prefix})`,
    courseCodes,
  };
}
