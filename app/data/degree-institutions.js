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
// The dttp_id refers to the ID for the type in the Database of Trainee Teachers, where known.
// These are not necessarily unique, as two institutions may map to the same ID.
//
// The hesa_itt_code is used for reporting ITT data to the Higher Education Statistics
// Agency (HESA) in the DEGEST field - see reference here:
// https://www.hesa.ac.uk/collection/c21053/e/degest
//
module.exports = [
  {
    "name": "The Open University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "1",
    "dttp_id": "5c9e1d2d-3fa2-e811-812b-5065f38ba241"
  },
  {
    "name": "Cranfield University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "2",
    "dttp_id": "4e9e1d2d-3fa2-e811-812b-5065f38ba241"
  },
  {
    "name": "Royal College of Art",
    "suggestion_synonyms": [
      "RCA"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "3",
    "dttp_id": "64407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The College of Guidance Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "4",
    "dttp_id": null
  },
  {
    "name": "The Royal College of Nursing",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "6",
    "dttp_id": null
  },
  {
    "name": "Bishop Grosseteste University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "7",
    "dttp_id": "ca70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Bretton Hall College of HE",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "8",
    "dttp_id": null
  },
  {
    "name": "Buckinghamshire New University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "9",
    "dttp_id": "bec53e05-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The Royal Central School of Speech and Drama",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "10",
    "dttp_id": "d90a4e73-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "University of Chester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "11",
    "dttp_id": "0871f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Canterbury Christ Church University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "12",
    "dttp_id": "ce70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "York St John University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "13",
    "dttp_id": "4c71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "University of St Mark and St John",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "14",
    "dttp_id": null
  },
  {
    "name": "Dartington College of Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "15",
    "dttp_id": "34f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Edge Hill University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "16",
    "dttp_id": "d070f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Falmouth University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "17",
    "dttp_id": "6f955cae-3ea2-e811-812b-5065f38ba241"
  },
  {
    "name": "Harper Adams University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "18",
    "dttp_id": "1b369414-75d9-e911-a863-000d3ab0da57"
  },
  {
    "name": "Homerton College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "19",
    "dttp_id": null
  },
  {
    "name": "Kent Institute of Art and Design",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "20",
    "dttp_id": "2f6e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Winchester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "21",
    "dttp_id": "4471f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "La Sainte Union College of HE",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "22",
    "dttp_id": null
  },
  {
    "name": "Liverpool Hope University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "23",
    "dttp_id": "dc70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "University of the Arts London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "24",
    "dttp_id": "ca781c39-3fa2-e811-812b-5065f38ba241"
  },
  {
    "name": "Loughborough College of Art and Design",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "25",
    "dttp_id": null
  },
  {
    "name": "University of Bedfordshire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "26",
    "dttp_id": "fc70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Northampton",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "27",
    "dttp_id": "2871f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Newman University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "28",
    "dttp_id": "ec70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "North Riding College Higher Education Corporation",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "29",
    "dttp_id": null
  },
  {
    "name": "Ravensbourne",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "30",
    "dttp_id": "4ff3791d-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Roehampton University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "31",
    "dttp_id": "f270f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Rose Bruford College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "32",
    "dttp_id": "5af3791d-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal Academy of Music",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "33",
    "dttp_id": "61f3791d-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal College of Music",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "34",
    "dttp_id": "49e01caa-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "Royal Northern College of Music",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "35",
    "dttp_id": "74407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Salford College of Technology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "36",
    "dttp_id": "81407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Southampton Solent University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "37",
    "dttp_id": "c10b1d33-3fa2-e811-812b-5065f38ba241"
  },
  {
    "name": "University of Cumbria",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "38",
    "dttp_id": "0c71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "St Mary's University, Twickenham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "39",
    "dttp_id": "f670f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Leeds Trinity University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "40",
    "dttp_id": "da70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Trinity Laban Conservatoire of Music and Dance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "41",
    "dttp_id": "054b9247-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Westminster College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "42",
    "dttp_id": null
  },
  {
    "name": "West London Institute of HE",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "43",
    "dttp_id": "c323a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The Surrey Institute of Art and Design, University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "44",
    "dttp_id": "c4db7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Winchester School of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "45",
    "dttp_id": "d123a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Worcester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "46",
    "dttp_id": "4871f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Anglia Ruskin University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "47",
    "dttp_id": "387af34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Bath Spa University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "48",
    "dttp_id": "c670f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Bolton",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "49",
    "dttp_id": "dfdb7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Bournemouth University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "50",
    "dttp_id": "b1c53e05-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Brighton",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "51",
    "dttp_id": "0071f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Birmingham City University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "52",
    "dttp_id": "c870f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Central Lancashire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "53",
    "dttp_id": "59e01caa-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "University of Gloucestershire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "54",
    "dttp_id": "1871f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "London Guildhall University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "55",
    "dttp_id": "711c7817-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Coventry University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "56",
    "dttp_id": "1ff35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Derby",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "57",
    "dttp_id": "0e71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of East London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "58",
    "dttp_id": "1471f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Greenwich",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "59",
    "dttp_id": "1a71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "University of Hertfordshire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "60",
    "dttp_id": "1c71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Huddersfield",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "61",
    "dttp_id": "1e71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Lincoln",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "62",
    "dttp_id": "035b7f3b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Kingston University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "63",
    "dttp_id": "d670f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Leeds Beckett University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "64",
    "dttp_id": "d870f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Liverpool John Moores University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "65",
    "dttp_id": "de70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The Manchester Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "66",
    "dttp_id": "e670f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Middlesex University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "67",
    "dttp_id": "e870f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "De Montfort University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "68",
    "dttp_id": "f30a4e73-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "University of Northumbria at Newcastle",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "69",
    "dttp_id": "2a71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of North London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "70",
    "dttp_id": "235b7f3b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The Nottingham Trent University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "71",
    "dttp_id": "ee70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Oxford Brookes University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "72",
    "dttp_id": "f070f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "University of Plymouth",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "73",
    "dttp_id": "3071f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Portsmouth",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "74",
    "dttp_id": "3271f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Sheffield Hallam University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "75",
    "dttp_id": "f470f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "London South Bank University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "76",
    "dttp_id": "e270f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Staffordshire University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "77",
    "dttp_id": "f870f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Sunderland",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "78",
    "dttp_id": "3c71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Teesside University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "79",
    "dttp_id": "2a96fc9d-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "The University of West London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "80",
    "dttp_id": "84228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of the West of England, Bristol",
    "suggestion_synonyms": ["UWE Bristol"],
    "match_synonyms": [],
    "hesa_itt_code": "81",
    "dttp_id": "4071f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Chichester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "82",
    "dttp_id": "0a71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Westminster",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "83",
    "dttp_id": "7eda4db6-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "Wimbledon School of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "84",
    "dttp_id": "cb23a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Wolverhampton",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "85",
    "dttp_id": "4671f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Wales, Newport",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "86",
    "dttp_id": "73228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Glyndŵr University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "87",
    "dttp_id": "57f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Coleg Normal",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "88",
    "dttp_id": null
  },
  {
    "name": "Cardiff Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "89",
    "dttp_id": "07f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of South Wales",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "90",
    "dttp_id": "8723a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Swansea Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "91",
    "dttp_id": null
  },
  {
    "name": "Trinity University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "92",
    "dttp_id": "0e4b9247-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Duncan of Jordanstone College of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "94",
    "dttp_id": null
  },
  {
    "name": "University of Abertay Dundee",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "95",
    "dttp_id": null
  },
  {
    "name": "Edinburgh College of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "96",
    "dttp_id": null
  },
  {
    "name": "Glasgow School of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "97",
    "dttp_id": "51f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Moray House Institute of Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "98",
    "dttp_id": null
  },
  {
    "name": "Northern College of Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "99",
    "dttp_id": null
  },
  {
    "name": "Queen Margaret University, Edinburgh",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "100",
    "dttp_id": "40f3791d-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal Conservatoire of Scotland",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "101",
    "dttp_id": null
  },
  {
    "name": "St Andrew's College of Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "102",
    "dttp_id": null
  },
  {
    "name": "The Scottish College of Textiles",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "103",
    "dttp_id": null
  },
  {
    "name": "The Robert Gordon University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "104",
    "dttp_id": null
  },
  {
    "name": "The University of the West of Scotland",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "105",
    "dttp_id": null
  },
  {
    "name": "Glasgow Caledonian University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "106",
    "dttp_id": null
  },
  {
    "name": "Edinburgh Napier University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "107",
    "dttp_id": "43f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Aston University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "108",
    "dttp_id": "513e2cff-6f42-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Bath",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "109",
    "dttp_id": "3e7af34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Birmingham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "110",
    "dttp_id": "fe70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Bradford",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "111",
    "dttp_id": "7fed6e2f-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Bristol",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "112",
    "dttp_id": "0271f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Brunel University London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "113",
    "dttp_id": "cc70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Cambridge",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "114",
    "dttp_id": "0671f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "City, University of London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "115",
    "dttp_id": "7bdb7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Durham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "116",
    "dttp_id": "1071f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of East Anglia",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "117",
    "dttp_id": "1271f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Essex",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "118",
    "dttp_id": "5aeb7735-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Exeter",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "119",
    "dttp_id": "1671f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Hull",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "120",
    "dttp_id": "2071f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Keele",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "121",
    "dttp_id": "3a7af34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Kent",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "122",
    "dttp_id": "99eb7735-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Lancaster",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "123",
    "dttp_id": "a4eb7735-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Leeds",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "124",
    "dttp_id": "2271f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Leicester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "125",
    "dttp_id": "2471f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Liverpool",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "126",
    "dttp_id": "f58f17b0-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "Birkbeck College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "127",
    "dttp_id": "9fc53e05-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "British Postgraduate Medical Federation",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "128",
    "dttp_id": null
  },
  {
    "name": "Charing Cross and Westminster Medical School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "129",
    "dttp_id": null
  },
  {
    "name": "Goldsmiths College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "131",
    "dttp_id": "d270f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Imperial College of Science, Technology and Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "132",
    "dttp_id": "0b9017b0-a141-e811-80ff-3863bb351d40"
  },
  {
    "name": "Institute of Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "133",
    "dttp_id": "dcd0c9d6-e897-e711-80d8-005056ac45bb"
  },
  {
    "name": "King's College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "134",
    "dttp_id": "d470f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "London Business School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "135",
    "dttp_id": "6a1c7817-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The London Hospital Medical College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "136",
    "dttp_id": null
  },
  {
    "name": "London School of Economics and Political Science",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "137",
    "dttp_id": "7d1c7817-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "London School of Hygiene and Tropical Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "138",
    "dttp_id": null
  },
  {
    "name": "Queen Mary University of London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "139",
    "dttp_id": "47f3791d-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal Free Hospital School of Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "140",
    "dttp_id": null
  },
  {
    "name": "Royal Holloway and Bedford New College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "141",
    "dttp_id": "6c407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal Postgraduate Medical School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "142",
    "dttp_id": null
  },
  {
    "name": "The Royal Veterinary College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "143",
    "dttp_id": "b6db7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "St Bartholomew's Hospital Medical College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "144",
    "dttp_id": null
  },
  {
    "name": "St George's Hospital Medical School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "145",
    "dttp_id": "94407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The School of Oriental and African Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "146",
    "dttp_id": "bddb7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The School of Pharmacy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "147",
    "dttp_id": null
  },
  {
    "name": "United Medical and Dental Schools, Guy's and St Thomas's Hospitals",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "148",
    "dttp_id": null
  },
  {
    "name": "University College London",
    "suggestion_synonyms": [
      "UCL"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "149",
    "dttp_id": "a27af34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Wye College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "150",
    "dttp_id": null
  },
  {
    "name": "University of London (Institutes and activities)",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "151",
    "dttp_id": null
  },
  {
    "name": "Loughborough University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "152",
    "dttp_id": "e470f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The Victoria Manchester University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "153",
    "dttp_id": null
  },
  {
    "name": "University of Newcastle-upon-Tyne",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "154",
    "dttp_id": "ea70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "University of Nottingham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "155",
    "dttp_id": "2c71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Oxford",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "156",
    "dttp_id": "2e71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Reading",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "157",
    "dttp_id": "3471f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Salford",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "158",
    "dttp_id": "425b7f3b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Sheffield",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "159",
    "dttp_id": "3671f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Southampton",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "160",
    "dttp_id": "4f5b7f3b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Surrey",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "161",
    "dttp_id": "58228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Sussex",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "162",
    "dttp_id": "3e71f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Warwick",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "163",
    "dttp_id": "4271f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of York",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "164",
    "dttp_id": "4a71f34a-2887-e711-80d8-005056ac45bb"
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
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "167",
    "dttp_id": "d7ed6e2f-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Glasgow",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "168",
    "dttp_id": "6ceb7735-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Strathclyde",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "169",
    "dttp_id": "42228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Aberdeen",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "170",
    "dttp_id": "cbdb7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Heriot-Watt University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "171",
    "dttp_id": "146e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Dundee",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "172",
    "dttp_id": "bbed6e2f-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of St Andrews",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "173",
    "dttp_id": "34228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The University of Stirling",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "174",
    "dttp_id": "3b228041-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "SRUC",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "175",
    "dttp_id": null
  },
  {
    "name": "University of Wales Trinity Saint David",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "176",
    "dttp_id": "b123a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Aberystwyth University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "177",
    "dttp_id": "443e2cff-6f42-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Bangor University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "178",
    "dttp_id": "92c53e05-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Cardiff University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "179",
    "dttp_id": "0ff35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Swansea University",
    "suggestion_synonyms": [
      "University of Wales, Swansea"
    ],
    "match_synonyms": [],
    "hesa_itt_code": "180",
    "dttp_id": "b3407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Wales College of Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "181",
    "dttp_id": null
  },
  {
    "name": "Royal Welsh College of Music and Drama",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "182",
    "dttp_id": "7b407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Welsh Agricultural College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "183",
    "dttp_id": null
  },
  {
    "name": "The Queen's University of Belfast",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "184",
    "dttp_id": "a7db7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University of Ulster",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "185",
    "dttp_id": "a823a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Westhill College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "187",
    "dttp_id": null
  },
  {
    "name": "The Institute of Cancer Research",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "188",
    "dttp_id": null
  },
  {
    "name": "Writtle College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "189",
    "dttp_id": "d723a753-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Norwich University of the Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "190",
    "dttp_id": "a01c7817-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Northern School of Contemporary Dance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "191",
    "dttp_id": "9a1c7817-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Cumbria Institute of the Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "192",
    "dttp_id": "2ef35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Stranmillis University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "193",
    "dttp_id": null
  },
  {
    "name": "St Mary's University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "194",
    "dttp_id": "9b407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Royal Agricultural University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "195",
    "dttp_id": null
  },
  {
    "name": "University of the Highlands and Islands",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "196",
    "dttp_id": null
  },
  {
    "name": "The Arts University Bournemouth",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "197",
    "dttp_id": "c6407223-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Bell College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "198",
    "dttp_id": null
  },
  {
    "name": "Conservatoire for Dance and Drama",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "199",
    "dttp_id": null
  },
  {
    "name": "University College Birmingham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "200",
    "dttp_id": "fa70f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Courtauld Institute of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "201",
    "dttp_id": "18f35f0b-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "London Metropolitan University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "202",
    "dttp_id": "e070f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Buckingham",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "203",
    "dttp_id": "0471f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "The University of Manchester",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "204",
    "dttp_id": "2671f34a-2887-e711-80d8-005056ac45bb"
  },
  {
    "name": "Heythrop College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "205",
    "dttp_id": "1b6e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University for the Creative Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "206",
    "dttp_id": "354b9247-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Leeds College of Music",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "207",
    "dttp_id": "496e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Guildhall School of Music and Drama",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "208",
    "dttp_id": "076e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "The Liverpool Institute for Performing Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "209",
    "dttp_id": "84db7129-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "University Campus Suffolk",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "210",
    "dttp_id": "154b9247-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "Leeds College of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "211",
    "dttp_id": "436e5e11-7042-e811-80ff-3863bb3640b8"
  },
  {
    "name": "AECC University College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "213",
    "dttp_id": null
  },
  {
    "name": "BPP University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "214",
    "dttp_id": null
  },
  {
    "name": "The London Institute of Banking & Finance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "217",
    "dttp_id": null
  },
  {
    "name": "The University of Law",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "218",
    "dttp_id": null
  },
  {
    "name": "Richmond, The American International University in London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "219",
    "dttp_id": null
  },
  {
    "name": "Institute of Contemporary Music Performance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "220",
    "dttp_id": null
  },
  {
    "name": "Moorlands College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "221",
    "dttp_id": null
  },
  {
    "name": "Mattersey Hall",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "225",
    "dttp_id": null
  },
  {
    "name": "London School of Science and Technology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "227",
    "dttp_id": null
  },
  {
    "name": "Liverpool School of Tropical Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "228",
    "dttp_id": null
  },
  {
    "name": "The National Film and Television School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "229",
    "dttp_id": null
  },
  {
    "name": "Plymouth College of Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "230",
    "dttp_id": null
  },
  {
    "name": "BIMM",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "232",
    "dttp_id": null
  },
  {
    "name": "ICON College of Technology and Management",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "236",
    "dttp_id": null
  },
  {
    "name": "Kensington College of Business",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "237",
    "dttp_id": null
  },
  {
    "name": "Bloomsbury Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "238",
    "dttp_id": null
  },
  {
    "name": "Mountview Academy of Theatre Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "239",
    "dttp_id": null
  },
  {
    "name": "Nazarene Theological College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "240",
    "dttp_id": null
  },
  {
    "name": "The London College UCK",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "243",
    "dttp_id": null
  },
  {
    "name": "Arts Educational Schools",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "244",
    "dttp_id": null
  },
  {
    "name": "Mont Rose College of Management and Sciences",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "246",
    "dttp_id": null
  },
  {
    "name": "Norland College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "247",
    "dttp_id": null
  },
  {
    "name": "ForMission",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "248",
    "dttp_id": null
  },
  {
    "name": "London Churchill College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "250",
    "dttp_id": null
  },
  {
    "name": "Empire College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "252",
    "dttp_id": null
  },
  {
    "name": "Fairfield School of Business",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "254",
    "dttp_id": null
  },
  {
    "name": "London College of Business Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "255",
    "dttp_id": null
  },
  {
    "name": "London School of Management Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "256",
    "dttp_id": null
  },
  {
    "name": "London School of Theology",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "257",
    "dttp_id": null
  },
  {
    "name": "St Mellitus College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "258",
    "dttp_id": null
  },
  {
    "name": "Nelson College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "260",
    "dttp_id": null
  },
  {
    "name": "Northern College of Acupuncture",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "261",
    "dttp_id": null
  },
  {
    "name": "Pearson College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "262",
    "dttp_id": null
  },
  {
    "name": "Royal Academy of Dance",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "263",
    "dttp_id": null
  },
  {
    "name": "SAE Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "265",
    "dttp_id": null
  },
  {
    "name": "Academy of Live and Recorded Arts",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "269",
    "dttp_id": null
  },
  {
    "name": "The College of Integrated Chinese Medicine",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "270",
    "dttp_id": null
  },
  {
    "name": "The City College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "271",
    "dttp_id": null
  },
  {
    "name": "Met Film School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "272",
    "dttp_id": null
  },
  {
    "name": "London Studio Centre",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "274",
    "dttp_id": null
  },
  {
    "name": "London School of Academics",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "276",
    "dttp_id": null
  },
  {
    "name": "Regent College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "278",
    "dttp_id": null
  },
  {
    "name": "Brit College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "280",
    "dttp_id": null
  },
  {
    "name": "Futureworks",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "281",
    "dttp_id": null
  },
  {
    "name": "London Bridge Business Academy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "282",
    "dttp_id": null
  },
  {
    "name": "St Patrick's International College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "283",
    "dttp_id": null
  },
  {
    "name": "Chicken Shed Theatre Company",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "284",
    "dttp_id": null
  },
  {
    "name": "All Nations Christian College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "285",
    "dttp_id": null
  },
  {
    "name": "Bristol Baptist College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "287",
    "dttp_id": null
  },
  {
    "name": "The Cambridge Theological Federation",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "288",
    "dttp_id": null
  },
  {
    "name": "Christie's Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "291",
    "dttp_id": null
  },
  {
    "name": "City and Guilds of London Art School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "292",
    "dttp_id": null
  },
  {
    "name": "Cliff College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "293",
    "dttp_id": null
  },
  {
    "name": "University College of Estate Management",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "294",
    "dttp_id": null
  },
  {
    "name": "Waverley Abbey College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "295",
    "dttp_id": null
  },
  {
    "name": "ICOM",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "297",
    "dttp_id": null
  },
  {
    "name": "The Islamic College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "298",
    "dttp_id": null
  },
  {
    "name": "Istituto Marangoni",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "299",
    "dttp_id": null
  },
  {
    "name": "Kaplan Open Learning",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "300",
    "dttp_id": null
  },
  {
    "name": "KLC School of Design",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "301",
    "dttp_id": null
  },
  {
    "name": "London Film School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "304",
    "dttp_id": null
  },
  {
    "name": "Luther King House Educational Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "306",
    "dttp_id": null
  },
  {
    "name": "Oxford Business College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "308",
    "dttp_id": null
  },
  {
    "name": "Point Blank Music School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "309",
    "dttp_id": null
  },
  {
    "name": "Spurgeon's College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "310",
    "dttp_id": null
  },
  {
    "name": "St Nicholas Montessori Training",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "311",
    "dttp_id": null
  },
  {
    "name": "West Dean College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "312",
    "dttp_id": null
  },
  {
    "name": "Oak Hill College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "313",
    "dttp_id": null
  },
  {
    "name": "The Metanoia Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "314",
    "dttp_id": null
  },
  {
    "name": "The Queen's Foundation for Ecumenical Theological Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "315",
    "dttp_id": null
  },
  {
    "name": "The Salvation Army",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "316",
    "dttp_id": null
  },
  {
    "name": "Trinity College Bristol",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "317",
    "dttp_id": null
  },
  {
    "name": "Matrix College of Counselling and Psychotherapy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "320",
    "dttp_id": null
  },
  {
    "name": "The Minster Centre",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "321",
    "dttp_id": null
  },
  {
    "name": "AA School of Architecture",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "323",
    "dttp_id": null
  },
  {
    "name": "Court Theatre Training Company",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "326",
    "dttp_id": null
  },
  {
    "name": "Regents Theological College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "327",
    "dttp_id": null
  },
  {
    "name": "London School of Commerce & IT",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "328",
    "dttp_id": null
  },
  {
    "name": "Apex College London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "329",
    "dttp_id": null
  },
  {
    "name": "New College of the Humanities",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "330",
    "dttp_id": null
  },
  {
    "name": "The Markfield Institute of Higher Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "331",
    "dttp_id": null
  },
  {
    "name": "Cambridge Arts and Sciences",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "332",
    "dttp_id": null
  },
  {
    "name": "Arden University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "333",
    "dttp_id": null
  },
  {
    "name": "Grŵp Llandrillo Menai",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "334",
    "dttp_id": null
  },
  {
    "name": "Grŵp NPTC Group",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "335",
    "dttp_id": null
  },
  {
    "name": "Gower College Swansea",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "336",
    "dttp_id": null
  },
  {
    "name": "The University College of Osteopathy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "337",
    "dttp_id": null
  },
  {
    "name": "Christ the Redeemer College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "342",
    "dttp_id": null
  },
  {
    "name": "Leeds Conservatoire",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "351",
    "dttp_id": null
  },
  {
    "name": "Hartpury University",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "352",
    "dttp_id": null
  },
  {
    "name": "Amity Global Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "353",
    "dttp_id": null
  },
  {
    "name": "The London School of Architecture",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "354",
    "dttp_id": null
  },
  {
    "name": "London College of International Business Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "355",
    "dttp_id": null
  },
  {
    "name": "LCCM AU UK",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "356",
    "dttp_id": null
  },
  {
    "name": "ACM Guildford",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "357",
    "dttp_id": null
  },
  {
    "name": "The Film Education Training Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "359",
    "dttp_id": null
  },
  {
    "name": "The Institute of Ismaili Studies",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "360",
    "dttp_id": null
  },
  {
    "name": "Newbold College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "361",
    "dttp_id": null
  },
  {
    "name": "Le Cordon Bleu",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "362",
    "dttp_id": null
  },
  {
    "name": "Global Banking School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "363",
    "dttp_id": null
  },
  {
    "name": "BCNO",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "400",
    "dttp_id": null
  },
  {
    "name": "LAMDA",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "401",
    "dttp_id": null
  },
  {
    "name": "Royal Academy of Dramatic Art",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "402",
    "dttp_id": null
  },
  {
    "name": "Study Group",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "403",
    "dttp_id": null
  },
  {
    "name": "Royal School of Needlework",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "404",
    "dttp_id": null
  },
  {
    "name": "Institute Of Art - London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "405",
    "dttp_id": null
  },
  {
    "name": "Hult International Business School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "406",
    "dttp_id": null
  },
  {
    "name": "The Sherwood Psychotherapy Training Institute",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "407",
    "dttp_id": null
  },
  {
    "name": "University Centre Peterborough",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "408",
    "dttp_id": null
  },
  {
    "name": "Central Film School London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "409",
    "dttp_id": null
  },
  {
    "name": "ESCP Europe Business School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "410",
    "dttp_id": null
  },
  {
    "name": "The Council of the Inns of Court",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "412",
    "dttp_id": null
  },
  {
    "name": "Navitas UK Holdings",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "413",
    "dttp_id": null
  },
  {
    "name": "The Prince's Foundation",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "414",
    "dttp_id": null
  },
  {
    "name": "Dyson Technical Training",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "415",
    "dttp_id": null
  },
  {
    "name": "Results Consortium",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "416",
    "dttp_id": null
  },
  {
    "name": "JSA Education Group.",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "417",
    "dttp_id": null
  },
  {
    "name": "University Centre Quayside",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "418",
    "dttp_id": null
  },
  {
    "name": "David Game College",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "419",
    "dttp_id": null
  },
  {
    "name": "Dartington Hall Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "420",
    "dttp_id": null
  },
  {
    "name": "New Model Institute for Technology and Engineering",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "421",
    "dttp_id": null
  },
  {
    "name": "Kaplan International Colleges U.K.",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "422",
    "dttp_id": null
  },
  {
    "name": "INTO University Partnerships",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "423",
    "dttp_id": null
  },
  {
    "name": "The College of Osteopaths",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "424",
    "dttp_id": null
  },
  {
    "name": "Regent's University London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "425",
    "dttp_id": null
  },
  {
    "name": "Backstage Academy (Training)",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "426",
    "dttp_id": null
  },
  {
    "name": "British Academy of Jewellery",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "427",
    "dttp_id": null
  },
  {
    "name": "The London Interdisciplinary School",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "428",
    "dttp_id": null
  },
  {
    "name": "Raindance Educational Services",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "429",
    "dttp_id": null
  },
  {
    "name": "The College of Health",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "430",
    "dttp_id": null
  },
  {
    "name": "CEG UFP",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "431",
    "dttp_id": null
  },
  {
    "name": "Applied Business Academy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "432",
    "dttp_id": null
  },
  {
    "name": "Tavistock and Portman NHS Foundation Trust",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "433",
    "dttp_id": null
  },
  {
    "name": "University Academy 92",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "434",
    "dttp_id": null
  },
  {
    "name": "TEDI-London",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "435",
    "dttp_id": null
  },
  {
    "name": "College of Legal Practice",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "436",
    "dttp_id": null
  },
  {
    "name": "ThinkSpace Education",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "437",
    "dttp_id": null
  },
  {
    "name": "European School of Osteopathy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "7009",
    "dttp_id": null
  },
  {
    "name": "Council for National Academic Awards",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": "9065",
    "dttp_id": null
  },
  {
    "name": "Manchester Health Academy",
    "suggestion_synonyms": [],
    "match_synonyms": [],
    "hesa_itt_code": null,
    "dttp_id": "3d0517a7-a441-e811-80fd-3863bb349ac0"
  }
]
