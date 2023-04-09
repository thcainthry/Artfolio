import express from 'express'

const app = express()
const clientPort = 3000
const serverPort = 5000

app.get('/', (req, res) => {
    res.send('Client is running.')
})

app.get('/server', (req, res) => {
    res.send('Server is running.')
})

app.listen(clientPort, () => {
    console.log(`Client is running on port: ${clientPort}`)
})

app.listen(serverPort, () => {
    console.log(`Server is running on port: ${serverPort}`)
})
