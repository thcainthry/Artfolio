import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Client is runing.')
}
)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Client is running on port: ${port}`)
})