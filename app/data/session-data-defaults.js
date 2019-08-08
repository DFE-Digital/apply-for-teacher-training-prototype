module.exports = {
  settings: {
    'primary-application': 'false'
  },
  applications: {
    12345: {
      courses: [{
        name: 'English',
        code: 'Q3CT',
        qualification: 'QTS full time',
        startDate: '2019-09-01',
        provider: '2HN'
      }, {
        name: 'English',
        code: 'Q3X1',
        qualification: 'PGCE with QTS full time',
        startDate: '2019-09-01',
        provider: 'B78'
      }],
      candidate: {
        name: 'Janina Doe',
        'optional-name': '',
        'date-of-birth': {
          day: '09',
          month: '02',
          year: '1988'
        },
        nationality: 'Indian',
        'residency-status': 'require-tier-2'
      },
      'contact-details': {
        'phone-number': '07944 386555',
        email: 'janina.doe@example.com',
        'address-type': 'domestic',
        address: {
          'postal-code': 'G1 3AH',
          line1: '5 Royal Exchange Square',
          level2: 'Glasgow',
          country: 'United Kingdom'
        }
      },
      degree: {
        kq19m: {
          id: 'kq19m',
          provenance: 'international',
          type: 'BS',
          subject: 'Physics with emphasis in Astronomy',
          institution: 'Minnesota State University',
          country: 'United States',
          grade: '2:2',
          year: '2013',
          naric: 'Yes',
          'naric-details': 'BSc Physics'
        },
        kr525: {
          id: 'kr525',
          provenance: 'domestic',
          type: 'MSc',
          subject: 'Applied Physics',
          institution: 'Strathclyde University',
          country: 'United Kingdom',
          grade: 'Other',
          'grade-other': 'Pass',
          'grade-predicted': '',
          year: '2017'
        }
      },
      qualifications: {
        ksufp: {
          id: 'ksufp',
          category: 'other',
          type: 'GCSE(A*-G)',
          subject: 'Science',
          institution: 'Juliet High School',
          grade: '173',
          year: '2004',
          international: 'yes',
          country: 'India'
        },
        kv0y7: {
          id: 'kv0y7',
          category: 'other',
          type: 'Higher Secondary School Certificate',
          subject: '',
          institution: 'Juliet High School',
          grade: '647',
          year: '2008',
          international: 'yes',
          country: 'India'
        },
        maths: {
          id: 'maths',
          category: 'gcse',
          provenance: 'international',
          subject: 'Maths',
          type: 'GCSE(A*-G)',
          grade: '92',
          year: '2004',
          country: 'India',
          'award-org': 'WBBSE',
          naric: 'No',
          'naric-details': '',
          missing: ''
        },
        english: {
          id: 'english',
          category: 'gcse',
          provenance: 'missing',
          subject: 'English'
        }
      },
      'subject-knowledge': {
        statement: 'I pursued an MSc in Applied Physics at the University of Strathclyde and for my dissertation, I worked on the aftermath of the space radiation on bio/matter. Previously, I obtained a Bachelor of Science in Physics with an emphasis in astronomy and a minor in Mathematics at Minnesota State University Moorhead (MSUM), USA.\r\n\r\nIn my postgraduate career, I was enrolled in plasma physics courses and under the supervision of Professors Hidding and Sheng, I examined the effects of relativistic electrons at an altitude of 405 km where the International space station is on the orbit.\r\n\r\nIn addition to taking mathematics and astronomy courses in my undergraduate career, I was actively engaged in observational astronomy research throughout my undergraduate career at the Paul P. Feder Observatory at the Regional Science Center of MSUM. Under the supervision of Drs. Linda Irene Winkler, Matthew Craig, and Juan Cabanela, I performed a coarse calibration on the SBIG SGS Spectrograph using the high voltage mercury and neon light sources in the summer of 2011.\r\n\r\nMy senior year project entitled, ‘Analyzing Brightness Variations of an SX Phoenicis Star, XX Cyg,’ which involved collecting and analyzing photometric data of XX Cyg in four Johnson/Cousins Ic filters. Through my research, I found that the period of XX Cyg is 0.134868±0.000003 days. I investigated the nature of the limit cycles of algebraic systems, which involved studying autonomous nonlinear differential equations in my senior year. I found that Van der Pol Equations are used in modeling stellar pulsation mechanism.'
      },
      'language-skills': {
        main: 'No',
        other: 'I learnt English during high school, and given my studies in the USA and Scotland, now spend most of my time speaking English. My native language is Bengali.'
      },
      'work-history': {
        n7901: {
          id: 'n7901',
          category: 'job',
          role: 'Undergraduate teaching assistant',
          org: 'Minnesota State University Moorhead',
          description: 'Leveraged exceptional communication skills to improve student performance in the Department of Physics and Astronomy. Provided comprehensive support for Introductory astronomy, analog electronics, and experimental physics courses.\n\nTutored students and answered questions during lectures and lab sessions. Instructed students, assessed grades, and assisted with observation projects at the planetarium and the Paul P. Feder Observatory.',
          'worked-with-children': 'Yes',
          'start-date': '2010-01-01',
          'end-date': '2013-05-01'
        },
        n8dh6: {
          id: 'n8dh6',
          category: 'job',
          role: 'Summer intern',
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
          description: 'Taught Mathematics and Physics content covered in the Scottish National 5, the Higher and the Advanced Higher curricula. Assessed, graded and tracked individual’s progress in the above-mentioned subjects. Guided students to perform better in the exam by offering them mock exams and giving adequate scientific feedback.',
          'worked-with-children': 'Yes',
          'start-date': '2017-09-01',
          'end-date': false
        }
      },
      'school-experience': {
        missing: 'true'
      },
      vocation: {
        statement: 'I am confident that I will be successful in the PGCE programme because I have a passion for teaching.\r\n\r\nMy collaboration and communication skills developed through my undergraduate research. I honed my public speaking skills by presenting the results at the MSUM Student Academic Conference as well as two professional meetings. I presented a poster of my senior project at the American Physical Society’s (APS) Annual March Meeting in 2013 where I also served as the Society of Physics Students (SPS) student reporter.\r\n\r\nIn 2012, I was selected as an SPS summer intern and spent the summer working on American Institute of Physics’ (AIP) Career Pathways Project, which aims to better prepare students with a bachelor’s degree in physics for the Science, Technology, Engineering, and Mathematics (STEM) workforce. Under the supervision of Dr. Thomas Olsen, Kendra Redmond, Roman Czujko, and other collaborators at the American Center for Physics, I experienced how teamwork is valued in a professional setting.\r\n\r\nThis internship opportunity also opened my eyes to scientific and professional communication. I gave a talk about my summer internship at the 221st winter meeting of American Astronomical Society (AAS) in Long Beach, CA.\r\n\r\nAfter defending my master’s thesis at Strathclyde, I worked as a private tutor and taught the students physics and mathematics for four months, who were taking the Scottish Qualification Authority (SQA) designed curricula. As a teaching and a planetarium assistant for introductory astronomy, analog electronics, and experimental physics courses, I learnt to communicate science effectively with the students. As a teaching assistant for introductory astronomy courses, I taught and assessed students on names of constellations and stars. My job was to lead students to critically think and find answers independently before asking for direction. Altogether I am confident that my strong research, work, and academic background will help me to succeed in the PGCE programme.'
      },
      referees: {
        first: {
          id: 'first',
          name: 'Joesph Bloggs',
          relationship: 'They were my tutor at university from 2011 to 2013',
          email: 'joesph.r.bloggs@example.com',
          type: 'Academic',
          'character-explaination': ''
        },
        second: {
          id: 'second',
          name: 'Jane Doe',
          relationship: 'Faith leader who I have known since January 2018',
          email: 'jane.doe@example.com',
          type: 'Character',
          'character-explanation': 'I haven’t been in the workplace since having a baby, and left university in 2000, so can no longer contact any of my previous tutors.'
        }
      },
      interview: 'I am out of the country between 27 August and 15 September.'
    }
  }
}
