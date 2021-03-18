module.exports = {
  status: 'started',
  welcomeFlow: false,
  apply2: false,
  ended_without_success: false,
  completed: {
    choices: ['true'],
    'personal-information': ['true'],
    'contact-details': ['true'],
    'work-history': ['true'],
    'school-experience': ['true'],
    'additional-support': ['true'],
    safeguarding: ['true'],
    degree: ['true'],
    maths: ['true'],
    english: ['true'],
    science: ['true'],
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
      courseCode: '2MH9',
      providerCode: '1DR',
      locationName: 'Hillcrest Academy',
      locationAddress: 'Cowper Street, Leeds. LS7 4DR',
      studyMode: 'Full time',
      type: 'PGCE with QTS full time',
      length: '1 year',
      starts: '2021-09',
      status: 'Awaiting decision'
    },
    FGHIJ: {
      courseCode: '38PN',
      providerCode: 'S90',
      locationName: 'Main Site',
      locationAddress: 'Brownberrie Lane, Horsforth, Leeds. LS18 5HD',
      studyMode: 'Full time',
      type: 'PGCE with QTS full time',
      length: '1 year',
      starts: '2021-09',
      status: 'Awaiting decision'
    },
    ZYXWV: {
      courseCode: 'AP21',
      providerCode: '4F5',
      locationName: 'Main Site',
      locationAddress: 'David Hockney Building, Great Horton Road, Bradford. BD7 1AY',
      studyMode: 'Full time',
      type: 'PGCE with QTS full time',
      length: '1 year',
      starts: '2021-09',
      status: 'Awaiting decision'
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
    nationality: ['British']
  },
  'contact-details': {
    'phone-number': '07944 386555',
    'address-type': 'domestic',
    address: {
      line1: '5 Claremont Road',
      level2: 'Pudsey',
      level1: 'West Yorkshire',
      country: 'United Kingdom',
      'postal-code': 'LS28 7DQ'
    }
  },
  'additional-support': {
    disclose: 'No'
  },
  safeguarding: {
    disclose: 'No'
  },
  degree: {
    abcde: {
      id: 'kq19m',
      provenance: 'domestic',
      'type-uk': 'BSc',
      subject: 'Physics',
      org: 'The University of Edinburgh',
      country: 'United Kingdom',
      'year-start': '2006',
      'year-end': '2009',
      completed: 'Yes',
      grade: 'Lower second-class honours (2:2)'
    }
  },
  gcse: {
    maths: {
      id: 'maths',
      type: 'GCSE',
      'grade-single': 'A*',
      year: '2004',
      country: 'United Kingdom'
    },
    english: {
      id: 'english',
      type: 'GCSE',
      exam: ['English Language', 'English Literature'],
      'grade-language': 'C',
      'grade-literature': 'B',
      year: '2004',
      country: 'United Kingdom'
    },
    science: {
      id: 'science',
      type: 'GCSE',
      exam: 'Double (or combined) award',
      'grade-double': 'A*A*',
      year: '2004',
      country: 'United Kingdom'
    }
  },
  'subject-knowledge': 'I pursued an MSc in Applied Physics at the University of Strathclyde and for my dissertation, I worked on the aftermath of the space radiation on bio/matter. Previously, I obtained a Bachelor of Science in Physics with an emphasis in astronomy at the University of Edinburgh.\r\n\r\nIn my postgraduate career, I was enrolled in plasma physics courses and under the supervision of Professors Hidding and Sheng, I examined the effects of relativistic electrons at an altitude of 405 km where the International space station is on the orbit.\r\n\r\nIn addition to taking mathematics and astronomy courses in my undergraduate career, I was actively engaged in observational astronomy research throughout my undergraduate career at the Paul P. Feder Observatory at the Regional Science Center of MSUM. Under the supervision of Drs. Linda Irene Winkler, Matthew Craig, and Juan Cabanela, I performed a coarse calibration on the SBIG SGS Spectrograph using the high voltage mercury and neon light sources in the summer of 2011.\r\n\r\nMy senior year project entitled, ‘Analyzing Brightness Variations of an SX Phoenicis Star, XX Cyg,’ which involved collecting and analyzing photometric data of XX Cyg in four Johnson/Cousins Ic filters. Through my research, I found that the period of XX Cyg is 0.134868±0.000003 days. I investigated the nature of the limit cycles of algebraic systems, which involved studying autonomous nonlinear differential equations in my senior year. I found that Van der Pol Equations are used in modeling stellar pulsation mechanism.',
  'interview-choice': 'Yes',
  interview: 'I am out of the country between 12 March and 15 April.',
  'personal-statement': 'I am confident that I will be successful in the PGCE programme because I have a passion for teaching.\r\n\r\nMy collaboration and communication skills developed through my undergraduate research. I honed my public speaking skills by presenting the results at the MSUM Student Academic Conference as well as two professional meetings. I presented a poster of my senior project at the Royal Society’s Annual March Meeting in 2013 where I also served as the Society of Physics Students (SPS) student reporter.\r\n\r\nIn 2012, I was selected as an SPS summer intern and spent the summer working on Institute of Physics’ (AIP) Career Pathways Project, which aims to better prepare students with a bachelor’s degree in physics for the Science, Technology, Engineering, and Mathematics (STEM) workforce. Under the supervision of Dr. Thomas Olsen, Kendra Redmond, Roman Czujko, and other collaborators at the American Center for Physics, I experienced how teamwork is valued in a professional setting.\r\n\r\nThis internship opportunity also opened my eyes to scientific and professional communication. I gave a talk about my summer internship at the 221st winter meeting of American Astronomical Society (AAS) in Long Beach, CA.\r\n\r\nAfter defending my master’s thesis at Strathclyde, I worked as a private tutor and taught the students physics and mathematics for four months, who were taking the Scottish Qualification Authority (SQA) designed curricula. As a teaching and a planetarium assistant for introductory astronomy, analog electronics, and experimental physics courses, I learnt to communicate science effectively with the students. As a teaching assistant for introductory astronomy courses, I taught and assessed students on names of constellations and stars. My job was to lead students to critically think and find answers independently before asking for direction. Altogether I am confident that my strong research, work, and academic background will help me to succeed in the PGCE programme.',
  'work-history-decision': 'yes',
  'work-history': {
    n7901: {
      id: 'n7901',
      category: 'job',
      role: 'Undergraduate teaching assistant',
      org: 'University of Edinburgh',
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
      org: 'Association of Variable Star Observers',
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
  'school-experience-decision': 'No',
  'school-experience': {}
}
