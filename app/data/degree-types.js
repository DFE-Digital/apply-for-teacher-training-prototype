// UK degree types
//
// This file lists degree 'types' or 'titles' awarded by UK Higher Education
// institutions (HEI), for use in candidate-facing interfaces for entering
// degree details.
//
// Where a degree has an abbreviation, this is given – for instance BA or BSc.
//
// The dqt_id refers to the ID for the type in the Database of Qualified Teachers.
//
// The hesa_itt_code is used for reporting ITT data to the Higher Education Statistics
// Agency (HESA) in the DEGTYPE field - see reference here:
// https://www.hesa.ac.uk/collection/c21053/e/degtype
//
// The level refers to the UK qualification levels
// https://www.gov.uk/what-different-qualification-levels-mean/list-of-qualification-levels
//
// Note: because this list is of of actual awarded degree types, generic codes fchor use
// in reporting to HESA such as "First Degree" (400), "Higher Degree" (401) and
// "Unknown" (999) are not included.
//
module.exports = [
  {
    priority: 1,
    name: 'Foundation of Arts',
    abbreviation: 'FdA',
    synonyms: [],
    level: '5',
    dqt_id: null,
    hesa_itt_code: null
  },
  {
    priority: 1,
    name: 'Foundation Degree of Education',
    abbreviation: 'FDEd',
    synonyms: [],
    level: '5',
    dqt_id: null,
    hesa_itt_code: null
  },
  {
    priority: 1,
    name: 'Foundation of Sciences',
    abbreviation: 'FdSs',
    synonyms: [],
    level: '5',
    dqt_id: null,
    hesa_itt_code: null
  },
  {
    priority: 1,
    name: 'Bachelor of Arts',
    abbreviation: 'BA',
    synonyms: [],
    level: '6',
    dqt_id: 'db695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '51'
  },
  {
    name: 'Bachelor of Arts Economics',
    abbreviation: 'BAEcon',
    synonyms: [],
    level: '6',
    dqt_id: 'dd695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '52'
  },
  {
    name: 'Bachelor of Arts in Architecture',
    abbreviation: 'BAArch',
    synonyms: [],
    level: '6',
    dqt_id: 'df695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '53'
  },
  {
    name: 'Bachelor of the Art of Obstetrics',
    abbreviation: 'BAO',
    synonyms: [],
    level: '6',
    dqt_id: 'e1695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '54'
  },
  {
    name: 'Bachelor of Architecture',
    abbreviation: 'BAArch',
    synonyms: [],
    level: '6',
    dqt_id: 'e3695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '55'
  },
  {
    name: 'Bachelor of Applied Science',
    abbreviation: 'BAsc',
    synonyms: [],
    level: '6',
    dqt_id: 'e5695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '56'
  },
  {
    name: 'Bachelor of Agriculture',
    abbreviation: 'BAg',
    synonyms: [],
    level: '6',
    dqt_id: 'e7695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '57'
  },
  {
    name: 'Bachelor of Accountancy',
    abbreviation: 'BAcc',
    synonyms: [],
    level: '6',
    dqt_id: 'e9695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '58'
  },
  {
    name: 'Bachelor of Administration',
    abbreviation: 'BAdmin',
    synonyms: [],
    level: '6',
    dqt_id: 'eb695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '59'
  },
  {
    name: 'Bachelor of Business Administration',
    abbreviation: 'BBA',
    synonyms: [],
    level: '6',
    dqt_id: 'ed695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '60'
  },
  {
    name: 'Bachelor of Combined Studies',
    abbreviation: 'BCS',
    synonyms: [],
    level: '6',
    dqt_id: 'ef695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '61'
  },
  {
    name: 'Bachelor of Commerce',
    abbreviation: 'BComm',
    synonyms: [],
    level: '6',
    dqt_id: 'f1695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '62'
  },
  {
    name: 'Bachelor of Divinity',
    abbreviation: 'BD',
    synonyms: [],
    level: '6',
    dqt_id: 'f3695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '63'
  },
  {
    name: 'Bachelor of Dental Surgery',
    abbreviation: 'BDS',
    synonyms: [],
    level: '6',
    dqt_id: 'f5695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '64'
  },
  {
    priority: 1,
    name: 'Bachelor of Engineering',
    abbreviation: 'BEng',
    synonyms: [],
    level: '6',
    dqt_id: 'f7695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '65'
  },
  {
    name: 'Bachelor of Engineering with Business Studies',
    abbreviation: 'BEng/BS',
    synonyms: [],
    level: '6',
    dqt_id: 'f9695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '66'
  },
  {
    name: 'Bachelor of Fine Art',
    abbreviation: 'BFA',
    synonyms: [],
    level: '6',
    dqt_id: 'fb695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '67'
  },
  {
    name: 'Bachelor of General Studies',
    abbreviation: 'BGS',
    synonyms: [],
    level: '6',
    dqt_id: 'fd695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '68'
  },
  {
    name: 'Bachelor of Humanities',
    abbreviation: 'BH',
    synonyms: [],
    level: '6',
    dqt_id: 'ff695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '69'
  },
  {
    name: 'Bachelor of Hygiene',
    abbreviation: 'BHyg',
    synonyms: [],
    level: '6',
    dqt_id: '016a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '70'
  },
  {
    name: 'Bachelor of Law',
    abbreviation: 'LLB',
    synonyms: [],
    level: '6',
    dqt_id: '036a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '71'
  },
  {
    name: 'Bachelor of Librarianship',
    abbreviation: 'BLib',
    synonyms: [],
    level: '6',
    dqt_id: '056a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '72'
  },
  {
    name: 'Bachelor of Librarianship and Information Studies',
    abbreviation: 'BLS',
    synonyms: [],
    level: '6',
    dqt_id: '076a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '73'
  },
  {
    name: 'Bachelor of Literature',
    abbreviation: 'BLitt',
    synonyms: [],
    level: '6',
    dqt_id: '096a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '74'
  },
  {
    name: 'Bachelor of Land Economy',
    abbreviation: 'BLEcon',
    synonyms: [],
    level: '6',
    dqt_id: '0b6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '75'
  },
  {
    name: 'Bachelor of Medical Science',
    abbreviation: 'BMedSc',
    synonyms: [],
    level: '6',
    dqt_id: '0d6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '76'
  },
  {
    name: 'Bachelor of Medicine',
    abbreviation: 'BM',
    synonyms: [],
    level: '6',
    dqt_id: '0f6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '77'
  },
  {
    name: 'Bachelor of Metallurgy',
    abbreviation: 'BMet',
    synonyms: [],
    level: '6',
    dqt_id: '116a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '78'
  },
  {
    name: 'Bachelor of Metallurgy and Engineering',
    abbreviation: 'BMet/Eng',
    synonyms: [],
    level: '6',
    dqt_id: '136a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '79'
  },
  {
    name: 'Bachelor of Music',
    abbreviation: 'BMus',
    synonyms: [],
    level: '6',
    dqt_id: '156a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '80'
  },
  {
    name: 'Bachelor of Nursing',
    abbreviation: 'BN',
    synonyms: [],
    level: '6',
    dqt_id: '176a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '81'
  },
  {
    name: 'Bachelor of Pharmacy',
    abbreviation: 'BPharm',
    synonyms: [],
    level: '6',
    dqt_id: '196a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '82'
  },
  {
    priority: 1,
    name: 'Bachelor of Science',
    abbreviation: 'BSc',
    synonyms: [],
    level: '6',
    dqt_id: '1b6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '83'
  },
  {
    name: 'Bachelor of Science Economics',
    abbreviation: 'BScEcon',
    synonyms: [],
    level: '6',
    dqt_id: '1d6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '84'
  },
  {
    name: 'Bachelor of Science and Engineering',
    abbreviation: 'BScEng',
    synonyms: [],
    level: '6',
    dqt_id: '1f6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '85'
  },
  {
    name: 'Bachelor of Science and Technology',
    abbreviation: 'BScTech',
    synonyms: [],
    level: '6',
    dqt_id: '216a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '86'
  },
  {
    name: 'Bachelor of Science in Social Science',
    abbreviation: 'BSc SS',
    synonyms: [],
    level: '6',
    dqt_id: '236a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '87'
  },
  {
    name: 'Bachelor of Science in Speech Therapy',
    abbreviation: 'BSc SPT',
    synonyms: [],
    level: '6',
    dqt_id: '256a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '88'
  },
  {
    name: 'Bachelor of Social Science',
    abbreviation: 'BSS',
    synonyms: [],
    level: '6',
    dqt_id: '276a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '89'
  },
  {
    name: 'Bachelor of Surgery',
    abbreviation: 'BS',
    synonyms: [],
    level: '6',
    dqt_id: '296a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '90'
  },
  {
    name: 'Bachelor of Chirurgiae',
    abbreviation: 'BCh',
    synonyms: [],
    level: '6',
    dqt_id: '2b6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '91'
  },
  {
    name: 'Bachelor of Technology',
    abbreviation: 'BTech',
    synonyms: [],
    level: '6',
    dqt_id: '2d6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '92'
  },
  {
    name: 'Bachelor of Theology',
    abbreviation: 'BTheol',
    synonyms: [],
    level: '6',
    dqt_id: '2f6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '93'
  },
  {
    name: 'Bachelor of Veterinary Medicine',
    abbreviation: 'BVMed',
    synonyms: [],
    level: '6',
    dqt_id: '316a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '94'
  },
  {
    name: 'Bachelor of Veterinary Medicine and Surgery',
    abbreviation: 'BVMS',
    synonyms: [],
    level: '6',
    dqt_id: '336a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '95'
  },
  {
    name: 'Bachelor of Veterinary Science',
    abbreviation: 'BVsc',
    synonyms: [],
    level: '6',
    dqt_id: '356a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '96'
  },
  {
    name: 'Bachelor of Education Scotland and Northern Ireland',
    abbreviation: 'BEd',
    synonyms: [],
    level: '6',
    dqt_id: '376a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '97'
  },
  {
    name: 'Bachelor of Philosophy',
    abbreviation: 'BPhil',
    synonyms: [],
    level: '6',
    dqt_id: '396a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '98'
  },
  {
    priority: 1,
    name: 'Bachelor of Education',
    abbreviation: 'BEd',
    synonyms: [],
    level: '6',
    dqt_id: 'c1695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '1'
  },
  {
    name: 'BA with intercalated PGCE',
    abbreviation: null,
    synonyms: [],
    level: '6',
    dqt_id: 'd5695652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '12'
  },
  {
    priority: 1,
    name: 'Master of Arts',
    abbreviation: 'MA',
    synonyms: [
      'masters of arts'
    ],
    level: '7',
    dqt_id: '3b6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '200'
  },
  {
    name: 'Master of Librarianship',
    abbreviation: 'MLib',
    synonyms: [
      'masters of librarianship'
    ],
    level: '7',
    dqt_id: '3d6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '201'
  },
  {
    name: 'Master of Literature',
    abbreviation: 'MLitt',
    synonyms: [
      'masters of literature'
    ],
    level: '7',
    dqt_id: '3f6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '202'
  },
  {
    name: 'Master of Music',
    abbreviation: 'MMus',
    synonyms: [
      'masters of music'
    ],
    level: '7',
    dqt_id: '416a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '203'
  },
  {
    name: 'Master of Philosophy',
    abbreviation: 'MPhil',
    synonyms: [
      'masters of philosophy'
    ],
    level: '7',
    dqt_id: '436a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '204'
  },
  {
    priority: 1,
    name: 'Master of Science',
    abbreviation: 'MSc',
    synonyms: [
      'masters of science'
    ],
    level: '7',
    dqt_id: '456a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '205'
  },
  {
    name: 'Master of Theology',
    abbreviation: 'MTheol',
    synonyms: [
      'masters of theology'
    ],
    level: '7',
    dqt_id: '476a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '206'
  },
  {
    name: 'Certificate of Membership of Cranfield Institute of Technology',
    abbreviation: null,
    synonyms: [],
    level: '6',
    dqt_id: '496a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '207'
  },
  {
    priority: 1,
    name: 'Master of Education',
    abbreviation: 'MEd',
    synonyms: [
      'masters of education'
    ],
    level: '7',
    dqt_id: '4b6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '208'
  },
  {
    name: 'Master of Business Studies',
    abbreviation: 'MBS',
    synonyms: [
      'masters of business studies'
    ],
    level: '7',
    dqt_id: '4d6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '209'
  },
  {
    name: 'Master of Social Studies',
    abbreviation: 'MSS',
    synonyms: [
      'masters of social studies'
    ],
    level: '7',
    dqt_id: '4f6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '210'
  },
  {
    priority: 1,
    name: 'Master of Engineering',
    abbreviation: 'MEng',
    synonyms: [
      'masters of engineering'
    ],
    level: '7',
    dqt_id: '516a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '211'
  },
  {
    name: 'Master of Law',
    abbreviation: 'MLaw',
    synonyms: [
      'masters of law'
    ],
    level: '7',
    dqt_id: '536a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '212'
  },
  {
    name: 'Master of Business Administration',
    abbreviation: 'MBA',
    synonyms: [
      'masters of business administration'
    ],
    level: '7',
    dqt_id: '556a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '213'
  },
  {
    name: 'Master of Chemistry',
    abbreviation: 'MChem',
    synonyms: [
      'masters of chemistry'
    ],
    level: '7',
    dqt_id: '576a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '214'
  },
  {
    name: 'Master of Physics',
    abbreviation: 'MPhys',
    synonyms: [
      'masters of physics'
    ],
    level: '7',
    dqt_id: '596a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '215'
  },
  {
    name: 'Doctor of Divinity',
    abbreviation: 'DD',
    synonyms: [],
    level: '8',
    dqt_id: '5b6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '300'
  },
  {
    name: 'Doctor of Civil Law',
    abbreviation: 'DCL',
    synonyms: [],
    level: '8',
    dqt_id: '5d6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '301'
  },
  {
    name: 'Doctor of Medicine',
    abbreviation: 'MD',
    synonyms: [],
    level: '8',
    dqt_id: '5f6a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '302'
  },
  {
    name: 'Doctor of Music',
    abbreviation: 'DMu',
    synonyms: [],
    level: '8',
    dqt_id: '616a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '303'
  },
  {
    name: 'Doctor of Science',
    abbreviation: 'DSc',
    synonyms: [],
    level: '8',
    dqt_id: '636a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '304'
  },
  {
    name: 'Doctor of Philosophy',
    abbreviation: 'DPhil',
    synonyms: [],
    level: '8',
    dqt_id: '656a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '305'
  },
  {
    priority: 1,
    name: 'Doctor of Philosophy',
    abbreviation: 'PhD',
    synonyms: [],
    level: '8',
    dqt_id: '676a5652-c197-e711-80d8-005056ac45bb',
    hesa_itt_code: '306'
  },
  {
    priority: 1,
    name: 'Doctor of Education',
    abbreviation: 'EdD',
    synonyms: [],
    level: '8',
    dqt_id: null,
    hesa_itt_code: null
  }
]
