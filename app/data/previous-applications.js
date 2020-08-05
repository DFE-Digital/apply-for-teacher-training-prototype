// Copies dummy application and tweaks some fields
const dummyApplication = JSON.parse(JSON.stringify(require('./dummy-application')))

dummyApplication.submitted = '2020-03-29'
dummyApplication.choices.ABCDE.status = 'Offer declined'
dummyApplication.choices.FGHIJ.status = 'Application withdrawn'
dummyApplication.choices.ZYXWV.status = 'Unsuccessful'
dummyApplication.choices.ZYXWV.reason = 'Candidate didn’t come to the interview or assessment'

module.exports = {
  12345: dummyApplication
  // 67890: {
  //   status: 'completed',
  //   submitted: '2020-05-19',
  //   choices: {
  //     12345: {
  //       courseCode: '2XT2',
  //       providerCode: '1N1',
  //       locationName: 'Hillcrest Academy',
  //       locationAddress: 'Cowper Street, Leeds. LS7 4DR',
  //       studyMode: 'Full time',
  //       type: 'PGCE with QTS',
  //       length: '1 year',
  //       starts: '2020-09',
  //       status: 'Unsuccessful',
  //       reason: 'Course is full'
  //     }
  //   }
  // },
  // ABCDE: {
  //   status: 'completed',
  //   submitted: '2020-06-06',
  //   choices: {
  //     67890: {
  //       courseCode: '2XT2',
  //       providerCode: '1N1',
  //       locationName: 'Hillcrest Academy',
  //       locationAddress: 'Cowper Street, Leeds. LS7 4DR',
  //       studyMode: 'Full time',
  //       type: 'PGCE with QTS',
  //       length: '1 year',
  //       starts: '2020-09',
  //       status: 'Unsuccessful',
  //       reason: 'Candidate did not show enough subject knowledge at this time'
  //     }
  //   }
  // }
}
