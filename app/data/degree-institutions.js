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

module.exports = [
  {
    "name": "The Open University",
    "suggestion_synonyms": [
      "OU",
      "Open University"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "1",
    "dttp_id": "5c9e1d2d-3fa2-e811-812b-5065f38ba241",
    "ukprn": "10007773",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Cranfield University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "2",
    "dttp_id": "4e9e1d2d-3fa2-e811-812b-5065f38ba241",
    "ukprn": "10007822",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Royal College of Art",
    "suggestion_synonyms": [
      "RCA"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "3",
    "dttp_id": "64407223-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007777"
  },
  {
    "name": "Bishop Grosseteste University",
    "suggestion_synonyms": [
      "BGU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "7",
    "dttp_id": "ca70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007811",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Buckinghamshire New University",
    "suggestion_synonyms": [
      "Bucks",
      "BNU"
    ],
    "match_synonyms": [
      "Buckinghamshire Chilterns University College"
    ],
    "hesa_itt_code": "9",
    "dttp_id": "bec53e05-7042-e811-80ff-3863bb3640b8",
    "comment": "Name changed in 2007",
    "ukprn": "10000975",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Royal Central School of Speech and Drama",
    "suggestion_synonyms": [
      "CSSD",
      "University of London"
    ],
    "match_synonyms": [
      "The Royal Central School of Speech and Drama"
    ],
    "hesa_itt_code": "10",
    "dttp_id": "d90a4e73-a141-e811-80ff-3863bb351d40",
    "ukprn": "10007816"
  },
  {
    "name": "University of Chester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "11",
    "dttp_id": "0871f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007848",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Canterbury Christ Church University",
    "suggestion_synonyms": [
      "CCCU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "12",
    "dttp_id": "ce70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10001143",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "York St John University",
    "suggestion_synonyms": [
      "YSJU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "13",
    "dttp_id": "4c71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007713",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Plymouth Marjon University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of St Mark and St John",
      "University of Saint Mark and Saint John"
    ],
    "hesa_itt_code": "14",
    "dttp_id": "3a71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10037449",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Edge Hill University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Edge Hill College"
    ],
    "hesa_itt_code": "16",
    "dttp_id": "d070f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007823",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Falmouth University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "17",
    "dttp_id": "6f955cae-3ea2-e811-812b-5065f38ba241",
    "ukprn": "10008640",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Harper Adams University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Harper Adams"
    ],
    "hesa_itt_code": "18",
    "dttp_id": "1b369414-75d9-e911-a863-000d3ab0da57",
    "ukprn": "10040812",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Kent Institute of Art and Design",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "20",
    "dttp_id": "2f6e5e11-7042-e811-80ff-3863bb3640b8",
    "closed": "2008",
    "comment": "Closed in 2008 to become the University for the creative arts"
  },
  {
    "name": "University of Winchester",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Winchester"
    ],
    "hesa_itt_code": "21",
    "dttp_id": "4471f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10003614",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Liverpool Hope University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "23",
    "dttp_id": "dc70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10003956",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of the Arts London",
    "suggestion_synonyms": [
      "UAL",
      "Wimbledon College of Art",
      "Wimbledon College of Arts"
    ],
    "match_synonyms": [
      "University of the Arts, London"
    ],
    "hesa_itt_code": "24",
    "dttp_id": "ca781c39-3fa2-e811-812b-5065f38ba241",
    "ukprn": "10007162"
  },
  {
    "name": "University of Bedfordshire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "26",
    "dttp_id": "fc70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007152",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Northampton",
    "suggestion_synonyms": [
      "UON"
    ],
    "match_synonyms": [
      "The University of Northampton"
    ],
    "hesa_itt_code": "27",
    "dttp_id": "2871f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007138",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Newman University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Newman University, Birmingham",
      "Newman University College"
    ],
    "hesa_itt_code": "28",
    "dttp_id": "ec70f34a-2887-e711-80d8-005056ac45bb",
    "comment": "Name changed in 2013",
    "ukprn": "10007832",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Ravensbourne University London",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Ravensbourne College of Design and Communication"
    ],
    "hesa_itt_code": "30",
    "dttp_id": "4ff3791d-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10005389",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "University of Roehampton",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Roehampton University"
    ],
    "hesa_itt_code": "31",
    "dttp_id": "f270f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007776",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Rose Bruford College",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Rose Bruford College of Theatre & Performance",
      "Rose Bruford College of Theatre and Performance"
    ],
    "hesa_itt_code": "32",
    "dttp_id": "5af3791d-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10005523"
  },
  {
    "name": "Royal Academy of Music",
    "suggestion_synonyms": [
      "RAM",
      "University of London"
    ],
    "match_synonyms": [
      "The Royal Academy of Music"
    ],
    "hesa_itt_code": "33",
    "dttp_id": "61f3791d-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007835"
  },
  {
    "name": "Royal College of Music",
    "suggestion_synonyms": [
      "RCM"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "34",
    "dttp_id": "49e01caa-a141-e811-80ff-3863bb351d40",
    "ukprn": "10007778",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Royal Northern College of Music",
    "suggestion_synonyms": [
      "RNCM"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "35",
    "dttp_id": "cf3e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10007837",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Salford College of Technology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "36",
    "dttp_id": "81407223-7042-e811-80ff-3863bb3640b8",
    "closed": "1996",
    "comment": "Merged with University of Salford in 1996"
  },
  {
    "name": "Solent University, Southampton",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Solent University",
      "Southampton Solent University"
    ],
    "hesa_itt_code": "37",
    "dttp_id": "c10b1d33-3fa2-e811-812b-5065f38ba241",
    "comment": "Name changed to Solent University in 2018",
    "ukprn": "10006022",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Cumbria",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Cumbria"
    ],
    "hesa_itt_code": "38",
    "dttp_id": "0c71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007842"
  },
  {
    "name": "St Mary’s University, Twickenham",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Saint Mary’s University, Twickenham"
    ],
    "hesa_itt_code": "39",
    "dttp_id": "f670f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007843",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Leeds Trinity University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Leeds Trinity & All Saints",
      "Leeds Trinity and All Saints"
    ],
    "hesa_itt_code": "40",
    "dttp_id": "da70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10003863",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Trinity Laban Conservatoire of Music and Dance",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Trinity Laban Conservatoire of Music & Dance"
    ],
    "hesa_itt_code": "41",
    "dttp_id": "054b9247-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10008017",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "The Surrey Institute of Art and Design, University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "44",
    "dttp_id": "c4db7129-7042-e811-80ff-3863bb3640b8",
    "closed": "2005",
    "comment": "It merged with the Kent Institute of Art & Design on August 1, 2005 to form the University College for the Creative Arts (now University for the Creative Arts)"
  },
  {
    "name": "University of Worcester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "46",
    "dttp_id": "4871f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007139",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Anglia Ruskin University",
    "suggestion_synonyms": [
      "ARU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "47",
    "dttp_id": "387af34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10000291"
  },
  {
    "name": "Bath Spa University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "48",
    "dttp_id": "c670f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10000571",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Bolton",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Bolton"
    ],
    "hesa_itt_code": "49",
    "dttp_id": "dfdb7129-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10006841",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Bournemouth University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "50",
    "dttp_id": "b1c53e05-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10000824",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Brighton",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Brighton"
    ],
    "hesa_itt_code": "51",
    "dttp_id": "0071f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10000886",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Birmingham City University",
    "suggestion_synonyms": [
      "BCU",
      "Birmingham College of Art",
      "Birmingham Polytechnic"
    ],
    "match_synonyms": [
      "University of Central England in Birmingham",
      "UCE Birmingham"
    ],
    "hesa_itt_code": "52",
    "dttp_id": "c870f34a-2887-e711-80d8-005056ac45bb",
    "comment": "Renamed from 'University of Central England in Birmingham' in 2007.",
    "ukprn": "10007140",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Central Lancashire",
    "suggestion_synonyms": [
      "UCLan"
    ],
    "match_synonyms": [
      "The University of Central Lancashire"
    ],
    "hesa_itt_code": "53",
    "dttp_id": "59e01caa-a141-e811-80ff-3863bb351d40",
    "ukprn": "10007141",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Gloucestershire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "54",
    "dttp_id": "1871f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007145",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "London Guildhall University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "55",
    "dttp_id": "711c7817-7042-e811-80ff-3863bb3640b8",
    "closed": "2012",
    "comment": "On 1 August 2002, it merged with the University of North London to form London Metropolitan University."
  },
  {
    "name": "Coventry University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "56",
    "dttp_id": "1ff35f0b-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10001726",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Derby",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "57",
    "dttp_id": "0e71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007851",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of East London",
    "suggestion_synonyms": [
      "UEL"
    ],
    "match_synonyms": [
      "The University of East London"
    ],
    "hesa_itt_code": "58",
    "dttp_id": "1471f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007144",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Greenwich",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Greenwich"
    ],
    "hesa_itt_code": "59",
    "dttp_id": "1a71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007146",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Hertfordshire",
    "suggestion_synonyms": [
      "UH",
      "UOH",
      "Herts"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "60",
    "dttp_id": "1c71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007147",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Huddersfield",
    "suggestion_synonyms": [
      "Northern College for Residential and Community Adult Education"
    ],
    "match_synonyms": [
      "The University of Huddersfield",
      "Huddersfield University"
    ],
    "hesa_itt_code": "61",
    "dttp_id": "1e71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007148",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Lincoln",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Lincoln"
    ],
    "hesa_itt_code": "62",
    "dttp_id": "035b7f3b-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007151",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Kingston University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Kingston University London"
    ],
    "hesa_itt_code": "63",
    "dttp_id": "d670f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10003678",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Leeds Beckett University",
    "suggestion_synonyms": [
      "LBU",
      "LMU"
    ],
    "match_synonyms": [
      "Leeds Beckett",
      "Leeds Metropolitan University"
    ],
    "hesa_itt_code": "64",
    "dttp_id": "d870f34a-2887-e711-80d8-005056ac45bb",
    "comment": "Name changed from Leeds Metropolitan in 2013",
    "ukprn": "10003861",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Liverpool John Moores University",
    "suggestion_synonyms": [
      "LJMU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "65",
    "dttp_id": "de70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10003957",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Manchester Metropolitan University",
    "suggestion_synonyms": [
      "MMU"
    ],
    "match_synonyms": [
      "The Manchester Metropolitan University"
    ],
    "hesa_itt_code": "66",
    "dttp_id": "e670f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004180",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Middlesex University London",
    "suggestion_synonyms": [
      "MDX"
    ],
    "match_synonyms": [
      "Middlesex University"
    ],
    "hesa_itt_code": "67",
    "dttp_id": "e870f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004351"
  },
  {
    "name": "De Montfort University",
    "suggestion_synonyms": [
      "DMU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "68",
    "dttp_id": "f30a4e73-a141-e811-80ff-3863bb351d40",
    "ukprn": "10001883",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Northumbria University Newcastle",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Northumbria at Newcastle"
    ],
    "hesa_itt_code": "69",
    "dttp_id": "2a71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10001282",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "The University of North London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "70",
    "dttp_id": "235b7f3b-7042-e811-80ff-3863bb3640b8",
    "closed": "2002",
    "comment": "UNL existed until 2002, when it merged with London Guildhall University to form London Metropolitan University"
  },
  {
    "name": "Nottingham Trent University",
    "suggestion_synonyms": [
      "NTU"
    ],
    "match_synonyms": [
      "The Nottingham Trent University"
    ],
    "hesa_itt_code": "71",
    "dttp_id": "ee70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004797",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Oxford Brookes University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "72",
    "dttp_id": "f070f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004930",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Plymouth",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "73",
    "dttp_id": "3071f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007801",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Portsmouth",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Portsmouth"
    ],
    "hesa_itt_code": "74",
    "dttp_id": "3271f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007155",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Sheffield Hallam University",
    "suggestion_synonyms": [
      "SHU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "75",
    "dttp_id": "f470f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10005790",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "London South Bank University",
    "suggestion_synonyms": [
      "LSBU"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "76",
    "dttp_id": "e270f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004078",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Staffordshire University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "77",
    "dttp_id": "f870f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10006299",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Sunderland",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Sunderland"
    ],
    "hesa_itt_code": "78",
    "dttp_id": "3c71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007159",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Teesside University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "79",
    "dttp_id": "2a96fc9d-a141-e811-80ff-3863bb351d40",
    "ukprn": "10007161",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of West London",
    "suggestion_synonyms": [
      "UWL"
    ],
    "match_synonyms": [
      "The University of West London"
    ],
    "hesa_itt_code": "80",
    "dttp_id": "84228041-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10006566",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of the West of England, Bristol",
    "suggestion_synonyms": [
      "UWE"
    ],
    "match_synonyms": [
      "UWE Bristol"
    ],
    "hesa_itt_code": "81",
    "dttp_id": "4071f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007164",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Chichester",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Chichester",
      "University College Chichester"
    ],
    "hesa_itt_code": "82",
    "dttp_id": "0a71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007137",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Westminster",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Westminster"
    ],
    "hesa_itt_code": "83",
    "dttp_id": "7eda4db6-a141-e811-80ff-3863bb351d40",
    "ukprn": "10007165",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Wolverhampton",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Wolverhampton"
    ],
    "hesa_itt_code": "85",
    "dttp_id": "4671f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007166",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "The University of Wales, Newport",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "86",
    "dttp_id": "73228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Wrexham Glyndŵr University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Glyndŵr University",
      "Glyndwr University",
      "Prifysgol Glyndŵr",
      "Prifysgol Glyndwr",
      "Prifysgol Glyndŵr Wrecsam",
      "Prifysgol Glyndwr Wrecsam"
    ],
    "hesa_itt_code": "87",
    "dttp_id": "57f35f0b-7042-e811-80ff-3863bb3640b8",
    "comment": "Name changed from Glyndŵr University in 2016"
  },
  {
    "name": "Cardiff Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Prifysgol Metropolitan Caerdydd",
      "University of Wales Institute, Cardiff"
    ],
    "hesa_itt_code": "89",
    "dttp_id": "07f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of South Wales",
    "suggestion_synonyms": [
      "University of Glamorgan",
      "University of Wales, Newport",
      "Royal Welsh College of Music and Drama"
    ],
    "match_synonyms": [
      "Prifysgol De Cymru"
    ],
    "hesa_itt_code": "90",
    "dttp_id": "8723a753-7042-e811-80ff-3863bb3640b8",
    "comment": "Formed in 2013 from merger of Universities of Glamorgan and University of Wales, Newport"
  },
  {
    "name": "Swansea Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "91",
    "dttp_id": null,
    "closed": "2013",
    "comment": "The university merged with, and became a constituent campus of, the University of Wales Trinity Saint David on 1 August 2013."
  },
  {
    "name": "Trinity University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "92",
    "dttp_id": "0e4b9247-7042-e811-80ff-3863bb3640b8",
    "closed": "2010"
  },
  {
    "name": "Abertay University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Abertay Dundee"
    ],
    "hesa_itt_code": "95",
    "dttp_id": null,
    "comment": "Renamed from University of Abertay Dundee in September 2019"
  },
  {
    "name": "Glasgow School of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "97",
    "dttp_id": "51f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Queen Margaret University, Edinburgh",
    "suggestion_synonyms": [
      "QMU"
    ],
    "match_synonyms": [
      "Queen Margaret University",
      "Queen Margaret University College"
    ],
    "hesa_itt_code": "100",
    "dttp_id": "40f3791d-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal Conservatoire of Scotland",
    "suggestion_synonyms": [
      "RCS"
    ],
    "match_synonyms": [
      "Royal Scottish Academy of Music and Drama"
    ],
    "hesa_itt_code": "101",
    "dttp_id": null
  },
  {
    "name": "Robert Gordon University",
    "suggestion_synonyms": [
      "RGU"
    ],
    "match_synonyms": [
      "The Robert Gordon University",
      "Robert Gordon University, Aberdeen"
    ],
    "hesa_itt_code": "104",
    "dttp_id": "c93e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University of the West of Scotland",
    "suggestion_synonyms": [
      "UWS"
    ],
    "match_synonyms": [
      "University of Paisley",
      "The University of the West of Scotland"
    ],
    "hesa_itt_code": "105",
    "dttp_id": "1a3f182c-1425-ec11-b6e6-000d3adf095a",
    "comment": "Name changed in 2007"
  },
  {
    "name": "Glasgow Caledonian University",
    "suggestion_synonyms": [
      "GCU",
      "Caley"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "106",
    "dttp_id": "473e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Edinburgh Napier University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Napier University"
    ],
    "hesa_itt_code": "107",
    "dttp_id": "43f35f0b-7042-e811-80ff-3863bb3640b8",
    "comment": "Name changed in 2009"
  },
  {
    "name": "Aston University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "108",
    "dttp_id": "513e2cff-6f42-e811-80ff-3863bb3640b8",
    "ukprn": "10007759",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Bath",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Bath"
    ],
    "hesa_itt_code": "109",
    "dttp_id": "3e7af34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007850",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Birmingham",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Birmingham"
    ],
    "hesa_itt_code": "110",
    "dttp_id": "fe70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10006840",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Bradford",
    "suggestion_synonyms": [
      "Leeds Conservatoire"
    ],
    "match_synonyms": [
      "The University of Bradford"
    ],
    "hesa_itt_code": "111",
    "dttp_id": "7fed6e2f-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007785",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Bristol",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Bristol"
    ],
    "hesa_itt_code": "112",
    "dttp_id": "0271f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007786",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Brunel University London",
    "suggestion_synonyms": [
      "West London Institute of HE"
    ],
    "match_synonyms": [
      "Brunel University"
    ],
    "hesa_itt_code": "113",
    "dttp_id": "cc70f34a-2887-e711-80d8-005056ac45bb",
    "comment": "Name changed in 2014",
    "ukprn": "10000961",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Cambridge",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Cambridge",
      "The Chancellor, Masters, and Scholars of the University of Cambridge"
    ],
    "hesa_itt_code": "114",
    "dttp_id": "0671f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007788"
  },
  {
    "name": "City, University of London",
    "suggestion_synonyms": [
      "CUL",
      "The City University"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "115",
    "dttp_id": "293e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10001478",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Durham University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Durham"
    ],
    "hesa_itt_code": "116",
    "dttp_id": "1071f34a-2887-e711-80d8-005056ac45bb",
    "comment": "Changed trading name to Durham University in 2005",
    "ukprn": "10007143",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of East Anglia",
    "suggestion_synonyms": [
      "UEA"
    ],
    "match_synonyms": [
      "The University of East Anglia"
    ],
    "hesa_itt_code": "117",
    "dttp_id": "1271f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007789",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Essex",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Essex"
    ],
    "hesa_itt_code": "118",
    "dttp_id": "5aeb7735-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007791",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Exeter",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Exeter"
    ],
    "hesa_itt_code": "119",
    "dttp_id": "1671f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007792",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Hull",
    "suggestion_synonyms": [
      "Leeds Conservatoire",
      "Grimsby Institute"
    ],
    "match_synonyms": [
      "The University of Hull"
    ],
    "hesa_itt_code": "120",
    "dttp_id": "2071f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007149",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Keele University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Keele",
      "The University of Keele"
    ],
    "hesa_itt_code": "121",
    "dttp_id": "3a7af34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007767",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Kent",
    "suggestion_synonyms": [
      "Northern School of Contemporary Dance",
      "NSCD"
    ],
    "match_synonyms": [
      "The University of Kent"
    ],
    "hesa_itt_code": "122",
    "dttp_id": "99eb7735-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007150",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Lancaster University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Lancaster",
      "The University of Lancaster"
    ],
    "hesa_itt_code": "123",
    "dttp_id": "a4eb7735-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007768",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Leeds",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Leeds"
    ],
    "hesa_itt_code": "124",
    "dttp_id": "2271f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007795",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Leicester",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Leicester"
    ],
    "hesa_itt_code": "125",
    "dttp_id": "2471f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007796",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Liverpool",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Liverpool"
    ],
    "hesa_itt_code": "126",
    "dttp_id": "f58f17b0-a141-e811-80ff-3863bb351d40",
    "ukprn": "10006842",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Birkbeck, University of London",
    "suggestion_synonyms": [
      "BBK",
      "University of London"
    ],
    "match_synonyms": [
      "Birkbeck College",
      "Birkbeck College, University of London"
    ],
    "hesa_itt_code": "127",
    "dttp_id": "9fc53e05-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007760",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Goldsmiths, University of London",
    "suggestion_synonyms": [
      "GUL"
    ],
    "match_synonyms": [
      "Goldsmiths College"
    ],
    "hesa_itt_code": "131",
    "dttp_id": "d270f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10002718",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Imperial College London",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Imperial College of Science, Technology and Medicine",
      "Imperial College"
    ],
    "hesa_itt_code": "132",
    "dttp_id": "0b9017b0-a141-e811-80ff-3863bb351d40",
    "ukprn": "10003270",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Institute of Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "133",
    "dttp_id": "dcd0c9d6-e897-e711-80d8-005056ac45bb"
  },
  {
    "name": "King’s College London",
    "suggestion_synonyms": [
      "KCL",
      "University of London"
    ],
    "match_synonyms": [
      "King's College London"
    ],
    "hesa_itt_code": "134",
    "dttp_id": "d470f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "London Business School",
    "suggestion_synonyms": [
      "LBS",
      "University of London"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "135",
    "dttp_id": "6a1c7817-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007769",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "London School of Economics and Political Science",
    "suggestion_synonyms": [
      "LSE",
      "University of London"
    ],
    "match_synonyms": [
      "London School of Economics",
      "The London School of Economics and Political Science"
    ],
    "hesa_itt_code": "137",
    "dttp_id": "7d1c7817-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10004063"
  },
  {
    "name": "London School of Hygiene and Tropical Medicine",
    "suggestion_synonyms": [
      "LSHTM",
      "University of London"
    ],
    "match_synonyms": [
      "London School of Hygiene & Tropical Medicine"
    ],
    "hesa_itt_code": "138",
    "dttp_id": "853e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10007771",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Queen Mary University of London",
    "suggestion_synonyms": [
      "QMUL",
      "QM",
      "St Bartholomew's Hospital Medical College",
      "St Barts"
    ],
    "match_synonyms": [
      "Queen Mary, University of London"
    ],
    "hesa_itt_code": "139",
    "dttp_id": "b93e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10007775",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Royal Holloway, University of London",
    "suggestion_synonyms": [
      "RH",
      "RHUL"
    ],
    "match_synonyms": [
      "Royal Holloway",
      "Royal Holloway and Bedford New College"
    ],
    "hesa_itt_code": "141",
    "dttp_id": "6c407223-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10005553",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Royal Veterinary College",
    "suggestion_synonyms": [
      "RVC",
      "University of London"
    ],
    "match_synonyms": [
      "The Royal Veterinary College"
    ],
    "hesa_itt_code": "143",
    "dttp_id": "b6db7129-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007779",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "St Bartholomew's Hospital Medical College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "144",
    "dttp_id": null
  },
  {
    "name": "St George’s, University of London",
    "suggestion_synonyms": [
      "SGUL"
    ],
    "match_synonyms": [
      "St George’s Hospital Medical School"
    ],
    "hesa_itt_code": "145",
    "dttp_id": "94407223-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007782"
  },
  {
    "name": "SOAS, University of London",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The School of Oriental and African Studies",
      "School of Oriental and African Studies"
    ],
    "hesa_itt_code": "146",
    "dttp_id": "bddb7129-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007780",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "The School of Pharmacy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "147",
    "dttp_id": null
  },
  {
    "name": "University College London",
    "suggestion_synonyms": [
      "UCL",
      "University of London",
      "Institute of Education",
      "School of Pharmacy"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "149",
    "dttp_id": "a27af34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007784",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of London",
    "suggestion_synonyms": [
      "Institute of Education"
    ],
    "match_synonyms": [
      "University of London (Institutes and activities)"
    ],
    "hesa_itt_code": "151",
    "dttp_id": "0d791c39-3fa2-e811-812b-5065f38ba241",
    "comment": "Constituent colleges gained the ability to award their own degrees in around 2018, but some institutions that are part of the 'School of Advanced Study', or 'The University of London Institute in Paris' still award postgraduate degrees from the University of London.",
    "ukprn": "10007797",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Loughborough University",
    "suggestion_synonyms": [
      "Loughborough College of Art and Design"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "152",
    "dttp_id": "e470f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004113",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Victoria Manchester University",
    "suggestion_synonyms": [
      "University of Manchester Institute of Science and Technology"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "153",
    "dttp_id": null,
    "closed": "2004",
    "comment": "Merged with UMIST (whose degrees it awarded) in 2004 to form University of Manchester"
  },
  {
    "name": "Newcastle University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Newcastle-upon-Tyne"
    ],
    "hesa_itt_code": "154",
    "dttp_id": "ea70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007799",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Nottingham",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Nottingham"
    ],
    "hesa_itt_code": "155",
    "dttp_id": "2c71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007154"
  },
  {
    "name": "University of Oxford",
    "suggestion_synonyms": [
      "Westminster College"
    ],
    "match_synonyms": [
      "The University of Oxford",
      "The Chancellor, Masters and Scholars of the University of Oxford"
    ],
    "hesa_itt_code": "156",
    "dttp_id": "2e71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007774"
  },
  {
    "name": "University of Reading",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Reading"
    ],
    "hesa_itt_code": "157",
    "dttp_id": "3471f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007802",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Salford",
    "suggestion_synonyms": [
      "University College Salford"
    ],
    "match_synonyms": [
      "The University of Salford"
    ],
    "hesa_itt_code": "158",
    "dttp_id": "425b7f3b-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007156"
  },
  {
    "name": "The University of Sheffield",
    "suggestion_synonyms": [
      "TUOS",
      "Sheffield University"
    ],
    "match_synonyms": [
      "University of Sheffield"
    ],
    "hesa_itt_code": "159",
    "dttp_id": "3671f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007157",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Southampton",
    "suggestion_synonyms": [
      "SOTON",
      "La Sainte Union College of HE",
      "Winchester School of Art"
    ],
    "match_synonyms": [
      "The University of Southampton"
    ],
    "hesa_itt_code": "160",
    "dttp_id": "4f5b7f3b-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007158",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Surrey",
    "suggestion_synonyms": [
      "Wimbledon School of Art"
    ],
    "match_synonyms": [
      "The University of Surrey"
    ],
    "hesa_itt_code": "161",
    "dttp_id": "58228041-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007160",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Sussex",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Sussex"
    ],
    "hesa_itt_code": "162",
    "dttp_id": "3e71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007806",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Warwick",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Warwick"
    ],
    "hesa_itt_code": "163",
    "dttp_id": "4271f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007163",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of York",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of York"
    ],
    "hesa_itt_code": "164",
    "dttp_id": "4a71f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007167",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "The University of Manchester Institute of Science and Technology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "165",
    "dttp_id": "1b5b7f3b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Edinburgh",
    "suggestion_synonyms": [
      "Edinburgh College of Art",
      "Moray House Institute of Education"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "167",
    "dttp_id": "d7ed6e2f-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Glasgow",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Glasgow"
    ],
    "hesa_itt_code": "168",
    "dttp_id": "6ceb7735-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Strathclyde",
    "suggestion_synonyms": [
      "Bell College"
    ],
    "match_synonyms": [
      "The University of Strathclyde",
      "University of Strathclyde, Glasgow"
    ],
    "hesa_itt_code": "169",
    "dttp_id": "42228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Aberdeen",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Aberdeen"
    ],
    "hesa_itt_code": "170",
    "dttp_id": "cbdb7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Heriot-Watt University",
    "suggestion_synonyms": [
      "The Scottish College of Textiles"
    ],
    "match_synonyms": [
      "Heriot Watt University"
    ],
    "hesa_itt_code": "171",
    "dttp_id": "146e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Dundee",
    "suggestion_synonyms": [
      "Duncan of Jordanstone College of Art"
    ],
    "match_synonyms": [
      "The University of Dundee"
    ],
    "hesa_itt_code": "172",
    "dttp_id": "bbed6e2f-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of St Andrews",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of St Andrews",
      "The University of Saint Andrews",
      "University of Saint Andrews"
    ],
    "hesa_itt_code": "173",
    "dttp_id": "34228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Stirling",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "The University of Stirling"
    ],
    "hesa_itt_code": "174",
    "dttp_id": "3b228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "SRUC",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "175",
    "dttp_id": "d73e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University of Wales Trinity Saint David",
    "suggestion_synonyms": [
      "UWTSD"
    ],
    "match_synonyms": [
      "Prifysgol Cymru Y Drindod Dewi Sant",
      "University of Wales Trinity St David",
      "The University of Wales, Lampeter"
    ],
    "hesa_itt_code": "176",
    "dttp_id": "b123a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Aberystwyth University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Prifysgol Aberystwyth"
    ],
    "hesa_itt_code": "177",
    "dttp_id": "443e2cff-6f42-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Bangor University",
    "suggestion_synonyms": [
      "University College of North Wales",
      "UCNW",
      "UWB"
    ],
    "match_synonyms": [
      "Prifysgol Bangor",
      "University of Wales, Bangor"
    ],
    "hesa_itt_code": "178",
    "dttp_id": "92c53e05-7042-e811-80ff-3863bb3640b8",
    "comment": "Renamed to Bangor University in 2007"
  },
  {
    "name": "Cardiff University",
    "suggestion_synonyms": [
      "Prifysgol Caerdydd",
      "University College Cardiff"
    ],
    "match_synonyms": [
      "University of Wales, Cardiff"
    ],
    "hesa_itt_code": "179",
    "dttp_id": "0ff35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Swansea University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Prifysgol Abertawe",
      "University of Wales, Swansea"
    ],
    "hesa_itt_code": "180",
    "dttp_id": "b3407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Wales College of Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "181",
    "dttp_id": null,
    "closed": "2002",
    "comment": "Re-merged with Cardiff University in 2002"
  },
  {
    "name": "Queen’s University Belfast",
    "suggestion_synonyms": [
      "QUB"
    ],
    "match_synonyms": [
      "The Queen’s University of Belfast"
    ],
    "hesa_itt_code": "184",
    "dttp_id": "a7db7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Ulster University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Ulster"
    ],
    "hesa_itt_code": "185",
    "dttp_id": "a823a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The Institute of Cancer Research",
    "suggestion_synonyms": [
      "ICR",
      "University of London"
    ],
    "match_synonyms": [
      "Institute of Cancer Research"
    ],
    "hesa_itt_code": "188",
    "dttp_id": "f63e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Writtle University College",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Writtle College"
    ],
    "hesa_itt_code": "189",
    "dttp_id": "d723a753-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007657",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Norwich University of the Arts",
    "suggestion_synonyms": [
      "NUA"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "190",
    "dttp_id": "a01c7817-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10004775",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Cumbria Institute of the Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "192",
    "dttp_id": "2ef35f0b-7042-e811-80ff-3863bb3640b8",
    "closed": "2017"
  },
  {
    "name": "Stranmillis University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "193",
    "dttp_id": "df3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "St Mary’s University College, Belfast",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "St Mary’s University College"
    ],
    "hesa_itt_code": "194",
    "dttp_id": "9b407223-7042-e811-80ff-3863bb3640b8",
    "comment": "Does not seem to be degree awarding"
  },
  {
    "name": "Royal Agricultural University",
    "suggestion_synonyms": [
      "RAU"
    ],
    "match_synonyms": [
      "The Royal Agricultural University"
    ],
    "hesa_itt_code": "195",
    "dttp_id": null,
    "ukprn": "10005545"
  },
  {
    "name": "University of the Highlands and Islands",
    "suggestion_synonyms": [
      "UHI"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "196",
    "dttp_id": "283f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Arts University Bournemouth",
    "suggestion_synonyms": [
      "AUB"
    ],
    "match_synonyms": [
      "Arts Institute Bournemouth",
      "Arts University College at Bournemouth",
      "The Arts University Bournemouth"
    ],
    "hesa_itt_code": "197",
    "dttp_id": "c6407223-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10000385",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Conservatoire for Dance and Drama",
    "suggestion_synonyms": [
      "Northern School of Contemporary Dance",
      "NSCD"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "199",
    "dttp_id": "2f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University College Birmingham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "200",
    "dttp_id": "fa70f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10000712",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "The Courtauld Institute of Art",
    "suggestion_synonyms": [
      "CIA"
    ],
    "match_synonyms": [
      "The Courtauld",
      "Courtauld Institute of Art"
    ],
    "hesa_itt_code": "201",
    "dttp_id": "18f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "London Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "London Met"
    ],
    "hesa_itt_code": "202",
    "dttp_id": "e070f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10004048",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "University of Buckingham",
    "suggestion_synonyms": [
      "UB"
    ],
    "match_synonyms": [
      "The University of Buckingham"
    ],
    "hesa_itt_code": "203",
    "dttp_id": "0471f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007787",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "The University of Manchester",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "University of Manchester"
    ],
    "hesa_itt_code": "204",
    "dttp_id": "2671f34a-2887-e711-80d8-005056ac45bb",
    "ukprn": "10007798",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "Heythrop College",
    "closed": "2018",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "205",
    "dttp_id": "1b6e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University for the Creative Arts",
    "suggestion_synonyms": [
      "UCA"
    ],
    "match_synonyms": [
      "University College for the Creative Arts"
    ],
    "hesa_itt_code": "206",
    "dttp_id": "354b9247-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10006427",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Guildhall School of Music and Drama",
    "suggestion_synonyms": [
      "GSMD"
    ],
    "match_synonyms": [
      "Guildhall School of Music & Drama"
    ],
    "hesa_itt_code": "208",
    "dttp_id": "076e5e11-7042-e811-80ff-3863bb3640b8",
    "ukprn": "10007825"
  },
  {
    "name": "The Liverpool Institute for Performing Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "209",
    "dttp_id": "84db7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Suffolk",
    "suggestion_synonyms": [
      "UOS"
    ],
    "match_synonyms": [
      "University Campus Suffolk"
    ],
    "hesa_itt_code": "210",
    "dttp_id": "154b9247-7042-e811-80ff-3863bb3640b8",
    "comment": "Renamed from University Campus Suffolk to University of Suffolk in 2016",
    "ukprn": "10014001",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Leeds Arts University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Leeds College of Art"
    ],
    "hesa_itt_code": "211",
    "dttp_id": "436e5e11-7042-e811-80ff-3863bb3640b8",
    "comment": "Became a university and changed name in 2017",
    "ukprn": "10003854",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "AECC University College",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Anglo-European College of Chiropractic"
    ],
    "hesa_itt_code": "213",
    "dttp_id": "fa3d182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10000163",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "BPP University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "BPP University College of Professional Studies"
    ],
    "hesa_itt_code": "214",
    "dttp_id": "123e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10031982",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "The London Institute of Banking & Finance",
    "suggestion_synonyms": [
      "LIBF"
    ],
    "match_synonyms": [
      "London Institute of Banking and Finance",
      "London Institute of Banking & Finance"
    ],
    "hesa_itt_code": "217",
    "dttp_id": "fe3e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10008289",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "The University of Law",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "218",
    "dttp_id": "183f182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10039956",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Richmond, The American International University in London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "219",
    "dttp_id": "c73e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10005470",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Institute of Contemporary Music Performance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "220",
    "dttp_id": "5d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Moorlands College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "221",
    "dttp_id": "993e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Mattersey Hall",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "225",
    "dttp_id": "933e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London School of Science and Technology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "227",
    "dttp_id": "893e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Liverpool School of Tropical Medicine",
    "suggestion_synonyms": [
      "LSTM"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "228",
    "dttp_id": "753e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10003958",
    "highest_level_of_degree_awarded": "Research"
  },
  {
    "name": "The National Film and Television School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "229",
    "dttp_id": "0b3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Plymouth College of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Plymouth College of Art and Design"
    ],
    "hesa_itt_code": "230",
    "dttp_id": "b53e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10005127",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "BIMM Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "BIMM Limited",
      "British and Irish Modern Music Institute"
    ],
    "hesa_itt_code": "232",
    "dttp_id": "0e3e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10037544",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "ICON College of Technology and Management",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "236",
    "dttp_id": "593e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Kensington College of Business",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "237",
    "dttp_id": "693e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Bloomsbury Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "238",
    "dttp_id": "103e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Mountview Academy of Theatre Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "239",
    "dttp_id": "9b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Nazarene Theological College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "240",
    "dttp_id": "9f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The London College UCK",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "243",
    "dttp_id": "fc3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Arts Educational Schools",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "244",
    "dttp_id": "083e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Mont Rose College of Management and Sciences",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "246",
    "dttp_id": "973e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Norland College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "247",
    "dttp_id": "aa3e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10008397",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "ForMission",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "248",
    "dttp_id": "423e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London Churchill College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "250",
    "dttp_id": "793e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Empire College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "252",
    "dttp_id": "3a3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Fairfield School of Business",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "254",
    "dttp_id": "403e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London College of Business Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "255",
    "dttp_id": "7b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London School of Management Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "256",
    "dttp_id": "873e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London School of Theology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "257",
    "dttp_id": "8b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "St Mellitus College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "258",
    "dttp_id": "d93e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Nelson College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "260",
    "dttp_id": "a13e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Northern College of Acupuncture",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "261",
    "dttp_id": "ad3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Pearson College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "262",
    "dttp_id": "b33e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Royal Academy of Dance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "263",
    "dttp_id": "cb3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "SAE Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "265",
    "dttp_id": "d33e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Academy of Live and Recorded Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "269",
    "dttp_id": "f63d182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The College of Integrated Chinese Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "270",
    "dttp_id": "ed3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The City College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "271",
    "dttp_id": "e93e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Met Film School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "272",
    "dttp_id": "953e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London Studio Centre",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "274",
    "dttp_id": "8d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London School of Academics",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "276",
    "dttp_id": "813e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Regent College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "278",
    "dttp_id": "bd3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Brit College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "280",
    "dttp_id": "163e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Futureworks",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "281",
    "dttp_id": "443e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London Bridge Business Academy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "282",
    "dttp_id": "773e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "St Patrick's International College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "283",
    "dttp_id": "dd3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Chicken Shed Theatre Company",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "284",
    "dttp_id": "213e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "All Nations Christian College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "285",
    "dttp_id": "fc3d182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Bristol Baptist College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "287",
    "dttp_id": "143e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Cambridge Theological Federation",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "288",
    "dttp_id": "e73e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Christie's Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "291",
    "dttp_id": "253e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "City and Guilds of London Art School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "292",
    "dttp_id": "273e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Cliff College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "293",
    "dttp_id": "2b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University College of Estate Management",
    "suggestion_synonyms": [
      "UCEM"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "294",
    "dttp_id": "263f182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10008173",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Waverley Abbey College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "295",
    "dttp_id": "2a3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "ICOM",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "297",
    "dttp_id": "573e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Islamic College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "298",
    "dttp_id": "fa3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Istituto Marangoni",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "299",
    "dttp_id": "613e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Kaplan Open Learning",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "300",
    "dttp_id": "673e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "KLC School of Design",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "301",
    "dttp_id": "6b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London Film School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "304",
    "dttp_id": "7f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Luther King House Educational Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "306",
    "dttp_id": "8f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Oxford Business College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "308",
    "dttp_id": "b13e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Point Blank Music School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "309",
    "dttp_id": "b73e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Spurgeon's College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "310",
    "dttp_id": "d53e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "St Nicholas Montessori Training",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "311",
    "dttp_id": "db3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "West Dean College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "312",
    "dttp_id": "2c3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Oak Hill College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "313",
    "dttp_id": "af3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Metanoia Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "314",
    "dttp_id": "073f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Queen's Foundation for Ecumenical Theological Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "315",
    "dttp_id": "0f3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Salvation Army",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "316",
    "dttp_id": "113f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Trinity College Bristol",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "317",
    "dttp_id": "1e3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Matrix College of Counselling and Psychotherapy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "320",
    "dttp_id": "913e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Minster Centre",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "321",
    "dttp_id": "093f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "AA School of Architecture",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "323",
    "dttp_id": "f43d182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10008071",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Court Theatre Training Company",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "326",
    "dttp_id": "323e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Regents Theological College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "327",
    "dttp_id": "bf3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London School of Commerce & IT",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "328",
    "dttp_id": "833e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Apex College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "329",
    "dttp_id": "003e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "New College of the Humanities",
    "suggestion_synonyms": [
      "NCH"
    ],
    "match_synonyms": [
      "NCH at Northeastern",
      "New College of the Humanities at Northeastern"
    ],
    "hesa_itt_code": "330",
    "dttp_id": "a33e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10048199",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "The Markfield Institute of Higher Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "331",
    "dttp_id": "053f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Cambridge Arts and Sciences",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "332",
    "dttp_id": "1a3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Arden University",
    "suggestion_synonyms": [
      "Resource development international"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "333",
    "dttp_id": "043e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10005451",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Grŵp Llandrillo Menai",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "334",
    "dttp_id": "4d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Grŵp NPTC Group",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "335",
    "dttp_id": "4f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Gower College Swansea",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "336",
    "dttp_id": "4b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University College of Osteopathy",
    "suggestion_synonyms": [
      "UCO"
    ],
    "match_synonyms": [
      "The University College of Osteopathy"
    ],
    "hesa_itt_code": "337",
    "dttp_id": "163f182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10000936"
  },
  {
    "name": "Christ the Redeemer College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "342",
    "dttp_id": "233e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Leeds Conservatoire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "351",
    "dttp_id": "733e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Hartpury University",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Hartpury College",
      "Hartpury University and Hartpury College"
    ],
    "hesa_itt_code": "352",
    "dttp_id": "533e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10080811",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "Amity Global Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "353",
    "dttp_id": "fe3d182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The London School of Architecture",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "354",
    "dttp_id": "033f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "London College of International Business Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "355",
    "dttp_id": "7d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "LCCM AU UK",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "356",
    "dttp_id": "6f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "ACM Guildford",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "357",
    "dttp_id": "f83d182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Film Education Training Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "359",
    "dttp_id": "f43e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Institute of Ismaili Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "360",
    "dttp_id": "f83e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Newbold College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "361",
    "dttp_id": "a83e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Le Cordon Bleu",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "362",
    "dttp_id": "713e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Global Banking School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "363",
    "dttp_id": "493e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "BCNO",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "400",
    "dttp_id": "0c3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "LAMDA",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Lamda Limited"
    ],
    "hesa_itt_code": "401",
    "dttp_id": "6d3e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10003758"
  },
  {
    "name": "Royal Academy of Dramatic Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "402",
    "dttp_id": "cd3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Study Group",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "403",
    "dttp_id": "e13e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Royal School of Needlework",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "404",
    "dttp_id": "d13e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Sotheby’s Institute of Art",
    "suggestion_synonyms": [
      "Institute Of Art - London"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "405",
    "dttp_id": "5b3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Hult International Business School",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Ashridge Business School"
    ],
    "hesa_itt_code": "406",
    "dttp_id": "553e182c-1425-ec11-b6e6-000d3adf095a",
    "comment": "Ashbridge Business School merged with Hult International Business school in 2015",
    "ukprn": "10008899",
    "highest_level_of_degree_awarded": "Taught"
  },
  {
    "name": "The Sherwood Psychotherapy Training Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "407",
    "dttp_id": "133f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University Centre Peterborough",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "408",
    "dttp_id": "223f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Central Film School London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "409",
    "dttp_id": "1f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "ESCP Europe Business School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "410",
    "dttp_id": "3c3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Council of the Inns of Court",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "412",
    "dttp_id": "f23e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Navitas UK Holdings",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "413",
    "dttp_id": "9d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The Prince's Foundation",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "414",
    "dttp_id": "0d3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Dyson Technical Training",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "415",
    "dttp_id": "383e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10067355"
  },
  {
    "name": "Results Consortium",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "416",
    "dttp_id": "c53e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "JSA Education Group.",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "417",
    "dttp_id": "633e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University Centre Quayside",
    "suggestion_synonyms": [
      "UCQ"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "418",
    "dttp_id": "243f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "David Game College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "419",
    "dttp_id": "363e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Dartington Hall Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "420",
    "dttp_id": "343e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "New Model Institute for Technology and Engineering",
    "suggestion_synonyms": [
      "NMITE"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "421",
    "dttp_id": "a53e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Kaplan International Colleges U.K.",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "422",
    "dttp_id": "653e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "INTO University Partnerships",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "423",
    "dttp_id": "5f3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The College of Osteopaths",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "424",
    "dttp_id": "ef3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Regent’s University London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "425",
    "dttp_id": "c33e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10086591"
  },
  {
    "name": "Backstage Academy (Training)",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "426",
    "dttp_id": "0a3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "British Academy of Jewellery",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "427",
    "dttp_id": "183e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The London Interdisciplinary School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "428",
    "dttp_id": "013f182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10067623",
    "highest_level_of_degree_awarded": "Bachelor's - New DAPs"
  },
  {
    "name": "Raindance Educational Services",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "429",
    "dttp_id": "bb3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "The College of Health",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "430",
    "dttp_id": "eb3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "CEG UFP",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "431",
    "dttp_id": "1d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Applied Business Academy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "432",
    "dttp_id": "023e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Tavistock and Portman NHS Foundation Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "433",
    "dttp_id": "e33e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "University Academy 92",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "434",
    "dttp_id": "203f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "TEDI-London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "435",
    "dttp_id": "e53e182c-1425-ec11-b6e6-000d3adf095a",
    "ukprn": "10083403",
    "highest_level_of_degree_awarded": "Taught - New DAPs"
  },
  {
    "name": "College of Legal Practice",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "436",
    "dttp_id": "2d3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "ThinkSpace Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "437",
    "dttp_id": "1c3f182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "European School of Osteopathy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "7009",
    "dttp_id": "3e3e182c-1425-ec11-b6e6-000d3adf095a"
  },
  {
    "name": "Council for National Academic Awards",
    "suggestion_synonyms": [
      "CNAA",
      "Westminster College",
      "West London Institute of HE"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "9065",
    "dttp_id": null,
    "closed": "1993",
    "comment": "The Council for National Academic Awards (CNAA) was the national degree-awarding authority in the United Kingdom from 1965 until its dissolution on 20 April 1993"
  },
  {
    "name": "NCG (Newcastle College Group)",
    "suggestion_synonyms": [
      "Newcastle College"
    ],
    "match_synonyms": [
      "Newcatle College Group"
    ],
    "hesa_itt_code": null,
    "dttp_id": "20e5a08c-ee97-e711-80d8-005056ac45bb",
    "ukprn": "10004599"
  },
  {
    "name": "University of Wales",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Prifysgol Cymru",
      "University of Wales (central functions)",
      "Royal Welsh College of Music and Drama"
    ],
    "hesa_itt_code": "86",
    "dttp_id": "6a228041-7042-e811-80ff-3863bb3640b8",
    "closed": "2017"
  },
  {
    "name": "University of Glamorgan",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "90",
    "dttp_id": "b49fd8d5-3829-e911-a82f-000d3ab0d976",
    "comment": "Merged with Newport to become University of South Wales in 2013",
    "closed": "2013"
  },
  {
    "name": "TEC Partnership",
    "suggestion_synonyms": [
      "GIFHE",
      "Grimsby Institute",
      "Grimsby Institute of Further and Higher Education"
      "Grimsby Institute of Further & Higher Education"
    ],
    "match_synonyms": [],
    "hesa_itt_code": null,
    "dttp_id": null,
    "comment": "Given degree awarding powers in 2021",
    "ukprn": "10007938"
  },
  {
    "name": "WCG (Warwickshire College Group)",
    "suggestion_synonyms": [],
    "match_synonyms": [
      "Warwickshire College",
      "Warwickshire College Group"
    ],
    "hesa_itt_code": null,
    "dttp_id": null,
    "ukprn": "10007859",
    "comment": "Given degree awarding powers in 2021"
  }
]
