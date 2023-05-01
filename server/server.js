import express from 'express'
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is runing.')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    console.log(req.body.email)
    res.send('Register success.')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    console.log(req.body.email)
    res.send('Login success.')
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})