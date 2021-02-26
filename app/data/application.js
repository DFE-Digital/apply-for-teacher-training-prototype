module.exports = {
  status: 'started',
  welcomeFlow: false,
  apply2: false,
  ended_without_success: false,
  completed: {
    'personal-details': ['true'],
    'contact-details': ['true'],
    'work-history': ['true'],
    'school-experience': ['true'],
    'reasonable-adjustments': ['true'],
    suitability: ['true'],
    degree: ['true'],
    maths: ['true'],
    english: ['true'],
    science: ['true'],
    'other-qualifications': ['true'],
    'english-language': ['true'],
    'personal-statement': ['true'],
    'subject-knowledge': ['true'],
    interview: ['true']
  },
  account: {
    email: 'janina.doe@example.com'
  },
  choices: {
    ABCDE: {
      courseCode: '2XT2',
      providerCode: '1N1',
      locationName: 'Hillcrest Academy',
      locationAddress: 'Cowper Street, Leeds. LS7 4DR',
      studyMode: 'Full time',
      type: 'PGCE with QTS full time',
      length: '1 year',
      starts: '2021-09'
    },
    FGHIJ: {
      courseCode: '2VLT',
      providerCode: 'L24',
      locationName: 'Main Site',
      locationAddress: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD',
      studyMode: 'Full time',
      type: 'PGCE with QTS full time',
      length: '1 year',
      starts: '2021-09'
    },
    ZYXWV: {
      courseCode: 'X100',
      providerCode: 'B60',
      locationName: 'Main Site',
      locationAddress: 'David Hockney Building, Great Horton Road, Bradford. BD7 1AY',
      studyMode: 'Full time',
      type: 'PGCE with QTS full time',
      length: '1 year',
      starts: '2021-09'
    }
  },
  references: {
    first: {
      id: 'first',
      name: 'Joesph Bloggs',
      relationship: 'They were my tutor at university from 2011 to 2013',
      email: 'joesph.r.bloggs@example.com',
      type: 'Academic',
      status: 'Reference given',
      ready: true,
      log: [{
        note: 'Request sent',
        date: '2021-01-03T17:39:20'
      }, {
        note: 'Automated reminder sent',
        date: '2021-01-10T17:39:20'
      }, {
        note: 'Reference given',
        date: '2021-01-10T21:39:20'
      }]
    },
    second: {
      id: 'second',
      name: 'Jane Doe',
      relationship: 'Faith leader who I have known since January 2018',
      email: 'jane.doe@example.com',
      type: 'Character',
      status: 'Request cancelled',
      nudges: 0,
      log: [{
        note: 'Request sent',
        date: '2021-01-03T17:39:20'
      }, {
        note: 'Automated reminder sent',
        date: '2021-01-10T17:39:20'
      }, {
        note: 'Request cancelled',
        date: '2021-01-10T21:39:20'
      }]
    },
    third: {
      id: 'third',
      name: 'Jamie Murphy',
      relationship: 'They were my tutor at university from 2011 to 2013',
      email: 'james.m@example.com',
      type: 'Academic',
      status: 'Reference given',
      ready: true,
      nudges: 0,
      log: [{
        note: 'Request sent',
        date: '2021-01-03T17:39:20'
      }, {
        note: 'Reference given',
        date: '2021-01-05T10:12:20'
      }]
    }
  },
  candidate: {
    'given-name': 'Janina',
    'family-name': 'Doe',
    'optional-name': '',
    'date-of-birth': {
      day: '09',
      month: '02',
      year: '1988'
    },
    nationality: 'other',
    'other-nationality': 'Indian',
    residency: 'I will need to apply for permission to work or study in the UK'
  },
  'contact-details': {
    'phone-number': '07944 386555',
    'address-type': 'domestic',
    address: {
      'postal-code': 'G1 3AH',
      line1: '5 Royal Exchange Square',
      level2: 'Glasgow',
      country: 'United Kingdom'
    }
  },
  'reasonable-adjustments': {
    disclose: 'true',
    statement: 'I currently require the use of a wheelchair.'
  },
  suitability: {
    disclose: 'true',
    statement: 'I have a criminal record in Spain'
  },
  degree: {
    kq19m: {
      id: 'kq19m',
      provenance: 'international',
      'type-nonuk': 'Bachelor degree',
      subject: 'Physics with emphasis in Astronomy',
      org: 'Minnesota State University',
      country: 'United States',
      'year-start': '2010',
      'year-end': '2013',
      completed: 'Yes',
      naric: 'Yes',
      'naric-reference': 4000228363,
      'naric-comparability': 'Bachelor (Honours) degree',
      grade: 'Distinction',
      'has-grade': 'Yes'
    },
    kr525: {
      id: 'kr525',
      provenance: 'domestic',
      'type-uk': 'MSc',
      subject: 'Applied physics',
      org: 'The University of Strathclyde',
      'year-start': '2015',
      'year-end': '2017',
      completed: 'Yes',
      'has-grade': 'No'
    }
  },
  'english-language': {
    answer: 'Yes',
    type: 'IELTS',
    grade: '7.5',
    'certificate-number': '02GB0674SOOM599A',
    year: '2015'
  },
  'other-qualifications': {
    ksufp: {
      id: 'ksufp',
      type: 'Non-UK qualification',
      'type-non-uk': 'GCSE(A*-G)',
      subject: 'Science',
      org: 'Juliet High School',
      grade: '173',
      year: '2004',
      provenance: 'international',
      country: 'India'
    },
    kv0y7: {
      id: 'kv0y7',
      type: 'Non-UK qualification',
      'type-non-uk': 'Higher Secondary School Certificate',
      subject: '',
      org: 'Juliet High School',
      grade: '647',
      year: '2008',
      provenance: 'international',
      country: 'India'
    }
  },
  gcse: {
    maths: {
      id: 'maths',
      type: 'Non-UK qualification',
      'type-non-uk': 'GCSE(A*-G)',
      completed: 'true',
      year: '2004',
      country: 'India',
      naric: 'No',
      'naric-reference': 4000228363,
      'naric-comparability': 'GCSE (grades A*-C / 9-4)',
      grade: 'other',
      'grade-other': '92'
    },
    english: {
      id: 'english',
      type: 'I don’t have this qualification yet'
    },
    science: {
      id: 'science',
      type: 'I don’t have this qualification yet'
    }
  },
  'subject-knowledge': 'I pursued an MSc in Applied Physics at the University of Strathclyde and for my dissertation, I worked on the aftermath of the space radiation on bio/matter. Previously, I obtained a Bachelor of Science in Physics with an emphasis in astronomy and a minor in Mathematics at Minnesota State University Moorhead (MSUM), USA.\r\n\r\nIn my postgraduate career, I was enrolled in plasma physics courses and under the supervision of Professors Hidding and Sheng, I examined the effects of relativistic electrons at an altitude of 405 km where the International space station is on the orbit.\r\n\r\nIn addition to taking mathematics and astronomy courses in my undergraduate career, I was actively engaged in observational astronomy research throughout my undergraduate career at the Paul P. Feder Observatory at the Regional Science Center of MSUM. Under the supervision of Drs. Linda Irene Winkler, Matthew Craig, and Juan Cabanela, I performed a coarse calibration on the SBIG SGS Spectrograph using the high voltage mercury and neon light sources in the summer of 2011.\r\n\r\nMy senior year project entitled, ‘Analyzing Brightness Variations of an SX Phoenicis Star, XX Cyg,’ which involved collecting and analyzing photometric data of XX Cyg in four Johnson/Cousins Ic filters. Through my research, I found that the period of XX Cyg is 0.134868±0.000003 days. I investigated the nature of the limit cycles of algebraic systems, which involved studying autonomous nonlinear differential equations in my senior year. I found that Van der Pol Equations are used in modeling stellar pulsation mechanism.',
  'interview-choice': 'Yes',
  interview: 'I am out of the country between 27 August and 15 September.',
  'personal-statement': 'I am confident that I will be successful in the PGCE programme because I have a passion for teaching.\r\n\r\nMy collaboration and communication skills developed through my undergraduate research. I honed my public speaking skills by presenting the results at the MSUM Student Academic Conference as well as two professional meetings. I presented a poster of my senior project at the American Physical Society’s (APS) Annual March Meeting in 2013 where I also served as the Society of Physics Students (SPS) student reporter.\r\n\r\nIn 2012, I was selected as an SPS summer intern and spent the summer working on American Institute of Physics’ (AIP) Career Pathways Project, which aims to better prepare students with a bachelor’s degree in physics for the Science, Technology, Engineering, and Mathematics (STEM) workforce. Under the supervision of Dr. Thomas Olsen, Kendra Redmond, Roman Czujko, and other collaborators at the American Center for Physics, I experienced how teamwork is valued in a professional setting.\r\n\r\nThis internship opportunity also opened my eyes to scientific and professional communication. I gave a talk about my summer internship at the 221st winter meeting of American Astronomical Society (AAS) in Long Beach, CA.\r\n\r\nAfter defending my master’s thesis at Strathclyde, I worked as a private tutor and taught the students physics and mathematics for four months, who were taking the Scottish Qualification Authority (SQA) designed curricula. As a teaching and a planetarium assistant for introductory astronomy, analog electronics, and experimental physics courses, I learnt to communicate science effectively with the students. As a teaching assistant for introductory astronomy courses, I taught and assessed students on names of constellations and stars. My job was to lead students to critically think and find answers independently before asking for direction. Altogether I am confident that my strong research, work, and academic background will help me to succeed in the PGCE programme.',
  'work-history-decision': 'yes',
  'work-history': {
    n7901: {
      id: 'n7901',
      category: 'job',
      role: 'Undergraduate teaching assistant',
      org: 'Minnesota State University Moorhead',
      type: 'Full time',
      description: 'Leveraged exceptional communication skills to improve student performance in the Department of Physics and Astronomy. Provided comprehensive support for Introductory astronomy, analog electronics, and experimental physics courses.\n\nTutored students and answered questions during lectures and lab sessions. Instructed students, assessed grades, and assisted with observation projects at the planetarium and the Paul P. Feder Observatory.',
      'worked-with-children': 'Yes',
      'start-date': '2010-01-01',
      'end-date': '2013-05-01'
    },
    n8dh6: {
      id: 'n8dh6',
      category: 'job',
      role: 'Summer intern',
      type: 'Part time',
      org: 'American Association of Variable Star Observers',
      description: 'Maintained the APASS and the NAPASS database and kept it up to date with new observed data using the UNIX shell scripting. Ran photometry and astrometry programs (based on UNIX shell scripting) written by Dr. Arne Henden to calibrate observed APASS and NAPASS.',
      'worked-with-children': 'No',
      'start-date': '2013-06-01',
      'end-date': '2013-08-01'
    },
    n99sp: {
      id: 'n99sp',
      category: 'job',
      role: 'Graduate teaching assistant',
      org: 'Creighton University',
      type: 'Full time',
      description: 'Taught the lab sections of General Physics 1 & General Physics 2. Assessed and graded the lab journals and exams. Guided students to solve physics problems on their own.',
      'worked-with-children': 'Yes',
      'start-date': '2013-08-01',
      'end-date': '2016-11-01'
    },
    na7w4: {
      id: 'na7w4',
      category: 'job',
      role: 'Resident assistant (winter vacation)',
      org: 'Strathclyde University',
      type: 'Full time',
      description: 'Assisted residents by answering their queries and resolving issues during the winter break at the Andrew Ure Hall.',
      'worked-with-children': 'No',
      'start-date': '2016-12-01',
      'end-date': '2017-01-01'
    },
    naz06: {
      id: 'naz06',
      category: 'job',
      role: 'Private tutor',
      org: 'Tutorful',
      type: 'Part time',
      description: 'Taught Mathematics and Physics content covered in the Scottish National 5, the Higher and the Advanced Higher curricula. Assessed, graded and tracked individual’s progress in the above-mentioned subjects. Guided students to perform better in the exam by offering them mock exams and giving adequate scientific feedback.',
      'worked-with-children': 'Yes',
      'start-date': '2017-09-01',
      'end-date': 'now'
    }
  },
  'school-experience': {
    attained: 'false'
  }
}
