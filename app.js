const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Haha')
})

app.listen(3003, () => {
    console.log('Server running at port 3003: http://127.0.0.1:3003')
})