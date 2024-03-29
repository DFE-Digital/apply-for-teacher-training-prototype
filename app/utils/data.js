const courses = [
  {
    title: 'Art and Design (2NJL)',
    qualification: 'QTS full time'
  },
  {
    title: 'Biology (83SL)',
    qualification: 'QTS full time'
  },
  {
    title: 'Chemistry (8FYF)',
    qualification: 'QTS full time'
  },
  {
    title: 'Computing (20SY)',
    qualification: 'QTS full time'
  },
  {
    title: 'Design and Technology (1L0D)',
    qualification: 'QTS full time'
  },
  {
    title: 'English (4J7S)',
    qualification: 'QTS full time'
  },
  {
    title: 'English (73LS)',
    qualification: 'QTS full time with salary'
  },
  {
    title: 'French (84TX)',
    qualification: 'QTS full time'
  },
  {
    title: 'French with Spanish (94PF)',
    qualification: 'QTS full time'
  },
  {
    title: 'French with Italian (09LF)',
    qualification: 'QTS full time'
  },
  {
    title: 'History (2L5D)',
    qualification: 'QTS full time'
  },
  {
    title: 'Mathematics (8S0D)',
    qualification: 'QTS full time'
  },
  {
    title: 'Music (M4FP)',
    qualification: 'QTS full time'
  },
  {
    title: 'Physics (1A6W)',
    qualification: 'QTS full time'
  },
  {
    title: 'Physical education (94YD)',
    qualification: 'QTS full time'
  },
  {
    title: 'Physical education with English (945X)',
    qualification: 'QTS full time'
  },
  {
    title: 'Engineers teach physics (83PE)',
    qualification: 'QTS full time'
  },
  {
    title: 'Primary (3-7) (7S9D)',
    qualification: 'QTS full time'
  },
  {
    title: 'Primary (5-11) (63KD)',
    qualification: 'QTS full time'
  },
  {
    title: 'Primary with mathematics (3-7) (73LD)',
    qualification: 'QTS full time'
  },
  {
    title: 'Primary with mathematics (5-11) (945J)',
    qualification: 'QTS full time'
  },
  {
    title: 'Primary with science (5-11) (84DP)',
    qualification: 'QTS full time'
  },
  {
    title: 'Primary with SEND (74U1)',
    qualification: 'QTS full time'
  },
  {
    title: 'Religious education (94UD)',
    qualification: 'QTS full time'
  },
  {
    title: 'Spanish (03YD)',
    qualification: 'QTS full time'
  }
]

const providers = [
  'Alban Federation SCITT',
  'Ambition Institute',
  'Anglia Ruskin University',
  'Bluecoat SCITT Alliance Nottingham',
  'ARK Teacher Training',
  'Bath Spa University',
  'NELTA',
  'Best Practice Network',
  'Birmingham City University',
  'Bishop Challoner Training School',
  'Bishop Grosseteste University',
  'London District East SCITT',
  'Mid Essex Initial Teacher Training',
  'Bright Futures SCITT',
  'Bromley Schools’ Collegiate',
  'Cabot Learning Federation SCITT',
  'Canterbury Christ Church University',
  'Cheshire East SCITT',
  'Chiltern Training Group',
  'The National Modern Languages SCITT',
  'Norfolk Teacher Training Centre',
  'Scarborough Teaching Alliance',
  'SCITT in East London Schools (SCITTELS)',
  'Kingsbridge EIP SCITT',
  'Coventry University',
  'Mid Somerset Consortium for Teacher Training',
  'Exchange Teacher Training',
  'Astra SCITT',
  'EAST SCITT',
  'East Midlands Teacher Training Partnership',
  'Durham SCITT',
  'Edge Hill University',
  'Educate Group Initial Teacher Training',
  'Education South West',
  'West Essex SCITT',
  'e-Qualitas',
  'Essex and Thames SCITT',
  'Exceed SCITT',
  'University Centre Farnborough',
  'Future Teacher Training',
  'Goldsmiths, University of London',
  'GORSE SCITT',
  'AA Teamworks West Yorkshire SCITT',
  'Harris ITT',
  'Fareham and Gosport Primary SCITT',
  'Haybridge Alliance SCITT',
  'Tes Institute',
  'Inspiring Future Teachers',
  'Primary Catholic Partnership SCITT',
  'i2i Teaching Partnership SCITT',
  'Chepping View Primary Academy SCITT',
  'Inspiring Leaders',
  'The John Taylor SCITT',
  'King Edward’s Consortium',
  'King’s College London',
  'Kingston University',
  'Leeds Beckett University',
  'Leeds Trinity University',
  'Leicestershire Secondary SCITT',
  'Kent and Medway Training - KMT',
  'Liverpool Hope University',
  'Liverpool John Moores University',
  'London Metropolitan University',
  'London School of Jewish Studies (LSJS)',
  'Loughborough University',
  'Luminate Partnership for ITT',
  'Associated Merseyside Partnership SCITT',
  'Manchester Metropolitan University',
  'Barr Beacon SCITT',
  'The Cambridge Partnership',
  'Mersey Boroughs ITT Partnership',
  'Middlesex University',
  'Mulberry College of Teaching',
  'Newman University',
  'North Lincolnshire SCITT Partnership',
  'North Tyneside SCITT',
  'Northampton Teacher Training Partnership',
  'The Sheffield SCITT',
  'Nottingham Trent University',
  'Nottinghamshire Torch SCITT',
  '2Schools Consortium',
  'Oxford Brookes University',
  'Partnership London SCITT (PLS)',
  'Pioneers Partnership SCITT',
  'Portsmouth Primary SCITT',
  'Prestolee SCITT',
  'REAch Teach Primary Partnership',
  'Red Kite Teacher Training',
  'Oxfordshire Teacher Training',
  'University of Roehampton',
  'Royal Borough of Windsor & Maidenhead SCITT',
  'Sacred Heart Newcastle SCITT',
  'National Institute of Teaching',
  'Sheffield Hallam University',
  'Calderdale & Kirklees Teaching School',
  'Somerset SCITT Consortium',
  'Huddersfield Horizon SCITT',
  'Titan Partnership Ltd',
  'Bradford Birth to 19 SCITT',
  'St. Joseph’s College Stoke Secondary Partnership',
  'St Mary’s College',
  'St Mary’s University',
  'Staffordshire University',
  'Star Teachers SCITT',
  'Stockton Teacher Training Partnership',
  'Stourport SCITT',
  'Suffolk and Norfolk Secondary SCITT',
  'South Birmingham SCITT',
  'Surrey South Farnham SCITT',
  'Devon Primary SCITT',
  'Teach First',
  'Poole SCITT',
  'Teaching London: LDBS SCITT',
  'Teesside University ITT',
  'Colchester Teacher Training Consortium',
  'Arthur Terry SCITT',
  'Gloucestershire Initial Teacher Education Partnership',
  'Ripley ITT',
  'Buckingham Partnership',
  'The Cambridge Teaching Schools Network, CTSN SCITT',
  'Compton SCITT',
  'The Coventry SCITT',
  'Manchester Nexus SCITT',
  'Ashton on Mersey School SCITT',
  'The Tommy Flowers SCITT Milton Keynes',
  'Yorkshire Wolds Teacher Training',
  'The Grand Union Training Partnership',
  'TKAT SCITT',
  'London East Teacher Training Alliance',
  'University of Cambridge',
  'Lincolnshire SCITT',
  'Embrace SCITT',
  'Keele and North Staffordshire Teacher Education',
  'George Spencer Academy SCITT',
  'South West Teacher Training',
  'Sutton SCITT',
  'Cornwall School Centred Initial Teacher Training (Cornwall SCITT)',
  'Teach West London Teaching School Hub',
  'Bournemouth Poole & Dorset Teacher Training Partnership',
  'United Teaching National SCITT',
  'University College London (UCL)',
  'University of Bedfordshire',
  'University of Birmingham',
  'University of Brighton',
  'University of Bristol',
  'University of Buckingham',
  'University of Chester',
  'University of Chichester',
  'University of Derby',
  'University of East London',
  'University of Exeter',
  'University of Gloucestershire',
  'University of Hertfordshire',
  'University of Huddersfield',
  'University of Leicester',
  'University of Manchester',
  'Newcastle University',
  'University of Northampton',
  'University of Northumbria',
  'University of Nottingham',
  'University of Oxford',
  'University of Portsmouth',
  'University of Reading',
  'University of Sheffield',
  'University of Southampton',
  'Plymouth Marjon University',
  'University of Sunderland',
  'University of Warwick',
  'University of Winchester',
  'University of Wolverhampton',
  'University of Worcester',
  'University of York',
  'Wandsworth Primary Schools’ Consortium',
  'One Cumbria',
  'West Midlands Consortium',
  'Wildern Partnership',
  'The National Mathematics and Physics SCITT',
  'Xavier Teach SouthEast',
  'York St John University'
]

const placements = [
  {
    name: 'Bath Spa University',
    address: 'Sion Hill, Bath, BA1 5SF'
  },
  {
    name: 'Bristol Cathedral Choir School',
    address: 'College Square, Bristol, BS1 5TS'
  },
  {
    name: 'John O Gaunt School',
    address: 'Priory Road, Hungerford, Berkshire, RG17 0AN'
  },
  {
    name: 'Melksham Oak Community School',
    address: 'Bath Road, Bowerhill, Melksham, Wiltshire, SN12 6QZ'
  },
  {
    name: 'Preston School Academy',
    address: 'Monks Dale, Yeovil, Somerset, BA21 3JD'
  },
  {
    name: 'St Johns Marlborough',
    address: 'Granham Hill, Marlborough, Wiltshire, SN8 4AX'
  }
]

module.exports = {
  courses,
  providers,
  placements
}
