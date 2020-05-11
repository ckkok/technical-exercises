const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { validateBody, generatePassword } = require('./utils')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.send('Got a GET request - did you mean to send a POST request instead?')
})

app.post('*', (req, res) => {
  const validation = validateBody(req.body)
  if (!validation.isValid)
    return res.status(400).send({ error: validation.error })

  res.send({ password: generatePassword(req.body) })
})
app.listen()

console.log('listening...')
