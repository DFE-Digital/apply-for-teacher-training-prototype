const govukPrototypeKit = require('govuk-prototype-kit')
const { prototypeFilters } = require('@x-govuk/govuk-prototype-filters')

const addFilter = govukPrototypeKit.views.addFilter

addFilter(prototypeFilters)

function sortedByStartYearAndMonth (itemA, itemB) {
  if (parseInt(itemA.startYear) < parseInt(itemB.startYear) || (
    (parseInt(itemA.startYear) === parseInt(itemB.startYear) &&
    parseInt(itemA.startMonth) < parseInt(itemB.startMonth)
    )
  )) {
    return -1
  } else {
    return 1
  }
}

function sortedWorkHistory (workHistory) {
  let workHistoryArray = []

  for (const key of Object.keys(workHistory)) {
    const copy = JSON.parse(JSON.stringify(workHistory[key]))
    copy.id = key

    workHistoryArray.push(copy)
  }

  workHistoryArray = workHistoryArray.sort(sortedByStartYearAndMonth)

  const numberOfJobs = workHistoryArray.length
  for (let i = 0; i < (numberOfJobs - 1); i++) {
    const thisItem = workHistoryArray[i]
    const nextItem = workHistoryArray[i + 1]

    if (thisItem.endYear && thisItem.endMonth && nextItem.startYear && nextItem.startYear) {
      const thisItemEndDate = new Date(parseInt(thisItem.endYear), parseInt(thisItem.endMonth) - 1, 1)
      const nextItemStartDate = new Date(parseInt(nextItem.startYear), parseInt(nextItem.startMonth) - 1, 1)

      const monthAfterEndDate = new Date(thisItemEndDate.getFullYear(), thisItemEndDate.getMonth() + 1, 1)

      if (nextItemStartDate > monthAfterEndDate) {
        workHistoryArray.push({
          gap: true,
          startMonth: monthAfterEndDate.getMonth() + 1,
          startYear: monthAfterEndDate.getFullYear()
        })
      }
    }
  }

  return workHistoryArray.sort(sortedByStartYearAndMonth)
}

addFilter('sortedWorkHistory', sortedWorkHistory)

function monthName (monthNumber) {
  const monthNames = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

  return monthNames[parseInt(monthNumber)]
}

addFilter('monthName', monthName)


function allSectionsCompleted (data) {

  const detailsSections = [
    'personalInformation',
    'contactInformation',
    'english',
    'maths',
    'science',
    'otherQualifications',
    'degree',
    'workHistory',
    'unpaidExperience',
    'additionalSupport',
    'personalStatement',
    'interviewNeeds',
    'references',
    'safeguarding'
  ]

  if (data && data.completed) {
    return detailsSections.every((section => data.completed[section] == 'true'))
  } else {
    return false
  }
}

addFilter('allSectionsCompleted', allSectionsCompleted)
