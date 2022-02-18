// UK Higher Education Institutions
//
// This file lists all Higher Education Institutions (HEIs) in the UK,
// including previous ones that have closed (or merged).
//
// Not all of these have "University" in the name or are called Universities
// - as that is a reserved term which HEIs have to apply to be able to use
// (at least in England).
//
// Not all of these have the ability to award 'degrees'. For instance, some
// are for-profit institutions (sometimes known as 'Alternative') which may
// only be able to award other types of qualification which aren't degrees.
//
// The 'name' field contains the current student-facing name for the institution
// which may not necessarily be exactly the same as it official name as registered
// with various official bodies.
//
// Where possible, previous names, common abbreviations, and other alternative names
// are listed in the synonyms fields. There are two types:
//
// * `suggestion_synonyms` - these can be used to aid lookup, but are not always unique
// * `match_synonyms` – these are unique and can be safely used to automatically match free
//   text input to the institution
//
// Autocompletes, searches or other lookup tools can combine both lists.
//
// The hesa_itt_code is used for reporting ITT data to the Higher Education Statistics
// Agency (HESA) in the DEGEST field - see reference here:
// https://www.hesa.ac.uk/collection/c21053/e/degest
//
// The dttp_id refers to the ID for the type in the Database of Trainee Teachers, where known.
// These are not necessarily unique, as two institutions may map to the same ID.
//
// Closed refers to where the institution has since closed and is new graduates will no longer get
// degrees from it.
//
// Where has_never_awarded_degrees is set to `true`, the organisation has never had degree awarding powers, and
// was previously included in the list by mistake. These can be filtered out when used in interfaces for collecting
// degree information, but are included below to support any legacy data.
//
module.exports = [
  {
    name: 'The Open University',
    suggestion_synonyms: [
      'OU',
      'Open University'
    ],
    match_synonyms: [],
    hesa_itt_code: '1',
    dttp_id: '5c9e1d2d-3fa2-e811-812b-5065f38ba241',
    ukprn: '10007773'
  },
  {
    name: 'Cranfield University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '2',
    dttp_id: '4e9e1d2d-3fa2-e811-812b-5065f38ba241',
    ukprn: '10007822'
  },
  {
    name: 'Royal College of Art',
    suggestion_synonyms: [
      'RCA'
    ],
    match_synonyms: [],
    hesa_itt_code: '3',
    dttp_id: '64407223-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007777'
  },
  {
    name: 'Bishop Grosseteste University',
    suggestion_synonyms: [
      'BGU'
    ],
    match_synonyms: [],
    hesa_itt_code: '7',
    dttp_id: 'ca70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007811'
  },
  {
    name: 'Buckinghamshire New University',
    suggestion_synonyms: [
      'Bucks',
      'BNU'
    ],
    match_synonyms: [
      'Buckinghamshire Chilterns University College'
    ],
    hesa_itt_code: '9',
    dttp_id: 'bec53e05-7042-e811-80ff-3863bb3640b8',
    comment: 'Name changed in 2007',
    ukprn: '10000975'
  },
  {
    name: 'Royal Central School of Speech and Drama',
    suggestion_synonyms: [
      'CSSD',
      'University of London'
    ],
    match_synonyms: [
      'The Royal Central School of Speech and Drama'
    ],
    hesa_itt_code: '10',
    dttp_id: 'd90a4e73-a141-e811-80ff-3863bb351d40',
    ukprn: '10007816'
  },
  {
    name: 'University of Chester',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '11',
    dttp_id: '0871f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007848'
  },
  {
    name: 'Canterbury Christ Church University',
    suggestion_synonyms: [
      'CCCU'
    ],
    match_synonyms: [],
    hesa_itt_code: '12',
    dttp_id: 'ce70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10001143'
  },
  {
    name: 'York St John University',
    suggestion_synonyms: [
      'YSJU'
    ],
    match_synonyms: [],
    hesa_itt_code: '13',
    dttp_id: '4c71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007713'
  },
  {
    name: 'Plymouth Marjon University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of St Mark and St John',
      'University of Saint Mark and Saint John',
      'University of St Mark and St John'
    ],
    hesa_itt_code: '14',
    dttp_id: '3a71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10037449'
  },
  {
    name: 'Edge Hill University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Edge Hill College'
    ],
    hesa_itt_code: '16',
    dttp_id: 'd070f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007823'
  },
  {
    name: 'Falmouth University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '17',
    dttp_id: '6f955cae-3ea2-e811-812b-5065f38ba241',
    ukprn: '10008640'
  },
  {
    name: 'Harper Adams University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Harper Adams'
    ],
    hesa_itt_code: '18',
    dttp_id: '1b369414-75d9-e911-a863-000d3ab0da57',
    ukprn: '10040812'
  },
  {
    name: 'Kent Institute of Art and Design',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '20',
    dttp_id: '2f6e5e11-7042-e811-80ff-3863bb3640b8',
    closed: '2008',
    comment: 'Closed in 2008 to become the University for the creative arts',
    ukprn: '10003574'
  },
  {
    name: 'University of Winchester',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Winchester'
    ],
    hesa_itt_code: '21',
    dttp_id: '4471f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10003614'
  },
  {
    name: 'Liverpool Hope University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '23',
    dttp_id: 'dc70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10003956'
  },
  {
    name: 'University of the Arts London',
    suggestion_synonyms: [
      'UAL',
      'Wimbledon College of Art',
      'Wimbledon College of Arts'
    ],
    match_synonyms: [
      'University of the Arts, London'
    ],
    hesa_itt_code: '24',
    dttp_id: 'ca781c39-3fa2-e811-812b-5065f38ba241',
    ukprn: '10007162'
  },
  {
    name: 'University of Bedfordshire',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '26',
    dttp_id: 'fc70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007152'
  },
  {
    name: 'University of Northampton',
    suggestion_synonyms: [
      'UON'
    ],
    match_synonyms: [
      'The University of Northampton'
    ],
    hesa_itt_code: '27',
    dttp_id: '2871f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007138'
  },
  {
    name: 'Newman University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Newman University, Birmingham',
      'Newman University College'
    ],
    hesa_itt_code: '28',
    dttp_id: 'ec70f34a-2887-e711-80d8-005056ac45bb',
    comment: 'Name changed in 2013',
    ukprn: '10007832'
  },
  {
    name: 'Ravensbourne University London',
    suggestion_synonyms: [],
    match_synonyms: [
      'Ravensbourne College of Design and Communication'
    ],
    hesa_itt_code: '30',
    dttp_id: '4ff3791d-7042-e811-80ff-3863bb3640b8',
    ukprn: '10005389'
  },
  {
    name: 'University of Roehampton',
    suggestion_synonyms: [],
    match_synonyms: [
      'Roehampton University'
    ],
    hesa_itt_code: '31',
    dttp_id: 'f270f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007776'
  },
  {
    name: 'Rose Bruford College',
    suggestion_synonyms: [],
    match_synonyms: [
      'Rose Bruford College of Theatre & Performance',
      'Rose Bruford College of Theatre and Performance'
    ],
    hesa_itt_code: '32',
    dttp_id: '5af3791d-7042-e811-80ff-3863bb3640b8',
    ukprn: '10005523'
  },
  {
    name: 'Royal Academy of Music',
    suggestion_synonyms: [
      'RAM',
      'University of London'
    ],
    match_synonyms: [
      'The Royal Academy of Music'
    ],
    hesa_itt_code: '33',
    dttp_id: '61f3791d-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007835'
  },
  {
    name: 'Royal College of Music',
    suggestion_synonyms: [
      'RCM'
    ],
    match_synonyms: [],
    hesa_itt_code: '34',
    dttp_id: '49e01caa-a141-e811-80ff-3863bb351d40',
    ukprn: '10007778'
  },
  {
    name: 'Royal Northern College of Music',
    suggestion_synonyms: [
      'RNCM'
    ],
    match_synonyms: [],
    hesa_itt_code: '35',
    dttp_id: 'cf3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007837'
  },
  {
    name: 'Salford College of Technology',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '36',
    dttp_id: '81407223-7042-e811-80ff-3863bb3640b8',
    closed: '1996',
    comment: 'Merged with University of Salford in 1996',
    ukprn: '10005649'
  },
  {
    name: 'Solent University, Southampton',
    suggestion_synonyms: [],
    match_synonyms: [
      'Solent University',
      'Southampton Solent University'
    ],
    hesa_itt_code: '37',
    dttp_id: 'c10b1d33-3fa2-e811-812b-5065f38ba241',
    comment: 'Name changed to Solent University in 2018',
    ukprn: '10006022'
  },
  {
    name: 'University of Cumbria',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Cumbria'
    ],
    hesa_itt_code: '38',
    dttp_id: '0c71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007842'
  },
  {
    name: 'St Mary’s University, Twickenham',
    suggestion_synonyms: [],
    match_synonyms: [
      'Saint Mary’s University, Twickenham'
    ],
    hesa_itt_code: '39',
    dttp_id: 'f670f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007843'
  },
  {
    name: 'Leeds Trinity University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Leeds Trinity & All Saints',
      'Leeds Trinity and All Saints'
    ],
    hesa_itt_code: '40',
    dttp_id: 'da70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10003863'
  },
  {
    name: 'Trinity Laban Conservatoire of Music and Dance',
    suggestion_synonyms: [],
    match_synonyms: [
      'Trinity Laban Conservatoire of Music & Dance'
    ],
    hesa_itt_code: '41',
    dttp_id: '054b9247-7042-e811-80ff-3863bb3640b8',
    ukprn: '10008017'
  },
  {
    name: 'The Surrey Institute of Art and Design, University College',
    suggestion_synonyms: [
      'Surrey Institute of Art and Design'
    ],
    match_synonyms: [],
    hesa_itt_code: '44',
    dttp_id: 'c4db7129-7042-e811-80ff-3863bb3640b8',
    closed: '2005',
    comment: 'It merged with the Kent Institute of Art & Design on August 1, 2005 to form the University College for the Creative Arts (now University for the Creative Arts)',
    ukprn: null
  },
  {
    name: 'University of Worcester',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '46',
    dttp_id: '4871f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007139'
  },
  {
    name: 'Anglia Ruskin University',
    suggestion_synonyms: [
      'ARU'
    ],
    match_synonyms: [],
    hesa_itt_code: '47',
    dttp_id: '387af34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10000291'
  },
  {
    name: 'Bath Spa University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '48',
    dttp_id: 'c670f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10000571'
  },
  {
    name: 'University of Bolton',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Bolton'
    ],
    hesa_itt_code: '49',
    dttp_id: 'dfdb7129-7042-e811-80ff-3863bb3640b8',
    ukprn: '10006841'
  },
  {
    name: 'Bournemouth University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '50',
    dttp_id: 'b1c53e05-7042-e811-80ff-3863bb3640b8',
    ukprn: '10000824'
  },
  {
    name: 'University of Brighton',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Brighton'
    ],
    hesa_itt_code: '51',
    dttp_id: '0071f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10000886'
  },
  {
    name: 'Birmingham City University',
    suggestion_synonyms: [
      'BCU',
      'Birmingham College of Art',
      'Birmingham Polytechnic'
    ],
    match_synonyms: [
      'University of Central England in Birmingham',
      'UCE Birmingham'
    ],
    hesa_itt_code: '52',
    dttp_id: 'c870f34a-2887-e711-80d8-005056ac45bb',
    comment: "Renamed from 'University of Central England in Birmingham' in 2007.",
    ukprn: '10007140'
  },
  {
    name: 'University of Central Lancashire',
    suggestion_synonyms: [
      'UCLan'
    ],
    match_synonyms: [
      'The University of Central Lancashire'
    ],
    hesa_itt_code: '53',
    dttp_id: '59e01caa-a141-e811-80ff-3863bb351d40',
    ukprn: '10007141'
  },
  {
    name: 'University of Gloucestershire',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '54',
    dttp_id: '1871f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007145'
  },
  {
    name: 'London Guildhall University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '55',
    dttp_id: '711c7817-7042-e811-80ff-3863bb3640b8',
    closed: '2012',
    comment: 'On 1 August 2002, it merged with the University of North London to form London Metropolitan University.',
    ukprn: null
  },
  {
    name: 'Coventry University',
    suggestion_synonyms: [
      'University of Coventry'
    ],
    match_synonyms: [],
    hesa_itt_code: '56',
    dttp_id: '1ff35f0b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10001726'
  },
  {
    name: 'University of Derby',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '57',
    dttp_id: '0e71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007851'
  },
  {
    name: 'University of East London',
    suggestion_synonyms: [
      'UEL'
    ],
    match_synonyms: [
      'The University of East London'
    ],
    hesa_itt_code: '58',
    dttp_id: '1471f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007144'
  },
  {
    name: 'University of Greenwich',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Greenwich'
    ],
    hesa_itt_code: '59',
    dttp_id: '1a71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007146'
  },
  {
    name: 'University of Hertfordshire',
    suggestion_synonyms: [
      'UH',
      'UOH',
      'Herts'
    ],
    match_synonyms: [],
    hesa_itt_code: '60',
    dttp_id: '1c71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007147'
  },
  {
    name: 'University of Huddersfield',
    suggestion_synonyms: [
      'Northern College for Residential and Community Adult Education'
    ],
    match_synonyms: [
      'The University of Huddersfield',
      'Huddersfield University'
    ],
    hesa_itt_code: '61',
    dttp_id: '1e71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007148'
  },
  {
    name: 'University of Lincoln',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Lincoln'
    ],
    hesa_itt_code: '62',
    dttp_id: '035b7f3b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007151'
  },
  {
    name: 'Kingston University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Kingston University London'
    ],
    hesa_itt_code: '63',
    dttp_id: 'd670f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10003678'
  },
  {
    name: 'Leeds Beckett University',
    suggestion_synonyms: [
      'LBU',
      'LMU'
    ],
    match_synonyms: [
      'Leeds Beckett',
      'Leeds Metropolitan University'
    ],
    hesa_itt_code: '64',
    dttp_id: 'd870f34a-2887-e711-80d8-005056ac45bb',
    comment: 'Name changed from Leeds Metropolitan in 2013',
    ukprn: '10003861'
  },
  {
    name: 'Liverpool John Moores University',
    suggestion_synonyms: [
      'LJMU'
    ],
    match_synonyms: [],
    hesa_itt_code: '65',
    dttp_id: 'de70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10003957'
  },
  {
    name: 'Manchester Metropolitan University',
    suggestion_synonyms: [
      'MMU'
    ],
    match_synonyms: [
      'The Manchester Metropolitan University'
    ],
    hesa_itt_code: '66',
    dttp_id: 'e670f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004180'
  },
  {
    name: 'Middlesex University London',
    suggestion_synonyms: [
      'MDX'
    ],
    match_synonyms: [
      'Middlesex University'
    ],
    hesa_itt_code: '67',
    dttp_id: 'e870f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004351'
  },
  {
    name: 'De Montfort University',
    suggestion_synonyms: [
      'DMU'
    ],
    match_synonyms: [],
    hesa_itt_code: '68',
    dttp_id: 'f30a4e73-a141-e811-80ff-3863bb351d40',
    ukprn: '10001883'
  },
  {
    name: 'Northumbria University Newcastle',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Northumbria at Newcastle'
    ],
    hesa_itt_code: '69',
    dttp_id: '2a71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10001282'
  },
  {
    name: 'The University of North London',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '70',
    dttp_id: '235b7f3b-7042-e811-80ff-3863bb3640b8',
    closed: '2002',
    comment: 'UNL existed until 2002, when it merged with London Guildhall University to form London Metropolitan University',
    ukprn: null
  },
  {
    name: 'Nottingham Trent University',
    suggestion_synonyms: [
      'NTU'
    ],
    match_synonyms: [
      'The Nottingham Trent University'
    ],
    hesa_itt_code: '71',
    dttp_id: 'ee70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004797'
  },
  {
    name: 'Oxford Brookes University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '72',
    dttp_id: 'f070f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004930'
  },
  {
    name: 'University of Plymouth',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '73',
    dttp_id: '3071f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007801'
  },
  {
    name: 'University of Portsmouth',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Portsmouth'
    ],
    hesa_itt_code: '74',
    dttp_id: '3271f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007155'
  },
  {
    name: 'Sheffield Hallam University',
    suggestion_synonyms: [
      'SHU'
    ],
    match_synonyms: [
      'Sheffield Hallam'
    ],
    hesa_itt_code: '75',
    dttp_id: 'f470f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10005790'
  },
  {
    name: 'London South Bank University',
    suggestion_synonyms: [
      'LSBU'
    ],
    match_synonyms: [],
    hesa_itt_code: '76',
    dttp_id: 'e270f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004078'
  },
  {
    name: 'Staffordshire University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '77',
    dttp_id: 'f870f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10006299'
  },
  {
    name: 'University of Sunderland',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Sunderland'
    ],
    hesa_itt_code: '78',
    dttp_id: '3c71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007159'
  },
  {
    name: 'Teesside University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '79',
    dttp_id: '2a96fc9d-a141-e811-80ff-3863bb351d40',
    ukprn: '10007161'
  },
  {
    name: 'University of West London',
    suggestion_synonyms: [
      'UWL'
    ],
    match_synonyms: [
      'The University of West London'
    ],
    hesa_itt_code: '80',
    dttp_id: '84228041-7042-e811-80ff-3863bb3640b8',
    ukprn: '10006566'
  },
  {
    name: 'University of the West of England, Bristol',
    suggestion_synonyms: [
      'UWE'
    ],
    match_synonyms: [
      'UWE Bristol'
    ],
    hesa_itt_code: '81',
    dttp_id: '4071f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007164'
  },
  {
    name: 'University of Chichester',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Chichester',
      'University College Chichester'
    ],
    hesa_itt_code: '82',
    dttp_id: '0a71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007137'
  },
  {
    name: 'University of Westminster',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Westminster'
    ],
    hesa_itt_code: '83',
    dttp_id: '7eda4db6-a141-e811-80ff-3863bb351d40',
    ukprn: '10007165'
  },
  {
    name: 'University of Wolverhampton',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Wolverhampton'
    ],
    hesa_itt_code: '85',
    dttp_id: '4671f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007166'
  },
  {
    name: 'The University of Wales, Newport',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '86',
    dttp_id: '73228041-7042-e811-80ff-3863bb3640b8',
    closed: '2013',
    comment: 'Merged with University of Glamorgan to form University of South Wales',
    ukprn: '10007853'
  },
  {
    name: 'Wrexham Glyndŵr University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Glyndŵr University',
      'Glyndwr University',
      'Prifysgol Glyndŵr',
      'Prifysgol Glyndwr',
      'Prifysgol Glyndŵr Wrecsam',
      'Prifysgol Glyndwr Wrecsam'
    ],
    hesa_itt_code: '87',
    dttp_id: '57f35f0b-7042-e811-80ff-3863bb3640b8',
    comment: 'Name changed from Glyndŵr University in 2016',
    ukprn: '10007833'
  },
  {
    name: 'Cardiff Metropolitan University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Prifysgol Metropolitan Caerdydd',
      'University of Wales Institute, Cardiff'
    ],
    hesa_itt_code: '89',
    dttp_id: '07f35f0b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007854'
  },
  {
    name: 'University of South Wales',
    suggestion_synonyms: [
      'University of Glamorgan',
      'University of Wales, Newport',
      'Royal Welsh College of Music and Drama'
    ],
    match_synonyms: [
      'Prifysgol De Cymru'
    ],
    hesa_itt_code: '90',
    dttp_id: '8723a753-7042-e811-80ff-3863bb3640b8',
    comment: 'Formed in 2013 from merger of Universities of Glamorgan and University of Wales, Newport',
    ukprn: '10007793'
  },
  {
    name: 'Swansea Metropolitan University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '91',
    dttp_id: null,
    closed: '2013',
    comment: 'The university merged with, and became a constituent campus of, the University of Wales Trinity Saint David on 1 August 2013.',
    ukprn: '10007846'
  },
  {
    name: 'Trinity University College',
    suggestion_synonyms: [],
    match_synonyms: [
      'The Trinity College Carmarthen Foundation'
    ],
    hesa_itt_code: '92',
    dttp_id: '0e4b9247-7042-e811-80ff-3863bb3640b8',
    closed: '2010',
    ukprn: '10007048'
  },
  {
    name: 'Abertay University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Abertay Dundee'
    ],
    hesa_itt_code: '95',
    dttp_id: null,
    comment: 'Renamed from University of Abertay Dundee in September 2019',
    ukprn: '10007849'
  },
  {
    name: 'Glasgow School of Art',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '97',
    dttp_id: '51f35f0b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10002681'
  },
  {
    name: 'Queen Margaret University, Edinburgh',
    suggestion_synonyms: [
      'QMU'
    ],
    match_synonyms: [
      'Queen Margaret University',
      'Queen Margaret University College'
    ],
    hesa_itt_code: '100',
    dttp_id: '40f3791d-7042-e811-80ff-3863bb3640b8',
    ukprn: '10005337'
  },
  {
    name: 'Royal Conservatoire of Scotland',
    suggestion_synonyms: [
      'RCS'
    ],
    match_synonyms: [
      'Royal Scottish Academy of Music and Drama'
    ],
    hesa_itt_code: '101',
    dttp_id: null,
    ukprn: '10005561'
  },
  {
    name: 'Robert Gordon University',
    suggestion_synonyms: [
      'RGU'
    ],
    match_synonyms: [
      'The Robert Gordon University',
      'Robert Gordon University, Aberdeen'
    ],
    hesa_itt_code: '104',
    dttp_id: 'c93e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10005500'
  },
  {
    name: 'University of the West of Scotland',
    suggestion_synonyms: [
      'UWS'
    ],
    match_synonyms: [
      'University of Paisley',
      'The University of the West of Scotland'
    ],
    hesa_itt_code: '105',
    dttp_id: '1a3f182c-1425-ec11-b6e6-000d3adf095a',
    comment: 'Name changed in 2007',
    ukprn: '10007800'
  },
  {
    name: 'Glasgow Caledonian University',
    suggestion_synonyms: [
      'GCU',
      'Caley'
    ],
    match_synonyms: [],
    hesa_itt_code: '106',
    dttp_id: '473e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007762'
  },
  {
    name: 'Edinburgh Napier University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Napier University'
    ],
    hesa_itt_code: '107',
    dttp_id: '43f35f0b-7042-e811-80ff-3863bb3640b8',
    comment: 'Name changed in 2009',
    ukprn: '10007772'
  },
  {
    name: 'Aston University',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '108',
    dttp_id: '513e2cff-6f42-e811-80ff-3863bb3640b8',
    ukprn: '10007759'
  },
  {
    name: 'University of Bath',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Bath'
    ],
    hesa_itt_code: '109',
    dttp_id: '3e7af34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007850'
  },
  {
    name: 'University of Birmingham',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Birmingham'
    ],
    hesa_itt_code: '110',
    dttp_id: 'fe70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10006840'
  },
  {
    name: 'University of Bradford',
    suggestion_synonyms: [
      'Leeds Conservatoire'
    ],
    match_synonyms: [
      'The University of Bradford'
    ],
    hesa_itt_code: '111',
    dttp_id: '7fed6e2f-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007785'
  },
  {
    name: 'University of Bristol',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Bristol'
    ],
    hesa_itt_code: '112',
    dttp_id: '0271f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007786'
  },
  {
    name: 'Brunel University London',
    suggestion_synonyms: [
      'West London Institute of HE'
    ],
    match_synonyms: [
      'Brunel University'
    ],
    hesa_itt_code: '113',
    dttp_id: 'cc70f34a-2887-e711-80d8-005056ac45bb',
    comment: 'Name changed in 2014',
    ukprn: '10000961'
  },
  {
    name: 'University of Cambridge',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Cambridge',
      'The Chancellor, Masters, and Scholars of the University of Cambridge'
    ],
    hesa_itt_code: '114',
    dttp_id: '0671f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007788'
  },
  {
    name: 'City, University of London',
    suggestion_synonyms: [
      'CUL',
      'The City University'
    ],
    match_synonyms: [],
    hesa_itt_code: '115',
    dttp_id: '293e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10001478'
  },
  {
    name: 'Durham University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Durham'
    ],
    hesa_itt_code: '116',
    dttp_id: '1071f34a-2887-e711-80d8-005056ac45bb',
    comment: 'Changed trading name to Durham University in 2005',
    ukprn: '10007143'
  },
  {
    name: 'University of East Anglia',
    suggestion_synonyms: [
      'UEA'
    ],
    match_synonyms: [
      'The University of East Anglia'
    ],
    hesa_itt_code: '117',
    dttp_id: '1271f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007789'
  },
  {
    name: 'University of Essex',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Essex'
    ],
    hesa_itt_code: '118',
    dttp_id: '5aeb7735-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007791'
  },
  {
    name: 'University of Exeter',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Exeter'
    ],
    hesa_itt_code: '119',
    dttp_id: '1671f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007792'
  },
  {
    name: 'University of Hull',
    suggestion_synonyms: [
      'Leeds Conservatoire',
      'Grimsby Institute'
    ],
    match_synonyms: [
      'The University of Hull'
    ],
    hesa_itt_code: '120',
    dttp_id: '2071f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007149'
  },
  {
    name: 'Keele University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Keele',
      'The University of Keele'
    ],
    hesa_itt_code: '121',
    dttp_id: '3a7af34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007767'
  },
  {
    name: 'University of Kent',
    suggestion_synonyms: [
      'Northern School of Contemporary Dance',
      'NSCD'
    ],
    match_synonyms: [
      'The University of Kent'
    ],
    hesa_itt_code: '122',
    dttp_id: '99eb7735-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007150'
  },
  {
    name: 'Lancaster University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Lancaster',
      'The University of Lancaster'
    ],
    hesa_itt_code: '123',
    dttp_id: 'a4eb7735-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007768'
  },
  {
    name: 'University of Leeds',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Leeds'
    ],
    hesa_itt_code: '124',
    dttp_id: '2271f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007795'
  },
  {
    name: 'University of Leicester',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Leicester'
    ],
    hesa_itt_code: '125',
    dttp_id: '2471f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007796'
  },
  {
    name: 'University of Liverpool',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Liverpool'
    ],
    hesa_itt_code: '126',
    dttp_id: 'f58f17b0-a141-e811-80ff-3863bb351d40',
    ukprn: '10006842'
  },
  {
    name: 'Birkbeck, University of London',
    suggestion_synonyms: [
      'BBK',
      'University of London'
    ],
    match_synonyms: [
      'Birkbeck College',
      'Birkbeck College, University of London'
    ],
    hesa_itt_code: '127',
    dttp_id: '9fc53e05-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007760'
  },
  {
    name: 'Goldsmiths, University of London',
    suggestion_synonyms: [
      'GUL'
    ],
    match_synonyms: [
      'Goldsmiths College'
    ],
    hesa_itt_code: '131',
    dttp_id: 'd270f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10002718'
  },
  {
    name: 'Imperial College London',
    suggestion_synonyms: [],
    match_synonyms: [
      'Imperial College of Science, Technology and Medicine',
      'Imperial College'
    ],
    hesa_itt_code: '132',
    dttp_id: '0b9017b0-a141-e811-80ff-3863bb351d40',
    ukprn: '10003270'
  },
  {
    name: 'King’s College London',
    suggestion_synonyms: [
      'KCL',
      'University of London'
    ],
    match_synonyms: [
      "King's College London"
    ],
    hesa_itt_code: '134',
    dttp_id: 'd470f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10003645'
  },
  {
    name: 'London Business School',
    suggestion_synonyms: [
      'LBS',
      'University of London'
    ],
    match_synonyms: [],
    hesa_itt_code: '135',
    dttp_id: '6a1c7817-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007769'
  },
  {
    name: 'London School of Economics and Political Science',
    suggestion_synonyms: [
      'LSE',
      'University of London'
    ],
    match_synonyms: [
      'London School of Economics',
      'The London School of Economics and Political Science'
    ],
    hesa_itt_code: '137',
    dttp_id: '7d1c7817-7042-e811-80ff-3863bb3640b8',
    ukprn: '10004063'
  },
  {
    name: 'London School of Hygiene and Tropical Medicine',
    suggestion_synonyms: [
      'LSHTM',
      'University of London'
    ],
    match_synonyms: [
      'London School of Hygiene & Tropical Medicine'
    ],
    hesa_itt_code: '138',
    dttp_id: '853e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007771'
  },
  {
    name: 'Queen Mary University of London',
    suggestion_synonyms: [
      'QMUL',
      'QM',
      "St Bartholomew's Hospital Medical College",
      'St Barts'
    ],
    match_synonyms: [
      'Queen Mary, University of London'
    ],
    hesa_itt_code: '139',
    dttp_id: 'b93e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007775'
  },
  {
    name: 'Royal Holloway, University of London',
    suggestion_synonyms: [
      'RH',
      'RHUL'
    ],
    match_synonyms: [
      'Royal Holloway',
      'Royal Holloway and Bedford New College'
    ],
    hesa_itt_code: '141',
    dttp_id: '6c407223-7042-e811-80ff-3863bb3640b8',
    ukprn: '10005553'
  },
  {
    name: 'Royal Veterinary College',
    suggestion_synonyms: [
      'RVC',
      'University of London'
    ],
    match_synonyms: [
      'The Royal Veterinary College'
    ],
    hesa_itt_code: '143',
    dttp_id: 'b6db7129-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007779'
  },
  {
    name: 'St George’s, University of London',
    suggestion_synonyms: [
      'SGUL'
    ],
    match_synonyms: [
      'St George’s Hospital Medical School'
    ],
    hesa_itt_code: '145',
    dttp_id: '94407223-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007782'
  },
  {
    name: 'SOAS, University of London',
    suggestion_synonyms: [],
    match_synonyms: [
      'The School of Oriental and African Studies',
      'School of Oriental and African Studies'
    ],
    hesa_itt_code: '146',
    dttp_id: 'bddb7129-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007780'
  },
  {
    name: 'University College London',
    suggestion_synonyms: [
      'UCL',
      'University of London',
      'Institute of Education',
      'School of Pharmacy'
    ],
    match_synonyms: [],
    hesa_itt_code: '149',
    dttp_id: 'a27af34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007784'
  },
  {
    name: 'University of London',
    suggestion_synonyms: [
      'Institute of Education'
    ],
    match_synonyms: [
      'University of London (Institutes and activities)'
    ],
    hesa_itt_code: '151',
    dttp_id: '0d791c39-3fa2-e811-812b-5065f38ba241',
    comment: "Constituent colleges gained the ability to award their own degrees in around 2018, but some institutions that are part of the 'School of Advanced Study', or 'The University of London Institute in Paris' still award postgraduate degrees from the University of London.",
    ukprn: '10007797'
  },
  {
    name: 'Loughborough University',
    suggestion_synonyms: [
      'Loughborough College of Art and Design'
    ],
    match_synonyms: [],
    hesa_itt_code: '152',
    dttp_id: 'e470f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004113'
  },
  {
    name: 'Victoria Manchester University',
    suggestion_synonyms: [
      'University of Manchester Institute of Science and Technology'
    ],
    match_synonyms: [],
    hesa_itt_code: '153',
    dttp_id: null,
    closed: '2004',
    ukprn: null,
    comment: 'Merged with UMIST (whose degrees it awarded) in 2004 to form University of Manchester'
  },
  {
    name: 'Newcastle University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Newcastle-upon-Tyne'
    ],
    hesa_itt_code: '154',
    dttp_id: 'ea70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007799'
  },
  {
    name: 'University of Nottingham',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Nottingham'
    ],
    hesa_itt_code: '155',
    dttp_id: '2c71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007154'
  },
  {
    name: 'University of Oxford',
    suggestion_synonyms: [
      'Westminster College'
    ],
    match_synonyms: [
      'The University of Oxford',
      'The Chancellor, Masters and Scholars of the University of Oxford'
    ],
    hesa_itt_code: '156',
    dttp_id: '2e71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007774'
  },
  {
    name: 'University of Reading',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Reading'
    ],
    hesa_itt_code: '157',
    dttp_id: '3471f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007802'
  },
  {
    name: 'University of Salford',
    suggestion_synonyms: [
      'University College Salford'
    ],
    match_synonyms: [
      'The University of Salford'
    ],
    hesa_itt_code: '158',
    dttp_id: '425b7f3b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007156'
  },
  {
    name: 'The University of Sheffield',
    suggestion_synonyms: [
      'TUOS',
      'Sheffield University'
    ],
    match_synonyms: [
      'University of Sheffield'
    ],
    hesa_itt_code: '159',
    dttp_id: '3671f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007157'
  },
  {
    name: 'University of Southampton',
    suggestion_synonyms: [
      'SOTON',
      'La Sainte Union College of HE',
      'Winchester School of Art'
    ],
    match_synonyms: [
      'The University of Southampton'
    ],
    hesa_itt_code: '160',
    dttp_id: '4f5b7f3b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007158'
  },
  {
    name: 'University of Surrey',
    suggestion_synonyms: [
      'Wimbledon School of Art'
    ],
    match_synonyms: [
      'The University of Surrey'
    ],
    hesa_itt_code: '161',
    dttp_id: '58228041-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007160'
  },
  {
    name: 'University of Sussex',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Sussex'
    ],
    hesa_itt_code: '162',
    dttp_id: '3e71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007806'
  },
  {
    name: 'University of Warwick',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Warwick'
    ],
    hesa_itt_code: '163',
    dttp_id: '4271f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007163'
  },
  {
    name: 'University of York',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of York'
    ],
    hesa_itt_code: '164',
    dttp_id: '4a71f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007167'
  },
  {
    name: 'The University of Manchester Institute of Science and Technology',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '165',
    dttp_id: '1b5b7f3b-7042-e811-80ff-3863bb3640b8',
    ukprn: null
  },
  {
    name: 'The University of Edinburgh',
    suggestion_synonyms: [
      'Edinburgh College of Art',
      'Moray House Institute of Education'
    ],
    match_synonyms: [],
    hesa_itt_code: '167',
    dttp_id: 'd7ed6e2f-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007790'
  },
  {
    name: 'University of Glasgow',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Glasgow'
    ],
    hesa_itt_code: '168',
    dttp_id: '6ceb7735-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007794'
  },
  {
    name: 'University of Strathclyde',
    suggestion_synonyms: [
      'Bell College'
    ],
    match_synonyms: [
      'The University of Strathclyde',
      'University of Strathclyde, Glasgow'
    ],
    hesa_itt_code: '169',
    dttp_id: '42228041-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007805'
  },
  {
    name: 'University of Aberdeen',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Aberdeen'
    ],
    hesa_itt_code: '170',
    dttp_id: 'cbdb7129-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007783'
  },
  {
    name: 'Heriot-Watt University',
    suggestion_synonyms: [
      'The Scottish College of Textiles'
    ],
    match_synonyms: [
      'Heriot Watt University'
    ],
    hesa_itt_code: '171',
    dttp_id: '146e5e11-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007764'
  },
  {
    name: 'University of Dundee',
    suggestion_synonyms: [
      'Duncan of Jordanstone College of Art'
    ],
    match_synonyms: [
      'The University of Dundee'
    ],
    hesa_itt_code: '172',
    dttp_id: 'bbed6e2f-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007852'
  },
  {
    name: 'University of St Andrews',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of St Andrews',
      'The University of Saint Andrews',
      'University of Saint Andrews'
    ],
    hesa_itt_code: '173',
    dttp_id: '34228041-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007803'
  },
  {
    name: 'University of Stirling',
    suggestion_synonyms: [],
    match_synonyms: [
      'The University of Stirling'
    ],
    hesa_itt_code: '174',
    dttp_id: '3b228041-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007804'
  },
  {
    name: 'SRUC (Scotland’s Rural College)',
    suggestion_synonyms: [
      'Scotland’s Rural College'
    ],
    match_synonyms: [],
    hesa_itt_code: '175',
    dttp_id: 'd73e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10005700'
  },
  {
    name: 'University of Wales Trinity Saint David',
    suggestion_synonyms: [
      'UWTSD'
    ],
    match_synonyms: [
      'Prifysgol Cymru Y Drindod Dewi Sant',
      'University of Wales Trinity St David',
      'The University of Wales, Lampeter'
    ],
    hesa_itt_code: '176',
    dttp_id: 'b123a753-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007858'
  },
  {
    name: 'Aberystwyth University',
    suggestion_synonyms: [
      'Aber'
    ],
    match_synonyms: [
      'Prifysgol Aberystwyth'
    ],
    hesa_itt_code: '177',
    dttp_id: '443e2cff-6f42-e811-80ff-3863bb3640b8',
    ukprn: '10007856'
  },
  {
    name: 'Bangor University',
    suggestion_synonyms: [
      'University College of North Wales',
      'UCNW',
      'UWB'
    ],
    match_synonyms: [
      'Prifysgol Bangor',
      'University of Wales, Bangor'
    ],
    hesa_itt_code: '178',
    dttp_id: '92c53e05-7042-e811-80ff-3863bb3640b8',
    comment: 'Renamed to Bangor University in 2007',
    ukprn: '10007857'
  },
  {
    name: 'Cardiff University',
    suggestion_synonyms: [
      'Prifysgol Caerdydd',
      'University College Cardiff'
    ],
    match_synonyms: [
      'University of Wales, Cardiff'
    ],
    hesa_itt_code: '179',
    dttp_id: '0ff35f0b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007814'
  },
  {
    name: 'Swansea University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Prifysgol Abertawe',
      'University of Wales, Swansea'
    ],
    hesa_itt_code: '180',
    dttp_id: 'b3407223-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007855'
  },
  {
    name: 'University of Wales College of Medicine',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '181',
    dttp_id: null,
    closed: '2002',
    comment: 'Re-merged with Cardiff University in 2002',
    ukprn: null
  },
  {
    name: 'Queen’s University Belfast',
    suggestion_synonyms: [
      'QUB'
    ],
    match_synonyms: [
      'The Queen’s University of Belfast'
    ],
    hesa_itt_code: '184',
    dttp_id: 'a7db7129-7042-e811-80ff-3863bb3640b8',
    ukprn: '10005343'
  },
  {
    name: 'Ulster University',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Ulster'
    ],
    hesa_itt_code: '185',
    dttp_id: 'a823a753-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007807'
  },
  {
    name: 'The Institute of Cancer Research',
    suggestion_synonyms: [
      'ICR',
      'University of London'
    ],
    match_synonyms: [
      'Institute of Cancer Research'
    ],
    hesa_itt_code: '188',
    dttp_id: 'f63e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10003324',
    has_never_awarded_degrees: true
  },
  {
    name: 'Writtle University College',
    suggestion_synonyms: [],
    match_synonyms: [
      'Writtle College'
    ],
    hesa_itt_code: '189',
    dttp_id: 'd723a753-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007657'
  },
  {
    name: 'Norwich University of the Arts',
    suggestion_synonyms: [
      'NUA'
    ],
    match_synonyms: [],
    hesa_itt_code: '190',
    dttp_id: 'a01c7817-7042-e811-80ff-3863bb3640b8',
    ukprn: '10004775'
  },
  {
    name: 'Cumbria Institute of the Arts',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '192',
    dttp_id: '2ef35f0b-7042-e811-80ff-3863bb3640b8',
    closed: '2017',
    ukprn: '10001802'
  },
  {
    name: 'Stranmillis University College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '193',
    dttp_id: 'df3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008010'
  },
  {
    name: 'St Mary’s University College, Belfast',
    suggestion_synonyms: [],
    match_synonyms: [
      'St Mary’s University College'
    ],
    hesa_itt_code: '194',
    dttp_id: '9b407223-7042-e811-80ff-3863bb3640b8',
    comment: 'Does not seem to be degree awarding',
    ukprn: '10008026'
  },
  {
    name: 'Royal Agricultural University',
    suggestion_synonyms: [
      'RAU'
    ],
    match_synonyms: [
      'The Royal Agricultural University'
    ],
    hesa_itt_code: '195',
    dttp_id: null,
    ukprn: '10005545'
  },
  {
    name: 'University of the Highlands and Islands',
    suggestion_synonyms: [
      'UHI'
    ],
    match_synonyms: [],
    hesa_itt_code: '196',
    dttp_id: '283f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007114'
  },
  {
    name: 'Arts University Bournemouth',
    suggestion_synonyms: [
      'AUB'
    ],
    match_synonyms: [
      'Arts Institute Bournemouth',
      'Arts University College at Bournemouth',
      'The Arts University Bournemouth'
    ],
    hesa_itt_code: '197',
    dttp_id: 'c6407223-7042-e811-80ff-3863bb3640b8',
    ukprn: '10000385'
  },
  {
    name: 'Conservatoire for Dance and Drama',
    suggestion_synonyms: [
      'Northern School of Contemporary Dance',
      'NSCD'
    ],
    match_synonyms: [],
    hesa_itt_code: '199',
    dttp_id: '2f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10001653',
    has_never_awarded_degrees: true
  },
  {
    name: 'University College Birmingham',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '200',
    dttp_id: 'fa70f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10000712'
  },
  {
    name: 'The Courtauld Institute of Art',
    suggestion_synonyms: [
      'CIA'
    ],
    match_synonyms: [
      'The Courtauld',
      'Courtauld Institute of Art'
    ],
    hesa_itt_code: '201',
    dttp_id: '18f35f0b-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007761',
    has_never_awarded_degrees: true
  },
  {
    name: 'London Metropolitan University',
    suggestion_synonyms: [],
    match_synonyms: [
      'London Met'
    ],
    hesa_itt_code: '202',
    dttp_id: 'e070f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10004048'
  },
  {
    name: 'University of Buckingham',
    suggestion_synonyms: [
      'UB'
    ],
    match_synonyms: [
      'The University of Buckingham'
    ],
    hesa_itt_code: '203',
    dttp_id: '0471f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007787'
  },
  {
    name: 'The University of Manchester',
    suggestion_synonyms: [],
    match_synonyms: [
      'University of Manchester'
    ],
    hesa_itt_code: '204',
    dttp_id: '2671f34a-2887-e711-80d8-005056ac45bb',
    ukprn: '10007798'
  },
  {
    name: 'Heythrop College',
    closed: '2018',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '205',
    dttp_id: '1b6e5e11-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007765'
  },
  {
    name: 'University for the Creative Arts',
    suggestion_synonyms: [
      'UCA'
    ],
    match_synonyms: [
      'University College for the Creative Arts'
    ],
    hesa_itt_code: '206',
    dttp_id: '354b9247-7042-e811-80ff-3863bb3640b8',
    ukprn: '10006427'
  },
  {
    name: 'Guildhall School of Music and Drama',
    suggestion_synonyms: [
      'GSMD'
    ],
    match_synonyms: [
      'Guildhall School of Music & Drama'
    ],
    hesa_itt_code: '208',
    dttp_id: '076e5e11-7042-e811-80ff-3863bb3640b8',
    ukprn: '10007825'
  },
  {
    name: 'The Liverpool Institute for Performing Arts',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '209',
    dttp_id: '84db7129-7042-e811-80ff-3863bb3640b8',
    ukprn: '10003945',
    has_never_awarded_degrees: true
  },
  {
    name: 'University of Suffolk',
    suggestion_synonyms: [
      'UOS'
    ],
    match_synonyms: [
      'University Campus Suffolk'
    ],
    hesa_itt_code: '210',
    dttp_id: '154b9247-7042-e811-80ff-3863bb3640b8',
    comment: 'Renamed from University Campus Suffolk to University of Suffolk in 2016',
    ukprn: '10014001'
  },
  {
    name: 'Leeds Arts University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Leeds College of Art'
    ],
    hesa_itt_code: '211',
    dttp_id: '436e5e11-7042-e811-80ff-3863bb3640b8',
    comment: 'Became a university and changed name in 2017',
    ukprn: '10003854'
  },
  {
    name: 'AECC University College',
    suggestion_synonyms: [],
    match_synonyms: [
      'Anglo-European College of Chiropractic'
    ],
    hesa_itt_code: '213',
    dttp_id: 'fa3d182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000163'
  },
  {
    name: 'BPP University',
    suggestion_synonyms: [],
    match_synonyms: [
      'BPP University College of Professional Studies'
    ],
    hesa_itt_code: '214',
    dttp_id: '123e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10031982'
  },
  {
    name: 'The London Institute of Banking & Finance',
    suggestion_synonyms: [
      'LIBF'
    ],
    match_synonyms: [
      'London Institute of Banking and Finance',
      'London Institute of Banking & Finance'
    ],
    hesa_itt_code: '217',
    dttp_id: 'fe3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008289'
  },
  {
    name: 'The University of Law',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '218',
    dttp_id: '183f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10039956'
  },
  {
    name: 'Richmond, The American International University in London',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '219',
    dttp_id: 'c73e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10005470'
  },
  {
    name: 'Institute of Contemporary Music Performance',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '220',
    dttp_id: '5d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10035638',
    has_never_awarded_degrees: true
  },
  {
    name: 'Moorlands College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '221',
    dttp_id: '993e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023454',
    has_never_awarded_degrees: true
  },
  {
    name: 'Bible College Missio Dei',
    suggestion_synonyms: [
      'Mattersey Hall',
      'Assemblies of God Incorporated',
      'Missio Dei Leadership and Theological College'
    ],
    match_synonyms: [],
    hesa_itt_code: '225',
    dttp_id: '933e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10020416',
    has_never_awarded_degrees: true
  },
  {
    name: 'London School of Science and Technology',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '227',
    dttp_id: '893e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008362',
    comment: 'Not degree awarding'
  },
  {
    name: 'Liverpool School of Tropical Medicine',
    suggestion_synonyms: [
      'LSTM'
    ],
    match_synonyms: [],
    hesa_itt_code: '228',
    dttp_id: '753e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10003958'
  },
  {
    name: 'The National Film and Television School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '229',
    dttp_id: '0b3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004511',
    has_never_awarded_degrees: true
  },
  {
    name: 'Plymouth College of Art',
    suggestion_synonyms: [],
    match_synonyms: [
      'Plymouth College of Art and Design'
    ],
    hesa_itt_code: '230',
    dttp_id: 'b53e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10005127'
  },
  {
    name: 'BIMM Institute',
    suggestion_synonyms: [],
    match_synonyms: [
      'BIMM Limited',
      'British and Irish Modern Music Institute'
    ],
    hesa_itt_code: '232',
    dttp_id: '0e3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10037544'
  },
  {
    name: 'ICON College of Technology and Management',
    suggestion_synonyms: [],
    match_synonyms: [
      'ICON College of Technology & Management',
      'ICON College of Technology and Management Ltd'
    ],
    hesa_itt_code: '236',
    dttp_id: '593e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10003239',
    has_never_awarded_degrees: true
  },
  {
    name: 'Kensington College of Business',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '237',
    dttp_id: '693e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10003566',
    comment: 'Not degree awarding'
  },
  {
    name: 'Bloomsbury Institute',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '238',
    dttp_id: '103e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004061',
    has_never_awarded_degrees: true
  },
  {
    name: 'Mountview Academy of Theatre Arts',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '239',
    dttp_id: '9b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004450',
    has_never_awarded_degrees: true
  },
  {
    name: 'Nazarene Theological College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '240',
    dttp_id: '9f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004538',
    has_never_awarded_degrees: true
  },
  {
    name: 'The London College',
    suggestion_synonyms: [
      'The London College UCK',
      'UCK Limited'
    ],
    match_synonyms: [],
    hesa_itt_code: '243',
    dttp_id: 'fc3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10015506',
    comment: 'Not degree awarding',
    has_never_awarded_degrees: true
  },
  {
    name: 'Arts Educational Schools',
    suggestion_synonyms: [
      'The Arts Educational Schools'
    ],
    match_synonyms: [],
    hesa_itt_code: '244',
    dttp_id: '083e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000381',
    has_never_awarded_degrees: true
  },
  {
    name: 'Mont Rose College of Management and Sciences',
    suggestion_synonyms: [],
    match_synonyms: [
      'Mont Rose College of Management and Sciences Limited'
    ],
    hesa_itt_code: '246',
    dttp_id: '973e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023777',
    has_never_awarded_degrees: true
  },
  {
    name: 'Norland College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '247',
    dttp_id: 'aa3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008397'
  },
  {
    name: 'ForMission',
    suggestion_synonyms: [],
    match_synonyms: [
      'ForMission Ltd',
      'ForMission College'
    ],
    hesa_itt_code: '248',
    dttp_id: '423e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10038763',
    comment: 'Not degree awarding'
  },
  {
    name: 'London Churchill College',
    suggestion_synonyms: [],
    match_synonyms: [
      'London Churchill College Ltd'
    ],
    hesa_itt_code: '250',
    dttp_id: '793e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10030391'
  },
  {
    name: 'Empire College London',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '252',
    dttp_id: '3a3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10022047',
    has_never_awarded_degrees: true
  },
  {
    name: 'Fairfield School of Business',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '254',
    dttp_id: '403e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10033187'
  },
  {
    name: 'London College of Business Studies',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '255',
    dttp_id: '7b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10019368'
  },
  {
    name: 'London School of Management Education',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '256',
    dttp_id: '873e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10022285',
    has_never_awarded_degrees: true
  },
  {
    name: 'London School of Theology',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '257',
    dttp_id: '8b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004075',
    has_never_awarded_degrees: true
  },
  {
    name: 'St Mellitus College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '258',
    dttp_id: 'd93e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10030776',
    has_never_awarded_degrees: true
  },
  {
    name: 'Nelson College London',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '260',
    dttp_id: 'a13e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10030129',
    has_never_awarded_degrees: true
  },
  {
    name: 'Northern College of Acupuncture',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '261',
    dttp_id: 'ad3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004740',
    has_never_awarded_degrees: true
  },
  {
    name: 'Pearson College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '262',
    dttp_id: 'b33e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10042570',
    has_never_awarded_degrees: true
  },
  {
    name: 'Royal Academy of Dance',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '263',
    dttp_id: 'cb3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10005544',
    has_never_awarded_degrees: true
  },
  {
    name: 'SAE Education',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '265',
    dttp_id: 'd33e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007839',
    has_never_awarded_degrees: true
  },
  {
    name: 'Academy of Live and Recorded Arts',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '269',
    dttp_id: 'f63d182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000248',
    has_never_awarded_degrees: true
  },
  {
    name: 'The College of Integrated Chinese Medicine',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '270',
    dttp_id: 'ed3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10001546',
    has_never_awarded_degrees: true
  },
  {
    name: 'The City College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '271',
    dttp_id: 'e93e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10010213',
    has_never_awarded_degrees: true
  },
  {
    name: 'Met Film School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '272',
    dttp_id: '953e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10045476',
    has_never_awarded_degrees: true
  },
  {
    name: 'London Studio Centre',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '274',
    dttp_id: '8d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004079',
    has_never_awarded_degrees: true
  },
  {
    name: 'London School of Academics',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '276',
    dttp_id: '813e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10032594',
    has_never_awarded_degrees: true
  },
  {
    name: 'Regent College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '278',
    dttp_id: 'bd3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008456'
  },
  {
    name: 'Brit College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '280',
    dttp_id: '163e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10028216',
    has_never_awarded_degrees: true
  },
  {
    name: 'Futureworks',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '281',
    dttp_id: '443e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10022087',
    has_never_awarded_degrees: true
  },
  {
    name: 'London Bridge Business Academy',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '282',
    dttp_id: '773e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10013109',
    has_never_awarded_degrees: true
  },
  {
    name: 'St Patrick’s International College',
    suggestion_synonyms: [],
    match_synonyms: [
      'Saint Patrick’s International College'
    ],
    hesa_itt_code: '283',
    dttp_id: 'dd3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10006243'
  },
  {
    name: 'Chicken Shed Theatre Company',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '284',
    dttp_id: '213e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10001386',
    has_never_awarded_degrees: true
  },
  {
    name: 'All Nations Christian College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '285',
    dttp_id: 'fc3d182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000216',
    has_never_awarded_degrees: true
  },
  {
    name: 'Bristol Baptist College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '287',
    dttp_id: '143e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000894',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Cambridge Theological Federation',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '288',
    dttp_id: 'e73e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10032072',
    has_never_awarded_degrees: true
  },
  {
    name: 'Christie’s Education',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '291',
    dttp_id: '253e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10001419',
    has_never_awarded_degrees: true
  },
  {
    name: 'City and Guilds of London Art School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '292',
    dttp_id: '273e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10039082',
    has_never_awarded_degrees: true
  },
  {
    name: 'Cliff College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '293',
    dttp_id: '2b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007912',
    has_never_awarded_degrees: true
  },
  {
    name: 'University College of Estate Management',
    suggestion_synonyms: [
      'UCEM'
    ],
    match_synonyms: [],
    hesa_itt_code: '294',
    dttp_id: '263f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008173'
  },
  {
    name: 'Waverley Abbey College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '295',
    dttp_id: '2a3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007361',
    has_never_awarded_degrees: true
  },
  {
    name: 'ICOM',
    suggestion_synonyms: [],
    match_synonyms: [
      'International college of Oriental medicine'
    ],
    hesa_itt_code: '297',
    dttp_id: '573e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023445',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Islamic College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '298',
    dttp_id: 'fa3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10029682',
    has_never_awarded_degrees: true
  },
  {
    name: 'Istituto Marangoni',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '299',
    dttp_id: '613e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10009527',
    has_never_awarded_degrees: true
  },
  {
    name: 'Kaplan Open Learning',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '300',
    dttp_id: '673e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10021682',
    has_never_awarded_degrees: true
  },
  {
    name: 'KLC School of Design',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '301',
    dttp_id: '6b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008325',
    has_never_awarded_degrees: true
  },
  {
    name: 'London Film School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '304',
    dttp_id: '7f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004036',
    has_never_awarded_degrees: true
  },
  {
    name: 'Luther King House Educational Trust',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '306',
    dttp_id: '8f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10009612',
    has_never_awarded_degrees: true
  },
  {
    name: 'Oxford Business College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '308',
    dttp_id: 'b13e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10020439'
  },
  {
    name: 'Point Blank Music School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '309',
    dttp_id: 'b73e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10019178',
    has_never_awarded_degrees: true
  },
  {
    name: "Spurgeon's College",
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '310',
    dttp_id: 'd53e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10006093',
    has_never_awarded_degrees: true
  },
  {
    name: 'St Nicholas Montessori Training',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '311',
    dttp_id: 'db3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10045289',
    has_never_awarded_degrees: true
  },
  {
    name: 'West Dean College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '312',
    dttp_id: '2c3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10032288',
    has_never_awarded_degrees: true
  },
  {
    name: 'Oak Hill College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '313',
    dttp_id: 'af3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10010227',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Metanoia Institute',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '314',
    dttp_id: '073f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004320',
    has_never_awarded_degrees: true
  },
  {
    name: "The Queen's Foundation for Ecumenical Theological Education",
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '315',
    dttp_id: '0f3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10032282',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Salvation Army',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '316',
    dttp_id: '113f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10021256',
    has_never_awarded_degrees: true
  },
  {
    name: 'Trinity College Bristol',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '317',
    dttp_id: '1e3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023464',
    has_never_awarded_degrees: true
  },
  {
    name: 'Matrix College of Counselling and Psychotherapy',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '320',
    dttp_id: '913e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023453',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Minster Centre',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '321',
    dttp_id: '093f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10032277',
    has_never_awarded_degrees: true
  },
  {
    name: 'AA School of Architecture',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '323',
    dttp_id: 'f43d182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008071'
  },
  {
    name: 'Court Theatre Training Company',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '326',
    dttp_id: '323e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10034324',
    has_never_awarded_degrees: true
  },
  {
    name: 'Regents Theological College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '327',
    dttp_id: 'bf3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10021100',
    has_never_awarded_degrees: true
  },
  {
    name: 'London School of Commerce & IT',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '328',
    dttp_id: '833e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023434',
    has_never_awarded_degrees: true
  },
  {
    name: 'HY Education Limited',
    suggestion_synonyms: [],
    match_synonyms: [
      'Apex College London'
    ],
    hesa_itt_code: '329',
    dttp_id: '003e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10041898',
    has_never_awarded_degrees: true
  },
  {
    name: 'New College of the Humanities',
    suggestion_synonyms: [
      'NCH'
    ],
    match_synonyms: [
      'NCH at Northeastern',
      'New College of the Humanities at Northeastern'
    ],
    hesa_itt_code: '330',
    dttp_id: 'a33e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10048199'
  },
  {
    name: 'The Markfield Institute of Higher Education',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '331',
    dttp_id: '053f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023452',
    has_never_awarded_degrees: true
  },
  {
    name: 'Cambridge School of Visual and Performing Arts',
    suggestion_synonyms: [],
    match_synonyms: [
      'Cambridge Arts and Sciences'
    ],
    hesa_itt_code: '332',
    dttp_id: '1a3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10010308',
    has_never_awarded_degrees: true
  },
  {
    name: 'Arden University',
    suggestion_synonyms: [
      'Resource development international'
    ],
    match_synonyms: [],
    hesa_itt_code: '333',
    dttp_id: '043e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10005451'
  },
  {
    name: 'Grŵp Llandrillo Menai',
    suggestion_synonyms: [
      'Coleg Llandrillo',
      'Coleg Menai',
      'Coleg Meirion-Dwyfor'
    ],
    match_synonyms: [],
    hesa_itt_code: '334',
    dttp_id: '4d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007820'
  },
  {
    name: 'Grŵp NPTC Group',
    suggestion_synonyms: [],
    match_synonyms: [
      'Neath Port Talbot College',
      'Grwp NPTC Group'
    ],
    hesa_itt_code: '335',
    dttp_id: '4f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10009614'
  },
  {
    name: 'Gower College Swansea',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '336',
    dttp_id: '4b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10030408'
  },
  {
    name: 'University College of Osteopathy',
    suggestion_synonyms: [
      'UCO'
    ],
    match_synonyms: [
      'The University College of Osteopathy'
    ],
    hesa_itt_code: '337',
    dttp_id: '163f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000936'
  },
  {
    name: 'Christ the Redeemer College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '342',
    dttp_id: '233e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10026921',
    has_never_awarded_degrees: true
  },
  {
    name: 'Leeds Conservatoire',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '351',
    dttp_id: '733e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10034449',
    has_never_awarded_degrees: true
  },
  {
    name: 'Hartpury University',
    suggestion_synonyms: [],
    match_synonyms: [
      'Hartpury College',
      'Hartpury University and Hartpury College'
    ],
    hesa_itt_code: '352',
    dttp_id: '533e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10080811'
  },
  {
    name: 'Amity Global Education',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '353',
    dttp_id: 'fe3d182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10032036',
    has_never_awarded_degrees: true
  },
  {
    name: 'The London School of Architecture',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '354',
    dttp_id: '033f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10062810',
    has_never_awarded_degrees: true
  },
  {
    name: 'London College of International Business Studies',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '355',
    dttp_id: '7d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004023',
    has_never_awarded_degrees: true
  },
  {
    name: 'LCCM AU UK',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '356',
    dttp_id: '6f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10066551',
    has_never_awarded_degrees: true
  },
  {
    name: 'ACM Guildford',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '357',
    dttp_id: 'f83d182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067853',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Film Education Training Trust',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '359',
    dttp_id: 'f43e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10004035',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Institute of Ismaili Studies',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '360',
    dttp_id: 'f83e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067388',
    has_never_awarded_degrees: true
  },
  {
    name: 'Newbold College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '361',
    dttp_id: 'a83e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023456',
    has_never_awarded_degrees: true
  },
  {
    name: 'Le Cordon Bleu',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '362',
    dttp_id: '713e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10003798',
    has_never_awarded_degrees: true
  },
  {
    name: 'Global Banking School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '363',
    dttp_id: '493e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10042500',
    has_never_awarded_degrees: true
  },
  {
    name: 'British College Of Osteopathic Medicine',
    suggestion_synonyms: [
      'BCNO'
    ],
    match_synonyms: [],
    hesa_itt_code: '400',
    dttp_id: '0c3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10000911',
    has_never_awarded_degrees: true
  },
  {
    name: 'LAMDA',
    suggestion_synonyms: [],
    match_synonyms: [
      'Lamda Limited'
    ],
    hesa_itt_code: '401',
    dttp_id: '6d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10003758'
  },
  {
    name: 'Royal Academy of Dramatic Art',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '402',
    dttp_id: 'cd3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10009292',
    has_never_awarded_degrees: true
  },
  {
    name: 'Study Group',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '403',
    dttp_id: 'e13e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10008098',
    has_never_awarded_degrees: true
  },
  {
    name: 'Royal School of Needlework',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '404',
    dttp_id: 'd13e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10020436',
    has_never_awarded_degrees: true
  },
  {
    name: 'Sotheby’s Institute of Art',
    suggestion_synonyms: [
      'Institute Of Art - London'
    ],
    match_synonyms: [],
    hesa_itt_code: '405',
    dttp_id: '5b3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10007841',
    has_never_awarded_degrees: true
  },
  {
    name: 'Hult International Business School',
    suggestion_synonyms: [],
    match_synonyms: [
      'Ashridge Business School'
    ],
    hesa_itt_code: '406',
    dttp_id: '553e182c-1425-ec11-b6e6-000d3adf095a',
    comment: 'Ashbridge Business School merged with Hult International Business school in 2015',
    ukprn: '10008899'
  },
  {
    name: 'The Sherwood Institute',
    suggestion_synonyms: [],
    match_synonyms: [
      'The Sherwood Psychotherapy Training Institute'
    ],
    hesa_itt_code: '407',
    dttp_id: '133f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023458',
    has_never_awarded_degrees: true
  },
  {
    name: 'University Centre Peterborough',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '408',
    dttp_id: '223f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10068157',
    has_never_awarded_degrees: true
  },
  {
    name: 'Central Film School London',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '409',
    dttp_id: '1f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10024024',
    has_never_awarded_degrees: true
  },
  {
    name: 'ESCP Europe Business School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '410',
    dttp_id: '3c3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10002313',
    has_never_awarded_degrees: true
  },
  {
    name: 'The Council of the Inns of Court',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '412',
    dttp_id: 'f23e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10081618',
    has_never_awarded_degrees: true
  },
  {
    name: 'Navitas UK Holdings',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '413',
    dttp_id: '9d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10053304',
    has_never_awarded_degrees: true
  },
  {
    name: "The Prince's Foundation",
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '414',
    dttp_id: '0d3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10083476',
    has_never_awarded_degrees: true
  },
  {
    name: 'Dyson Technical Training',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '415',
    dttp_id: '383e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067355',
    comment: 'Given degree awarding powers in 2021'
  },
  {
    name: 'Results Consortium',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '416',
    dttp_id: 'c53e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023871',
    has_never_awarded_degrees: true
  },
  {
    name: 'JCA | London Fashion Academy',
    suggestion_synonyms: [
      'JSA Education Group'
    ],
    match_synonyms: [],
    hesa_itt_code: '417',
    dttp_id: '633e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067601',
    has_never_awarded_degrees: true
  },
  {
    name: 'University Centre Quayside',
    suggestion_synonyms: [
      'UCQ'
    ],
    match_synonyms: [],
    hesa_itt_code: '418',
    dttp_id: '243f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10025197',
    has_never_awarded_degrees: true
  },
  {
    name: 'David Game College',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '419',
    dttp_id: '363e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10015688',
    has_never_awarded_degrees: true
  },
  {
    name: 'Dartington Hall Trust',
    suggestion_synonyms: [
      'Schumacher College'
    ],
    match_synonyms: [],
    hesa_itt_code: '420',
    dttp_id: '343e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10026767',
    has_never_awarded_degrees: true
  },
  {
    name: 'New Model Institute for Technology and Engineering',
    suggestion_synonyms: [
      'NMITE'
    ],
    match_synonyms: [],
    hesa_itt_code: '421',
    dttp_id: 'a53e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067406',
    has_never_awarded_degrees: true
  },
  {
    name: 'Kaplan International Colleges U.K.',
    suggestion_synonyms: [],
    match_synonyms: [
      'Kaplan International Pathways'
    ],
    hesa_itt_code: '422',
    dttp_id: '653e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10082570',
    has_never_awarded_degrees: true
  },
  {
    name: 'INTO University Partnerships',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '423',
    dttp_id: '5f3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10082728',
    has_never_awarded_degrees: true
  },
  {
    name: 'The College of Osteopaths',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '424',
    dttp_id: 'ef3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10023442',
    has_never_awarded_degrees: true
  },
  {
    name: 'Regent’s University London',
    suggestion_synonyms: [],
    match_synonyms: [
      'Regents university'
    ],
    hesa_itt_code: '425',
    dttp_id: 'c33e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10086591'
  },
  {
    name: 'Backstage Academy (Training)',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '426',
    dttp_id: '0a3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10036456',
    has_never_awarded_degrees: true
  },
  {
    name: 'British Academy of Jewellery',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '427',
    dttp_id: '183e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10038772',
    has_never_awarded_degrees: true
  },
  {
    name: 'The London Interdisciplinary School',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '428',
    dttp_id: '013f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067623',
    comment: 'Given degree awarding powers in 2021'
  },
  {
    name: 'Raindance Educational Services',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '429',
    dttp_id: 'bb3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10062833',
    has_never_awarded_degrees: true
  },
  {
    name: 'The College of Health',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '430',
    dttp_id: 'eb3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10066502',
    has_never_awarded_degrees: true
  },
  {
    name: 'CEG UFP',
    suggestion_synonyms: [],
    match_synonyms: [
      'CEG UCLAN Foundation Campus Limited',
      'Coventry Foundation Campus Limited',
      'CEG Foundation Campus Sunderland Limited',
      'London South Bank Foundation Campus Limited',
      'Foundation Campus London Limited',
      'ONCAMPUS Hull Ltd',
      'ONCAMPUS Reading Ltd',
      'ONCAMPUS Aston Ltd',
      'ONCAMPUS Southampton Ltd'
    ],
    hesa_itt_code: '431',
    dttp_id: '1d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10057213',
    has_never_awarded_degrees: true
  },
  {
    name: 'Applied Business Academy',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '432',
    dttp_id: '023e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10062759',
    has_never_awarded_degrees: true
  },
  {
    name: 'Tavistock and Portman NHS Foundation Trust',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '433',
    dttp_id: 'e33e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10020381',
    has_never_awarded_degrees: true
  },
  {
    name: 'UA92',
    suggestion_synonyms: [],
    match_synonyms: [
      'University Academy 92'
    ],
    hesa_itt_code: '434',
    dttp_id: '203f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10067648',
    has_never_awarded_degrees: true
  },
  {
    name: 'TEDI-London',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '435',
    dttp_id: 'e53e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10083403',
    comment: 'Given degree awarding powers in 2021'
  },
  {
    name: 'College of Legal Practice',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '436',
    dttp_id: '2d3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10082828',
    comment: 'Not degree awarding',
    has_never_awarded_degrees: true
  },
  {
    name: 'ThinkSpace Education',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '437',
    dttp_id: '1c3f182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10082743',
    has_never_awarded_degrees: true
  },
  {
    name: 'European School of Osteopathy',
    suggestion_synonyms: [],
    match_synonyms: [],
    hesa_itt_code: '7009',
    dttp_id: '3e3e182c-1425-ec11-b6e6-000d3adf095a',
    ukprn: '10002344',
    has_never_awarded_degrees: true
  },
  {
    name: 'Council for National Academic Awards',
    suggestion_synonyms: [
      'CNAA',
      'Westminster College',
      'West London Institute of HE'
    ],
    match_synonyms: [],
    hesa_itt_code: '9065',
    dttp_id: null,
    closed: '1993',
    comment: 'The Council for National Academic Awards (CNAA) was the national degree-awarding authority in the United Kingdom from 1965 until its dissolution on 20 April 1993',
    ukprn: null
  },
  {
    name: 'NCG (Newcastle College Group)',
    suggestion_synonyms: [
      'Newcastle College'
    ],
    match_synonyms: [
      'Newcatle College Group'
    ],
    hesa_itt_code: null,
    dttp_id: '20e5a08c-ee97-e711-80d8-005056ac45bb',
    ukprn: '10004599'
  },
  {
    name: 'University of Wales',
    suggestion_synonyms: [],
    match_synonyms: [
      'Prifysgol Cymru',
      'University of Wales (central functions)',
      'Royal Welsh College of Music and Drama'
    ],
    hesa_itt_code: '86',
    dttp_id: '6a228041-7042-e811-80ff-3863bb3640b8',
    comment: 'Previously a federal university who awarded degrees. Merged into University of Wales Trinity Saint David in 2017.',
    closed: '2017',
    ukprn: '10008574'
  },
  {
    name: 'TEC Partnership',
    suggestion_synonyms: [
      'GIFHE',
      'Grimsby Institute',
      'Grimsby Institute of Further and Higher Education',
      'Grimsby Institute of Further & Higher Education'
    ],
    match_synonyms: [],
    hesa_itt_code: null,
    dttp_id: null,
    comment: 'Given degree awarding powers in 2021. Partnership for several colleges.',
    ukprn: '10007938'
  },
  {
    name: 'WCG (Warwickshire College Group)',
    suggestion_synonyms: [],
    match_synonyms: [
      'Warwickshire College',
      'Warwickshire College Group'
    ],
    hesa_itt_code: null,
    dttp_id: null,
    ukprn: '10007859',
    comment: 'Given degree awarding powers in 2021'
  }
]
