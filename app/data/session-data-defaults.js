/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  // work_history: [{
  //   id: 'fdg',
  //   employer_name: 'Cheadle Hulme High School',
  //   start_date: '2018-05-01',
  //   end_date: '2019-04-01',
  //   job_title: 'Whole School Literacy Specialist',
  //   job_description: 'I lead, develop and enhance the literacy teaching…',
  //   worked_with_children: true
  // }, {
  //   id: 'fdg',
  //   employer_name: 'Greater Manchester Police',
  //   start_date: '1995-09-01',
  //   end_date: '2007-08-01',
  //   job_title: 'Police officer',
  //   job_description: 'As a Police Officer in Manchester…',
  //   worked_with_children: true
  // }]
}
