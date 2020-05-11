const moment = require('moment')

const validateBody = ({ firstName, lastName, gender, dob, flavors }) => {
  let valid = true
  let error = null

  const setError = msg => {
    error = msg
    valid = false
  }

  if (!firstName) setError(`property not found: firstName`)
  if (!lastName) setError(`property not found: lastName`)
  const genders = ['male', 'female', 'other']
  if (!gender) setError(`property not found: gender`)
  if (!genders.includes(gender)) setError(`Gender not recognized: ${gender}`)
  if (!dob) setError(`property not found: dob`)
  if (moment(dob).isValid() === false)
    setError(`DOB is not an recognized date: ${dob}`)
  if (!flavors) setError(`property not found: flavors`)

  return { isValid: valid, error }
}

module.exports = validateBody
