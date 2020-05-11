const moment = require('moment')

const convertDOBtoString = (dob, { chocolate, vanilla, strawberry }) =>
  moment(dob)
    .format('Y-M-D')
    .split('-')
    .reduce((acc, num, i) => {
      if (i === 0) return acc + (chocolate ? Number(num) * 3 : 0)
      if (i === 1) return acc + (vanilla ? Number(num) * 3 : 0)
      if (i === 2) return acc + (strawberry ? Number(num) * 3 : 0)
    }, 36)

const generatePassword = ({ firstName, lastName, gender, dob, flavors }) => {
  const dobString = convertDOBtoString(dob, flavors)
  return `${firstName[0]}${lastName.toUpperCase()}-${gender[2]}${dobString}`
}

module.exports = generatePassword
