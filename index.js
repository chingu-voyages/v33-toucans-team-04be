const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

//Available routes

// app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/boards', require('./routes/boards'));
app.use('/api/lists', require('./routes/lists'));
app.use('/api/cards', require('./routes/cards'));
app.use('/api/checklists', require('./routes/checklists'));

app.get('/', (req, res) => {
  res.send('Hello Roshan!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})