//require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
// const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

//set template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set body-parser
app.use(express.urlencoded({ extended: true }))

//localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req,res) => {
  console.log('req.body', req.body)
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`This Express server is running in http://localhost:${port}`)
})
